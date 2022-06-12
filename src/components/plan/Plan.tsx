import styles from './Plan.module.scss';
import { useState } from 'react';
import SelectionCard from './SelectionCard';

export default function Plan() {

    const [intersectedListItem, setIntersectedListItem] = useState(0);

    const [orderArray, setOrderArray] = useState(
        [
            'Capsule',
            'Single Origin',
            '250g',
            'Wholebean',
            'Every week'
        ]
    )

    const [scrollTarget, setScrollTarget] = useState(undefined);
    function handleTargetScroll(event:React.MouseEvent, target:any) {
        event.preventDefault();
        setScrollTarget(target);
    }

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
                    <hr className={styles.plan__stepsContainerDivider} />
                    <div className={styles.plan__stepsCard}>
                        <div className={styles.plan__stepsCardCircle}></div>
                        <span>01</span>
                        <h2>Pick your coffee</h2>
                        <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className={styles.plan__stepsCard}>
                        <div className={styles.plan__stepsCardCircle}></div>
                        <span>02</span>
                        <h2>Choose the frequency</h2>
                        <p>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>


                    </div>
                    <div className={styles.plan__stepsCard}>
                        <div className={styles.plan__stepsCardCircle}></div>
                        <span>03</span>
                        <h2>Receive and enjoy!</h2>
                        <p>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>
            </section>

            <section className={styles.plan__selection}>
                <nav className={styles.plan__selectionMenu}>
                    <ol className={styles.plan__selectionMenuList}>
                        <li onClick={(e) => handleTargetScroll(e, 0)} className={intersectedListItem === 0 ? styles.plan__selectionMenuList_selected : undefined}><span>01</span> Preferences</li>
                        <li onClick={(e) => handleTargetScroll(e, 1)} className={intersectedListItem === 1 ? styles.plan__selectionMenuList_selected : undefined}><span>02</span> Bean Type</li>
                        <li onClick={(e) => handleTargetScroll(e, 2)} className={intersectedListItem === 2 ? styles.plan__selectionMenuList_selected : undefined}><span>03</span> Quantity</li>
                        <li onClick={(e) => handleTargetScroll(e, 3)} className={intersectedListItem === 3 ? styles.plan__selectionMenuList_selected : undefined}><span>04</span> Grind Option</li>
                        <li onClick={(e) => handleTargetScroll(e, 4)} className={intersectedListItem === 4 ? styles.plan__selectionMenuList_selected : undefined}><span>05</span> Deliveries</li>
                    </ol>
                </nav>
                <div className={styles.plan__selectionCards}>
                    <SelectionCard scrollTarget={scrollTarget} setOrderArray={setOrderArray} orderArray={orderArray} setIntersectedListItem={setIntersectedListItem} id={0} question='How do you drink your coffee?' options={[['Capsule','Compatible with Nespresso systems and similar brewers'], ['Filter', 'For pour over or drip methods like Aeropress, Chemex, and V60'], ['Espresso', 'Dense and finely ground beans for an intense, flavorful experience']]} />
                    <SelectionCard scrollTarget={scrollTarget} setOrderArray={setOrderArray} orderArray={orderArray} setIntersectedListItem={setIntersectedListItem} id={1} question='What type of coffee?' options={[['Single Origin','Distinct, high quality coffee from a specific family-owned farm'], ['Decaf', 'Just like regular coffee, except the caffeine has been removed'], ['Blended', 'Combination of two or three dark roasted beans of organic coffees']]} />
                    <SelectionCard scrollTarget={scrollTarget} setOrderArray={setOrderArray} orderArray={orderArray} setIntersectedListItem={setIntersectedListItem} id={2} question='How much would you like?' options={[['250g', 'Perfect for the solo drinker. Yields about 12 delicious cups.'], ['500g', 'Perfect option for a couple. Yields about 40 delectable cups.'], ['1000g', 'Perfect for offices and events. Yields about 90 delightful cups.']]} />
                    <SelectionCard scrollTarget={scrollTarget} setOrderArray={setOrderArray} orderArray={orderArray} setIntersectedListItem={setIntersectedListItem} id={3} question='Want us to grind them?' options={[['Wholebean', 'Best choice if you cherish the full sensory experience'], ['Filter', 'For drip or pour-over coffee methods such as V60 or Aeropress'], ['Cafetiére', 'Course ground beans specially suited for french press coffee']]} />
                    <SelectionCard scrollTarget={scrollTarget} setOrderArray={setOrderArray} orderArray={orderArray} setIntersectedListItem={setIntersectedListItem} id={4} question='How often should we deliver?' options={[['Every week', '$7.20 per shipment. Includes free first-class shipping.'], ['Every 2 weeks', '$9.60 per shipment. Includes free priority shipping.'], ['Every month', '$12.00 per shipment. Includes free priority shipping.']]} />
                </div>
            </section>

            <section className={styles.plan__summary}>
                <div className={styles.plan__summaryCard}>
                    <h3>Order Summary</h3>
                    <p>“I drink my coffee as <span>{orderArray[0]}</span>, with a <span>{orderArray[1]}</span> type of bean. <span>{orderArray[2]}</span> ground ala <span>{orderArray[3]}</span>, sent to me <span>{orderArray[4]}</span>.”</p>
                </div>
                <button className={styles.plan__button}>Create my plan!</button>

            </section>
        </>
    )
}