import { createContext, useEffect, useState } from "react";

export const AchievementsContext = createContext();

const AchievementsContextProvider = (props) => {
    const [achievements, setAchievements] = useState(null);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const res = await fetch(process.env.REACT_APP_ACHIEVEMENTS_URL);
                const data = await res.json();
                setAchievements(data);
            } catch (error) {
                console.log("Error fetching achievements: ", error);
            }
        };
        fetchAchievements();
    }, []);


    return (
        <AchievementsContext.Provider value={{achievements}}>
            {props.children}
        </AchievementsContext.Provider>
    );
};

export default AchievementsContextProvider;