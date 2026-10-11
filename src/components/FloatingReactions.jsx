import React, { useState } from 'react';
import { Sparkles, Heart, Rocket, Coffee, ThumbsUp, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const REACTIONS = [
  { id: 'rocket', label: '🚀 Great Stack', icon: Rocket, color: '#e9b44c' },
  { id: 'sparkles', label: '✨ Clean UI', icon: Sparkles, color: '#45bfa1' },
  { id: 'coffee', label: "☕ Let's Chat", icon: Coffee, color: '#d2604a' },
  { id: 'heart', label: '❤️ Love it', icon: Heart, color: '#f87171' }
];

export default function FloatingReactions() {
  const [isOpen, setIsOpen] = useState(false);
  const [reacted, setReacted] = useState(null);

  const handleTriggerReaction = (reaction, event) => {
    setReacted(reaction.label);
    if (event && event.clientX && event.clientY) {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      confetti({
        particleCount: 35,
        spread: 55,
        startVelocity: 18,
        origin: { x, y },
        colors: ['#45bfa1', '#e9b44c', '#d2604a', '#38bdf8']
      });
    }

    setTimeout(() => {
      setIsOpen(false);
      setTimeout(() => setReacted(null), 3000);
    }, 1200);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 select-none">
      {isOpen ? (
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#0a1413]/95 border border-[#1f3a36] shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          {REACTIONS.map((r) => (
            <button
              key={r.id}
              onClick={(e) => handleTriggerReaction(r, e)}
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#edefe6] hover:bg-[#162c29] transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 border border-transparent hover:border-[#45bfa1]/40"
              style={{ color: r.color }}
            >
              <span>{r.label}</span>
            </button>
          ))}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-full text-[#8ca79f] hover:text-[#edefe6] hover:bg-[#162c29] transition-colors cursor-pointer"
            aria-label="Close reaction menu"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : reacted ? (
        <div className="px-3.5 py-1.5 rounded-full bg-[#10201e] border border-[#45bfa1]/40 text-[#45bfa1] text-xs font-mono shadow-xl flex items-center gap-2 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-[#e9b44c]" />
          <span>Thanks for the {reacted}!</span>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#10201e]/90 hover:bg-[#162c29] border border-[#1f3a36] hover:border-[#45bfa1]/70 text-[#8ca79f] hover:text-[#edefe6] shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer font-mono text-xs"
          title="Quick Reaction"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#e9b44c] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Quick reaction</span>
        </button>
      )}
    </div>
  );
}
