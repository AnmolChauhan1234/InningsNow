import React, { useEffect, useState } from 'react';

const ScrollComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Check if the user has scrolled down
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            {/* Black div */}
            <div className="w-screen h-screen bg-black"></div>
            {/* Orange div, conditionally rendered */}
            {isVisible && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-orange-500 transition-opacity duration-300">
                    {/* Optional: Add some content here */}
                    <h1 className="text-white text-4xl text-center pt-20">You Scrolled Down!</h1>
                </div>
            )}
        </div>
    );
};

export default ScrollComponent;