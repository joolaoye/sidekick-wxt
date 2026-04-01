export function Waveform() {
    const bars = [
      'animate-[bar_0.7s_ease-in-out_infinite_0s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.1s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.2s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.3s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.4s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.5s]',
      'animate-[bar_0.7s_ease-in-out_infinite_0.6s]',
    ];
  
    return (
      <div className="flex items-end justify-center gap-1 h-12">
        {bars.map((anim, i) => (
          <div key={i} className={`w-1 bg-indigo-500 rounded-sm ${anim}`} />
        ))}
      </div>
    );
  }
