import styles from './Plan.module.scss';
import React, { useMemo, useEffect, useRef, SetStateAction, useState } from 'react';
import {ReactComponent as Chevron} from '../../assets/plan/desktop/icon-arrow.svg';

// Type 'Dispatch<SetStateAction<number>>' is not assignable to type 'number'.
// props: setIntersectedListItem, question, options, id
interface Properties {
    setIntersectedListItem: React.Dispatch<SetStateAction<number>>;
    setOrderArray: React.Dispatch<SetStateAction<string[]>>;
    orderArray: string[];
    scrollTarget:any;
    question: string;
    options: string[][];
    id: number;
}

export default function SelectionCard({scrollTarget, setOrderArray, orderArray, setIntersectedListItem, question, options, id}:Properties) {

    const [isVisible, setVisible] = useState(true);

    //add state here to store and decide selections
    function handleSelectionClick(event:React.MouseEvent, selectedValue:string) {
        event.preventDefault();

        orderArray[id] = selectedValue;
        setOrderArray([...orderArray]);
    }

    function handleVisibleClick(event:React.MouseEvent) {
        event.preventDefault();
        setVisible(prevState => !prevState);
    }


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

    useEffect(() => {
        if (id === scrollTarget) {
            ref.current?.scrollIntoView({block:'start', behavior: 'smooth'});
        }
    },[id, scrollTarget])


    return (
        <div className={styles.plan__selectionCard}>
        <button onClick={(e) => handleVisibleClick(e)} className={styles.plan__selectionHeader}>
            <h3 ref={ref}>{question}</h3>
            <Chevron className={!isVisible ? styles.plan__selectionChevron_selected : undefined} />
        </button>
        
        {isVisible ? <div className={styles.plan__selectionButtons}>
            {options.map((option:any) => {
                return (
                    <button onClick={(e) => handleSelectionClick(e, option[0])} key={Math.random()} className={orderArray[id] === option[0] ? styles.plan__selectionButton_selected : styles.plan__selectionButton}>
                        <h3>{option[0]}</h3>
                        <p>{option[1]}</p>
                    </button>
                )
            })}
        </div>: null}
    </div>
    )
}