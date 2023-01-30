import { FormEvent, useRef } from 'react'
import { TripData } from '../../App'
import './quoteSpecs.css'
interface Props {
  setTrip: (trip: TripData) => void
}
export const QuoteSpecs = ({ setTrip }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const from = fromRef.current?.value || ''
    const to = toRef.current?.value || ''
    const price = Number(priceRef.current?.value) || 0
    const channel = channelRef.current?.value || ''

    setTrip({ from, to, price, channel })
  }

  const fromRef = useRef<HTMLInputElement>(null)
  const toRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const channelRef = useRef<HTMLSelectElement>(null)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='from'>
          Starting country
          <input
            type='text'
            name='from'
            pattern='[a-zA-Z]{1,20}'
            title='Only letters are allowed'
            ref={fromRef}
            maxLength={56}
            required
          />
        </label>
        <label htmlFor='to'>
          Destination country
          <input
            type='text'
            name='to'
            pattern='[a-zA-Z]{1,20}'
            title='Only letters are allowed(max 56chracters)'
            ref={toRef}
            maxLength={56}
            required
          />
        </label>
        <label htmlFor='quote-price'>
          Quote price
          <input
            type='number'
            name='quote-price'
            min={0}
            max={9999999}
            pattern='\d+'
            title='Negative numbers are not accepted'
            ref={priceRef}
            required
          />
        </label>
        <label htmlFor='shipping-channel'>
          Shipping channel
          <select name=' shipping-channel' ref={channelRef}>
            <option>Ocean</option>
            <option>Air</option>
          </select>
        </label>
        <button type='submit'>Create quote</button>
      </form>
    </>
  )
}
