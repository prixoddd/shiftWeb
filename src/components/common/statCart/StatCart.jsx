import React from 'react'
import s from './StatCart.module.scss'
import { ReactComponent as Avatar } from '@/assets/icons/avatar.svg'

export const StatCart = ({ text }) => {
    return (
        <div className={s.container}>
            <div className={s.avatar}>
                <Avatar />
            </div>

            <div className={s.textContainer}>
                <h3>{text}</h3>
            </div>
        </div>
    )
}
