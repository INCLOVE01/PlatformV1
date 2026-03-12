import { IconSvgElement, HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
// type HugeiconsIconProps = React.ComponentProps<typeof HugeiconsIcon>

export default function Useicon({ 
  icon, 
  ...props 
}: { 
  icon: IconSvgElement 
} & HugeiconsIconProps) {
  return (

        <HugeiconsIcon icon={icon} {...props} />

    );
    }