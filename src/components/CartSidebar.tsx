'use client';

import { useCart } from '@/context/CartContext';
import styles from './CartSidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

import { useLanguage } from '@/context/LanguageContext';

export default function CartSidebar() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();
    const { t, language } = useLanguage();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsCartOpen(false);
        };
        if (isCartOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isCartOpen, setIsCartOpen]);

    if (!isCartOpen) return null;

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsCartOpen(false)}></div>
            <aside className={`${styles.sidebar} glass`}>
                <div className={styles.header}>
                    <h2>{t.cart.title}</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>&times;</button>
                </div>

                <div className={styles.items}>
                    {cart.length === 0 ? (
                        <div className={styles.empty}>
                            <p>{t.cart.empty}</p>
                            <button className="btn-primary" style={{ marginTop: '20px' }} onClick={() => setIsCartOpen(false)}>
                                {t.cart.goShopping}
                            </button>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div key={`${item.id}-${item.customerName || ''}-${index}`} className={styles.item}>
                                <div className={styles.itemImg}>
                                    <Image src={item.image} alt={language === 'es' ? item.name_es : item.name} width={60} height={60} />
                                </div>
                                <div className={styles.itemInfo}>
                                    <h4>{language === 'es' ? item.name_es : item.name}</h4>
                                    {item.customerName && <p className={styles.customerName}>👤 {item.customerName}</p>}
                                    <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                                    <div className={styles.quantity}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.customerName)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.customerName)}>+</button>
                                    </div>
                                </div>
                                <button className={styles.remove} onClick={() => removeFromCart(item.id, item.customerName)}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>{t.cart.subtotal}</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" className="btn-primary" style={{ width: '100%' }} onClick={() => setIsCartOpen(false)}>
                            {t.cart.checkout}
                        </Link>
                    </div>
                )}
            </aside>
        </>
    );
}
