/**
 * "Best of 2026" award badge — BusinessRate Best Car Detailing Service in Parrish, FL.
 *
 * Drawn in code (SVG + CSS) so it stays crisp at any size and in any layout.
 * If an official award graphic is supplied later, drop it in /public/images and
 * swap the <Laurel>/<Stars> block for an <Image>; the surrounding card styles
 * are reusable as-is.
 */

type LaurelProps = {
  flip?: boolean;
};

// Leaf positions traced along the stem curve: [cx, cy, rotation]
const OUTER_LEAVES: [number, number, number][] = [
  [17, 88, 25],
  [11.5, 77, 36],
  [7.5, 65, 48],
  [6, 51, 60],
  [7.5, 37, 72],
  [11, 23, 84],
];

const INNER_LEAVES: [number, number, number][] = [
  [26, 84, -22],
  [21, 72, -34],
  [17.5, 59, -46],
  [16.5, 45, -58],
  [18, 31, -70],
];

function Laurel({ flip = false }: LaurelProps) {
  return (
    <svg
      viewBox="0 0 40 100"
      className="h-full w-auto text-[#d4af37]"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M32 96 C 10 78, 6 46, 20 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {OUTER_LEAVES.map(([cx, cy, rot], i) => (
        <ellipse
          key={`o${i}`}
          cx={cx}
          cy={cy}
          rx="7.5"
          ry="3.4"
          fill="currentColor"
          transform={`rotate(${rot} ${cx} ${cy})`}
        />
      ))}
      {INNER_LEAVES.map(([cx, cy, rot], i) => (
        <ellipse
          key={`i${i}`}
          cx={cx}
          cy={cy}
          rx="6"
          ry="2.8"
          fill="currentColor"
          opacity="0.75"
          transform={`rotate(${rot} ${cx} ${cy})`}
        />
      ))}
    </svg>
  );
}

function Stars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center gap-0.5 ${className}`} aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/** The laurel-wrapped "BEST OF 2026" seal on its own, no card around it. */
export function AwardSeal({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      <div className="h-28 md:h-32">
        <Laurel />
      </div>
      <div className="text-center px-1">
        <Stars className="mb-1.5" />
        <p className="text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.25em] text-[#d4af37]">
          Best of
        </p>
        <p className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight">2026</p>
        <p className="text-[0.6rem] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mt-1.5">
          Award Winner
        </p>
      </div>
      <div className="h-28 md:h-32">
        <Laurel flip />
      </div>
    </div>
  );
}

/** Full award card — seal plus the award title and issuer. */
export default function AwardBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative bg-[#111111] border border-[#d4af37]/30 rounded-2xl px-8 py-10 text-center overflow-hidden ${className}`}
    >
      {/* Warm glow behind the seal */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <AwardSeal />

        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-lg md:text-xl font-bold text-white leading-snug">
            Voted Best Car Detailing Service in{' '}
            <span className="text-[#0080FF]">Parrish, Florida</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            BusinessRate BEST of 2026 Awards &middot; Based on verified Google Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

/** Inline one-line version for headers, hero areas, and tight spaces. */
export function AwardPill({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#d4af37]/10 border border-[#d4af37]/30 rounded-full backdrop-blur-sm ${className}`}
    >
      <svg className="w-4 h-4 text-[#d4af37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      Voted Best Mobile Car Detailer in Parrish, FL &mdash; 2026
    </span>
  );
}
