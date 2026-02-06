export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  if (variant === "dark") {
    return (
      <div
        aria-label="The Grad Club"
        className={`h-12 bg-charcoal ${className}`}
        style={{
          aspectRatio: "463/104",
          WebkitMaskImage: "url('/logo.svg')",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskImage: "url('/logo.svg')",
          maskSize: "contain",
          maskRepeat: "no-repeat",
        }}
      />
    );
  }

  return (
    <img
      src="/logo.svg"
      alt="The Grad Club"
      className={`h-12 w-auto ${className}`}
    />
  );
}
