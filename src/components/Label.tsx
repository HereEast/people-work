interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return (
    <div className="flex w-fit items-center justify-center rounded-full bg-brand-blue-600 py-0.5 pl-1.5 pr-2 text-base font-medium text-stone-50">
      {children}
    </div>
  );
}
