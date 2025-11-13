'use client'
import React, {useState} from 'react'
import s from './BurgerNav.module.scss'
import {Typography} from '@/components/common/typography/Typography.jsx'
import {useSmoothScroll} from '@/hooks/useSmoothScroll.jsx'
import { ReactComponent as Burger } from '@/assets/icons/burger.svg'

export const BurgerNav = () => {
    const {scrollTo} = useSmoothScroll()
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const handleMenuItemClick = (target) => {
        scrollTo(target, -50)
        setMenuIsOpen(false)
    }


    return (
        <nav className={s.burgerNav}>
            <div
                className={menuIsOpen ? `${s.burgerIconWrapper} ${s.open}` : s.burgerIconWrapper}
                onClick={onBurgerBtnClick}
            >
                <Burger className={s.burgerIcon} />
            </div>

            <div className={menuIsOpen ? `${s.burgerNavItems} ${s.show}` : s.burgerNavItems}>
                <Typography
                    onClick={() => handleMenuItemClick('ForDrivers')}
                    className={s.link}
                    as={'button'}
                    variant={'semibold_15'}
                >
                    For drivers
                </Typography>
                <Typography
                    onClick={() => handleMenuItemClick('ForCompanies')}
                    className={s.link}
                    as={'button'}
                    variant={'semibold_15'}
                >
                    For companies
                </Typography>
                <Typography
                    onClick={() => handleMenuItemClick('AboutUs')}
                    className={s.link}
                    as={'button'}
                    variant={'semibold_15'}
                >
                    About us
                </Typography>
            </div>
        </nav>

    )
}
