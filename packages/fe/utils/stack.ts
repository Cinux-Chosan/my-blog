export default class Stack<T> {
  _data: T[]

  constructor(list: T[] = []) {
    this._data = Array.from(list)
  }

  get peak(): T | undefined {
    const { _data } = this
    return _data[_data.length - 1]
  }

  push(...args: ConcatArray<T>[] | T[]) {
    this._data.push(...([] as T[]).concat(...args))
  }

  pop(): T | undefined {
    return this._data.pop()
  }

  toArray() {
    return this._data
  }

  [Symbol.iterator]() {
    return this._data[Symbol.iterator]()
  }
}
