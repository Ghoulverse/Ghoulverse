import { useRef, useEffect, useCallback, useState } from 'react';

interface GhostPosition {
  x: number;
  y: number;
  isMoving: boolean;
  velocity: number;
}

export function useGhostPosition(): GhostPosition {
  const [position, setPosition] = useState<GhostPosition>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 - 80 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 - 80 : 0,
    isMoving: false,
    velocity: 0,
  });

  const targetRef = useRef({ x: position.x, y: position.y });
  const currentRef = useRef({ x: position.x, y: position.y });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const ghostSize = window.innerWidth < 768 ? 100 : 160;
    targetRef.current = {
      x: Math.max(20, Math.min(window.innerWidth - ghostSize - 20, e.clientX - ghostSize / 2)),
      y: Math.max(20, Math.min(window.innerHeight - ghostSize - 20, e.clientY - ghostSize / 2)),
    };
    lastMoveTime.current = Date.now();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const ghostSize = window.innerWidth < 768 ? 100 : 160;
    targetRef.current = {
      x: Math.max(20, Math.min(window.innerWidth - ghostSize - 20, touch.clientX - ghostSize / 2)),
      y: Math.max(20, Math.min(window.innerHeight - ghostSize - 20, touch.clientY - ghostSize / 2)),
    };
    lastMoveTime.current = Date.now();
  }, []);

  useEffect(() => {
    const spring = 0.06;
    const friction = 0.85;

    const animate = () => {
      const dx = targetRef.current.x - currentRef.current.x;
      const dy = targetRef.current.y - currentRef.current.y;

      velocityRef.current.x = (velocityRef.current.x + dx * spring) * friction;
      velocityRef.current.y = (velocityRef.current.y + dy * spring) * friction;

      currentRef.current.x += velocityRef.current.x;
      currentRef.current.y += velocityRef.current.y;

      const speed = Math.sqrt(
        velocityRef.current.x ** 2 + velocityRef.current.y ** 2
      );

      const timeSinceMove = Date.now() - lastMoveTime.current;
      const isMoving = timeSinceMove < 150 || speed > 0.5;

      setPosition({
        x: currentRef.current.x,
        y: currentRef.current.y,
        isMoving,
        velocity: speed,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleMouseMove, handleTouchMove]);

  return position;
}
