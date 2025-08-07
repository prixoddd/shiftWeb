import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import s from './Form.module.scss'
import { Button } from '@/components/common/button/Button.jsx'

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    question: yup.string().required('Please enter a question'),
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
            // Пример отправки на сервер:
            // const res = await fetch("/api/contact", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(data),
            // })
            // if (!res.ok) throw new Error('Server error')

            console.log('Submitted:', data)
            reset()
            alert('Message sent!')
        } catch (err) {
            console.error(err)
            alert('Something went wrong. Please try again.')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.contactForm}>
            <div className={s.formGroup}>
                <label>Name</label>
                <input placeholder={'Tom Bennet'} type="text" {...register('name')} />
                {errors.name && <span className={s.error}>{errors.name.message}</span>}
            </div>

            <div className={s.formGroup}>
                <label>Email</label>
                <input placeholder={'someone@gmail.com'} type="email" {...register('email')} />
                {errors.email && <span className={s.error}>{errors.email.message}</span>}
            </div>

            <div className={s.formGroup}>
                <label>Question</label>
                <textarea placeholder={'Your text'} rows={4} {...register('question')} />
                {errors.question && <span className={s.error}>{errors.question.message}</span>}
            </div>

            <div className={s.buttonContainer}>
                <Button variant={'primary'} type="submit" disabled={isSubmitting}>
                    Send
                </Button>
            </div>
        </form>
    )
}
