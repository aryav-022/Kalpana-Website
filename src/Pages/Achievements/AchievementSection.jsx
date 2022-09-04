import Banner from "../../Components/Banner/Banner";
import { useState } from "react";
import achievements from './Achievements.json'

const AchievementSection = () => {

    const [Achievements, setAchievements] = useState(achievements);

    const setActiveYear = (year) => {
        const newAchievements = achievements.filter(Achievement => Achievement.year === year);
        setAchievements(newAchievements);
    }

    return (
        <div>
           <Banner title="Our Achievements" setActiveYear = {setActiveYear}/>
           
        </div>
    );
}

export default AchievementSection;