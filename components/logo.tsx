interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16", 
    lg: "w-20 h-20"
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} rounded-lg overflow-hidden flex items-center justify-center`}>
        <img 
          src="/logo sin letras.png" 
          alt="Méndez Ingeniería & Control Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col text-white">
        <span className={`font-bold leading-tight ${textSizes[size]}`}>
          Méndez
        </span>
        <span className={`font-bold leading-tight ${textSizes[size]}`}>
          Ingeniería
        </span>
        <span className={`text-white/80 ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-sm' : 'text-base'}`}>
          & Control
        </span>
      </div>
    </div>
  )
}
