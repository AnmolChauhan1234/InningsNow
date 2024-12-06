import React from 'react';
import Balls from '../../UtilComp/Balls/Balls';
import RippleButton from '../../UtilComp/RippleButton/RippleButton';

function UpdateScore() {

    //have access to content and index of ball
    const handleBallClick = (content, index) => {
        console.log(`clicked with content: ${content}`);
    };


    return (
        <section className="w-full h-max shadow-md rounded-lg flex items-center justify-center border-t-2 border-t-custom-gold">
            <Balls
                numberOfBalls={8}
                content={[1, 2, 3, 4, 6, 'W', 'Wd', 'NB']}
                onBallClick={handleBallClick}
            />
        </section>
    );
}

export default UpdateScore;
