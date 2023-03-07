import {React, useState,useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Footer from "./Components/Footer-new";
import { Home, Team, Achievements, Blogs, Sponsors } from "./Pages";
import BlogArticle from "./Pages/Blogs/BlogArticle";
import BlogsProvider from "./contexts/BlogsProvider";
import AchievementsContextProvider from "./contexts/achievementsContext";


export default function App() {
    const [memberData,setMemberData] = useState([]);
    const url = process.env.REACT_APP_API_URL
    console.log(url)
    useEffect(() => {
    axios.get(url).then((response) =>{
      setMemberData(response.data)
    }).catch((error) => {
      console.log(error)
    })
    }, [])
    return (
        <BlogsProvider>
            <AchievementsContextProvider>
              <div className="App">
                  <BrowserRouter>
                      <Navbar />
                      <Routes>
                          <Route path="/" element={<Home memberData={memberData}/>} />
                          <Route path="/team" element={<Team memberData={memberData}/>} />
                          <Route path="/achievements" element={<Achievements />} />
                          <Route path="/blogs" element={<Blogs />} />
                          <Route path="/blogs/:id" element={<BlogArticle />} />
                          <Route path="/sponsors" element={<Sponsors />} />
                          <Route path="*" element={<Navigate to="/" replace={true} />} />
                      </Routes>
                      <Footer />
                  </BrowserRouter>
              </div>
           </AchievementsContextProvider>
        </BlogsProvider>
    );