import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import s from './LanguageSwitcher.module.scss'
import { Typography } from '@/components/common/typography/Typography.jsx'

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'ru', name: 'RU' },
        { code: 'et', name: 'ET' },
    ]

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

    const changeLanguage = (langCode) => {
        i18n.changeLanguage(langCode)
        localStorage.setItem('language', langCode)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className={s.languageSwitcher} ref={dropdownRef}>
            <button
                className={s.currentLanguage}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Change language"
                aria-expanded={isOpen}
            >
                <Typography variant={'semibold_15'}>{currentLanguage.name}</Typography>
                <span className={`${s.arrow} ${isOpen ? s.open : ''}`}>▼</span>
            </button>
            {isOpen && (
                <div className={s.dropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`${s.languageOption} ${i18n.language === lang.code ? s.active : ''}`}
                            onClick={() => changeLanguage(lang.code)}
                        >
                            <Typography variant={'semibold_15'}>{lang.name}</Typography>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
