'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const AosProvider = ({ children }) => {
    useEffect(() => {
        const isMobile =
            typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 768px)').matches

        AOS.init({
            duration: 500,
            easing: 'ease-out',
            offset: 80,
            once: true,
            disable: isMobile,
            debounceDelay: 50,
            throttleDelay: 50,
            disableMutationObserver: true,
        })
    }, [])

    return children
}
