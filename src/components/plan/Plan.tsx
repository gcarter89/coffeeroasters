import styles from './Plan.module.scss';
import {ReactComponent as Chevron} from '../../assets/plan/desktop/icon-arrow.svg';

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

            <section className={styles.plan__selection}>
                <div className={styles.plan__selectionCards}>
                    <div className={styles.plan__selectionCard}>
                        <button className={styles.plan__selectionHeader}>
                            <h3>How do you do drink your coffee?</h3>
                            <Chevron />
                        </button>
                        <div className={styles.plan__selectionButtons}>
                            <button className={styles.plan__selectionButton_selected}>
                                <h3>Capsule</h3>
                                <p>Compatible with Nespresso systems and similar brewers</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Filter</h3>
                                <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Espresso</h3>
                                <p>Dense and finely ground beans for an intense, flavorful experience</p>
                            </button>
                        </div>
                    </div>
                    <div className={styles.plan__selectionCard}>
                        <button className={styles.plan__selectionHeader}>
                            <h3>What type of coffee?</h3>
                            <Chevron />
                        </button>
                        <div className={styles.plan__selectionButtons}>
                            <button className={styles.plan__selectionButton_selected}>
                                <h3>Single Origin</h3>
                                <p>Distinct, high quality coffee from a specific family-owned farm</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Decaf</h3>
                                <p>Just like regular coffee, except the caffeine has been removed</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Blended</h3>
                                <p>Combination of two or three dark roasted beans of organic coffees</p>
                            </button>
                        </div>
                    </div>
                    <div className={styles.plan__selectionCard}>
                        <button className={styles.plan__selectionHeader}>
                            <h3>How much would you like?</h3>
                            <Chevron />
                        </button>
                        <div className={styles.plan__selectionButtons}>
                            <button className={styles.plan__selectionButton_selected}>
                                <h3>250g</h3>
                                <p>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>500g</h3>
                                <p>Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>1000g</h3>
                                <p>Perfect for offices and events. Yields about 90 delightful cups.</p>
                            </button>
                        </div>
                    </div>
                    <div className={styles.plan__selectionCard}>
                        <button className={styles.plan__selectionHeader}>
                            <h3>Want us to grind them?</h3>
                            <Chevron />
                        </button>
                        <div className={styles.plan__selectionButtons}>
                            <button className={styles.plan__selectionButton_selected}>
                                <h3>Wholebean</h3>
                                <p>Best choice if you cherish the full sensory experience</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Filter</h3>
                                <p>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Cafetiére</h3>
                                <p>Course ground beans specially suited for french press coffee</p>
                            </button>
                        </div>
                    </div>
                    <div className={styles.plan__selectionCard}>
                        <button className={styles.plan__selectionHeader}>
                            <h3>How often should we deliver?</h3>
                            <Chevron />
                        </button>
                        <div className={styles.plan__selectionButtons}>
                            <button className={styles.plan__selectionButton_selected}>
                                <h3>Every week</h3>
                                <p>Compatible with Nespresso systems and similar brewers</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Every 2 weeks</h3>
                                <p>For pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </button>

                            <button className={styles.plan__selectionButton}>
                                <h3>Every month</h3>
                                <p>Dense and finely ground beans for an intense, flavorful experience</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.plan__summary}>
                <div className={styles.plan__summaryCard}>
                    <h3>Order Summary</h3>
                    <p>“I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent to me <span>Every Week</span>.”</p>
                </div>
                <button className={styles.plan__button}>Create my plan!</button>

            </section>
        </>
    )
}