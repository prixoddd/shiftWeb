import React from 'react'
import s from './AboutUs.module.scss'
import { StatCart } from '@/components/common/statCart/StatCart.jsx'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as Tag } from '@/assets/icons/tag.svg'

export const AboutUs = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.imageAndUsers}>
                        <div className={s.imageWrapper}>
                            <img src="/src/assets/images/whiteDodge.jpg" alt="White Dodge in a showroom" />
                        </div>
                        <div className={s.carts}>
                            <StatCart text={'1500+ users'} />
                            <StatCart text={'1500+ users'} />
                            <StatCart text={'1500+ users'} />
                        </div>
                    </div>
                    <div className={s.textAndButton}>
                        <Typography variant={'semibold_36'}>About us</Typography>
                        <Typography variant={'regular_16'}>
                            AutoCare Pro is designed with the modern driver in mind. We understand that your time is
                            valuable, and maintaining your vehicle shouldn't be a hassle. Our user-friendly interface,
                            comprehensive features, and reliable service providers make car care straightforward and
                            stress-free. With AutoCare Pro, you can focus on enjoying the drive, knowing that your car
                            is in good hands.
                        </Typography>
                        <Button className={s.button} variant={'secondary'}>
                            <Tag />
                            <Typography variant={'semibold_15'}>Find some special offers</Typography>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
