import styles from './Achievements.module.css';
import { motion } from "framer-motion";

const AchievementCard = (props) => {
    const img = require(`../../Assets/Images/img/${props.img}`);
    return ( 
        <div className="achCardBox">
            <motion.div 
            className="achCardContent"
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            viewport={{ once: true, amount: 0.8 }}>
                <h2>{props.Achievement.achievement}</h2>
                <h2>{props.Achievement.competition}</h2>
                <p>
                    {props.Achievement.description}
                </p>
            </motion.div>
            <div className="achCardCover">
                <img src={img} alt="" />
                <p>{props.Achievement.coverheadline}</p>
            </div>
        </div>
    );
}
 
export default AchievementCard;