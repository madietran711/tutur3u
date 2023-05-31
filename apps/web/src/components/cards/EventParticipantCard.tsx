import { CheckIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { EventParticipant } from '../../types/primitives/EventParticipant';
import { Button, Loader } from '@mantine/core';
import useSWR, { mutate } from 'swr';

interface Props {
  wsId: string;
  participant: EventParticipant;
  className?: string;
  mutatePath?: string | null;
}

const EventParticipantCard = ({
  wsId,
  participant,
  className,
  mutatePath,
}: Props) => {
  const [loading, setLoading] = useState(true);

  const [going, setGoing] = useState<boolean | null>(null);
  const [prevGoing, setPrevGoing] = useState<boolean | null>(null);

  useEffect(() => {
    if (going !== null) setPrevGoing(going);
  }, [going]);

  const apiPath =
    wsId && participant
      ? `/api/workspaces/${wsId}/calendar/events/${participant.event_id}/participants/${participant.participant_id}?type=${participant.type}`
      : null;

  const { data: event } = useSWR<EventParticipant>(apiPath);

  useEffect(() => {
    if (event) {
      setGoing(event?.going ?? null);
      setPrevGoing(event?.going ?? null);
      setLoading(false);
    }
  }, [event]);

  const deleteParticipant = async () => {
    if (!apiPath || !mutatePath) return;

    setLoading(true);

    const res = await fetch(apiPath, {
      method: 'DELETE',
    });

    // wait for 200ms to prevent flickering
    await new Promise((resolve) => setTimeout(resolve, 200));
    if (res.ok) mutate(mutatePath);
    else setLoading(false);
  };

  useEffect(() => {
    const updateParticipant = async (going: boolean | null) => {
      if (!apiPath || !mutatePath) return;

      setLoading(true);

      const res = await fetch(apiPath, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          going,
        } as EventParticipant),
      });

      // wait for 200ms to prevent flickering
      await new Promise((resolve) => setTimeout(resolve, 200));
      if (res.ok) mutate(mutatePath);

      setLoading(false);
    };

    if (going !== prevGoing && going !== null) {
      updateParticipant(going);
    }
  }, [
    going,
    prevGoing,
    apiPath,
    mutatePath,
    participant.event_id,
    participant.type,
    participant.participant_id,
    wsId,
  ]);

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded border p-2 md:p-4 ${className}`}
    >
      <div className="line-clamp-1 font-semibold">
        {participant.display_name || participant.handle}
      </div>
      <div className="flex items-center justify-center gap-1">
        {loading ? (
          <div className="rounded border border-zinc-300/5 bg-zinc-300/5 p-1 text-zinc-300">
            <Loader color="white" size={20} />
          </div>
        ) : (
          <>
            {going === null && (
              <>
                <Button
                  className="rounded border border-zinc-300/5 bg-zinc-300/5 p-1 text-zinc-300 transition hover:text-zinc-300/50"
                  onClick={deleteParticipant}
                  unstyled
                >
                  <TrashIcon className="h-5 w-5" />
                </Button>

                {/* <Button
                  onClick={() => setGoing(prevGoing)}
                  className="rounded border border-zinc-300/5 bg-zinc-300/5 p-1 text-zinc-300 transition hover:text-zinc-300/50"
                >
                  <Bars3BottomLeftIcon className="h-5 w-5" />
                </Button> */}
              </>
            )}
            {participant?.type !== 'user_group' && going !== true && (
              <Button
                onClick={() =>
                  setGoing((prev) => (prev === null ? false : null))
                }
                className={`rounded border p-1 transition ${
                  prevGoing === false || going === false
                    ? 'border-red-300/10 bg-red-300/10 text-red-300'
                    : 'border-zinc-300/5 bg-zinc-300/5 text-zinc-300 hover:text-zinc-300/50'
                }`}
                unstyled
              >
                <XMarkIcon className="h-5 w-5" />
              </Button>
            )}
            {participant?.type !== 'user_group' && going !== false && (
              <Button
                onClick={() =>
                  setGoing((prev) => (prev === null ? true : null))
                }
                className={`rounded border p-1 transition ${
                  prevGoing === true || going === true
                    ? 'border-green-300/10 bg-green-300/10 text-green-300'
                    : 'border-zinc-300/5 bg-zinc-300/5 text-zinc-300 hover:text-zinc-300/50'
                }`}
                unstyled
              >
                <CheckIcon className="h-5 w-5" />
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EventParticipantCard;
