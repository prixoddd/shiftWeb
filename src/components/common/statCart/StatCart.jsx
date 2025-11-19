import React, { useEffect, useState } from 'react'
import s from './StatCart.module.scss'

export const StatCart = ({ count, text, image }) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (!count || count <= 0) {
            setValue(0)
            return
        }

        const minDuration = 600 // минимальное время анимации
        const maxDuration = 3000 // максимальное время анимации
        const perUnit = 25 // мс на каждую единицу

        const duration = Math.min(maxDuration, Math.max(minDuration, count * perUnit))

        const startTime = performance.now()

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1)
            const current = Math.floor(progress * count)
            setValue(current)
            if (progress < 1) requestAnimationFrame(animate)
        }

        setValue(0) // каждый раз начинаем с 0
        requestAnimationFrame(animate)
    }, [count])

    return (
        <div className={s.container}>
            <div className={s.avatar}>{image}</div>

            <div className={s.textContainer}>
                <h3>{`${value}+`}</h3>
                <h3>{text}</h3>
            </div>
        </div>
    )
}
