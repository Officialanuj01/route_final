import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navvar.module.css'

function Navvar() {
    return (

<div className={styles.navbar}>
            
    <Link to="/"> <h3>KALVIUM❤️</h3></Link>
    <ul>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
    </ul>
</div>
        
)
}
export default Navvar
