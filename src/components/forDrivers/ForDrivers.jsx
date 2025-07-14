import React from 'react'
import s from './ForDrivers.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ReactComponent as Garage1 } from '@/assets/icons/forDriversGarage1.svg'
import { ReactComponent as Garage2 } from '@/assets/icons/forDriverGarage2.svg'
import { ReactComponent as GooglePlay } from '@/assets/icons/googlePlay.svg'
import { ReactComponent as Appstore } from '@/assets/icons/appStore.svg'
import { ShiftAccordion } from '@/components/accordion/Accordion.jsx'
import { Button } from '@/components/common/button/Button.jsx'

export const ForDrivers = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.textAndAccordion}>
                        <div className={s.text}>
                            <Typography variant={'semibold_36'}>For drivers</Typography>
                            <Typography variant={'regular_18'}>
                                Experience effortless car maintenance with our all-in-one app
                            </Typography>
                        </div>

                        <ShiftAccordion />
                        <div className={s.textAndButtons}>
                            <Typography variant={'regular_14'}>
                                Download Shift today and experience the future of car maintenance!
                            </Typography>
                            <div className={s.buttons}>
                                <Button variant={'logo'}>
                                    <GooglePlay />
                                </Button>
                                <Button variant={'logo'}>
                                    <Appstore />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={s.screenshots}>
                        <Garage1 className={s.garage1} />
                        <Garage2 className={s.garage2} />
                    </div>
                </div>
            </div>
        </section>
    )
}
