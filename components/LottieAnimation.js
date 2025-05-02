import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  renderer = 'svg'
}) {
  const container = useRef(null)

  useEffect(() => {
    // guard against missing animationData
    if (!animationData || !Array.isArray(animationData.layers) || animationData.layers.length === 0) {
      console.warn('LottieAnimation: invalid or empty animationData')
      return
    }

    const anim = lottie.loadAnimation({
      container: container.current,
      renderer,
      loop,
      autoplay,
      animationData
    })

    return () => anim.destroy()
  }, [animationData, loop, autoplay, renderer])

  return <div ref={container} />
}
