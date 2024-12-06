import React, { useState } from 'react';

const ballColors = [
    'rgba(255, 255, 255, 0.9)', // White ball
    'rgba(255, 255, 255, 0.9)', // White ball
    'rgba(255, 255, 255, 0.9)', // White ball
    'rgba(255, 255, 255, 0.9)', // White ball
    'rgba(255, 255, 255, 0.9)', // White ball
    'rgba(255, 255, 255, 0.9)', // White ball
];

function Balls({ numberOfBalls, content = [], onBallClick }) {
    const [currentBall, setCurrentBall] = useState(-1);

    const handleBallClick = (index) => {
        if (onBallClick) {
            onBallClick(content[index], index); 
            // Pass content and index to the callback
        }
        setCurrentBall(index); // Update the active ball
    };

    return (
        <main className="h-full w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 place-items-center gap-2 gap-y-3 p-3 rounded-lg">
            {Array.from({ length: numberOfBalls }).map((_, index) => (
                <div
                    key={index}
                    onClick={() => handleBallClick(index)} // Add click handler
                    className={`size-14 md:size-16 rounded-full shadow-lg transition-transform transform cursor-pointer 
                    border-[1px] border-custom-white hovershadow active:scale-110`} 
                    // Optional style for the active ball
                    
                >
                    {/* Ball Content */}
                    <span className="flex h-full w-full items-center justify-center text-custom-gold font-bold text-lg">
                        {content[index] || ''}
                    </span>
                </div>
            ))}
        </main>
    );
}

export default Balls;