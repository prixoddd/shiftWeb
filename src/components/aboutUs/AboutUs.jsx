import React from 'react'
import s from './AboutUs.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Element as ScrollElement } from 'react-scroll'
import { StatCart } from '@/components/common/statCart/StatCart.jsx'
import { useTranslation } from 'react-i18next'

export const AboutUs = () => {
    const base = import.meta.env.BASE_URL
    const { t } = useTranslation()
    return (
        <ScrollElement name="AboutUs">
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={s.imageAndUsers}>
                            <div className={s.imageWrapper}>
                                <img
                                    src={`${base}images/whiteDodge@1x.webp`}
                                    srcSet={`${base}images/whiteDodge@2x.webp 2x`}
                                    alt="White Dodge in a showroom"
                                    width="512"
                                    height="303"
                                />
                            </div>
                            <div className={s.cartsWrapper}>
                                <div className={s.carts}>
                                    <StatCart count={10} text={t('aboutUs.stats.companies')} />
                                    <StatCart count={100} text={t('aboutUs.stats.users')} />
                                    <StatCart count={300} text={t('aboutUs.stats.bookings')} />
                                </div>
                            </div>
                        </div>
                        <div className={s.textAndButton}>
                            <Typography variant={'semibold_38'}>{t('aboutUs.title')}</Typography>
                            <Typography variant={'regular_16'}>{t('aboutUs.description')}</Typography>
                            {/*<Button className={s.button} variant={'secondary'}>*/}
                            {/*    <Tag />*/}
                            {/*    <Typography variant={'semibold_15'}>Find some special offers</Typography>*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
