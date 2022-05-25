import styles from './Plan.module.scss';

export default function Plan() {
    return (
        <>
            <section className={styles.plan__hero}>
                <div className={styles.plan__heroText}>
                    <h1>Create a plan</h1>
                    <p>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
                </div>
            </section>

            <section className={styles.plan__steps}>
                <div className={styles.plan__stepsContainer}>
                    <div className={styles.plan__stepsCard}>
                        <span>01</span>
                        <h2>Pick your coffee</h2>
                        <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className={styles.plan__stepsCard}>
                        <span>02</span>
                        <h2>Choose the frequency</h2>
                        <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>


                    </div>
                    <div className={styles.plan__stepsCard}>
                        <span>03</span>
                        <h2>Receive and enjoy!</h2>
                        <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>
            </section>

            <section>

            </section>

            <section>

            </section>
        </>
    )
}