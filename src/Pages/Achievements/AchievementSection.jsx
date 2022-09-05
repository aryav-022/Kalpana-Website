import Banner from "../../Components/Banner/Banner";
import { useState } from "react";
import achievements from './Achievements.json'
import AchievementCard from "./AchievementCard";

const AchievementSection = () => {

    const [Achievements, setAchievements] = useState(achievements.filter(achievement => achievement.year === 2022));

    const setActiveYear = (year) => {
        const newAchievements = achievements.filter(Achievement => Achievement.year === year);
        setAchievements(newAchievements);
        document.getElementById(2022).style.color = ' var(--tertiary-text-color)';
        if(year==2022) {document.getElementById(2022).style.color = ' var(--primary-text-color)';}
    }

    return (
        <div>
           <Banner title="Our Achievements" setActiveYear = {setActiveYear} />
           <div id="achSectionContainer">
            <section id="achSection">
                {Achievements.map(Achievement => <AchievementCard Achievement = {Achievement} key = {Achievement.id} img = {Achievement.coverphoto}/>)}
           </section>
           </div>
        </div>
    );
}

export default AchievementSection;