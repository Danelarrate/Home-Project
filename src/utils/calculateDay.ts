export const calculateDay = (x: number) => {
  const currentTime = new Date().getTime()
  const dayInMs = 86400000
  const currentPlusXdays = currentTime + dayInMs * x
  const dateString = new Date(currentPlusXdays).toDateString().split(' ')
  return dateString[1] + ' ' + dateString[2]
}
