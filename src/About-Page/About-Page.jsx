import React from 'react'
import styles from './aboutPage.module.css'
export default function AboutPage() {
  return (
    <div className={styles.aboutParentContainer}>
        <div className={styles.aboutContactContainer}>
            <div className={styles.contactContiner}>
                <label className={styles.aboutUsHeader}>Contact Us</label>
            </div>
            <div className={styles.contactInfoContainer}>
                <div className={styles.contactInfo}>
                        <img className={styles.aboutContactIcon}src="src\assets\whatsapp-logo-bold.svg"></img>
                        <label className={styles.contactInfoText}>+91  9988124123</label>
                </div>
                <div className={styles.contactInfo}>
                        <img className={styles.aboutContactIcon}src="src\assets\phone-call-fill.svg"></img>
                        <label className={styles.contactInfoText}>+91  9988124123</label>
                </div>
                <div className={styles.contactInfo}>
                        <img className={styles.aboutContactIcon} src="src\assets\email.svg"></img>
                        <label className={styles.contactInfoText}>threadtales@gmail.com</label>
                </div>
                <div className={styles.contactInfo}>
                        <img className={styles.aboutContactIcon} src="src\assets\vector.svg"></img>
                        <label className={styles.contactInfoText}>Bangalore</label>
                </div>
            </div>
        </div>
        <div className={styles.aboutContactContainer}>
              <div className={styles.contactInfoContainer}>
                <label className={styles.aboutUsHeader}>Our Policy</label>
            </div>
            <label className={styles.policy}>Cancellation Policy</label>
             <label className={styles.policy}>Refund Policy</label>
              <label className={styles.policy}>Shipping Policy</label>
               <label className={styles.policy}>Terms Of Service</label>
        </div>
        <div className={styles.aboutInfoContainer}>
              <div className={styles.contactContiner}>
                <label className={styles.aboutUsHeader}>Contact Us</label>
            </div>
            <label className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse 
cillum dolore eu fugiat nulla pariatur. </label>
<div className={styles.socialMedia}>
    <img className={styles.socialMediaIcon}  src='src\assets\instagram.svg'></img>
    <img className={styles.socialMediaIcon} src='src\assets\whatsapp.svg'></img>
    <img className={styles.socialMediaIcon}  src='src\assets\youtube.svg'></img>

</div>
        </div>
    </div>
  )
}
