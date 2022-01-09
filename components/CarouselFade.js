import { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function CarouselFade({ slides }) {
  const [opacities, setOpacities] = useState([])
  const [pause, setPause] = useState(false)
  const [currentSlide, setcurrentSlide] = useState(0)
  const timer = useRef()

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slides: slides.length,
    loop: true,
    duration: 2000,
    slideChanged(s) {
      setcurrentSlide(s.details().relativeSlide)
    },
    move(s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 4000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div ref={sliderRef} className="relative overflow-hidden min-h-screen h-600px">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute w-full h-full top-0"
          style={{ opacity: opacities[idx], visibility: currentSlide === idx ? 'visible' : 'hidden' }}
        >
          {slide}
        </div>
      ))}
    </div>
  )
}


