'use client'
import HelpText from './components/HelpText'
import NavBar from './components/NavBar'
import VisaType from './components/VisaType'
import VitalInfo from './components/VitalInfo'

import styles from './page.module.css'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <div className={styles.container}> 
       <NavBar/>
       <VitalInfo/>
       <VisaType/>
       <HelpText/>
        
      </div>
 
    </main>
  )
}
