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
                <div className={s.content}>
                    <div className={s.heroIntro}>
                        <div className={s.textAndButton}>
                            <Typography className={s.title} variant={'semibold_38'}>
                                {t('hero.title')}
                            </Typography>
                            <Typography className={s.text} variant={'regular_16'}>
                                {t('hero.description')}
                            </Typography>
                            <Button className={s.orangeButton} variant={'primary'}>
                                <Typography onClick={() => handleClick('ForDrivers')} variant={'semibold_15'}>
                                    {t('hero.tryItNow')}
                                </Typography>
                            </Button>

                            {/*<Button className={s.button} variant={'secondary'}>*/}
                            {/*    <Typography variant={'semibold_15'}>Find out more</Typography>*/}
                            {/*    <ArrowDown />*/}
                            {/*</Button>*/}
                        </div>
                    </div>
                    <div className={s.imageWrapper}>
                        <img
                            src={`${base}images/blackBmw@1x.webp`}
                            srcSet={`${base}images/blackBmw@2x.webp 2x`}
                            alt="Black Bmw in a showroom"
                            className={s.image}
                        />
                        <div className={s.topCardsGroup}>
                            <TireReplace className={s.tireReplace} />
                            <CallRequest className={s.callRequest} />
                        </div>
                        <div className={s.cardsGroup}>
                            <Body className={s.body} />
                            <BodyColor className={s.bodyColor} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
