import { useEffect, useState } from "react";




const DiscountTimer = () => {
    const targetTime = new Date().getTime() + 1000 * 60 * 60 * 24 * 25

    const getTimeRemaining = () => {
        const now = new Date().getTime()
        const difference = (targetTime - now)

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hrs: Math.floor(difference / (1000 * 60 * 60) % 24),
            min: Math.floor(difference / (1000 * 60) % 60),
            sec: Math.floor(difference / (1000) % 60),
        }
    }
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining())
    useEffect(()=>{
        setInterval(()=>{
            setTimeLeft(getTimeRemaining())
        },1000)
    },[]) 

    return (

        <div>
            <div className="flex justify-around pb-3 md:text-2xl  font-bold md:py-6">
                <div>
                    <h1 className="text-red-500">{timeLeft.days}</h1>
                    <h1>Days</h1>
                </div>
                <div>
                    <h1 className="text-red-500">{timeLeft.hrs}</h1>
                    <h1>Hrs</h1>
                </div>
                <div>
                    <h1 className="text-red-500">{timeLeft.min}</h1>
                    <h1>min</h1>
                </div>
                <div>
                    <h1 className="text-red-500">{timeLeft.sec}</h1>
                    <h1>sec</h1>
                </div>
            </div>
        </div>
    );
};

export default DiscountTimer;