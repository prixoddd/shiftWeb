import React from 'react'
import s from './AboutUs.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Element as ScrollElement } from 'react-scroll'
import { StatCart } from '@/components/common/statCart/StatCart.jsx'
import { useTranslation } from 'react-i18next'
import { ReactComponent as Office } from '@/assets/icons/office.svg'
import { ReactComponent as People } from '@/assets/icons/people.svg'
import { ReactComponent as Bookings } from '@/assets/icons/bookings.svg'

export const AboutUs = () => {
    const base = import.meta.env.BASE_URL
    const { t } = useTranslation()

    return (
        <ScrollElement name="AboutUs">
            <section className={s.hero} data-aos="fade-up" data-aos-duration="700">
                <div className={s.container}>
                    <div className={s.content}>
                        <div
                            className={s.imageAndUsers}
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="50"
                        >
                            <div
                                className={s.imageWrapper}
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                data-aos-delay="100"
                            >
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
                                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="150">
                                        <StatCart image={<Office />} count={10} text={t('aboutUs.stats.companies')} />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="250">
                                        <StatCart image={<People />} count={100} text={t('aboutUs.stats.users')} />
                                    </div>
                                    <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="350">
                                        <StatCart image={<Bookings />} count={300} text={t('aboutUs.stats.bookings')} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={s.textAndButton}
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <Typography variant={'semibold_38'}>{t('aboutUs.title')}</Typography>
                            <Typography variant={'regular_16'}>{t('aboutUs.description')}</Typography>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
