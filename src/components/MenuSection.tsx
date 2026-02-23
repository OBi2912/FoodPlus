'use client';

import { useState, useEffect } from 'react';
import { CATEGORIES } from '@/lib/data';
import ProductCard from './ProductCard';
import styles from './MenuSection.module.css';
import { useLanguage } from '@/context/LanguageContext';
import { useProducts } from '@/context/ProductContext';

export default function MenuSection() {
    const { products } = useProducts();
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useLanguage();

    const categoryMap: { [key: string]: string } = {
        "All": t.menu.categories.all,
        "Gourmet Burgers": t.menu.categories.burgers,
        "Asian Fusion": t.menu.categories.asian,
        "Italian Classics": t.menu.categories.italian,
        "Healthy Bowls": t.menu.categories.healthy,
        "Desserts": t.menu.categories.desserts,
    };

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
        const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
    });

    return (
        <section id="menu" className={styles.menu}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.menu.title} <span>{t.menu.titleAccent}</span></h2>
                    <input
                        type="text"
                        placeholder={t.menu.searchPlaceholder}
                        className={styles.searchInput}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className={styles.categories}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                className={`${styles.catBtn} ${activeCategory === cat ? styles.active : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {categoryMap[cat]}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
