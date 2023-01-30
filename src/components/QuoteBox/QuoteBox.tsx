import { TripData } from '../../App'
import { calculateDay } from '../../utils/calculateDay'

import './quoteBox.css'

interface Props {
  trip: TripData
  range: number[]
}

export const QuoteBox = ({ trip, range }: Props) => {
  const CHANNEL_OCEAN = 'Ocean'

  const estimatedDelivery = `${calculateDay(range[0])}-${calculateDay(
    range[1] + range[0]
  )}`

  const tripPriceDollarFormat = trip.price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

  return (
    <div className='quoteBoxContainer'>
      <div className='typeTimeContainer'>
        <div className='quoteBoxHeader'>
          <img
            src={
              trip.channel === CHANNEL_OCEAN ? 'boatIcon.png' : 'planeIcon.png'
            }
            alt={`${trip.channel === CHANNEL_OCEAN ? 'boat' : 'plane'} icon`}
          />
          <h4>Traditional {trip.channel.toLowerCase()} freight</h4>
        </div>
        <div className='quoteBoxBody'>
          <p>{`${range[0]}-${range[0] + range[1]} days`} </p>
          <p>
            Estimated delivery
            <br></br>
            <b>{estimatedDelivery}</b>
          </p>
        </div>
      </div>
      <div className='fromToPriceContainer'>
        <div className='destination'>
          <h4>{`${trip.from} → ${trip.to}`}</h4>
        </div>
        <div className='price'>US$ {tripPriceDollarFormat}</div>
      </div>
    </div>
  )
}
