import styles from './Home.module.scss';
import GranEspresso from '../../assets/home/desktop/image-gran-espresso.png';
import Danche from '../../assets/home/desktop/image-danche.png';
import Piccollo from '../../assets/home/desktop/image-piccollo.png';
import Planalto from '../../assets/home/desktop/image-planalto.png';

import {ReactComponent as Bean} from '../../assets/home/desktop/icon-coffee-bean.svg';
import {ReactComponent as Gift} from '../../assets/home/desktop/icon-gift.svg';
import {ReactComponent as Truck} from '../../assets/home/desktop/icon-truck.svg';

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
            
            <section className={styles.home__choices}>
                <div className={styles.home__choicesColourBlock}></div>
                <div className={styles.home__choicesText}>
                    <h3>Why choose us?</h3>
                    <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                </div>

                <div className={styles.home__choicesCards}>
                    <div className={styles.home__choicesCard}>
                        <Bean />
                        <div>
                            <h4>Best quality</h4>
                            <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>

                    <div className={styles.home__choicesCard}>
                        <Gift />
                        <div>
                            <h4>Exclusive benefits</h4>
                            <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>
                    </div>

                    <div className={styles.home__choicesCard}>
                        <Truck />
                        <div>
                            <h4>Free shipping</h4>
                            <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>

                
                
            </section>
        </>
    )
}