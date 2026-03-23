interface DirectorQuoteProps {
  quote: string
  name:  string
  title: string
}

export function DirectorQuote({
  quote, name, title,
}: DirectorQuoteProps) {
  return (
    <blockquote
      className={[
        'border-l-[3px] border-[#F25C1A]',
        'bg-brand-navy rounded-r-xl',
        'px-5 py-5 my-6',
      ].join(' ')}
    >
      <p className="text-[13px] text-white/72
        leading-[1.75] italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <footer>
        <span className="text-[12px] font-medium
          text-white block">
          {name}
        </span>
        <span className="text-[10px] text-white/40
          block mt-0.5 leading-[1.5]">
          {title}
        </span>
      </footer>
    </blockquote>
  )
}
