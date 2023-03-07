import styles from './Achievements.module.css';

const AchievementCard = (props) => {
    const fallback_img = require(`../../Assets/Images/img/image.png`);
    const addDefaultSrc = (ev) => {
        ev.target.src = fallback_img;
    }

    const img = (`${props.img}`)

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
                <img onError={addDefaultSrc} src={img} alt="" />
                <p>{props.Achievement.coverheadline}</p>
            </div>
        </div>
    );
}
 
export default AchievementCard;