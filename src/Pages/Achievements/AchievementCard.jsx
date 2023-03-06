import styles from './Achievements.module.css';

const AchievementCard = (props) => {
    const img = require(`../../Assets/Images/img/image.png`);
    return ( 
        <div className={styles.achCardBox}>
            <div className={styles.achCardContent}>
                <h2>{props.Achievement.achievement}</h2>
                <h2>{props.Achievement.competition}</h2>
                <p>
                    {props.Achievement.description}
                </p>
            </div>
            <div className={styles.achCardCover}>
                <img src={img} alt="" />
                <p>{props.Achievement.coverheadline}</p>
            </div>
        </div>
    );
}
 
export default AchievementCard;