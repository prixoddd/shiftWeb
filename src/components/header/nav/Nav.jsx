'use client'
import React from 'react'
import s from './Nav.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { useSmoothScroll } from '@/hooks/useSmoothScroll.jsx'

export const Nav = () => {
    const { scrollTo } = useSmoothScroll()

    const handleClick = (target) => {
        let offset = -100

        if (window.innerWidth <= 1439 && window.innerWidth >= 1024) {
            offset = -80
        } else if (window.innerWidth < 1024) {
            offset = -60
        }

        scrollTo(target, offset)
    }

    return (
        <div className={s.nav}>
            <Typography
                onClick={() => handleClick('AboutUs')}
                className={s.button}
                as={'button'}
                variant={'semibold_15'}
            >
                About us
            </Typography>
            <Typography
                onClick={() => handleClick('ForDrivers')}
                className={s.button}
                as={'button'}
                variant={'semibold_15'}
            >
                For drivers
            </Typography>
            <Typography
                onClick={() => handleClick('ForCompanies')}
                className={s.button}
                as={'button'}
                variant={'semibold_15'}
            >
                For companies
            </Typography>
        </div>
    )
}
