import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash'
import { Wrapper, Icon  } from './styles'

const ScrollTop: React.FC = (): React.ReactElement => {

  const [shown, setShown] = useState<boolean>(false)

  const handleScroll = () => {
    const documentTop = document.body.getBoundingClientRect()
    window.scroll(0, documentTop.top)
  }

  const checkScroll = () => {
    try {
      const threshold = 200
      const scrollTop =
      window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
                document.documentElement ||
                document.body.parentNode ||
                document.body
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
            ).scrollTop

      if (scrollTop > threshold && !shown) {
        setShown(true)
      }

      if (scrollTop <= threshold && shown) {
        setShown(false)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const throttledCheckScroll = throttle(checkScroll, 50)

  useEffect(() => {
    window.addEventListener('scroll', throttledCheckScroll)
    return function cleanup() {
      window.removeEventListener('scroll', throttledCheckScroll)
    }
  })
  
  if (!shown) return null

  return (
    <Wrapper onClick={() => handleScroll()}>
      <Icon />
    </Wrapper>
  )
}

export default ScrollTop