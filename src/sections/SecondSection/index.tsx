import { FC, useState } from "react";
import CartooImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import styles from './styles.module.scss'
import classNames from "classnames";

const SecondSection: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon')
    const tabs = [
        {
            key: 'cartoon',
            title: '动画'
        },
        {
            key: 'food',
            title: '美食'
        },
        {
            key: 'movie',
            title: '电影'
        },
        {
            key: 'life',
            title: '生活'
        }
    ]
    return (
        <div className={styles.secondSection}>
            {/* tabs */}
            <ul>
                {tabs.map(tab => (
                    <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
                        <span>{tab.title}</span>
                        <span className={classNames(styles.line, { [styles.visible]: activeTab === tab.key })}></span>
                    </li>
                ))}
            </ul>
            {/* tabsContent */}
            <div>
                <section>
                    <h2>动画</h2>
                    <img src={CartooImage} alt="cartoon" />
                </section>
                <section>
                    <h2>美食</h2>
                    <img src={FoodImage} alt="food" />
                </section>
                <section>
                    <h2>电影</h2>
                    <img src={MovieImage} alt="movie" />
                </section>
                <section>
                    <h2>生活</h2>
                    <img src={LifeImage} alt="life" />
                </section>
            </div>
        </div>
    )
}

export default SecondSection