import { useEffect, useState } from 'react'
import './App.css'
import { QuoteBox } from './components/QuoteBox/QuoteBox'
import { QuoteSpecs } from './components/QuoteForm/QuoteSpecs'
import { calculateDay } from './utils/calculateDay'
import { getRandomRangeNumber } from './utils/getRandomRangeNumber'

function App() {
  const [trip, setTrip] = useState<TripData>()
  const [range, setRange] = useState({ oceanRange: [0, 0], airRange: [0, 0] })
  useEffect(() => {
    const airRange = [getRandomRangeNumber(3, 7), getRandomRangeNumber(2, 4)]
    const oceanRange = [
      getRandomRangeNumber(25, 30),
      getRandomRangeNumber(5, 10)
    ]
    setRange({ airRange, oceanRange })
  }, [trip?.channel])

  return (
    <div className='App'>
      <QuoteSpecs setTrip={setTrip} />
      {trip && (
        <QuoteBox
          trip={trip}
          range={trip.channel === 'Ocean' ? range.oceanRange : range.airRange}
        />
      )}
    </div>
  )
}

export default App

export interface TripData {
  from: string
  to: string
  price: number
  channel: string
}
