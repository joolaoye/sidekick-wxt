import { IconButton } from "./IconButton";
import { ConfirmIcon } from "../icons/ConfirmIcon";
import { ButtonSize } from "./Button";

export function ConfirmButton({ onClick }: {onClick: () => void}) {
    return <IconButton onClick={onClick} icon={<ConfirmIcon />} size={ButtonSize.SM} color="bg-green-500" />;
  }
