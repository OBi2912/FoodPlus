'use client';

import Link from 'next/link';
import styles from './Hero.module.css';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        {t.hero.title} <span className="text-gradient">{t.hero.titleAccent}</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {t.hero.subtitle}
                    </p>
                    <div className={styles.cta}>
                        <a href="#menu" className="btn-primary">{t.hero.explore}</a>
                        <Link href="/offers" className={`${styles.secondaryBtn} glass`}>{t.hero.offers}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
