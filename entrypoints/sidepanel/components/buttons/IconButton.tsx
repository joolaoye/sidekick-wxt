import { Button, ButtonSize } from './Button';

interface IconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  size?: ButtonSize;
  color: string;
}

export function IconButton({ onClick, icon, size = ButtonSize.LG, color }: IconButtonProps) {
  return (
    <Button onClick={onClick} size={size} className={`${color} rounded-full flex items-center justify-center`}>
      {icon}
    </Button>
  );
}
