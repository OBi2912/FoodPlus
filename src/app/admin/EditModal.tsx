'use client';

import { useState, useEffect } from 'react';
import styles from './EditModal.module.css';
import { Product } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';

interface EditModalProps {
    product: Product;
    onClose: () => void;
    onSave: (p: Product) => void;
}

export default function EditModal({ product, onClose, onSave }: EditModalProps) {
    const [formData, setFormData] = useState<Product>(product);
    const { t } = useLanguage();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className={styles.overlay}>
            <div className={`${styles.modal} glass`}>
                <div className={styles.header}>
                    <h2>{t.admin.edit}</h2>
                    <button onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label>{t.admin.name} (EN)</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>{t.admin.name} (ES)</label>
                        <input
                            type="text"
                            value={formData.name_es}
                            onChange={e => setFormData({ ...formData, name_es: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>{t.admin.price}</label>
                        <input
                            type="number"
                            value={formData.price}
                            onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Image Upload</label>
                        <div className={styles.imageUploadWrapper}>
                            {formData.image && <img src={formData.image} alt="Preview" className={styles.previewThumb} />}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        const reader = new FileReader();
                                        reader.onloadend = () => {
                                            setFormData({ ...formData, image: reader.result as string });
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label>{t.admin.category}</label>
                        <input
                            type="text"
                            value={formData.category}
                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Description (EN)</label>
                        <textarea
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Description (ES)</label>
                        <textarea
                            value={formData.description_es}
                            onChange={e => setFormData({ ...formData, description_es: e.target.value })}
                        />
                    </div>
                    <div className={styles.actions}>
                        <button type="button" className={styles.cancel} onClick={onClose}>{t.admin.cancel}</button>
                        <button type="submit" className="btn-primary">{t.admin.save}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
