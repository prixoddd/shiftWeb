'use client'
import React from 'react'
import s from './Header.module.scss'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Nav } from '@/components/header/nav/Nav.jsx'
import { BurgerNav } from '@/components/header/burgerNav/BurgerNav.jsx'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const { t } = useTranslation()

    return (
        <section className={s.hero} data-aos="fade-down" data-aos-duration="600">
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.logoAndSlogan} data-aos="fade-right" data-aos-duration="700" data-aos-delay="50">
                        <a href="/" aria-label="Go to homepage">
                            <LogoIcon />
                        </a>
                        <Typography className={s.slogan} variant={'regular_14'}>
                            {t('header.slogan')}
                        </Typography>
                    </div>

                    <div className={s.buttons}>
                        <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="100">
                            <Nav />
                        </div>

                        <BurgerNav />
                    </div>
                </div>
            </div>
        </section>
    )
}
