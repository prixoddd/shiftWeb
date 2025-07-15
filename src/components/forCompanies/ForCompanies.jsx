import React from 'react'
import s from './ForCompanies.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ShiftAccordion } from '@/components/accordion/Accordion.jsx'
import { Button } from '@/components/common/button/Button.jsx'

export const ForCompanies = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.screenshots}>
                        <div className={s.dealsImageWrapper}>
                            <img
                                src="/src/assets/images/deals@1x.webp"
                                srcSet="/src/assets/images/deals@2x.webp"
                                alt="App interface showing active car maintenance deals"
                                width="622"
                                height="358"
                                className={s.deals}
                            />
                        </div>
                        <div className={s.listImageWrapper}>
                            <img
                                src="/src/assets/images/list@1x.webp"
                                srcSet="/src/assets/images/list@2x.webp"
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
                                Our app connects you with a wider customer base, simplifies appointment scheduling, and
                                enhances customer engagement{' '}
                            </Typography>
                        </div>

                        <ShiftAccordion />
                        <div className={s.textAndButtons}>
                            <Typography variant={'regular_14'}>
                                Partner with AutoCare Pro today and drive your business forward!
                            </Typography>
                            <div className={s.buttons}>
                                <Button variant={'logo'}>Register</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
