import { createContext, useEffect, useState } from "react";

export const AchievementsContext = createContext();

const AchievementsContextProvider = (props) => {
    const [achievements, setAchievements] = useState(null);

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const res = await fetch("https://script.google.com/macros/s/AKfycbyXVJhYU6eSybgkfdRoDU9jU0v6ne61teHgvN2UxgQZd-WS_NEEK21KxurH_gjS8n9Piw/exec");
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