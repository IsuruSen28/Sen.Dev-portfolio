import React, { useRef } from 'react'
import { counterItems } from '../constants/index.js'
import { useCountUp } from 'react-countup'

const CounterItem = ({ item }) => {
  const countUpRef = useRef(null)
  
  useCountUp({
    ref: countUpRef,
    start: 0,
    end: item.value,
    duration: 2,
    startOnMount: true,
  })

  return (
    <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
      <div className='counter-number text-white text-5xl font-bold mb-2'>
        <span ref={countUpRef} />
        {item.suffix}
      </div>
      <div className='text-white-50 font-bold mb-2'>{item.label}</div>
    </div>
  )
}

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <CounterItem key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
