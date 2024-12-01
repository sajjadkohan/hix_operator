import React from 'react'
import Head from './Head/Head'
import ActionList from './ActionList/ActionList'
import { themeColorLayer3 } from '../../../utils/constanst'
import { AcionListParent } from '../../../global/globalComponents/globalMuiComponent/globalMuiComponents'
import styles from './Sidebar.module.css';
import { FiChevronsLeft } from "react-icons/fi";
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div style={{borderLeft : `1px solid #${themeColorLayer3}`}} className={`plr danaRegular ${styles.sidebar}`}>
      {/* <AcionListParent> */}
        <Head/>
      {/* </AcionListParent> */}
      <ActionList/>
      <AcionListParent className={styles.upgradeParent}>
        <NavLink to={'/addPlan'} className={styles.upgrade}>
          <h2>ارتقا پلن</h2>
          <div className={styles.go}>
            <p>ارتقا به پلن ویژه</p>
            <span><FiChevronsLeft size={25} /></span>
          </div>
        </NavLink>
      </AcionListParent>
    </div>
  )
}

export default Sidebar
