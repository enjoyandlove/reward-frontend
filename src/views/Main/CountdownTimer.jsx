import BigPad from "./BigPad"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

const CountdownTimer = () => {
  const navigate = useNavigate()
  const num = [1, 4, 8, 5, 6, 9, 6, 5];
  const end_date = new Date("Jan 5, 2023 15:37:25").getTime()
  // const [mili, setMili] = useState(0)
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [day, setDay] = useState(0)

  useEffect(() => {
    setInterval(function () {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = end_date - now

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        setDay(0)
        setHour(0)
        setMin(0)
        setSec(0)
        // setMili(0)
      }

      // Time calculations for days, hours, minutes and seconds
      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSec(Math.floor((distance % (1000 * 60)) / 1000))
      // setMili(distance % 1000)


    }, 1000);
  })
  return (
    <div>
      <div className='flex justify-center items-end mt-7 wow bounce' delay="0.4">
        <BigPad num='$' />
        <BigPad num={num[0]} />
        <BigPad num={num[1]} />
        <p className='mx-2 text-2 md:text-7 font-play text-yellow-main leading-13'>,</p>
        <BigPad num={num[2]} />
        <BigPad num={num[3]} />
        <BigPad num={num[4]} />
        <p className='mx-2 text-2 md:text-7 font-play text-yellow-main leading-13'>,</p>
        <BigPad num={num[5]} />
        <BigPad num={num[6]} />
        <BigPad num={num[7]} />
      </div>
      <p className='text-4 leading-2 font-montserrat text-white-2 text-center mt-5'><span className='font-bold text-white-main'>{day}</span> days : <span className='font-bold text-white-main'>{hour}</span> hours : <span className='font-bold text-white-main'>{min}</span> minutes : <span className='font-bold text-white-main'>{sec}</span> seconds | <span className='text-yellow-main cursor-pointer' onClick={() => {navigate('/connect-wallet')}}>Check your lottery reward</span>
      </p>
    </div>
  )
}
export default CountdownTimer