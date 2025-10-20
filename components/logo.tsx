interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  }

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl"
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-teal-500 rounded-lg flex items-center justify-center`}>
        <svg 
          className="w-3/4 h-3/4 text-white" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          {/* M and larger vertical lightning bolt with more separation and better centering */}
          <path d="M4 20h2V8l4 8h0.5l4-8v12h2V4h-2.5l-3.5 7l-3.5-7H4v16z M21 3l-2.5 5h2.5l-2.5 5h2.5l2.5-5h-2.5l2.5-5h-2.5z"/>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col text-white">
        <span className={`font-bold leading-tight ${textSizes[size]}`}>
          Méndez
        </span>
        <span className={`font-bold leading-tight ${textSizes[size]}`}>
          Ingeniería
        </span>
        <span className={`text-white/80 text-xs ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : 'text-sm'}`}>
          & Control
        </span>
      </div>
    </div>
  )
}
