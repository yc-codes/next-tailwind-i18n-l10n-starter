export function fakeArray(length: number) {
  return [...Array.from(Array(length).keys())]
}