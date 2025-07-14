import * as React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import styles from './Accordion.module.scss'
import { ReactComponent as ArrowDownRight } from '@/assets/icons/arrowDownRight.svg'
import { ReactComponent as Cross } from '@/assets/icons/cross.svg'

export const ShiftAccordion = () => (
    <Accordion.Root className={styles.Root} type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className={styles.Item} value="item-1">
            <AccordionTrigger>Appointment scheduling</AccordionTrigger>
            <AccordionContent>
                Book appointments with your preferred service center directly through the app. Enjoy the convenience of
                selecting dates, times, and specific services with just a few taps.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className={styles.Item} value="item-2">
            <AccordionTrigger>Your car history</AccordionTrigger>
            <AccordionContent>
                Keep a detailed history of every service, inspection, and repair. Everything stays connected to your car
                automatically.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className={styles.Item} value="item-3">
            <AccordionTrigger>All cars in one garage</AccordionTrigger>
            <AccordionContent>
                Manage multiple vehicles in one place. Perfect for families or small business fleets.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className={styles.Item} value="item-4">
            <AccordionTrigger>Exclusive partner deals</AccordionTrigger>
            <AccordionContent>
                Access special offers and discounts from trusted service providers right inside the app.{' '}
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className={styles.Item} value="item-5">
            <AccordionTrigger>Real-time service updates</AccordionTrigger>
            <AccordionContent>
                Get instant notifications when your car is taken in and when it’s ready for pickup. Stay informed
                without the need for calls.{' '}
            </AccordionContent>
        </Accordion.Item>
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
