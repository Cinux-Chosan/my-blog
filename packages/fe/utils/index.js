export function scrollToElement(el, duration = 100) {
  if (typeof el === 'string') {
    el = document.querySelector(el)
  }
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
