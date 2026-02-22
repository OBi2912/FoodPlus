'use client';

import Link from "next/link";
import styles from "@/app/page.module.css";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
    const { language, setLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerBrand}>
                        <h2 className={styles.footerLogo}>Food<span>Plus</span></h2>
                        <p>{t.footer.description}</p>
                    </div>
                    <div className={styles.footerLinks}>
                        <div>
                            <h4>{t.footer.discover}</h4>
                            <ul>
                                <li><Link href="/info/our-story">{t.footer.ourStory}</Link></li>
                                <li><Link href="/info/chefs-table">{t.footer.chefsTable}</Link></li>
                                <li><Link href="/info/locations">{t.footer.locations}</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>{t.footer.support}</h4>
                            <ul>
                                <li><Link href="/info/help-center">{t.footer.helpCenter}</Link></li>
                                <li><Link href="/info/contact-us">{t.footer.contactUs}</Link></li>
                                <li><Link href="/info/privacy-policy">{t.footer.privacy}</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        &copy; 2026 FoodPlus. {t.footer.rights}
                    </div>
                    <div className={styles.controls}>
                        <div className={styles.themeToggle}>
                            <button
                                className={styles.themeBtn}
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className={styles.languageSwitch}>
                            <button
                                className={`${styles.langBtn} ${language === 'en' ? styles.activeLang : ''}`}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                            <span className={styles.separator}>|</span>
                            <button
                                className={`${styles.langBtn} ${language === 'es' ? styles.activeLang : ''}`}
                                onClick={() => setLanguage('es')}
                            >
                                ES
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
