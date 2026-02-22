'use client';

import { useState } from 'react';
import Header from "@/components/Header";
import { PRODUCTS as initialProducts, Product } from "@/lib/data";
import styles from "./admin.module.css";
import EditModal from "./EditModal";
import { useLanguage } from "@/context/LanguageContext";

import { useProducts } from "@/context/ProductContext";

export default function AdminPage() {
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [isAdding, setIsAdding] = useState(false);
    const { t, language } = useLanguage();

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsAdding(false);
    };

    const handleAdd = () => {
        const newProduct: Product = {
            id: Date.now().toString(),
            name: '',
            name_es: '',
            description: '',
            description_es: '',
            price: 0,
            image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
            category: 'Gourmet Burgers'
        };
        setEditingProduct(newProduct);
        setIsAdding(true);
    };

    const handleSave = (updatedProduct: Product) => {
        if (isAdding) {
            addProduct(updatedProduct);
        } else {
            updateProduct(updatedProduct);
        }
        setEditingProduct(null);
        setIsAdding(false);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this exquisite item?')) {
            deleteProduct(id);
        }
    };

    return (
        <main className={styles.adminMain}>
            <Header />
            <div className="container" style={{ paddingTop: '120px' }}>
                <div className={styles.adminHeader}>
                    <h1>{t.admin.title} <span>{t.admin.titleAccent}</span></h1>
                    <button className="btn-primary" onClick={handleAdd}>{t.admin.add}</button>
                </div>

                <div className={`${styles.tableWrapper} glass`}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>{t.admin.name}</th>
                                <th>{t.admin.category}</th>
                                <th>{t.admin.price}</th>
                                <th>{t.admin.actions}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <div className={styles.productInfo}>
                                            <img src={product.image} alt="" className={styles.productThumb} />
                                            <div>
                                                <strong>{language === 'es' ? product.name_es : product.name}</strong>
                                                <p className={styles.smallDesc}>
                                                    {((language === 'es' ? product.description_es : product.description) || '').substring(0, 40)}...
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <div className={styles.actionBtns}>
                                            <button className={styles.editBtn} onClick={() => handleEdit(product)}>{t.admin.edit}</button>
                                            <button className={styles.deleteBtn} onClick={() => handleDelete(product.id)}>{t.admin.delete}</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {editingProduct && (
                <EditModal
                    product={editingProduct}
                    onClose={() => {
                        setEditingProduct(null);
                        setIsAdding(false);
                    }}
                    onSave={handleSave}
                />
            )}
        </main>
    );
}
