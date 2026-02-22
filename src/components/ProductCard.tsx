'use client';

import Image from 'next/image';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

import { useLanguage } from '@/context/LanguageContext';

import { useState } from 'react';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [customerName, setCustomerName] = useState('');
    const { addToCart } = useCart();
    const { t, language } = useLanguage();

    const handleAdd = () => {
        addToCart(product, customerName);
        setCustomerName('');
    };

    const categoryMap: { [key: string]: string } = {
        "Gourmet Burgers": t.menu.categories.burgers,
        "Asian Fusion": t.menu.categories.asian,
        "Italian Classics": t.menu.categories.italian,
        "Healthy Bowls": t.menu.categories.healthy,
        "Desserts": t.menu.categories.desserts,
    };

    return (
        <div className={`${styles.card} premium-card`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={language === 'es' ? product.name_es : product.name}
                    width={400}
                    height={300}
                    className={styles.image}
                />
                <div className={styles.category}>{categoryMap[product.category] || product.category}</div>
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{language === 'es' ? product.name_es : product.name}</h3>
                <p className={styles.description}>{language === 'es' ? product.description_es : product.description}</p>
                <div className={styles.footer}>
                    <div className={styles.productActions}>
                        <span className={styles.price}>${product.price.toFixed(2)}</span>
                        <input
                            type="text"
                            placeholder={language === 'es' ? "Nombre..." : "Name..."}
                            className={styles.nameInput}
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>
                    <button
                        className={styles.addBtn}
                        onClick={handleAdd}
                        aria-label="Add to cart"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M5 12h14"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
