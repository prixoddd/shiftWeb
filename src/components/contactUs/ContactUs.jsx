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
                        <Typography variant={'semibold_38'}>Got a question? We’re here</Typography>
                        <Typography variant={'regular_16'}>
                            Whether you’re a driver, a service provider, or just curious about Shift, we’d love to hear
                            from you. Need help, want a demo, or looking to partner with us? Fill out the form and we’ll
                            get back to you shortly.
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
