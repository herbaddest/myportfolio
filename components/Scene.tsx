/**
 * The hero artwork: a Kenyan savanna at dusk, drawn in SVG.
 * A flat-topped acacia stands against the last light; underneath it, someone is working on a laptop.
 * Anchored bottom-right so the tree and sun stay in view on narrow screens.
 * The ground colour (#0C1517) is the page background, so the scene settles into the page.
 */
export function Scene() {
  return (
    <div className="scene" aria-hidden="true">
      <svg
        className="scene__svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMaxYMax slice"
        focusable="false"
      >
        <defs>
          <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#081920" />
            <stop offset="0.3" stopColor="#12333C" />
            <stop offset="0.47" stopColor="#36666B" />
            <stop offset="0.57" stopColor="#8DA8A0" />
            <stop offset="0.64" stopColor="#E2B98A" />
            <stop offset="0.7" stopColor="#F0A24A" />
            <stop offset="0.78" stopColor="#FFD08A" />
          </linearGradient>
          <radialGradient id="sc-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#FFD58F" stopOpacity="0.8" />
            <stop offset="0.25" stopColor="#F7A94F" stopOpacity="0.4" />
            <stop offset="0.6" stopColor="#E0833A" stopOpacity="0.08" />
            <stop offset="1" stopColor="#E0833A" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sc-lamp" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#FFC274" stopOpacity="0.7" />
            <stop offset="1" stopColor="#FFC274" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sc-haze" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F7A94F" stopOpacity="0.4" />
            <stop offset="1" stopColor="#F7A94F" stopOpacity="0" />
          </linearGradient>
          <filter id="sc-blur" x="-20%" y="-200%" width="140%" height="500%">
            <feGaussianBlur stdDeviation="11" />
          </filter>

          {/* One acacia, base at (0,0), about 96 units tall. Reused at different sizes. */}
          <g id="sc-acacia">
            <path d="M-4 0 C-2 -24 -3 -46 -5 -64 L5 -64 C3 -46 5 -24 7 0 Z" />
            <path
              d="M-96 -62 C-90 -70 -70 -74 -50 -74 C-40 -84 -10 -88 10 -84 C28 -90 56 -86 66 -78 C84 -78 98 -70 96 -64 C80 -59 62 -62 46 -58 C26 -54 6 -60 -12 -56 C-34 -60 -58 -55 -74 -58 C-84 -57 -92 -58 -96 -62 Z"
            />
            <path d="M0 -60 C-22 -64 -50 -64 -72 -62" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M2 -60 C26 -65 56 -66 82 -64" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </g>
        </defs>

        {/* Sky */}
        <rect width="1600" height="900" fill="url(#sc-sky)" />
        <circle className="scene__glow" cx="1040" cy="612" r="540" fill="url(#sc-glow)" />

        {/* Sun, setting behind the far ridge */}
        <g className="scene__sun">
          <circle cx="1040" cy="600" r="62" fill="#FFE8B8" />
        </g>

        {/* Long clouds: cool on top, lit from below */}
        <g filter="url(#sc-blur)">
          <ellipse cx="980" cy="468" rx="430" ry="14" fill="#2A5560" opacity="0.6" />
          <ellipse cx="420" cy="408" rx="540" ry="18" fill="#21505B" opacity="0.5" />
          <ellipse cx="1280" cy="410" rx="380" ry="10" fill="#306068" opacity="0.5" />
          <ellipse cx="240" cy="520" rx="420" ry="12" fill="#3D6A6C" opacity="0.5" />
          <ellipse cx="880" cy="548" rx="480" ry="11" fill="#F2A560" opacity="0.6" />
          <ellipse cx="1400" cy="574" rx="340" ry="9" fill="#FFC27A" opacity="0.7" />
          <ellipse cx="380" cy="590" rx="470" ry="10" fill="#E8955A" opacity="0.45" />
          <ellipse cx="720" cy="506" rx="300" ry="7" fill="#D88D63" opacity="0.45" />
        </g>

        {/* Ridges, far to near */}
        <path
          d="M0 640 C120 628 220 636 330 622 C440 608 520 626 640 620 C760 614 820 600 940 612 C1060 624 1120 640 1240 626 C1360 612 1480 624 1600 612 L1600 900 L0 900 Z"
          fill="#7E6F58"
        />
        <path
          d="M0 676 C100 660 210 668 330 656 C470 642 560 664 700 658 C840 652 920 636 1060 648 C1200 660 1290 676 1420 662 C1500 654 1560 656 1600 650 L1600 900 L0 900 Z"
          fill="#4F4F43"
        />
        <rect x="0" y="632" width="1600" height="120" fill="url(#sc-haze)" />
        <use href="#sc-acacia" transform="translate(1020 652) scale(0.34)" fill="#4A4A40" color="#4A4A40" />
        <path
          d="M0 716 C140 698 260 710 400 700 C540 690 640 712 780 706 C920 700 1000 684 1140 694 C1280 704 1380 722 1500 708 C1550 702 1580 702 1600 700 L1600 900 L0 900 Z"
          fill="#2E3E3B"
        />
        <use href="#sc-acacia" transform="translate(884 704) scale(0.5)" fill="#2E3E3B" color="#2E3E3B" />
        <path
          d="M0 770 C160 752 300 764 460 752 C620 740 720 768 880 760 C1040 752 1130 738 1260 748 C1400 758 1500 776 1600 764 L1600 900 L0 900 Z"
          fill="#18292B"
        />

        {/* Foreground: the knoll, the big acacia, the person under it */}
        <path
          d="M0 826 C200 812 380 826 560 818 C760 810 900 832 1080 812 C1180 800 1250 772 1330 762 C1400 754 1450 770 1520 792 C1560 804 1590 808 1600 808 L1600 900 L0 900 Z"
          fill="#0C1517"
        />
        <use href="#sc-acacia" transform="translate(1350 768) scale(2.4)" fill="#0C1517" color="#0C1517" />

        <g transform="translate(1236 774) scale(1.25)">
          <circle className="scene__lamp" cx="22" cy="-14" r="34" fill="url(#sc-lamp)" />
          <g fill="#0C1517">
            <circle cx="3" cy="-27" r="4.8" />
            <path d="M-4 -3 C-6 -13 -3 -21 2 -22 C7 -22 9 -16 8 -9 L9 -3 Z" />
            <path d="M-4 -4 L13 -4 L19 -11 L22 -7 L18 -1 L18 1 L-4 1 Z" />
            <path d="M13 -12 L26 -12 L26 -6 L13 -6 Z" />
          </g>
          <path d="M14 -11.5 L25.5 -11.5" stroke="#FFC274" strokeWidth="1.3" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
