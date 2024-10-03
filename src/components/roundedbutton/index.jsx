import React from 'react'

const RoundedButton = ({text, width, padding, weight, color="white", bgcolor="black"}) => {
  return (
    <button className={`font-${weight} p-${padding} bg-${bgcolor} text-${color} border-none rounded-full w-${width} hover:opacity-60`}>{text}</button>
  )
}

export default RoundedButton