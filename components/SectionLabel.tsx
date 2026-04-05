interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[10px] uppercase tracking-[0.18em] text-amber-500 font-medium">
        {children}
      </span>
      <span className="flex-1 h-px bg-border" />
    </div>
  )
}