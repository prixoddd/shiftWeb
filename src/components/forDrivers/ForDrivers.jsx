import React from 'react'
import s from './ForDrivers.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ReactComponent as Garage1 } from '@/assets/icons/forDriversGarage1.svg'
import { ReactComponent as Garage2 } from '@/assets/icons/forDriverGarage2.svg'
import { ReactComponent as GooglePlay } from '@/assets/icons/googlePlay.svg'
import { ReactComponent as Appstore } from '@/assets/icons/appStore.svg'
import { ShiftAccordion } from '@/components/accordion/Accordion.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { Element as ScrollElement } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export const ForDrivers = () => {
    const { t } = useTranslation()

    const accordionItems = [
        {
            title: t('forDrivers.accordion.appointmentScheduling.title'),
            content: t('forDrivers.accordion.appointmentScheduling.content'),
        },
        {
            title: t('forDrivers.accordion.carHistory.title'),
            content: t('forDrivers.accordion.carHistory.content'),
        },
        {
            title: t('forDrivers.accordion.allCarsInGarage.title'),
            content: t('forDrivers.accordion.allCarsInGarage.content'),
        },
        {
            title: t('forDrivers.accordion.exclusiveDeals.title'),
            content: t('forDrivers.accordion.exclusiveDeals.content'),
        },
        {
            title: t('forDrivers.accordion.realTimeUpdates.title'),
            content: t('forDrivers.accordion.realTimeUpdates.content'),
        },
    ]

    return (
        <ScrollElement name="ForDrivers">
            <section className={s.hero} data-aos="fade-up" data-aos-duration="700">
                <div className={s.container}>
                    <div className={s.content}>
                        {/* Левая часть — текст + аккордеон */}
                        <div
                            className={s.textAndAccordion}
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="100"
                        >
                            <div className={s.text}>
                                <Typography
                                    variant={'semibold_36'}
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay="150"
                                >
                                    {t('forDrivers.title')}
                                </Typography>

                                <Typography
                                    variant={'regular_18'}
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-delay="250"
                                >
                                    {t('forDrivers.subtitle')}
                                    <br />
                                    <br />
                                    {t('forDrivers.description')}
                                </Typography>
                            </div>

                            <div
                                className={s.accordionContainer}
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="350"
                            >
                                <ShiftAccordion items={accordionItems} />
                            </div>

                            <div
                                className={s.textAndButtons}
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="450"
                            >
                                <Typography variant={'regular_14'}>{t('forDrivers.downloadText')}</Typography>

                                <div className={s.buttons}>
                                    <Button
                                        as="a"
                                        href="https://play.google.com/store/apps/details?id=com.shift.drive.shiftapp"
                                        variant="logo"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Download Shift on Google Play"
                                        data-aos="zoom-in"
                                        data-aos-duration="600"
                                        data-aos-delay="500"
                                    >
                                        <GooglePlay />
                                    </Button>

                                    <Button
                                        as="a"
                                        href="https://apps.apple.com/us/app/shift-book-track-your-car/id6741852587"
                                        variant="logo"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Download Shift on the App Store"
                                        data-aos="zoom-in"
                                        data-aos-duration="600"
                                        data-aos-delay="600"
                                    >
                                        <Appstore width="108" height="29" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Правая часть — мобильные mockups / Garage SVGs */}
                        <div
                            className={s.screenshots}
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <div className={s.garageGroup}>
                                <Garage2
                                    className={s.garage2}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                    data-aos-delay="300"
                                />

                                <Garage1
                                    className={s.garage1}
                                    aria-hidden="true"
                                    focusable="false"
                                    data-aos="zoom-in"
                                    data-aos-duration="600"
                                    data-aos-delay="400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
