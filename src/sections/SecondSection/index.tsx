import { FC } from "react";
import CartooImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import styles from './styles.module.scss'

const SecondSection: FC = () => {
    return (
        <div className={styles.secondSection}>
            {/* tabs */}
            <ul>
                <li>动画</li>
                <li>美食</li>
                <li>电影</li>
                <li>生活</li>
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