import clsx from 'clsx'
import s from './button.module.scss'

/**
 * Универсальная кнопка
 * @param {{
 *   children: React.ReactNode,
 *   type?: 'button' | 'submit' | 'reset',
 *   onClick?: () => void,
 *   className?: string,
 *   variant?: 'primary' | 'secondary' | 'ghost' | 'logo',
 *   disabled?: boolean,
 *   as?: 'button' | 'a',
 *   href?: string,
 *   ariaLabel?: string
 * }} props
 */
export const Button = ({
    children,
    type = 'button',
    onClick,
    className,
    variant = 'primary',
    disabled = false,
    as = 'button',
    href,
    ariaLabel,
    ...rest
}) => {
    const commonProps = {
        className: clsx(className, s.button, s[variant]),
        onClick,
        'aria-label': ariaLabel,
        disabled: as === 'button' ? disabled : undefined,
        ...rest,
    }

    if (as === 'a') {
        return (
            <a href={href} role="button" {...commonProps}>
                {children}
            </a>
        )
    }

    return (
        <button type={type} {...commonProps}>
            {children}
        </button>
    )
}
