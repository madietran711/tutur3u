'use client';

import { useEffect, useState } from 'react';
import FleetingNavigatorMenu from './fleeting-navigator-menu';
import FleetingAssistant from './fleeting-assistant';
import { usePathname } from 'next/navigation';
import { useClickOutside } from '@mantine/hooks';
import { useChat } from 'ai/react';
import { AIChat } from '@/types/primitives/ai-chat';
import { toast } from '@/components/ui/use-toast';
import useTranslation from 'next-translate/useTranslation';

export default function FleetingNavigator({ wsId }: { wsId: string }) {
  const { t } = useTranslation('sidebar-tabs');
  const pathname = usePathname();

  const [currentView, setCurrentView] = useState<
    'assistant' | 'search' | 'settings'
  >();

  const [chat, setChat] = useState<AIChat | undefined>();
  const [model] = useState<'google' | 'anthropic'>('google');

  const { messages } = useChat({
    id: chat?.id,
    //   initialMessages,
    api: `/api/ai/chat/${model}`,
    body: {
      id: chat?.id,
      wsId,
    },
    onResponse(response) {
      if (!response.ok)
        toast({
          title: t('something_went_wrong'),
          description: t('try_again_later'),
        });
    },
    onError(_) {
      toast({
        title: t('something_went_wrong'),
        description: t('try_again_later'),
      });
    },
  });

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ref = useClickOutside(() => setCurrentView(undefined));
  if (pathname.startsWith(`/${wsId}/chat`)) return null;

  const createChat = async (input: string) => {
    const res = await fetch(`/api/ai/chat/${model}/new`, {
      method: 'POST',
      body: JSON.stringify({
        message: input,
      }),
    });

    if (!res.ok) {
      toast({
        title: t('something_went_wrong'),
        description: res.statusText,
      });
      return;
    }

    const { id, title } = await res.json();
    if (id) setChat({ id, title, model: 'GOOGLE-GEMINI-PRO' });

    return id;
  };

  return (
    <>
      {scrollPosition ? <div className="m-2 h-14" /> : null}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex items-center justify-center">
        <div
          ref={ref}
          className={`pointer-events-auto m-4 rounded-lg border backdrop-blur-lg ${
            currentView
              ? 'bg-secondary/50 h-[32rem] w-[32rem]'
              : 'bg-secondary/30 h-14 w-40'
          } transition-all duration-300`}
        >
          {currentView === 'assistant' ? (
            <FleetingAssistant
              wsId={wsId}
              chat={chat}
              model={model}
              messages={messages}
              onBack={() => setCurrentView(undefined)}
              onSubmit={async (prompt) => {
                return chat?.id ? chat : await createChat(prompt);
              }}
            />
          ) : (
            <FleetingNavigatorMenu setCurrentView={setCurrentView} />
          )}
        </div>
      </div>
    </>
  );
}
