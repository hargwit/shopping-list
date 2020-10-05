/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pipe = (...fns: Array<(val: any) => any>) => (value: any): any =>
  fns.reduce((acc, fn) => fn(acc), value)

export default pipe
