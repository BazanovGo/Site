export default function Emblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 720 640" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="em-steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2ef" />
          <stop offset="38%" stopColor="#9aa69f" />
          <stop offset="55%" stopColor="#3c4641" />
          <stop offset="75%" stopColor="#78847d" />
          <stop offset="100%" stopColor="#1d2521" />
        </linearGradient>
        <linearGradient id="em-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8f7d8" />
          <stop offset="50%" stopColor="#23e08c" />
          <stop offset="100%" stopColor="#0b7a49" />
        </linearGradient>
        <filter id="em-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="em-haze" cx="50%" cy="52%" r="50%">
          <stop offset="0%" stopColor="#23e08c" stopOpacity="0.16" />
          <stop offset="60%" stopColor="#23e08c" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#23e08c" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient haze */}
      <ellipse cx="360" cy="330" rx="330" ry="300" fill="url(#em-haze)" />

      {/* Ornamental rings */}
      <circle
        cx="360"
        cy="330"
        r="292"
        fill="none"
        stroke="#23e08c"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="2 7"
      />
      <circle
        cx="360"
        cy="330"
        r="268"
        fill="none"
        stroke="#23e08c"
        strokeOpacity="0.1"
        strokeWidth="1"
      />

      {/* Horizontal technical lines */}
      <g stroke="#23e08c" strokeOpacity="0.28" strokeWidth="1">
        <line x1="6" y1="330" x2="86" y2="330" />
        <line x1="634" y1="330" x2="714" y2="330" />
      </g>
      <g fill="#23e08c" fillOpacity="0.45">
        <rect x="88" y="327.5" width="5" height="5" transform="rotate(45 90.5 330)" />
        <rect x="627" y="327.5" width="5" height="5" transform="rotate(45 629.5 330)" />
      </g>

      {/* Molecule accents */}
      <g fill="none" stroke="#23e08c" strokeOpacity="0.3" strokeWidth="1.2">
        <path d="M118 268 L138 256 L158 268 L158 292 L138 304 L118 292 Z" />
        <circle cx="138" cy="232" r="3" />
        <line x1="138" y1="256" x2="138" y2="235" />
        <path d="M566 356 L586 344 L606 356 L606 380 L586 392 L566 380 Z" />
        <circle cx="586" cy="416" r="3" />
        <line x1="586" y1="392" x2="586" y2="413" />
      </g>

      {/* Steel triangle frame */}
      <path
        d="M360 64 L604 566 L116 566 Z"
        fill="none"
        stroke="url(#em-steel)"
        strokeWidth="24"
        strokeLinejoin="miter"
      />
      <path
        d="M360 64 L604 566 L116 566 Z"
        fill="none"
        stroke="#0c110e"
        strokeWidth="2"
      />

      {/* Inner glowing triangle */}
      <path
        d="M360 208 L488 486 L232 486 Z"
        fill="none"
        stroke="#23e08c"
        strokeWidth="5"
        strokeLinejoin="miter"
        filter="url(#em-glow)"
        className="emblem-pulse"
      />

      {/* Candlestick silhouette inside */}
      <g className="emblem-pulse" style={{ animationDelay: "-3s" }}>
        <g stroke="#23e08c" strokeOpacity="0.5" strokeWidth="1.5">
          <line x1="306" y1="392" x2="306" y2="470" />
          <line x1="336" y1="360" x2="336" y2="470" />
          <line x1="390" y1="374" x2="390" y2="470" />
          <line x1="420" y1="404" x2="420" y2="470" />
        </g>
        <g fill="#23e08c" fillOpacity="0.4">
          <rect x="300" y="414" width="12" height="42" />
          <rect x="330" y="382" width="12" height="58" />
          <rect x="384" y="396" width="12" height="52" />
          <rect x="414" y="422" width="12" height="34" />
        </g>
      </g>

      {/* Gas flame */}
      <g filter="url(#em-glow)" className="emblem-pulse" style={{ animationDelay: "-1.5s" }}>
        <path
          d="M360 252 C 322 300, 400 330, 362 376 C 330 416, 398 436, 358 482"
          fill="none"
          stroke="url(#em-flame)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M374 286 C 348 322, 404 352, 372 396 C 348 430, 396 448, 370 480"
          fill="none"
          stroke="url(#em-flame)"
          strokeWidth="4"
          strokeOpacity="0.7"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
