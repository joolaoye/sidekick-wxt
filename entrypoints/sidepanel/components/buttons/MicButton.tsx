import {IconButton} from './IconButton';
import { MicIcon } from '../icons/MicIcon';
import { ButtonSize } from './Button';

export function MicButton({ onClick }: { onClick: () => void }) {
    return <IconButton onClick={onClick} icon={<MicIcon />} size={ButtonSize.LG} color="bg-indigo-500" />;
  }
