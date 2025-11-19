import React from 'react'
import s from './ContactUs.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ContactForm } from '@/components/common/form/Form.jsx'
import { useTranslation } from 'react-i18next'

const ContactUs = () => {
    const { t } = useTranslation()
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.textAndTitle}>
                        <Typography variant={'semibold_38'}>{t('contactUs.title')}</Typography>
                        <Typography variant={'regular_16'}>{t('contactUs.description')}</Typography>
                    </div>
                    <div className={s.form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs
