export default function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <img
      src="/logo.svg"
      alt="The Grad Club"
      className={`h-12 w-auto ${variant === "dark" ? "brightness-0" : ""} ${className}`}
    />
  );
}
