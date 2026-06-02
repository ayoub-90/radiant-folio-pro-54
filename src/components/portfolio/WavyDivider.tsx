interface Props {
  color?: "indigo" | "coral";
}

export function WavyDivider({ color = "indigo" }: Props) {
  const stroke = color === "indigo" ? "var(--indigo)" : "var(--coral)";
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-6xl px-6 md:px-16 lg:px-24">
      <svg viewBox="0 0 1200 28" className="h-7 w-full" preserveAspectRatio="none">
        <path
          d="M0,14 Q60,2 120,14 T240,14 T360,14 T480,14 T600,14 T720,14 T840,14 T960,14 T1080,14 T1200,14"
          fill="none"
          stroke={stroke}
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}
