'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AosProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // длительность анимации
            easing: 'ease-out', // кривая
            once: true, // анимация только 1 раз
            offset: 80, // отступ от низа экрана
        })
    }, [])

    return children
}
