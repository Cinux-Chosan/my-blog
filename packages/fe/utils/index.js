export let uid = 0

export const noop = () => null

export const type = o =>
  Object.prototype.toString
    .call(o)
    .slice(8, -1)
    .toLowerCase()

export const isObj = o => 'object' === type(o)

export function querySelector(selector) {
  if (typeof selector === 'string') {
    selector = document.querySelector(selector)
  }
  return selector
}

export function scrollToElement(el, duration = 100) {
  el = querySelector(el)
  const rect = el.getBoundingClientRect()
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

export function* traverse(roots, opt = {}) {
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

export function createNavByHtml(el) {
  el = querySelector(el)
  const items = []
  const reg = /H([1-6]{1})/
  ;[...el.children]
    .filter(el => reg.test(el.tagName))
    .reduce((prevSibling, child) => {
      const { tagName } = child
      const [, level] = tagName.match(reg)
      const navObj = {
        tagName,
        level,
        text: child.innerText,
        children: [],
        el: child,
        id: uid++
      }
      if (level) {
        if (prevSibling) {
          if (level > prevSibling.level) {
            navObj.parent = prevSibling
            prevSibling.children.push(navObj)
          } else if (level <= prevSibling.level) {
            let parent = prevSibling
            while (parent) {
              if (level === parent.level) {
                parent = navObj.parent = parent.parent
                if (parent) {
                  parent.children.push(navObj)
                } else {
                  items.push(navObj)
                }
                break
              }
              parent = parent.parent
            }
          }
        } else {
          items.push(navObj)
        }
      }
      return navObj
    }, null)

  return items
}
