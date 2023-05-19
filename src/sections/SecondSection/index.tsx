import { FC, useEffect, useRef, useState } from "react";
import CartooImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import logoImage from '../../assets/logo.png'
import styles from './styles.module.scss'
import classNames from "classnames";

const tabs = [
    {
        key: 'cartoon',
        title: '动画',
        image: CartooImage
    },
    {
        key: 'food',
        title: '美食',
        image: FoodImage
    },
    {
        key: 'movie',
        title: '电影',
        image: MovieImage
    },
    {
        key: 'life',
        title: '生活',
        image: LifeImage
    }
]

const SecondSection: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon')
    const [isFixed, setisFixed] = useState<boolean>(false)
    const SecondSectionRef = useRef<HTMLDivElement>(null);
    const activate = (key: string) => {
        setActiveTab(key)
        const tabContentEL = document.querySelector(`[data-id=${key}]`)
        if (tabContentEL) {
            tabContentEL.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const onScroll = () => {
        if (SecondSectionRef.current) {
            const { top } = SecondSectionRef.current.getBoundingClientRect()
            setisFixed(top <= 0)

            const sectionNodes = SecondSectionRef.current.querySelectorAll('section')
            Array.from(sectionNodes).forEach(sectionEL => {
                const { top } = sectionEL.getBoundingClientRect();
                const key = sectionEL.getAttribute('data-id') || ''
                if (top <= 56) {
                    setActiveTab(key)
                }
            })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    return (
        <div className={styles.secondSection} ref={SecondSectionRef}>
            {/* tabs */}
            <ul className={classNames({ [styles.isFixed]: isFixed })}>
                {tabs.map(tab => (
                    <li key={tab.key} onClick={() => activate(tab.key)}>
                        <span>{tab.title}</span>
                        <span className={classNames(styles.line, { [styles.visible]: activeTab === tab.key })}></span>
                    </li>
                ))}
            </ul>
            {/* tabsContent */}
            <div>
                {tabs.map(tab => (
                    <section data-id={tab.key} >
                        <h2>{tab.title}</h2>
                        <img src={tab.image} alt={tab.key} />
                    </section>
                ))}
            </div>
            {/* 吸底按钮 */}
            <div className={classNames(styles.btnWrapper, { [styles.visible]: isFixed })}>
                <img src={logoImage} alt="logo" />
                <button>App 内打开</button>
            </div>
        </div >
    )
}

export default SecondSection