import React from 'react'
import s from './ContactUs.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'
import { ContactForm } from '@/components/common/form/Form.jsx'

const ContactUs = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.textAndTitle}>
                        <Typography variant={'semibold_36'}>Contact us</Typography>
                        <Typography variant={'regular_16'}>
                            We’re here to help! If you have any questions, need support, or want to learn more about how
                            Shift can benefit you, please get in touch with us
                        </Typography>
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
