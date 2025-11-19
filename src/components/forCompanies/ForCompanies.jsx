import React from 'react'
import s from './ForCompanies.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ShiftAccordion } from '@/components/accordion/Accordion.jsx'
import { Button } from '@/components/common/button/Button.jsx'
import { Element as ScrollElement } from 'react-scroll'
import { useTranslation } from 'react-i18next'

export const ForCompanies = () => {
    const { t } = useTranslation()
    const accordionItems = [
        {
            title: t('forCompanies.accordion.customerManagement.title'),
            content: t('forCompanies.accordion.customerManagement.content'),
        },
        {
            title: t('forCompanies.accordion.appointmentScheduling.title'),
            content: t('forCompanies.accordion.appointmentScheduling.content'),
        },
        {
            title: t('forCompanies.accordion.serviceManagement.title'),
            content: t('forCompanies.accordion.serviceManagement.content'),
        },
        {
            title: t('forCompanies.accordion.marketingTools.title'),
            content: t('forCompanies.accordion.marketingTools.content'),
        },
    ]

    const base = import.meta.env.BASE_URL
    return (
        <ScrollElement name="ForCompanies">
            <section className={s.hero}>
                <div className={s.container}>
                    <div className={s.content}>
                        <div className={`${s.screenshotsDesktop} ${s.screenshots} `}>
                            <div className={s.dealsImageWrapper}>
                                <img
                                    loading="lazy"
                                    src={`${base}images/deals@1x.webp`}
                                    srcSet={`${base}images/deals@2x.webp 2x`}
                                    alt="App interface showing active car maintenance deals"
                                    className={s.deals}
                                />
                            </div>
                            <div className={s.listImageWrapper}>
                                <img
                                    loading="lazy"
                                    src={`${base}images/list@1x.webp`}
                                    srcSet={`${base}images/list@2x.webp 2x`}
                                    alt="App interface showing client's active service bookings"
                                    className={s.list}
                                />
                            </div>
                        </div>
                        <div className={`${s.screenshotsMobile} ${s.screenshots} `}>
                            <div className={s.dealsImageWrapper}>
                                <img
                                    loading="lazy"
                                    src={`${base}images/deals@2x.webp`}
                                    alt="App interface showing active car maintenance deals"
                                    className={s.deals}
                                />
                            </div>
                            <div className={s.listImageWrapper}>
                                <img
                                    loading="lazy"
                                    src={`${base}images/list@2x.webp`}
                                    alt="App interface showing client's active service bookings"
                                    className={s.list}
                                />
                            </div>
                        </div>
                        <div className={s.textAndAccordion}>
                            <div className={s.text}>
                                <Typography variant={'semibold_36'}>{t('forCompanies.title')}</Typography>
                                <Typography variant={'regular_18'}>{t('forCompanies.description')}</Typography>
                            </div>

                            <ShiftAccordion items={accordionItems} />
                            <div className={s.textAndButtons}>
                                <Typography variant={'regular_14'}>{t('forCompanies.registerText')}</Typography>
                                <div className={s.buttons}>
                                    <Button
                                        as="a"
                                        href="https://shiftapp.ee/signup"
                                        variant="logo"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        {t('forCompanies.register')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollElement>
    )
}
