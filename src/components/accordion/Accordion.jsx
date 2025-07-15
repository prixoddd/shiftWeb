import * as React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import styles from './Accordion.module.scss'
import { ReactComponent as ArrowDownRight } from '@/assets/icons/arrowDownRight.svg'
import { ReactComponent as Cross } from '@/assets/icons/cross.svg'

export const ShiftAccordion = ({ items }) => (
    <Accordion.Root className={styles.Root} type="single" defaultValue="item-1" collapsible>
        {items.map((item, index) => (
            <Accordion.Item className={styles.Item} value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
            </Accordion.Item>
        ))}
    </Accordion.Root>
)

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className={styles.Header}>
        <Accordion.Trigger className={classNames(styles.Trigger, className)} {...props} ref={forwardedRef}>
            <span className={styles.Dot}>{children}</span>
            <span className={styles.ChevronBox}>
                <ArrowDownRight className={classNames(styles.Chevron, styles.Icon, styles.IconClosed)} aria-hidden />
                <Cross className={classNames(styles.Chevron, styles.Icon, styles.IconOpen)} aria-hidden />
            </span>
        </Accordion.Trigger>
    </Accordion.Header>
))

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content className={classNames(styles.Content, className)} {...props} ref={forwardedRef}>
        <div className={styles.ContentText}>{children}</div>
    </Accordion.Content>
))
