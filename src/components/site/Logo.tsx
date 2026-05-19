import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="ObraLabs"
      width={220}
      height={84}
      className={`h-40 w-auto object-contain ${className}`}
    />
  );
}
