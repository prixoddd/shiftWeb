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

const accordionItems = [
    {
        title: 'Appointment scheduling',
        content:
            'Book appointments with your preferred service center directly through the app. Enjoy the convenience of selecting dates, times, and specific services with just a few taps.',
    },
    {
        title: 'Your car history',
        content:
            'Keep a detailed history of every service, inspection, and repair. Everything stays connected to your car automatically.',
    },
    {
        title: 'All cars in one garage',
        content: 'Manage multiple vehicles in one place. Perfect for families or small business fleets.',
    },
    {
        title: 'Exclusive partner deals',
        content: 'Access special offers and discounts from trusted service providers right inside the app.',
    },
    {
        title: 'Real-time service updates',
        content:
            'Get instant notifications when your car is taken in and when it’s ready for pickup. Stay informed without the need for calls.',
    },
]

export const ForDrivers = () => {
    return (
        <ScrollElement name="ForDrivers">
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={s.textAndAccordion}>
                            <div className={s.text}>
                                <Typography variant={'semibold_36'}>For drivers</Typography>
                                <Typography variant={'regular_18'}>
                                    Built by drivers — for drivers <br />
                                    <br /> No more calling workshops or keeping paper service records.
                                </Typography>
                            </div>

                            <ShiftAccordion items={accordionItems} />
                            <div className={s.textAndButtons}>
                                <Typography variant={'regular_14'}>
                                    Download Shift today and experience the future of car maintenance!
                                </Typography>
                                <div className={s.buttons}>
                                    <Button
                                        as="a"
                                        href="https://play.google.com/store/apps/details?id=com.shift.drive.shiftapp"
                                        variant="logo"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Download Shift on Google Play"
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
                                    >
                                        <Appstore width="108" height="29" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={s.screenshots}>
                            <div className={s.garageGroup}>
                                <Garage2 className={s.garage2} aria-hidden="true" focusable="false" />
                                <Garage1 className={s.garage1} aria-hidden="true" focusable="false" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
