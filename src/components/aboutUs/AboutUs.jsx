'use client'
import React from 'react'
import s from './AboutUs.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as Tag } from '@/assets/icons/tag.svg'
import { Element as ScrollElement } from 'react-scroll'
import { StatCart } from '@/components/common/statCart/StatCart.jsx'

export const AboutUs = () => {
    const base = import.meta.env.BASE_URL
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
                                    <StatCart text={'1500+ users'} />
                                    <StatCart text={'1500+ users'} />
                                    <StatCart text={'1500+ users'} />
                                </div>
                            </div>
                        </div>
                        <div className={s.textAndButton}>
                            <Typography variant={'semibold_38'}>
                                Built by drivers — for everyone who keeps cars moving
                            </Typography>
                            <Typography variant={'regular_16'}>
                                We created Shift to save time, reduce stress, and bring order to car care. No more
                                calls, lost records, or forgotten appointments. Drivers use our mobile app to book
                                services, track their vehicle’s history, and share access with others. Workshops and
                                detailing centers manage bookings, view full service history, and attach photos and
                                invoices — all from one web platform. Whether you're behind the wheel or behind the desk
                                — Shift keeps everything in one place. Shift was born to bring simplicity to car care
                                for everyone involved.
                            </Typography>
                            <Button className={s.button} variant={'secondary'}>
                                <Tag />
                                <Typography variant={'semibold_15'}>Find some special offers</Typography>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
