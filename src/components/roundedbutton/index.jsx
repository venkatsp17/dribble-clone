import React from 'react'

const RoundedButton = ({text, width, padding}) => {
  return (
    <button className={`font-bold p-${padding} bg-black text-white border-none rounded-full w-${width} hover:opacity-60`}>{text}</button>
  )
}

export default RoundedButton