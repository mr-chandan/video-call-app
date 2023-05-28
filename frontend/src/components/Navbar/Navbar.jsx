import React from 'react'
import Styles from '../Navbar/Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>CHIT-CHAT</div>
            <div className={Styles.list}>
                <div>Home</div>
                <div>Features</div>
                <div>Contact</div>
            </div>
        </div>
    )
}
