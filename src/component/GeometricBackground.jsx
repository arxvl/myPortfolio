import React, { useEffect, useState } from 'react';

const AnimatedGeometricBackground = () => {
const [shapes, setShapes] = useState([]);

useEffect(() => {
const createShapes = () => {
    const shapeTypes = ['triangle', 'square', 'circle', 'diamond'];
    const newShapes = [];

    for (let i = 0; i < 80; i++) {
    newShapes.push({
        id: i,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 4, // 4–10px
        opacity: Math.random() * 0.2 + 0.4, // 0.1–0.3
        duration: Math.random() * 10 + 5, // 5–15s float cycle
        delay: Math.random() * 5,
        direction: Math.random() > 0.5 ? 1 : -1,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 0.5 + 0.5, // 0.5–1 spin speed
        pulseSpeed: Math.random() * 3 + 2, // 2–5s pulse cycle
        pulseScale: Math.random() * 0.2 + 1.05, // 1.05–1.25 scale
        fadeDuration: Math.random() * 10 + 5, // 5–15s fade cycle
    });
    }
    setShapes(newShapes);
};

createShapes();
}, []);

const renderShape = (shape) => {
// Outer wrapper → handles float + rotate
const wrapperStyle = {
    position: 'absolute',
    left: `${shape.x}%`,
    top: `${shape.y}%`,
    width: `${shape.size}px`,
    height: `${shape.size}px`,
    opacity: shape.opacity,
    animation: `
    float-${shape.id} ${shape.duration}s ease-in-out infinite ${shape.delay}s,
    rotate-${shape.id} ${shape.rotationSpeed * 10}s linear infinite
    `,
};

// Inner div → handles pulsate + fade
const innerStyle = {
    width: '100%',
    height: '100%',
    animation: `
    pulsate-${shape.id} ${shape.pulseSpeed}s ease-in-out infinite,
    fade-${shape.id} ${shape.fadeDuration}s ease-in-out infinite
    `,
};

switch (shape.type) {
    case 'triangle':
    return (
        <div key={shape.id} style={wrapperStyle}>
        <div
            style={{
            ...innerStyle,
            width: 0,
            height: 0,
            borderLeft: `${shape.size / 2}px solid transparent`,
            borderRight: `${shape.size / 2}px solid transparent`,
            borderBottom: `${shape.size}px solid white`,
            }}
        />
        </div>
    );
    case 'square':
    return (
        <div key={shape.id} style={wrapperStyle}>
        <div
            style={{
            ...innerStyle,
            backgroundColor: 'white',
            }}
        />
        </div>
    );
    case 'circle':
    return (
        <div key={shape.id} style={wrapperStyle}>
        <div
            style={{
            ...innerStyle,
            backgroundColor: 'white',
            borderRadius: '50%',
            }}
        />
        </div>
    );
    case 'diamond':
    return (
        <div key={shape.id} style={wrapperStyle}>
        <div
            style={{
            ...innerStyle,
            backgroundColor: 'white',
            transform: 'rotate(45deg)',
            }}
        />
        </div>
    );
    default:
    return null;
}
};

return (
<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <style jsx>{`
    ${shapes
        .map(
        (shape) => `
        @keyframes float-${shape.id} {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
        }
        25% {
            transform: translateY(-${20 + Math.random() * 15}px) translateX(${
            shape.direction * (10 + Math.random() * 10)
        }px);
        }
        50% {
            transform: translateY(-${10 + Math.random() * 10}px) translateX(${
            shape.direction * (20 + Math.random() * 15)
        }px);
        }
        75% {
            transform: translateY(-${15 + Math.random() * 10}px) translateX(${
            shape.direction * (5 + Math.random() * 10)
        }px);
        }
        }

        @keyframes rotate-${shape.id} {
        from { transform: rotate(${shape.rotation}deg); }
        to { transform: rotate(${shape.rotation + 360}deg); }
        }

        @keyframes pulsate-${shape.id} {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(${shape.pulseScale}); }
        }

        @keyframes fade-${shape.id} {
        0%, 100% { opacity: 0; }
        50% { opacity: ${shape.opacity}; }
        }
    `
        )
        .join('')}
    `}</style>

    {shapes.map(renderShape)}
</div>
);
};

export default AnimatedGeometricBackground;
