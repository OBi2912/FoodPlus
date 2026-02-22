export interface Product {
    id: string;
    name: string;
    name_es: string;
    description: string;
    description_es: string;
    price: number;
    image: string;
    category: string;
}

export const CATEGORIES = [
    "All",
    "Gourmet Burgers",
    "Asian Fusion",
    "Italian Classics",
    "Healthy Bowls",
    "Desserts",
];

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Truffle Wagyu Burger",
        name_es: "Hamburguesa Wagyu con Trufa",
        description: "Premium wagyu beef with black truffle aioli, aged cheddar, and caramelized onions on a brioche bun.",
        description_es: "Carne wagyu premium con alioli de trufa negra, queso cheddar añejo y cebollas caramelizadas en pan brioche.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
        category: "Gourmet Burgers",
    },
    {
        id: "2",
        name: "Spicy Miso Ramen",
        name_es: "Ramen de Miso Picante",
        description: "Rich tonkotsu broth, spicy miso, chashu pork, soft-boiled egg, and handmade noodles.",
        description_es: "Rico caldo tonkotsu, miso picante, cerdo chashu, huevo pasado por agua y fideos hechos a mano.",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=800",
        category: "Asian Fusion",
    },
    {
        id: "3",
        name: "Burrata & Heirloom Salad",
        name_es: "Ensalada de Burrata y Tomate",
        description: "Creamy burrata, heirloom tomatoes, fresh basil, and aged balsamic glaze.",
        description_es: "Burrata cremosa, tomates reliquia, albahaca fresca y glaseado balsámico añejo.",
        price: 15.00,
        category: "Healthy Bowls",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        name: "Wild Mushroom Risotto",
        name_es: "Risotto de Setas Silvestres",
        description: "Arborio rice with a medley of wild mushrooms, parmesan cheese, and truffle oil.",
        description_es: "Arroz arborio con una mezcla de setas silvestres, queso parmesano y aceite de trufa.",
        price: 22.00,
        category: "Italian Classics",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "5",
        name: "Matcha Lava Cake",
        name_es: "Pastel Volcán de Matcha",
        description: "Warm matcha cake with a molten center, served with vanilla bean gelato.",
        description_es: "Pastel de matcha caliente con centro fundido, servido con gelato de vainilla.",
        price: 12.00,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        name: "Blue Cheese & Fig Burger",
        name_es: "Hamburguesa de Queso Azul e Higos",
        description: "Gourmet beef patty topped with creamy gorgonzola, fresh figs, and arugula.",
        description_es: "Medallón de carne gourmet cubierto con gorgonzola cremoso, higos frescos y rúcula.",
        price: 21.00,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
        category: "Gourmet Burgers",
    },
    {
        id: "7",
        name: "Salmon Teriyaki Glaze",
        name_es: "Salmón al Glaseado Teriyaki",
        description: "Wild-caught salmon with house-made teriyaki sauce, served over jasmine rice and bok choy.",
        description_es: "Salmón salvaje con salsa teriyaki casera, servido sobre arroz jazmín y bok choy.",
        price: 26.50,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800",
        category: "Asian Fusion",
    },
    {
        id: "8",
        name: "Truffle Carbonara",
        name_es: "Carbonara de Trufa",
        description: "Handmade fettuccine with guanciale, pecorino romano, egg yolk, and fresh black truffle.",
        description_es: "Fettuccine artesanal con guanciale, pecorino romano, yema de huevo y trufa negra fresca.",
        price: 23.00,
        image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&q=80&w=800",
        category: "Italian Classics",
    },
    {
        id: "9",
        name: "Quinoa Power Bowl",
        name_es: "Bowl de Quinoa Power",
        description: "Roasted sweet potato, kale, avocado, chickpeas, and a tahini lemon dressing.",
        description_es: "Camote asado, kale, aguacate, garbanzos y un aderezo de tahini y limón.",
        price: 16.50,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
        category: "Healthy Bowls",
    },
    {
        id: "10",
        name: "Golden Saffron Cheesecake",
        name_es: "Cheesecake de Azafrán Dorado",
        description: "Creamy cheesecake infused with saffron and cardamom, topped with pistachio crumble.",
        description_es: "Cheesecake cremoso infusionado con azafrán y cardamomo, cubierto con crumble de pistacho.",
        price: 14.00,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
        category: "Desserts",
    },
    {
        id: "11",
        name: "Spicy Avocado Chicken",
        name_es: "Pollo con Aguacate Picante",
        description: "Grilled organic chicken breast, spicy smashed avocado, and pickled red onions.",
        description_es: "Pechuga de pollo orgánica a la parrilla, aguacate picante machacado y cebollas rojas encurtidas.",
        price: 19.50,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
        category: "Gourmet Burgers",
    },
    {
        id: "12",
        name: "Double Pepper Jack Burger",
        name_es: "Hamburguesa Doble Pepper Jack",
        description: "Two wagyu patties, melted pepper jack cheese, jalapeño jam, and crispy onions.",
        description_es: "Dos medallones wagyu, queso pepper jack fundido, mermelada de jalapeño y cebollas crujientes.",
        price: 27.00,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
        category: "Gourmet Burgers",
    },
    {
        id: "13",
        name: "Dragon Roll Sushi",
        name_es: "Dragon Roll Sushi Especial",
        description: "Premium eel, shrimp tempura, cucumber, and topped with thin slices of avocado and eel sauce.",
        description_es: "Anguila premium, camarón tempura, pepino, cubierto con finas láminas de aguacate y salsa de anguila.",
        price: 22.50,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=800",
        category: "Asian Fusion",
    },
    {
        id: "14",
        name: "Lobster Ravioli",
        name_es: "Ravioles de Langosta",
        description: "Delicate pasta filled with North Atlantic lobster and ricotta, served in a creamy saffron sauce.",
        description_es: "Pasta delicada rellena de langosta del Atlántico Norte y ricotta, servida en una salsa cremosa de azafrán.",
        price: 32.00,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800",
        category: "Italian Classics",
    },
    {
        id: "15",
        name: "Mediterranean Halloumi Bowl",
        name_es: "Bowl Mediterráneo de Halloumi",
        description: "Grilled halloumi cheese, cherry tomatoes, kalamata olives, cucumber, and herb-infused farro.",
        description_es: "Queso halloumi a la parrilla, tomates cherry, aceitunas kalamata, pepino y farro infusionado con hierbas.",
        price: 17.50,
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=800",
        category: "Healthy Bowls",
    },
    {
        id: "16",
        name: "Red Velvet Molten Cake",
        name_es: "Volcán de Red Velvet",
        description: "Velvety cocoa cake with a liquid cream cheese center, served with fresh raspberries.",
        description_es: "Pastel de cacao aterciopelado con centro de crema de queso líquido, servido con frambuesas frescas.",
        price: 13.50,
        image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800",
        category: "Desserts",
    },
    {
        id: "17",
        name: "Thai Green Shrimp Curry",
        name_es: "Curry Verde Thai con Camarones",
        description: "Succulent shrimp cooked in a fragrant coconut green curry with bamboo shoots and basil.",
        description_es: "Camarones suculentos cocinados en un fragante curry verde de coco con brotes de bambú y albahaca.",
        price: 24.00,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800",
        category: "Asian Fusion",
    },
    {
        id: "18",
        name: "Traditional Lasagna Bolognese",
        name_es: "Lasaña Boloñesa Tradicional",
        description: "Layers of fresh pasta, slow-cooked prime beef ragu, creamy béchamel, and aged parmigiano.",
        description_es: "Capas de pasta fresca, ragú de carne de res premium cocinado a fuego lento, bechamel cremosa y parmesano añejo.",
        price: 21.50,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800",
        category: "Italian Classics",
    },
    {
        id: "19",
        name: "Ahi Tuna Poke Bowl",
        name_es: "Poke Bowl de Atún Ahi",
        description: "Shoyu-marinated ahi tuna, edamame, seaweed salad, and pickled ginger over sushi rice.",
        description_es: "Atún ahi marinado en shoyu, edamame, ensalada de algas y jengibre encurtido sobre arroz de sushi.",
        price: 20.00,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
        category: "Healthy Bowls",
    },
    {
        id: "20",
        name: "Artisanal Sorbet Trio",
        name_es: "Trío de Sorbetes Artesanales",
        description: "Selection of hand-churned mango, passion fruit, and lime sorbets, garnished with mint.",
        description_es: "Selección de sorbetes artesanales de mango, maracuyá y lima, decorados con menta.",
        price: 11.00,
        image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80&w=800",
        category: "Desserts",
    }
];

export interface Offer {
    id: string;
    title: string;
    title_es: string;
    description: string;
    description_es: string;
    code: string;
    discount: string;
    discount_es: string;
    image: string;
    relatedProductId?: string;
}

export const OFFERS: Offer[] = [
    {
        id: "off-1",
        title: "Sunset Soirée",
        title_es: "Soirée al Atardecer",
        description: "Enjoy 20% off on all Asian Fusion dishes every Tuesday from 6 PM to 9 PM.",
        description_es: "Disfrute de un 20% de descuento en todos los platos de Fusión Asiática todos los martes de 6 PM a 9 PM.",
        code: "SUNSET20",
        discount: "20% OFF",
        discount_es: "20% DTE",
        image: "/images/miso-ramen.png",
        relatedProductId: "2"
    },
    {
        id: "off-2",
        title: "Chef's Signature Selection",
        title_es: "Selección de Firma del Chef",
        description: "Complimentary Matcha Lava Cake with any Gourmet Burger order over $50.",
        description_es: "Pastel Volcán de Matcha de cortesía con cualquier pedido de Hamburguesa Gourmet superior a $50.",
        code: "SWEETDESSERT",
        discount: "FREE DESSERT",
        discount_es: "POSTRE GRATIS",
        image: "/images/matcha-cake.png",
        relatedProductId: "1"
    },
    {
        id: "off-3",
        title: "Weekend Indulgence",
        title_es: "Indulgencia de Fin de Semana",
        description: "Luxury 3-course Italian meal for two including a curated wine pairing.",
        description_es: "Cena italiana de lujo de 3 platos para dos, incluyendo un maridaje de vinos seleccionado.",
        code: "WEEKENDLUXE",
        discount: "$15 OFF",
        discount_es: "$15 DTE",
        image: "/images/mushroom-risotto.png",
        relatedProductId: "4"
    }
];

