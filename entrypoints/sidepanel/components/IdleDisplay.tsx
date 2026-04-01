import { MicButton } from './buttons/MicButton';

interface IdleDisplayProps {
  onStart: () => void;
}

export function IdleDisplay({ onStart }: IdleDisplayProps) {
  return (
    <div className="flex flex-col flex-1 justify-between px-5 py-6">
      <p className="text-sm text-gray-500 text-center">
        Press the mic to start recording your request
      </p>
      <div className="flex justify-center pb-4">
        <MicButton onClick={onStart} />
      </div>
    </div>
  );
}
