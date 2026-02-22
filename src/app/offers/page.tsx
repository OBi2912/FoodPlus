'use client';

import Header from "@/components/Header";
import styles from "./offers.module.css";
import { OFFERS, PRODUCTS } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function OffersPage() {
    const { addToCart } = useCart();
    const { t, language } = useLanguage();

    const handleClaimOffer = (productId?: string) => {
        if (!productId) return;
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            addToCart(product);
        }
    };

    return (
        <main className={styles.offersMain}>
            <Header />
            <div className="container">
                <header className={styles.offersHeader}>
                    <h1 className={styles.title}>{t.offers.title} <span>{t.offers.titleAccent}</span></h1>
                    <p className={styles.subtitle}>{t.offers.subtitle}</p>
                </header>

                <div className={styles.offersGrid}>
                    {OFFERS.map((offer) => (
                        <div key={offer.id} className={`${styles.offerCard} glass`}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={offer.image}
                                    alt={language === 'es' ? offer.title_es : offer.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                <span className={styles.discountBadge}>{language === 'es' ? offer.discount_es : offer.discount}</span>
                            </div>
                            <div className={styles.offerContent}>
                                <h2 className={styles.offerTitle}>{language === 'es' ? offer.title_es : offer.title}</h2>
                                <p className={styles.offerDesc}>{language === 'es' ? offer.description_es : offer.description}</p>
                                <div className={styles.offerFooter}>
                                    <div className={styles.promoCode}>
                                        <span>{t.offers.code}:</span>
                                        <code>{offer.code}</code>
                                    </div>
                                    <button
                                        onClick={() => handleClaimOffer(offer.relatedProductId)}
                                        className="btn-primary"
                                    >
                                        {t.offers.claim}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <section className={styles.disclaimer}>
                    <p>* Terms and conditions apply. Offers cannot be combined with other promotions. Valid for a limited time only.</p>
                </section>
            </div>
        </main>
    );
}
