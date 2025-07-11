import React from 'react'
import s from './Header.module.scss'
import { ReactComponent as LogoIcon } from '@/assets/icons/logo.svg'
import { Typography } from '@/components/common/typography/Typography.jsx'

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
                        <Typography className={s.button} as={'button'} variant={'semibold_15'}>
                            For drivers
                        </Typography>
                        <Typography className={s.button} as={'button'} variant={'semibold_15'}>
                            For companies
                        </Typography>
                        <Typography className={s.button} as={'button'} variant={'semibold_15'}>
                            About us
                        </Typography>
                    </div>
                </div>
            </div>
        </section>
    )
}
