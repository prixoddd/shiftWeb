import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import s from './Form.module.scss'
import { Button } from '@/components/common/button/Button.jsx'
import { send } from '@emailjs/browser'

import { toast, Toaster } from 'react-hot-toast'
import { FallingLines } from 'react-loader-spinner'

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    question: yup.string().trim().required('Please enter a question').max(300, 'Max 300 characters'),
})

export const ContactForm = () => {
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
            toast.loading('Sending message...')

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
            toast.success('Message sent!')
        } catch (err) {
            toast.dismiss()
            toast.error('Something went wrong. Please try again.')

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
                        style: {
                            // border: '1px solid #f58e54',
                        },
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

            <div className={s.formGroup}>
                <label htmlFor="contact-name">Name</label>
                <input
                    id="contact-name"
                    type="text"
                    placeholder="Tom Bennet"
                    autoComplete="name"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                />
                {errors.name && <span className={s.error}>{errors.name.message}</span>}
            </div>

            <div className={s.formGroup}>
                <label htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    type="email"
                    placeholder="someone@gmail.com"
                    autoComplete="email"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                />
                {errors.email && <span className={s.error}>{errors.email.message}</span>}
            </div>

            <div className={s.formGroup}>
                <label htmlFor="contact-question">Question</label>
                <textarea
                    id="contact-question"
                    rows={4}
                    placeholder="Your text"
                    {...register('question')}
                    aria-invalid={!!errors.question}
                />
                {errors.question && <span className={s.error}>{errors.question.message}</span>}
            </div>

            <div className={s.buttonContainer}>
                <Button variant={'primary'} type="submit" disabled={!!errors.question || isSubmitting}>
                    Send
                </Button>
            </div>
        </form>
    )
}
