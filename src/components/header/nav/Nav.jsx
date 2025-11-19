'use client'
import React from 'react'
import s from './Nav.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { useSmoothScroll } from '@/hooks/useSmoothScroll.jsx'
import { LanguageSwitcher } from '@/components/common/languageSwitcher/LanguageSwitcher.jsx'
import { useTranslation } from 'react-i18next'

export const Nav = () => {
    const { scrollTo } = useSmoothScroll()
    const { t } = useTranslation()

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
                {t('nav.aboutUs')}
            </Typography>
            <Typography
                onClick={() => handleClick('ForDrivers')}
                className={s.button}
                as={'button'}
                variant={'semibold_15'}
            >
                {t('nav.forDrivers')}
            </Typography>
            <Typography
                onClick={() => handleClick('ForCompanies')}
                className={s.button}
                as={'button'}
                variant={'semibold_15'}
            >
                {t('nav.forCompanies')}
            </Typography>
            <LanguageSwitcher />
        </div>
    )
}
