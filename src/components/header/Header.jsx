'use client'
import React from 'react'
import s from './Header.module.scss'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Nav } from '@/components/header/nav/Nav.jsx'
import { BurgerNav } from '@/components/header/burgerNav/BurgerNav.jsx'

export const Header = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.logoAndSlogan}>
                        <a href="/" aria-label="Go to homepage">
                            <LogoIcon />
                        </a>
                        <Typography className={s.slogan} variant={'regular_14'}>
                            Tune up your car care routine
                        </Typography>
                    </div>
                    <div className={s.buttons}>
                        <Nav />
                        <BurgerNav />
                    </div>
                </div>
            </div>
        </section>
    )
}
