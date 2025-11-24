import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import s from './Form.module.scss'
import { Button } from '@/components/common/button/Button.jsx'
import { send } from '@emailjs/browser'
import { toast, Toaster } from 'react-hot-toast'
import { FallingLines } from 'react-loader-spinner'
import { useTranslation } from 'react-i18next'

export const ContactForm = () => {
    const { t } = useTranslation()

    const schema = yup.object({
        name: yup.string().required(t('contactUs.form.validation.nameRequired')),
        email: yup
            .string()
            .email(t('contactUs.form.validation.emailInvalid'))
            .required(t('contactUs.form.validation.emailRequired')),
        question: yup
            .string()
            .trim()
            .required(t('contactUs.form.validation.questionRequired'))
            .max(300, t('contactUs.form.validation.questionMaxLength')),
    })

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            toast.loading(t('contactUs.form.sending'))

            await send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.question,
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )

            reset()
            toast.dismiss()
            toast.success(t('contactUs.form.success'))
        } catch (err) {
            toast.dismiss()
            toast.error(t('contactUs.form.error'))
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.contactForm}>
            <Toaster
                position="bottom-left"
                toastOptions={{
                    style: {
                        padding: '16px',
                        width: '320px',
                        fontSize: '18px',
                    },
                    loading: {
                        style: {},
                        icon: (
                            <FallingLines
                                color="#f58e54"
                                width="35"
                                visible={true}
                                ariaLabel="falling-circles-loading"
                            />
                        ),
                    },
                }}
            />

            <div className={s.formGroup} data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                <label htmlFor="contact-name">{t('contactUs.form.name')}</label>
                <input
                    id="contact-name"
                    type="text"
                    placeholder={t('contactUs.form.namePlaceholder')}
                    autoComplete="name"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                />
                {errors.name && <span className={s.error}>{errors.name.message}</span>}
            </div>

            <div className={s.formGroup} data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <label htmlFor="contact-email">{t('contactUs.form.email')}</label>
                <input
                    id="contact-email"
                    type="email"
                    placeholder={t('contactUs.form.emailPlaceholder')}
                    autoComplete="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                />
                {errors.email && <span className={s.error}>{errors.email.message}</span>}
            </div>

            <div className={s.formGroup} data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                <label htmlFor="contact-question">{t('contactUs.form.question')}</label>
                <textarea
                    id="contact-question"
                    rows={4}
                    placeholder={t('contactUs.form.questionPlaceholder')}
                    {...register('question')}
                    aria-invalid={!!errors.question}
                />
                {errors.question && <span className={s.error}>{errors.question.message}</span>}
            </div>

            <div className={s.buttonContainer} data-aos="zoom-in-left" data-aos-duration="600" data-aos-delay="400">
                <Button variant={'primary'} type="submit" disabled={!!errors.question || isSubmitting}>
                    {t('contactUs.form.send')}
                </Button>
            </div>
        </form>
    )
}
