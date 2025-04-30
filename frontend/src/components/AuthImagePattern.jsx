const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-white/10 animate-float"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 2}s`,
                transform: `scale(${0.5 + Math.random() * 0.5})`
              }}
            />
          ))}
        </div>
  
        {/* Chat interface mockup */}
        <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-96 animate-fade-in">
          <div className="mb-6 space-y-4">
            {/* Incoming message */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-200 animate-pulse" />
              <div className="space-y-2">
                <div className="w-48 h-4 rounded bg-blue-200/80 animate-pulse" />
                <div className="w-32 h-3 rounded bg-blue-200/50 animate-pulse" />
              </div>
            </div>
  
            {/* Outgoing message */}
            <div className="flex items-start gap-3 justify-end">
              <div className="space-y-2">
                <div className="w-48 h-4 rounded bg-purple-200/80 animate-pulse ml-auto" />
                <div className="w-32 h-3 rounded bg-purple-200/50 animate-pulse ml-auto" />
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-200 animate-pulse" />
            </div>
  
            {/* Animated typing indicator */}
            <div className="flex items-center gap-1 bg-white/10 p-3 rounded-xl w-24">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
  
          {/* Text content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed">{subtitle}</p>
          </div>
        </div>
  
        {/* Floating chat bubbles */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-full bg-white/20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>
    );
  };
  
  export default AuthImagePattern;