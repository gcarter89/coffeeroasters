import styles from './Home.module.scss';

export default function Home() {
    return (
        // to-do adjust the hero spacings between text elements
        <section className={styles.home__hero}>
            <div className={styles.home__heroText}>
                <h1>Great coffee made simple.</h1>
                <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                <button>Create your plan</button>
            </div>
        </section>
    )
}