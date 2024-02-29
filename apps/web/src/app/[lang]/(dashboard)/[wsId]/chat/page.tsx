import { notFound, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getSecrets, getWorkspace } from '@/lib/workspace-helper';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import Chat from './chat';
import { Message } from 'ai';
import { getChats } from './helper';

export const dynamic = 'force-dynamic';

interface Props {
  params: {
    wsId: string;
  };
  searchParams: {
    lang: string;
  };
}

export default async function AIPage({
  params: { wsId },
  searchParams,
}: Props) {
  const { lang: locale } = searchParams;

  const workspace = await getWorkspace(wsId);
  if (!workspace) notFound();

  const secrets = await getSecrets({
    wsId,
    requiredSecrets: ['ENABLE_CHAT'],
    forceAdmin: true,
  });

  const verifySecret = (secret: string, value: string) =>
    secrets.find((s) => s.name === secret)?.value === value;

  const enableChat = verifySecret('ENABLE_CHAT', 'true');
  if (!enableChat) redirect(`/${wsId}`);

  const { data: chats, count } = await getChats();
  const messages = await getMessages();

  const hasKeys = {
    openAI: hasKey('OPENAI_API_KEY'),
    anthropic: hasKey('ANTHROPIC_API_KEY'),
    google: hasKey('GOOGLE_API_KEY'),
  };

  return (
    <Chat
      wsId={wsId}
      hasKeys={hasKeys}
      chats={chats}
      count={count}
      previousMessages={messages}
      locale={locale}
    />
  );
}

const hasKey = (key: string) => {
  const keyEnv = process.env[key];
  return !!keyEnv && keyEnv.length > 0;
};

const getMessages = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from('ai_chat_messages')
    .select('*, ai_chats(*)')
    .order('created_at', { ascending: false })
    .limit(2);

  if (error) {
    console.error(error);
    return [];
  }

  return data.map(({ role, ...rest }) => ({
    ...rest,
    role: role.toLowerCase(),
  })) as Message[];
};
