import { cn } from "~/utils/handlers";

interface ImagePlaceholderProps {
  className?: string;
}

export function ImagePlaceholder({ className }: ImagePlaceholderProps) {
  return <div className={cn("absolute inset-0 bg-stone-900/10", className)} />;
}
