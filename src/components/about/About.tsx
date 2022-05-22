import styles from './About.module.scss';
import commitmentMobileImage from '../../assets/about/mobile/image-commitment.jpg';
import commitmentTabletImage from '../../assets/about/tablet/image-commitment.jpg';
import commitmentDesktopImage from '../../assets/about/desktop/image-commitment.jpg';

import qualityMobileImage from '../../assets/about/mobile/image-quality.jpg';
import qualityTabletImage from '../../assets/about/tablet/image-quality.jpg';
import qualityDesktopImage from '../../assets/about/desktop/image-quality.jpg';

import { ReactComponent as UnitedKingdom } from '../../assets/about/desktop/illustration-uk.svg';
import { ReactComponent as Australia } from '../../assets/about/desktop/illustration-australia.svg';
import { ReactComponent as Canada } from '../../assets/about/desktop/illustration-canada.svg';

export default function About() {
    return (
        <>
        <section className={styles.about__hero}>
            <div className={styles.about__heroText}>
                <h2>About Us</h2>
                <p>Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
            </div>
        </section>

        <section className={styles.about__commitment}>
            <picture>
                <source srcSet={commitmentDesktopImage} media="(min-width: 1200px)" />
                <source srcSet={commitmentTabletImage} media="(min-width: 732px)" />


                <img src={commitmentMobileImage} alt="barista making coffee" />

            </picture>

            <div className={styles.about__commitmentText}>
                <h3>Our commitment</h3>
                <p>We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>

            </div>
        </section>

        <section className={styles.about__quality}>
        <picture>
                <source srcSet={qualityDesktopImage} media="(min-width: 1200px)" />
                <source srcSet={qualityTabletImage} media="(min-width: 732px)" />


                <img src={qualityMobileImage} alt="coffee cup" />

            </picture>

            <div className={styles.about__qualityText}>
                <h2>Uncompromising quality</h2>
                <p>Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
            </div>
        </section>

        <section className={styles.about__headquarters}>
            <h4>Our headquarters</h4>

            <div className={styles.about__locationCards}>
                <div className={styles.about__locationCard}>
                    <UnitedKingdom />
                    <h2>United Kingdom</h2>
                    <p>68  Asfordby Rd</p>
                    <p>Alcaston</p>
                    <p>SY6 1YA</p>
                    <p>+44 1241 918425</p>
                </div>
                <div className={styles.about__locationCard}>
                    <Canada />
                    <h2>Canada</h2>
                    <p>1528  Eglinton Avenue</p>
                    <p>Toronto</p>
                    <p>Ontario M4P 1A6</p>
                    <p>+1 416 485 2997</p>
                </div>
                <div className={styles.about__locationCard}>
                    <Australia />
                    <h2>Australia</h2>
                    <p>36 Swanston Street</p>
                    <p>Kewell</p>
                    <p>Victoria</p>
                    <p>+61 4 9928 3629</p>
                </div>
            </div>
        </section>
        </>
    )
}