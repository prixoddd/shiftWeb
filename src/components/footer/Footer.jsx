import React from 'react'
import s from './Footer.module.scss'
import { ReactComponent as LogoIcon } from '@/assets/icons/logoLarge.svg'
import { ReactComponent as GooglePlay } from '@/assets/icons/googlePlay.svg'
import { ReactComponent as Appstore } from '@/assets/icons/appStore.svg'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as Facebook } from '@/assets/icons/facebookLogo.svg'
import { ReactComponent as Instagram } from '@/assets/icons/instagramLogo.svg'
import { ReactComponent as LinkedIn } from '@/assets/icons/linkedInLogo.svg'
import { useSmoothScroll } from '@/hooks/useSmoothScroll.jsx'

export const Footer = () => {
    const { scrollTo } = useSmoothScroll()

    const handleClick = (target) => {
        let offset = -100

        if (window.innerWidth <= 1439 && window.innerWidth >= 1024) {
            offset = -80
        } else if (window.innerWidth < 1024) {
            offset = -60
        }

        scrollTo(target, offset)
    }
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.logoAndText}>
                        <LogoIcon />
                        <p>© 2022. All rights reserved</p>
                    </div>
                    <div className={s.buttons}>
                        <Button
                            as="a"
                            href="https://play.google.com/store/apps/details?id=com.shift.drive.shiftapp"
                            variant="logo"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Download Shift on Google Play"
                        >
                            <GooglePlay />
                        </Button>
                        <Button
                            as="a"
                            href="https://apps.apple.com/us/app/shift-book-track-your-car/id6741852587"
                            variant="logo"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Download Shift on the App Store"
                        >
                            <Appstore width="108" height="29" />
                        </Button>
                    </div>
                    <nav className={s.firstLinks}>
                        <ul>
                            <li className={s.linksItem}>
                                <a onClick={() => handleClick('ForDrivers')} className={s.linksLink} href="#">
                                    For drivers
                                </a>
                            </li>
                            <li className={s.linksItem}>
                                <a onClick={() => handleClick('ForCompanies')} className={s.linksLink} href="#">
                                    For companies
                                </a>
                            </li>
                            {/*<li className={s.linksItem}>*/}
                            {/*    <a onClick={() => handleClick('ContactUs')} className={s.linksLink} href="#">*/}
                            {/*        Contact us*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                    <nav className={s.secondLinks}>
                        <ul className={s.linksCol}>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="https://shiftapp.ee/terms">
                                    Terms&Conditions
                                </a>
                            </li>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="https://shiftapp.ee/privacy-policy">
                                    Privacy policy
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.socialsContainer}>
                        <p>Find us on socials:</p>
                        <div className={s.socials}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <Facebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <LinkedIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
