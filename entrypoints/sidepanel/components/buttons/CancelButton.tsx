import { IconButton } from "./IconButton";
import { CancelIcon } from "../icons/CancelIcon";
import { ButtonSize } from "./Button";

export function CancelButton({ onClick }: {onClick: () => void}) {
    return <IconButton onClick={onClick} icon={<CancelIcon />} size={ButtonSize.SM} color="bg-red-500" />;
  }
