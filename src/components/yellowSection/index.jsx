import React from 'react'
import RoundedButton from '../roundedbutton'

const YellowSection = () => {
  return (
    <div className='bg-[#ffda79] flex flex-col items-center justify-center min-h-96'>
        <div className="flex flex-col items-center mt-36 font-[525] text-center heading w-2/5">
            <h1 className="text-5xl md:text-6xl tracking-wider">Find your next designer today</h1>
            <p className='text-2xl mt-10 heading'>
                The world’s leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.
            </p>
        <div className='flex w-3/5 justify-between my-10'>
            <RoundedButton text={"Get started now"} width={40} padding={4}/>
            <RoundedButton text={"Learn about hiring"} width={40} padding={4} color={"black"} bgcolor={"white"}/>
        </div>
        <p className='text-2xl heading font-medium mt-10 mb-36'>
                Are you a designer? <span className='underline-offset-1'>Join Dribble</span>
        </p>
        </div>
    </div>
  )
}

export default YellowSection