import React, { useEffect, useState, useCallback } from 'react';

const colors = [
  'rgb(59, 130, 246)',
  'rgb(16, 185, 129)',
  'rgb(236, 72, 153)',
  'rgb(245, 158, 11)',
  'rgb(139, 92, 246)',
  'rgb(239, 68, 68)',
  'rgb(14, 165, 233)',
  'rgb(168, 85, 247)',
] as const;

export const BorderPulse: React.FC = () => {
  const [pulseState, setPulseState] = useState<{ isActive: boolean; color: string }>({
    isActive: false,
    color: colors[0]
  });

  const triggerPulse = useCallback((color: string) => {
    setPulseState(prev => ({ ...prev, isActive: false }));
    requestAnimationFrame(() => {
      setPulseState({ isActive: true, color });
      setTimeout(() => {
        setPulseState(prev => ({ ...prev, isActive: false }));
      }, 300);
    });
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = parseInt(e.key);
      if (key >= 1 && key <= 8) {
        triggerPulse(colors[key - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [triggerPulse]);

  if (!pulseState.isActive) return null;

  return (
    <>
      <div 
        className="fixed inset-x-0 top-0 h-2 z-[100] animate-border-pulse" 
        style={{ background: `linear-gradient(90deg, transparent 0%, ${pulseState.color} 50%, transparent 100%)` }} 
      />
      <div 
        className="fixed inset-y-0 right-0 w-2 z-[100] animate-border-pulse" 
        style={{ background: `linear-gradient(180deg, transparent 0%, ${pulseState.color} 50%, transparent 100%)` }} 
      />
      <div 
        className="fixed inset-x-0 bottom-0 h-2 z-[100] animate-border-pulse" 
        style={{ background: `linear-gradient(90deg, transparent 0%, ${pulseState.color} 50%, transparent 100%)` }} 
      />
      <div 
        className="fixed inset-y-0 left-0 w-2 z-[100] animate-border-pulse" 
        style={{ background: `linear-gradient(180deg, transparent 0%, ${pulseState.color} 50%, transparent 100%)` }} 
      />
    </>
  );
};