import { useEffect, useRef, useState, useCallback } from 'react';
import { useGhostPosition } from '@/hooks/useGhostPosition';

const GHOST_IMAGES = ['/ghost_main.png', '/ghost_wave.png', '/ghost_boo.png'];

interface DripParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
}

interface MiniGhost {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  scale: number;
}

export default function GhostMascot() {
  const { x, y, isMoving, velocity } = useGhostPosition();
  const [expression, setExpression] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [wiggling, setWiggling] = useState(false);
  const [flipping, setFlipping] = useState(false);
  const [speechBubble, setSpeechBubble] = useState('');
  const [ghostLoaded, setGhostLoaded] = useState(false);
  const dripsRef = useRef<DripParticle[]>([]);
  const miniGhostsRef = useRef<MiniGhost[]>([]);
  const dripCanvasRef = useRef<HTMLCanvasElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const eyesRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const clickCountRef = useRef(0);
  const miniGhostIdRef = useRef(0);
  const typedRef = useRef('');
  const posHistoryRef = useRef<{ x: number; y: number }[]>([]);

  const ghostSize = typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 160;

  // Eye blinking
  useEffect(() => {
    if (!eyesRef.current) return;
    const blink = () => {
      if (eyesRef.current) {
        eyesRef.current.style.animation = 'none';
        eyesRef.current.offsetHeight;
        eyesRef.current.style.animation = 'blink 0.3s ease-in-out';
      }
      setTimeout(blink, Math.random() * 3000 + 2000);
    };
    const timer = setTimeout(blink, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Click expression cycle
  const handleClick = useCallback(() => {
    clickCountRef.current = (clickCountRef.current + 1) % 3;
    const newExpr = clickCountRef.current;
    setExpression(newExpr);

    if (ghostRef.current) {
      ghostRef.current.style.transition = 'transform 0.15s ease-out';
      ghostRef.current.style.transform = 'scale(1.3)';
      setTimeout(() => {
        if (ghostRef.current) {
          ghostRef.current.style.transition = 'transform 0.1s ease-in';
          ghostRef.current.style.transform = 'scale(0.9)';
          setTimeout(() => {
            if (ghostRef.current) {
              ghostRef.current.style.transition = 'transform 0.15s ease-out';
              ghostRef.current.style.transform = 'scale(1)';
            }
          }, 100);
        }
      }, 150);
    }

    if (newExpr === 1) {
      setSpeechBubble('Hey there!');
      setTimeout(() => setSpeechBubble(''), 2000);
    } else if (newExpr === 2) {
      setSpeechBubble('BOO!');
      document.body.classList.add('screen-shake');
      for (let i = 0; i < 20; i++) {
        dripsRef.current.push({
          x: x + ghostSize / 2 + (Math.random() - 0.5) * ghostSize,
          y: y + ghostSize * 0.7,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 1,
          size: Math.random() * 5 + 2,
          opacity: 1,
          color: Math.random() > 0.5 ? '#00d4ff' : '#a855f7',
          life: 0,
        });
      }
      setTimeout(() => {
        document.body.classList.remove('screen-shake');
        setSpeechBubble('');
      }, 2000);
    } else {
      setSpeechBubble('');
    }
  }, [x, y, ghostSize]);

  // Double click mini ghost
  const handleDoubleClick = useCallback(() => {
    if (miniGhostsRef.current.length >= 5) return;
    miniGhostIdRef.current += 1;
    miniGhostsRef.current.push({
      id: miniGhostIdRef.current,
      x: x + ghostSize / 2,
      y: y,
      vx: (Math.random() - 0.5) * 3,
      vy: -Math.random() * 3 - 1,
      opacity: 1,
      scale: 0.5,
    });
  }, [x, ghostSize]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setWiggling(true);
    setTimeout(() => setWiggling(false), 500);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Easter egg: type "boo"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setFlipping(true);
        setTimeout(() => setFlipping(false), 600);
        return;
      }
      typedRef.current += e.key.toLowerCase();
      if (typedRef.current.length > 10) {
        typedRef.current = typedRef.current.slice(-10);
      }
      if (typedRef.current.includes('boo')) {
        typedRef.current = '';
        setExpression(2);
        document.body.classList.add('screen-shake');
        setSpeechBubble('BOO!');
        setTimeout(() => {
          setExpression(0);
          document.body.classList.remove('screen-shake');
          setSpeechBubble('');
          clickCountRef.current = 0;
        }, 2000);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Position history for trail
  useEffect(() => {
    posHistoryRef.current.push({ x, y });
    if (posHistoryRef.current.length > 15) {
      posHistoryRef.current.shift();
    }
  }, [x, y]);

  // Trail + Drip + Mini ghost animation loop
  useEffect(() => {
    const dripCanvas = dripCanvasRef.current;
    if (!dripCanvas) return;
    const dripCtx = dripCanvas.getContext('2d');
    if (!dripCtx) return;

    const resize = () => {
      dripCanvas.width = window.innerWidth;
      dripCanvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let dripTimer = 0;

    const animate = () => {
      dripCtx.clearRect(0, 0, dripCanvas.width, dripCanvas.height);

      // Trail
      if (isMoving && velocity > 2) {
        posHistoryRef.current.forEach((pos, i) => {
          const opacity = (i / 15) * 0.3;
          const size = (i / 15) * 10 + 2;
          dripCtx.beginPath();
          dripCtx.arc(pos.x + ghostSize / 2, pos.y + ghostSize / 2, size, 0, Math.PI * 2);
          dripCtx.fillStyle = `rgba(0, 212, 255, ${opacity})`;
          dripCtx.fill();
          dripCtx.beginPath();
          dripCtx.arc(pos.x + ghostSize / 2, pos.y + ghostSize / 2, size * 0.5, 0, Math.PI * 2);
          dripCtx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.6})`;
          dripCtx.fill();
        });
      }

      // Spawn drips
      dripTimer++;
      if (dripTimer > 15) {
        dripTimer = 0;
        dripsRef.current.push({
          x: x + ghostSize / 2 + (Math.random() - 0.5) * ghostSize * 0.4,
          y: y + ghostSize * 0.75,
          vx: (Math.random() - 0.5) * 0.4,
          vy: Math.random() * 0.4 + 0.2,
          size: Math.random() * 3 + 1.5,
          opacity: 0.8,
          color: Math.random() > 0.5 ? '#00d4ff' : '#a855f7',
          life: 0,
        });
      }

      // Update drips
      dripsRef.current = dripsRef.current.filter((d) => {
        d.x += d.vx;
        d.y += d.vy;
        d.vy += 0.05;
        d.life++;
        d.opacity = Math.max(0, 0.8 - d.life * 0.008);
        d.size *= 0.995;

        if (d.opacity <= 0 || d.life > 120) return false;

        dripCtx.beginPath();
        dripCtx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        dripCtx.fillStyle = d.color;
        dripCtx.globalAlpha = d.opacity;
        dripCtx.fill();

        dripCtx.beginPath();
        dripCtx.arc(d.x, d.y, d.size * 3, 0, Math.PI * 2);
        dripCtx.fillStyle = d.color;
        dripCtx.globalAlpha = d.opacity * 0.06;
        dripCtx.fill();

        return true;
      });

      dripCtx.globalAlpha = 1;

      // Mini ghosts
      miniGhostsRef.current = miniGhostsRef.current.filter((mg) => {
        mg.x += mg.vx;
        mg.y += mg.vy;
        mg.vy -= 0.02;
        mg.opacity -= 0.004;
        mg.scale += 0.002;

        if (mg.opacity <= 0) return false;

        dripCtx.save();
        dripCtx.globalAlpha = mg.opacity;
        dripCtx.translate(mg.x, mg.y);
        dripCtx.scale(mg.scale, mg.scale);
        dripCtx.beginPath();
        dripCtx.arc(0, 0, 15, Math.PI, 0);
        dripCtx.bezierCurveTo(15, 15, 10, 25, 5, 20);
        dripCtx.bezierCurveTo(0, 25, -5, 20, -10, 22);
        dripCtx.bezierCurveTo(-15, 25, -15, 15, -15, 0);
        dripCtx.fillStyle = '#a855f7';
        dripCtx.fill();
        dripCtx.fillStyle = '#00d4ff';
        dripCtx.beginPath();
        dripCtx.arc(-5, -2, 3, 0, Math.PI * 2);
        dripCtx.arc(5, -2, 3, 0, Math.PI * 2);
        dripCtx.fill();
        dripCtx.restore();

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [x, y, isMoving, velocity, ghostSize]);

  const getIdleAnimation = () => {
    if (wiggling) return 'animate-wiggle';
    if (flipping) return 'animate-flip';
    if (!isMoving) return 'animate-ghost-bob animate-ghost-sway';
    return '';
  };

  return (
    <>
      <canvas
        ref={dripCanvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 9996 }}
      />

      <div
        className="fixed pointer-events-none"
        style={{
          left: x,
          top: y,
          zIndex: 9997,
          width: ghostSize,
          height: ghostSize,
        }}
      >
        {speechBubble && (
          <div
            className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl whitespace-nowrap font-creepster text-lg pointer-events-none"
            style={{
              background: 'rgba(10, 10, 18, 0.9)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              color: expression === 2 ? '#ef4444' : '#00d4ff',
              textShadow: expression === 2
                ? '0 0 10px rgba(239, 68, 68, 0.5)'
                : '0 0 10px rgba(0, 212, 255, 0.5)',
              animation: 'bounce-subtle 1s ease-in-out infinite',
              zIndex: 9999,
            }}
          >
            {speechBubble}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: expression === 2
                  ? '8px solid rgba(239, 68, 68, 0.3)'
                  : '8px solid rgba(0, 212, 255, 0.3)',
              }}
            />
          </div>
        )}

        <div
          ref={ghostRef}
          className={`relative pointer-events-auto cursor-pointer ${getIdleAnimation()} ${
            isHovered && !wiggling ? 'animate-glow-intense' : 'animate-glow-pulse'
          }`}
          style={{
            width: ghostSize,
            height: ghostSize,
            filter: isHovered
              ? 'drop-shadow(0 0 25px #00d4ff) drop-shadow(0 0 50px #a855f7) brightness(1.2)'
              : undefined,
            transition: 'filter 0.3s ease',
          }}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={GHOST_IMAGES[expression]}
            alt="GOO GHOUL"
            className="w-full h-full object-contain"
            style={{ opacity: ghostLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
            onLoad={() => setGhostLoaded(true)}
            draggable={false}
          />

          <div
            ref={eyesRef}
            className="absolute pointer-events-none"
            style={{
              top: ghostSize * 0.28,
              left: ghostSize * 0.30,
              width: ghostSize * 0.40,
              height: ghostSize * 0.12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              opacity: ghostLoaded ? 1 : 0,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: ghostSize * 0.10,
                height: ghostSize * 0.10,
                backgroundColor: '#00d4ff',
                boxShadow: '0 0 6px #00d4ff, 0 0 12px #00d4ff',
                transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            />
            <div
              className="rounded-full"
              style={{
                width: ghostSize * 0.10,
                height: ghostSize * 0.10,
                backgroundColor: '#00d4ff',
                boxShadow: '0 0 6px #00d4ff, 0 0 12px #00d4ff',
                transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
