import Banner from "../../Components/Banner/Banner";
import { useContext, useEffect, useState } from "react";
import styles from './Achievements.module.css';
import AchievementCard from "./AchievementCard";
import {AchievementsContext} from "../../contexts/achievementsContext";

const AchievementSection = () => {
    
    const {achievements} = useContext(AchievementsContext);

    const [Achievements, setAchievements] = useState(null);
    const [year, setYear] = useState(2022);


    useEffect(() => {
        if (!achievements || !Array.isArray(achievements)) return;
        const newAchievements = achievements.filter(Achievement => Achievement.year === year);
        setAchievements(newAchievements);
    }, [year, achievements])

    
    return (
        <div>
           <Banner title="Our Achievements" setYear={setYear} />
           {Achievements && <div id={styles.achSectionContainer}>
            <section id={styles.achSection}>
                {Achievements.map(Achievement => <AchievementCard Achievement = {Achievement} key = {Achievement.id} img = {Achievement.coverphoto}/>)}
           </section>
           </div>}
        </div>
    );
}

export default AchievementSection;