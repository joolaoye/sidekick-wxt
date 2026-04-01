import { CancelButton } from './buttons/CancelButton';
import { ConfirmButton } from './buttons/ConfirmButton';
import { Waveform } from './Waveform';

interface RecordingDisplayProps {
  onCancel: () => void;
  onConfirm: () => void;
}

export function RecordingDisplay({ onCancel, onConfirm }: RecordingDisplayProps) {
  return (
    <div className="flex flex-col flex-1 justify-between px-5 py-6">
      <p className="text-sm text-gray-500 text-center">
        Listening...
      </p>
      <div className="flex justify-center">
        <Waveform />
      </div>
      <div className="flex flex-col items-center gap-3 pb-4">
        <p className="text-xs text-gray-400">Cancel or confirm when done</p>
        <div className="flex gap-6 justify-center">
          <CancelButton onClick={onCancel} />
          <ConfirmButton onClick={onConfirm} />
        </div>
      </div>
    </div>
  );
}
