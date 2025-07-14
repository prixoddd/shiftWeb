import clsx from 'clsx'
import s from './typography.module.scss'

const typographyVariants = [
    'regular_12',
    'regular_14',
    'regular_16',
    'regular_18',
    'medium_14_21',
    'medium_14_140',
    'medium_18',
    'semibold_15',
    'semibold_18',
    'semibold_38',
    'semibold_36',
]

/**
 * @typedef {'regular_12' | 'regular_14' | 'regular_16' | 'regular_18' |
 *           'medium_14_21' | 'medium_14_140' | 'medium_18' |
 *           'semibold_15' | 'semibold_18' | 'semibold_38' | 'semibold_36'} TypographyVariant
 */

/**
 * @param {{
 *   as?: string,
 *   className?: string,
 *   variant?: TypographyVariant,
 *   children: React.ReactNode
 * }} props
 */
export const Typography = ({ as, children, className, variant = 'regular_16', ...restProps }) => {
    const safeVariant = typographyVariants.includes(variant) ? variant : 'regular_16'

    const Component = getComponent(safeVariant, as)

    return (
        <Component className={clsx(s.typography, s[safeVariant], className)} {...restProps}>
            {children}
        </Component>
    )
}

const getComponent = (variant, as) => {
    if (as) return as

    switch (variant) {
        case 'semibold_38':
            return 'h1'
        case 'semibold_18':
        case 'medium_18':
        case 'regular_18':
            return 'h2'
        case 'regular_16':
        case 'regular_14':
            return 'p'
        default:
            return 'span'
    }
}
