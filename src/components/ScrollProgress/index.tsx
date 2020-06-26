import React, { useState, useEffect } from 'react'
import { throttle } from 'lodash'
import { ProgressBar } from './styles'

const ScrollProgress: React.FC = (): React.ReactElement => {

  const [ value, setValue ] = useState<number>(0)
  const [ max, setMax ] = useState<number>(0)
  
  const handleScroll = () => {
    try {
      const winHeight = window.innerHeight
      const docRect: any = document.body.getBoundingClientRect()
      const docHeight = docRect.height
  
      const max = docHeight - winHeight
      const value = window.pageYOffset
  
      setValue(value)
      setMax(max)
    } catch (e) {
      console.log(e)
    }
  }

  const throttledHandleScroll = throttle(handleScroll, 50)

  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll)
    return function cleanup() {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  })

  return (
    <ProgressBar value={value} max={max}></ProgressBar>
  )
}

export default ScrollProgress