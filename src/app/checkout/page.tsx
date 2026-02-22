'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import styles from './checkout.module.css';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart();
    const { t, language } = useLanguage();
    const [isOrdered, setIsOrdered] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsOrdered(true);
            clearCart();
        }, 2000);
    };

    if (isOrdered) {
        return (
            <main className={styles.checkoutMain}>
                <Header />
                <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                    <div className={`${styles.successCard} glass`}>
                        <div className={styles.successIcon}>✓</div>
                        <h1>{t.checkout.success}</h1>
                        <p>{t.checkout.successMsg}</p>
                        <Link href="/" className="btn-primary" style={{ marginTop: '30px' }}>
                            {t.checkout.returnHome}
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    if (cart.length === 0) {
        return (
            <main className={styles.checkoutMain}>
                <Header />
                <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                    <h1>{t.cart.empty}</h1>
                    <Link href="/" className="btn-primary" style={{ marginTop: '30px' }}>
                        {t.cart.goShopping}
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.checkoutMain}>
            <Header />
            <div className="container" style={{ paddingTop: '120px' }}>
                <h1 className={styles.title}>{t.checkout.title} <span>{t.checkout.titleAccent}</span></h1>

                <div className={styles.layout}>
                    <form className={`${styles.form} glass`} onSubmit={handleSubmit}>
                        <section className={styles.formSection}>
                            <h3>{t.checkout.delivery}</h3>
                            <div className={styles.grid}>
                                <input type="text" placeholder={t.checkout.name} required />
                                <input type="email" placeholder="Email" required />
                                <input type="text" placeholder={t.checkout.address} className={styles.fullWidth} required />
                                <input type="text" placeholder={t.checkout.city} required />
                                <input type="text" placeholder="Zip" required />
                            </div>
                        </section>

                        <section className={styles.formSection}>
                            <h3>{t.checkout.payment}</h3>
                            <div className={styles.cardInput}>
                                <input type="text" placeholder={t.checkout.cardNumber} maxLength={16} required />
                                <div className={styles.cardRow}>
                                    <input type="text" placeholder={t.checkout.expiry} maxLength={5} required />
                                    <input type="text" placeholder={t.checkout.cvv} maxLength={3} required />
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%' }}>
                            {loading ? '...' : `${t.checkout.placeOrder} ($${totalPrice.toFixed(2)})`}
                        </button>
                    </form>

                    <aside className={`${styles.summary} glass`}>
                        <h3>{t.checkout.summary}</h3>
                        <div className={styles.summaryItems}>
                            {cart.map((item, idx) => (
                                <div key={`${item.id}-${idx}`} className={styles.summaryItem}>
                                    <div>
                                        <span>{item.quantity}x {language === 'es' ? item.name_es : item.name}</span>
                                        {item.customerName && <p style={{ fontSize: '12px', opacity: 0.7, color: 'var(--primary)', marginTop: '2px' }}>👤 {item.customerName}</p>}
                                    </div>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className={styles.totalRow}>
                            <span>{t.cart.subtotal}</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
