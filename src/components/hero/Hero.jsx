import React from 'react'
import s from '@/components/hero/Hero.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as TireReplace } from '@/assets/icons/tireReplace.svg'
import { ReactComponent as CallRequest } from '@/assets/icons/callRequest.svg'
import { ReactComponent as Body } from '@/assets/icons/body.svg'
import { ReactComponent as BodyColor } from '@/assets/icons/bodyColor.svg'
import { useSmoothScroll } from '@/hooks/useSmoothScroll.jsx'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
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

    const base = import.meta.env.BASE_URL

    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content} data-aos="fade-up" data-aos-duration="700">
                    <div className={s.heroIntro} data-aos="fade-right" data-aos-duration="800" data-aos-delay="50">
                        <div className={s.textAndButton}>
                            <Typography
                                className={s.title}
                                variant={'semibold_38'}
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="100"
                            >
                                {t('hero.title')}
                            </Typography>

                            <Typography
                                className={s.text}
                                variant={'regular_16'}
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                {t('hero.description')}
                            </Typography>

                            <div
                                className={s.buttonWrapper}
                                data-aos="zoom-in"
                                data-aos-duration="700"
                                data-aos-delay="300"
                            >
                                <Button
                                    className={s.orangeButton}
                                    variant={'primary'}
                                    onClick={() => handleClick('ForDrivers')}
                                >
                                    <Typography variant={'semibold_15'}>{t('hero.tryItNow')}</Typography>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={s.imageWrapper} data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
                        <img
                            src={`${base}images/blackBmw@1x.webp`}
                            srcSet={`${base}images/blackBmw@2x.webp 2x`}
                            alt="Black Bmw in a showroom"
                            className={s.image}
                        />

                        <div className={s.topCardsGroup}>
                            <div className={s.card} data-aos="zoom-in" data-aos-duration="600" data-aos-delay="250">
                                <TireReplace className={s.tireReplace} />
                            </div>
                            <div className={s.card} data-aos="zoom-in" data-aos-duration="600" data-aos-delay="350">
                                <CallRequest className={s.callRequest} />
                            </div>
                        </div>

                        <div className={s.cardsGroup}>
                            <div className={s.card} data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="400">
                                <Body className={s.body} />
                            </div>
                            <div className={s.card} data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="500">
                                <BodyColor className={s.bodyColor} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
