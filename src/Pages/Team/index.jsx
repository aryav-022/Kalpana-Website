import {React} from 'react';
import styles from "./Team.module.css"
import Card from './Card'
import Banner from '../../Components/Banner/Banner'

export default function Index({memberData}) {

  

  const leadArr = [18,20,13]
  const jexec_0 = [0,2,5]
  const jexec_1 = [10,15]
  const cansat = [17,14]
  const ssc = [4,7]
  const elecDepat = [16,6]

  return (
      <>
        {/* <div className={styles.team__heading}><h1 >MEET THE TEAM</h1></div> */}
        <Banner
          title="Our Team"
        />
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >TEAM LEADS</h1></div>
            <div className={styles.grid}>
              {memberData.data ?
              leadArr.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}
            </div>
        </div>
  
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >UAS CHAPTER</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
              <Card
                key='11'
                img={memberData.data[11].photo}
                por={memberData.data[11].por}
                name={memberData.data[11].name}
                linkedin={memberData.data[11].linkedin}
                insta={memberData.data[11].insta}
                git={memberData.data[11].github}
              />:null}   
              </div>
        </div>
  
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >CANSAT CHAPTER</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                cansat.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}   
              </div>
        </div>
  
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >SSC CHAPTER</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                ssc.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >ELECTRONICS DEPARTMENT</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                elecDepat.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >MECHANICAL DEPARTMENT</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                <Card
                key='12'
                img={memberData.data[12].photo}
                por={memberData.data[12].por}
                name={memberData.data[12].name}
                linkedin={memberData.data[12].linkedin}
                insta={memberData.data[12].insta}
                git={memberData.data[12].github}
              />:null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >SOFTWARE DEPARTMENT</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                <Card
                key='3'
                img={memberData.data[3].photo}
                por={memberData.data[3].por}
                name={memberData.data[3].name}
                linkedin={memberData.data[3].linkedin}
                insta={memberData.data[3].insta}
                git={memberData.data[3].github}
              />:null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >WEB DEV DEPARTMENT</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                <Card
                key='19'
                img={memberData.data[19].photo}
                por={memberData.data[19].por}
                name={memberData.data[19].name}
                linkedin={memberData.data[19].linkedin}
                insta={memberData.data[19].insta}
                git={memberData.data[19].github}
              />:null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >OTHER DEPARTMENT</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
                <Card
                key='8'
                img={memberData.data[8].photo}
                por={memberData.data[8].por}
                name={memberData.data[8].name}
                linkedin={memberData.data[8].linkedin}
                insta={memberData.data[8].insta}
                git={memberData.data[8].github}
              />:null}
              {memberData.data ?
                <Card
                key='9'
                img={memberData.data[9].photo}
                por={memberData.data[9].por}
                name={memberData.data[9].name}
                linkedin={memberData.data[9].linkedin}
                insta={memberData.data[9].insta}
                git={memberData.data[9].github}
              />:null}
              </div>
        </div>
        <div className={styles.content}>
            <div className={styles.team__head}><h1 >JUNIOR EXECOM</h1></div>
              <div className={styles.grid}>
              {memberData.data ?
              jexec_0.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}
              </div>
              <div className={styles.grid}>
              {memberData.data ?
              jexec_1.map((i)=> {
                const temp=memberData.data[i]
                return (
                  <Card
                    key={i}
                    img={temp.photo}
                    por={temp.por}
                    name={temp.name}
                    linkedin={temp.linkedin}
                    insta={temp.insta}
                    git={temp.github}
                  />
                )
              }):null}
              </div>
        </div>
      </>
    )
}
