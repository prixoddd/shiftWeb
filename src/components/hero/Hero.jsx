import React from 'react'
import s from '@/components/hero/Hero.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as ArrowDown } from '@/assets/icons/arrowDown.svg'
import { ReactComponent as ArrowUp } from '@/assets/icons/arrowUp.svg'
import { ReactComponent as TireReplace } from '@/assets/icons/tireReplace.svg'
import { ReactComponent as CallRequest } from '@/assets/icons/callRequest.svg'
import { ReactComponent as Body } from '@/assets/icons/body.svg'
import { ReactComponent as BodyColor } from '@/assets/icons/bodyColor.svg'

export const Hero = () => {
    const base = import.meta.env.BASE_URL
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.heroIntro}>
                        <div className={s.textAndButton}>
                            <Typography className={s.title} variant={'semibold_38'}>
                                Shift — one platform for drivers and car care professionals
                            </Typography>
                            <Typography className={s.text} variant={'regular_16'}>
                                Book services. Manage your car. Grow your business. All in one place. Shift connects
                                drivers and automotive businesses in one seamless system. Drivers can easily book
                                services, track their car's history, and get real-time updates. Service providers accept
                                bookings, document work, and keep customers happy — all through our platform.
                            </Typography>
                            <Button className={s.orangeButton} variant={'primary'}>
                                <Typography variant={'semibold_15'}>Try it now</Typography>
                            </Button>
                            <div className={s.arrow}>
                                <Typography variant={'regular_16'}>Lorem Ipsumis simply</Typography>
                                <div className={s.box}>
                                    <ArrowUp />
                                </div>
                            </div>
                            <Button className={s.button} variant={'secondary'}>
                                <Typography variant={'semibold_15'}>Find out more</Typography>
                                <ArrowDown />
                            </Button>
                        </div>
                    </div>
                    <img
                        src={`${base}images/blackBmw@1x.webp`}
                        srcSet={`${base}images/blackBmw@2x.webp 2x`}
                        alt="Black Bmw in a showroom"
                        className={s.image}
                    />
                    <TireReplace className={s.tireReplace} />
                    <CallRequest className={s.callRequest} />
                    <Body className={s.body} />
                    <BodyColor className={s.bodyColor} />
                </div>
            </div>
        </section>
    )
}
