import Header from "@/components/Header";
import styles from "./info.module.css";
import Link from "next/link";

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const contentMap: Record<string, { title: string, description: string, details: string }> = {
        "our-story": {
            title: "Our Story",
            description: "A legacy of flavor and passion for the culinary arts.",
            details: "Founded in 2024, FoodPlus began with a simple mission: to bring the world's most exquisite flavors to the comfort of your home. Our team of Michelin-starred chefs works tirelessly to craft menus that celebrate seasonal ingredients and innovative techniques."
        },
        "chefs-table": {
            title: "Chef's Table",
            description: "Meet the visionaries behind your favorite dishes.",
            details: "Our Executive Chefs bring decades of international experience from London, Tokyo, and Paris. Every dish at FoodPlus is a testament to their dedication to perfection and their passion for creating unforgettable dining experiences."
        },
        "locations": {
            title: "Our Locations",
            description: "Find a FoodPlus kitchen near you.",
            details: "We currently operate premium distribution kitchens in Downtown, Westside, and the Marina District. Each location is equipped with state-of-the-art culinary technology to ensure your meal arrives as fresh as if it had just left the pan."
        },
        "help-center": {
            title: "Help Center",
            description: "How can we assist you today?",
            details: "Our support team is available 24/7. Whether you have questions about an order, nutritional information, or special dietary requirements, we are here to help. Contact us via chat or email for immediate assistance."
        },
        "contact-us": {
            title: "Contact Us",
            description: "Get in touch with the FoodPlus team.",
            details: "E: concierge@foodplus.com | P: +1 (555) 987-6543 | A: 123 Gourmet Way, Culinary City. For media inquiries, please contact press@foodplus.com."
        },
        "privacy-policy": {
            title: "Privacy Policy",
            description: "Your data is handled with the utmost care.",
            details: "At FoodPlus, we respect your privacy. We use industry-standard encryption to protect your personal information and payment details. We will never sell your data to third parties. For a full detailed legal disclosure, please contact our legal department."
        }
    };

    const content = contentMap[slug] || {
        title: "Information",
        description: "Discover more about FoodPlus.",
        details: "This section is currently being updated with new and exciting information."
    };

    return (
        <main className={styles.infoMain}>
            <Header />
            <div className="container">
                <div className={styles.heroSection}>
                    <div className={`${styles.glassCard} glass`}>
                        <span className={styles.tag}>Information</span>
                        <h1 className={styles.title}>{content.title}</h1>
                        <p className={styles.description}>{content.description}</p>
                    </div>
                </div>

                <section className={styles.detailsSection}>
                    <div className={styles.textBlock}>
                        <p>{content.details}</p>
                        <Link href="/" className="btn-primary" style={{ marginTop: '40px' }}>
                            Return to Menu
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
