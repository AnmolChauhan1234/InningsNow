import React, { useRef, useState,useEffect } from 'react';
import Header from '../Header/Header';
import UpdateScore from './UpdateScore/UpdateScore';
import LiveScore from './LiveScore/LiveScore';
import Scorecard from './ScoreCard/Scorecard';
import Balls from '../UtilComp/Balls/Balls';



function Score() {

    const [isLive, setIsLive] = useState(true);

    const [runs , setRuns] = useState( () => {
        const storedRuns = localStorage.getItem('runs');
        return storedRuns ? JSON.parse(storedRuns) : [];
    }

    );
    const [ballCount , setBallCount] =  useState( () => {
        const storedBallCount = localStorage.getItem('ballsCount');
        return storedBallCount ? JSON.parse(storedBallCount)+1 : 0;
    })
    const containerRef  = useRef(null);

    // Switching between live and scorecard starts here
    const handleSwitch = () => {
        setIsLive(!isLive);
    };
    // Switching between live and scorecard ends here
    
    // Updating runs array starts here
    const handleBallClick = (content, index) => {
        // console.log(`clicked with content: ${content}`);
        // console.log(ballCount)

        const isValidBall = (!isNaN(content) && content.trim !== "" ) || content === 'W';

        if(isValidBall){
            setRuns( prevRuns => {
                const newRuns = [...prevRuns , content];
                return newRuns; 
            });
            setBallCount(prevBalls => prevBalls + 1)
            
        } else{
            setRuns( prevRuns => {
                const newRuns = [...prevRuns , content];
                return newRuns;
            });
            
        }

        if(isValidBall && (ballCount + 1) % 6 === 0){
            setRuns(prevRuns => [...prevRuns , '-'])
        }
        
        localStorage.setItem('ballsCount',JSON.stringify(ballCount));

    };
    //updating runs array ends here

    //scroll to the most recent content starts here
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
        localStorage.setItem('runs',JSON.stringify(runs))
    }, [runs]);
    //scroll to the most recent content ends here

    useEffect( () => {
        console.log(ballCount)
    } , [ballCount])


    return (
        <>
            <main 
                className='w-screen min-h-screen bg-custom-black-50 relative overflow-x-hidden overflow-y-auto'
            >

                {/* Header Switch section starts here */}
                <section 
                    className='header absolute h-[30px] md:h-[50px] w-full md:w-[70%] top-3 left-0 md:left-1/2 md:-translate-x-1/2 flex items-center border-b-2 md:border-2 border-custom-gold md:rounded-full lg:shadow-white-glow z-10 pb-2 md:pb-0'
                >

                    {/* Slider div section starts here */}
                    <div 
                        className={`absolute h-full w-1/2 bg-white rounded-full transition-transform duration-200 ease-in ${isLive ? 'translate-x-0 text-black' : 'translate-x-full'} font-heading text-lg md:text-2xl cursor-pointer flex items-center justify-center`}
                    >
                        {isLive ? 'Live' : 'Scoreboard'}
                    </div>
                    {/* Slider div Section ends here */}

                    {/* Switch content section starts here */}
                    <div
                        className={`font-heading text-lg md:text-2xl flex-1 text-center ${isLive ? 'text-black' : 'text-custom-gold'} cursor-pointer`}
                        onClick={handleSwitch}
                    >
                        Live
                    </div>

                    <div
                        className={`font-heading text-lg md:text-2xl  flex-1 text-center ${!isLive ? 'text-black' : 'text-custom-gold'} rounded-full py-1 cursor-pointer transition-all duration-200 ease-in`}
                        onClick={handleSwitch}
                    >
                        Scorecard
                    </div>
                    {/* Switch content section ends here */}

                </section>
                {/* Header switch section ends here */}

                {/* Live/Scoreboard Section starts here */}
                <section 
                    className='w-full absolute top-[42px] md:top-[80px] flex flex-col items-center'
                >
                    {isLive ? 
                        (
                            <div 
                                className='w-full flex flex-col items-center'
                            >
                                {/* Live Score section starts here */}
                                <div className='w-full md:w-[70%] mark-white'>
                                    <LiveScore />
                                </div>
                                {/* Live score section ends here */}

                                {/* ball visibility section starts here */}
                                <div 
                                    className='w-full md:w-[70%] h-max overflow-y-scroll hide-scrollbar flex py-8 px-2 items-center justify-start cursor-pointer '
                                    ref={containerRef}
                                >
                                    {runs.map( (value,index) => {
                                        return(
                                            <div 
                                                key={index}
                                                className={`bg-transparent  border-custom-white size-10 ${value !== '-' ? 'border-[1px] rounded-full hovershadow': 'border-none'} text-white flex flex-shrink-0 items-center justify-center text-lg mr-3 ${index === 0 ? 'ml-2': ''} font-thin `}
                                            >
                                                {value}
                                            </div>
                                        )
                                    })}
                                </div>
                                {/* balls visibility section ends here */}

                                {/*Update score section starts here */}
                                <div className='w-full md:w-[70%] border-t-custom-gold border-t-2 rounded-t-2xl'>
                                    {/* <UpdateScore /> */}
                                    <Balls
                                        numberOfBalls={8}
                                        content={[1, 2, 3, 4, 6, 'W', 'Wd', 'NB']}
                                        onBallClick={handleBallClick}
                                    />
                                </div>
                                {/* Update score section ends here */}
                            </div>
                        ) 
                            : 
                        (
                            <div 
                                className='w-full md:w-[70%] flex flex-col items-center'
                            >
                                <Scorecard />
                            </div>
                        ) 
                    }
                    
                </section>
                {/* Live/Scoreboard Section ends here */}

            </main>
        </>
    );
}

export default Score;