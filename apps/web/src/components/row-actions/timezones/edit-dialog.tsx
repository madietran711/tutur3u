'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import * as z from 'zod';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import TimezoneForm, { ApiConfigFormSchema } from './form';
import useTranslation from 'next-translate/useTranslation';
import { Timezone } from '@/types/primitives/Timezone';

interface Props {
  data: Timezone;
  trigger?: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  submitLabel?: string;
}

export default function TimezoneEditDialog({
  data,
  trigger,
  open: externalOpen,
  setOpen: setExternalOpen,
  submitLabel,
}: Props) {
  const router = useRouter();
  const { t } = useTranslation('ws-secrets');

  const [internalOpen, setInternalOpen] = useState(false);

  const open = externalOpen ?? internalOpen;
  const setOpen = setExternalOpen ?? setInternalOpen;

  const handleSubmit = async (values: z.infer<typeof ApiConfigFormSchema>) => {
    const res = await fetch('/api/v1/infrastructure/timezones', {
      method: data.value ? 'PUT' : 'POST',
      body: JSON.stringify(values),
    });

    if (res.ok) {
      setOpen(false);
      router.refresh();
    } else {
      const data = await res.json();
      toast({
        title: `Failed to ${data.id ? 'edit' : 'create'} secret`,
        description: data.message,
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        onOpenAutoFocus={(e) => (data.value ? e.preventDefault() : null)}
      >
        <DialogHeader>
          <DialogTitle>{t('workspace_secret')}</DialogTitle>
          <DialogDescription>
            {data.value
              ? t('edit_existing_workspace_secret')
              : t('add_new_workspace_secret')}
          </DialogDescription>
        </DialogHeader>

        <TimezoneForm
          data={data}
          onSubmit={handleSubmit}
          submitLabel={submitLabel}
        />
      </DialogContent>
    </Dialog>
  );
}
