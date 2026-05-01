function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
