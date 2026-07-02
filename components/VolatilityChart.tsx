export default function VolatilityChart({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 320"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="vol-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4cc2ff" stopOpacity="0" />
          <stop offset="18%" stopColor="#4cc2ff" stopOpacity="0.55" />
          <stop offset="82%" stopColor="#4cc2ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#4cc2ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="vol-path"
        d="M0 250 L60 244 L100 258 L150 210 L190 232 L240 196 L280 226 L330 172
           L370 204 L420 148 L460 188 L500 122 L540 168 L580 96 L620 150
           L660 78 L700 128 L740 62 L780 118 L830 88 L870 142 L920 108
           L960 158 L1010 126 L1060 170 L1110 148 L1200 160"
        fill="none"
        stroke="url(#vol-stroke)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
