import React from 'react'
import s from './ForCompanies.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ShiftAccordion } from '@/components/accordion/Accordion.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { Element as ScrollElement } from 'react-scroll'

const accordionItems = [
    {
        title: 'Customer management ',
        content: 'Easily manage profiles, track service history, and view preferences — all in one dashboard.',
    },
    {
        title: 'Appointment scheduling ',
        content: 'Accept bookings online, reduce no-shows, and optimize your schedule with calendar view.',
    },
    {
        title: 'Service management',
        content: 'Maintain a comprehensive service history for each vehicle, including attached photos and invoices.',
    },
    {
        title: 'Marketing tools',
        content: 'Highlight seasonal offers, promote services, and stay in touch with loyal clients.',
    },
]

export const ForCompanies = () => {
    return (
        <ScrollElement name="ForCompanies">
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={s.screenshots}>
                            <div className={s.dealsImageWrapper}>
                                <img
                                    src="/src/assets/images/deals@1x.webp"
                                    srcSet="/src/assets/images/deals@2x.webp 2x"
                                    alt="App interface showing active car maintenance deals"
                                    width="622"
                                    height="358"
                                    className={s.deals}
                                />
                            </div>
                            <div className={s.listImageWrapper}>
                                <img
                                    src="/src/assets/images/list@1x.webp"
                                    srcSet="/src/assets/images/list@2x.webp 2x"
                                    alt="App interface showing client's active service bookings"
                                    width="622"
                                    height="357"
                                    className={s.list}
                                />
                            </div>
                        </div>
                        <div className={s.textAndAccordion}>
                            <div className={s.text}>
                                <Typography variant={'semibold_36'}>For companies</Typography>
                                <Typography variant={'regular_18'}>
                                    Our web platform gives car care businesses everything they need to grow. Accept
                                    online bookings, manage vehicle history, and build stronger customer relationships —
                                    all in one place.
                                </Typography>
                            </div>

                            <ShiftAccordion items={accordionItems} />
                            <div className={s.textAndButtons}>
                                <Typography variant={'regular_14'}>
                                    Partner with Shift and grow your business with smart, simple tools.
                                </Typography>
                                <div className={s.buttons}>
                                    <Button variant={'logo'}>Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
