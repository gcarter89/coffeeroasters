import styles from './Plan.module.scss';
import { useMemo, useEffect, useRef, SetStateAction } from 'react';
import {ReactComponent as Chevron} from '../../assets/plan/desktop/icon-arrow.svg';

// Type 'Dispatch<SetStateAction<number>>' is not assignable to type 'number'.
// props: setIntersectedListItem, question, options, id
interface Properties {
    setIntersectedListItem: React.Dispatch<SetStateAction<number>>;
    question: string;
    options: string[][];
    id: number;
}

export default function SelectionCard({setIntersectedListItem, question, options, id}:Properties) {

    const ref = useRef<HTMLDivElement | null>(null);

    const observer = useMemo(() => new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIntersectedListItem(id);
        }
    }, {threshold: 0.5, rootMargin: '0px 0px -50% 0px',}),[id, setIntersectedListItem])


    useEffect(() => {
        if (ref.current !== null) {
            observer.observe(ref.current);
            return () => { observer.disconnect() }
        }
    }, [observer])


    return (
        <div className={styles.plan__selectionCard}>
        <button className={styles.plan__selectionHeader}>
            <h3 ref={ref}>{question}</h3>
            <Chevron />
        </button>

        <div className={styles.plan__selectionButtons}>
            {options.map((option:any) => {
                return (
                    <button key={Math.random()} className={styles.plan__selectionButton}>
                        <h3>{option[0]}</h3>
                        <p>{option[1]}</p>
                    </button>
                )
            })}
        </div>
    </div>
    )
}