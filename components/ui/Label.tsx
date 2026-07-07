interface LabelProps {
  children: React.ReactNode;
}

export function Label({ children }: LabelProps): React.ReactElement {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-tbb-blue">
      [ {children} ]
    </span>
  );
}
