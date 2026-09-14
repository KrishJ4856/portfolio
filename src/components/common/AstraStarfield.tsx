import type { CSSProperties } from 'react';

type StarStyle = CSSProperties & {
  '--star-delay': string;
  '--star-duration': string;
  '--star-opacity': number;
  '--star-size': string;
};

function createRandom(seed: number) {
  let value = seed;

  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

const random = createRandom(4856);
const stars = Array.from({ length: 108 }, (_, index) => {
  const size = 0.8 + random() * 1.7;

  return {
    index,
    style: {
      left: `${(random() * 100).toFixed(2)}%`,
      top: `${(random() * 100).toFixed(2)}%`,
      '--star-delay': `${(-random() * 8).toFixed(2)}s`,
      '--star-duration': `${(2.8 + random() * 5.2).toFixed(2)}s`,
      '--star-opacity': Number((0.58 + random() * 0.42).toFixed(2)),
      '--star-size': `${size.toFixed(2)}px`,
    } satisfies StarStyle,
  };
});

export default function AstraStarfield() {
  return (
    <>
      <div className="astra-starfield" aria-hidden="true">
        {stars.map(({ index, style }) => (
          <span
            key={index}
            className={`astra-star ${index >= 72 ? 'astra-star-extra' : ''}`}
            style={style}
          />
        ))}
      </div>
      <style>{`
        .astra-starfield {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 0;
          display: none;
          overflow: hidden;
        }

        .dark .astra-starfield {
          display: block;
        }

        .astra-star {
          position: absolute;
          width: var(--star-size);
          height: var(--star-size);
          border-radius: 9999px;
          background: rgb(235 240 255);
          box-shadow: 0 0 3px rgb(208 219 255 / 90%), 0 0 8px rgb(135 158 255 / 55%);
          opacity: 0.12;
          animation: astra-star-twinkle var(--star-duration) ease-in-out infinite;
          animation-delay: var(--star-delay);
          will-change: opacity, transform, filter;
        }

        .astra-star:nth-child(3n) {
          background: rgb(181 202 255);
        }

        .astra-star:nth-child(7n) {
          box-shadow: 0 0 4px rgb(255 255 255 / 95%), 0 0 11px rgb(154 177 255 / 70%);
        }

        @keyframes astra-star-twinkle {
          0%, 100% {
            opacity: 0.08;
            transform: scale(0.55);
            filter: brightness(0.75);
          }
          38% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          52% {
            opacity: var(--star-opacity);
            transform: scale(1.35);
            filter: brightness(1.45);
          }
          68% {
            opacity: 0.3;
            transform: scale(0.9);
          }
        }

        @media (max-width: 639px) {
          .astra-star-extra {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .astra-star {
            animation: none;
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}
