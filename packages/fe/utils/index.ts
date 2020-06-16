import Stack from './stack'

export type Selector = string | Element | null

export let uid = 0

export const noop = () => null

export const through = (x: any) => x

export const type = (o: any) =>
  Object.prototype.toString
    .call(o)
    .slice(8, -1)
    .toLowerCase()

export const isObj = (o: any) => 'object' === type(o)

export function querySelector(selector: Selector) {
  if (typeof selector === 'string') {
    selector = document.querySelector(selector)
  }
  return selector
}

export function scrollToElement(el: Selector, duration = 100) {
  el = querySelector(el)
  const rect = el!.getBoundingClientRect()
  const { top, height } = rect
  const rectCenter = top + height / 2
  const windowCenter = window.innerHeight / 2
  const diff = rectCenter - windowCenter
  // 分 30 次滚动
  let times = 30
  const interval = duration / times
  const diffPerTime = diff / times
  if (diff > 0) {
    // 向上滚动
  } else if (diff < 0) {
    // 向下滚动
  }

  const timeId = setInterval(() => {
    times--
    document.documentElement.scrollTop += diffPerTime
    if (!times) {
      clearInterval(timeId)
    }
  }, interval)
}

export function* traverse(
  roots: any,
  opt: {
    childProp?: string
    beforeNode?: Function
  } = {}
): Generator {
  const { childProp = 'children', beforeNode = noop } = opt

  if (isObj(roots)) {
    yield* traverse([roots], opt)
  } else if (Array.isArray(roots)) {
    for (let i = 0, len = roots.length; i < len; i++) {
      const node = roots[i]
      beforeNode(node, roots, opt)
      yield node
      const { [childProp]: children } = node
      if (children) yield* traverse(children, opt)
    }
  }
}

export function createNavByHtml(el: Selector) {
  el = querySelector(el)
  if (!el) return
  const navs: any[] = []
  const reg = /H([1-6]{1})/
  const stack = new Stack<any>()
  Array.from(el.children).forEach(child => {
    const match = child.tagName.match(reg)
    if (match) {
      const [, level] = match
      const { tagName, innerText: text } = child as HTMLElement
      const navObj = {
        tagName,
        level,
        text,
        children: [],
        el: child,
        id: uid++
      }
      while (stack.peak?.level >= level) stack.pop()
      if (stack.peak) {
        stack.peak.children.push(navObj)
        stack.push(navObj)
      } else {
        stack.push(navObj)
        navs.push(navObj)
      }
    }
  })
  return navs
}

/**
 * debounce decorator
 * @param {number} 毫秒时间
 * @param {any} 分组类型，使用 truthy 值，默认以 this 进行分组
 */
export function debounce(time: number, groupBy: any) {
  const ctxs = new Map()

  return function (
    obj: ObjectConstructor,
    name: string,
    desc: PropertyDescriptor
  ) {
    // 根据作用域进行区分
    const fn = desc.value
    return {
      ...desc,
      value: function (...args: any[]) {
        // 添加对 promise 的支持，从而可以准确控制 debouce 执行的时间
        // 相比于每次返回同一个 promise 而言，每次新返回一个 promise 可以防止在使用的时候某一方添加 .then 导致所有使用方返回值异常或者被 reject
        return new Promise((resolve, reject) => {
          const key = groupBy || this
          let info = ctxs.get(key)

          if (!info) {
            info = {
              timeId: null,
              resolves: [],
              rejects: [],
              resolve(v: any) {
                this.resolves.forEach((res: Function) => res(v))
              },
              reject(error: Error) {
                this.rejects.forEach((rej: Function) => rej(error))
              }
            }
            ctxs.set(key, info)
          }

          info.resolves.push(resolve)
          info.rejects.push(reject)

          clearTimeout(info.timeId)
          info.timeId = setTimeout(async () => {
            ctxs.delete(key)
            try {
              const ret = await fn.apply(this, args)
              info.resolve(ret)
            } catch (error) {
              info.reject(error)
            }
          }, time)
        })
      }
    }
  }
}
