import styles from './Home.module.scss';
import GranEspresso from '../../assets/home/desktop/image-gran-espresso.png';
import Danche from '../../assets/home/desktop/image-danche.png';
import Piccollo from '../../assets/home/desktop/image-piccollo.png';
import Planalto from '../../assets/home/desktop/image-planalto.png';

export default function Home() {
    return (
        <>
            <section className={styles.home__hero}>
                <div className={styles.home__heroText}>
                    <h1>Great coffee made simple.</h1>
                    <p>Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <button>Create your plan</button>
                </div>
            </section>
            <section className={styles.home__collection}>
                <div className={styles.home__collectionTitle}>
                    <h1>our collection</h1>
                </div>

                <div className={styles.home__collectionCard}>
                    <img src={GranEspresso} alt="Gran Espresso coffee beans" />
                    <div className={styles.home__collectionCardText}>
                        <h4>Gran Espresso</h4>
                        <p>Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                </div>

                <div className={styles.home__collectionCard}>
                    <img src={Planalto} alt="Planalto coffee beans" />
                    <div className={styles.home__collectionCardText}>
                        <h4>Planalto</h4>
                        <p>Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                </div>

                <div className={styles.home__collectionCard}>
                    <img src={Piccollo} alt="Piccollo coffee beans" />
                    <div className={styles.home__collectionCardText}>
                        <h4>Piccollo</h4>
                        <p>Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </div>

                <div className={styles.home__collectionCard}>
                    <img src={Danche} alt="Danche coffee beans" />
                    <div className={styles.home__collectionCardText}>
                        <h4>Danche</h4>
                        <p>Ethiopian hand-harvested lend densely packed with vibrant fruit notes</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}