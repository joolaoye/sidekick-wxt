export const ButtonSize = {
    SM: 'w-16 h-16',
    LG: 'w-18 h-18',
  } as const;
  
  export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];
  
  interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    size?: ButtonSize;
  }
  
  export function Button({ onClick, disabled, children, className, size = ButtonSize.LG }: ButtonProps) {
    return (
      <button onClick={onClick} disabled={disabled} className={`${size} ${className}`}>
        {children}
      </button>
    );
  }
