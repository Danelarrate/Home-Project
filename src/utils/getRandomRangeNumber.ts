export const getRandomRangeNumber = (initial: number, final: number) => {
  const limit = final - initial
  return initial + Math.round(Math.random() * limit)
}
