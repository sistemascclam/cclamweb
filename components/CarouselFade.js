import { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"

export default function CarouselFade({ slides }) {
    const [opacities, setOpacities] = useState([])
    const [pause, setPause] = useState(false)
    const timer = useRef()

    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slides: slides.length,
        loop: true,
        duration: 3000,
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
        }, 5000)
        return () => {
          clearInterval(timer.current)
        }
      }, [pause, slider])

    return (
        <div>
            <div ref={sliderRef} className="fader">
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="fader__slide"
                        style={{ opacity: opacities[idx] }}
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    )
}


