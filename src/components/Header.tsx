'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const { totalItems, setIsCartOpen } = useCart();
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false);
        };
        if (isMenuOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMenuOpen]);

    return (
        <>
            <header className={`${styles.header} glass`}>
                <div className="container">
                    <div className={styles.nav}>
                        <Link href="/" className={styles.logo}>
                            <svg className={styles.brandIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 17H2"></path>
                                <path d="M20 17C20 12.5817 16.4183 9 12 9C7.58172 9 4 12.5817 4 17"></path>
                                <path d="M12 9V7"></path>
                                <circle cx="12" cy="5" r="1.5"></circle>
                            </svg>
                            Food<span>Plus</span>
                        </Link>

                        <nav className={styles.links}>
                            <Link href="/">{t.header.menu}</Link>
                            <Link href="/orders">{t.header.orders}</Link>
                            <Link href="/admin">{t.header.admin}</Link>
                        </nav>

                        <div className={styles.actions}>
                            <button className={styles.cartBtn} onClick={() => setIsCartOpen(true)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                            </button>
                            <button
                                className={styles.mobileMenuBtn}
                                aria-label="Toggle menu"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {isMenuOpen ? (
                                        <g key="close">
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </g>
                                    ) : (
                                        <g key="menu">
                                            <line x1="3" y1="12" x2="21" y2="12"></line>
                                            <line x1="3" y1="6" x2="21" y2="6"></line>
                                            <line x1="3" y1="18" x2="21" y2="18"></line>
                                        </g>
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} glass ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav className={styles.mobileLinks}>
                    <Link href="/" onClick={() => setIsMenuOpen(false)}>{t.header.menu}</Link>
                    <Link href="/orders" onClick={() => setIsMenuOpen(false)}>{t.header.orders}</Link>
                    <Link href="/admin" onClick={() => setIsMenuOpen(false)}>{t.header.admin}</Link>
                </nav>
            </div>
            {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)}></div>}
        </>
    );
}
