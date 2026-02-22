'use client';

import Header from "@/components/Header";
import styles from "./orders.module.css";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function OrdersPage() {
    const { t } = useLanguage();

    return (
        <main className={styles.ordersMain}>
            <Header />
            <div className="container" style={{ paddingTop: '150px' }}>
                <h1 className={styles.title}>{t.orders.title} <span>{t.orders.titleAccent}</span></h1>

                <div className={`${styles.emptyState} glass`}>
                    <div className={styles.icon}>🥡</div>
                    <h2>{t.orders.empty}</h2>
                    <p>{t.orders.desc}</p>
                    <Link href="/" className="btn-primary" style={{ marginTop: '30px' }}>
                        {t.orders.start}
                    </Link>
                </div>
            </div>
        </main>
    );
}
