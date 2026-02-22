'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/lib/data';

interface CartItem extends Product {
    quantity: number;
    customerName?: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, customerName?: string) => void;
    removeFromCart: (productId: string, customerName?: string) => void;
    updateQuantity: (productId: string, quantity: number, customerName?: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const savedCart = localStorage.getItem('foodplus-cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('foodplus-cart', JSON.stringify(cart));
        }
    }, [cart, isMounted]);

    const addToCart = (product: Product, customerName?: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id && item.customerName === customerName);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.customerName === customerName)
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1, customerName }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string, customerName?: string) => {
        setCart(prev => prev.filter(item => !(item.id === productId && item.customerName === customerName)));
    };

    const updateQuantity = (productId: string, quantity: number, customerName?: string) => {
        if (quantity <= 0) {
            removeFromCart(productId, customerName);
            return;
        }
        setCart(prev => prev.map(item =>
            (item.id === productId && item.customerName === customerName) ? { ...item, quantity } : item
        ));
    };

    const clearCart = () => setCart([]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, clearCart,
            totalItems, totalPrice, isCartOpen, setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
}
