import React from 'react'
import s from './Footer.module.scss'
import { ReactComponent as LogoIcon } from '@/assets/icons/logoLarge.svg'
import { ReactComponent as GooglePlay } from '@/assets/icons/googlePlay.svg'
import { ReactComponent as Appstore } from '@/assets/icons/appStore.svg'
import { Button } from '@/components/common/button/Button.jsx'
import { ReactComponent as Facebook } from '@/assets/icons/facebookLogo.svg'
import { ReactComponent as Instagram } from '@/assets/icons/instagramLogo.svg'
import { ReactComponent as LinkedIn } from '@/assets/icons/linkedInLogo.svg'

export const Footer = () => {
    return (
        <section className={s.hero}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.logoAndButtonsContainer}>
                        <div className={s.logoAndText}>
                            <LogoIcon />
                            <p>© 2022. All rights reserved</p>
                        </div>
                        <div className={s.buttons}>
                            <Button variant={'logo'}>
                                <GooglePlay />
                            </Button>
                            <Button variant={'logo'}>
                                <Appstore />
                            </Button>
                        </div>
                    </div>
                    <nav className={s.links}>
                        <ul className={s.linksCol}>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="#">
                                    For users
                                </a>
                            </li>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="#">
                                    For companies
                                </a>
                            </li>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>

                        <ul className={s.linksCol}>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="#">
                                    Terms&Conditions
                                </a>
                            </li>
                            <li className={s.linksItem}>
                                <a className={s.linksLink} href="#">
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
