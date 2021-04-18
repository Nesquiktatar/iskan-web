import React from 'react';
import s from './Profile.module.css'


//social web icons
import facebookIcon from '../../../assets/icons/socialWeb/website.png'
import webSiteIcon from '../../../assets/icons/socialWeb/facebook.svg'
import mainLinkIcon from '../../../assets/icons/socialWeb/mainLink.svg'
import githubIcon from '../../../assets/icons/socialWeb/github.svg'
import instagramIcon from '../../../assets/icons/socialWeb/instagram.svg'
import twitterIcon from '../../../assets/icons/socialWeb/twitter.png'
import vkIcon from '../../../assets/icons/socialWeb/vk.png'
import youtubeIcon from '../../../assets/icons/socialWeb/youtube.png'

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button id='edit' onClick={goToEditMode} className={s.editButton}>
                    edit
                </button>
            </div>}
            <label htmlFor="edit">
                <div className={s.wrapper}>
                    <div className={s.fullName}>
                        {profile.fullName}
                    </div>
                    <div className={s.lookingForJob}>
                        <b>Looking for a job</b>: <span> {profile.lookingForAJob ? 'YES' : 'NO'} </span>
                    </div>
                    <div className={s.skills}>
                        <b>My professional skills</b>:
                        <div>
                        <span>
                        {profile.lookingForAJobDescription}
                        </span>
                        </div>
                    </div>
                    <div className={s.aboutMe}>
                        <b>About me</b>:
                        <div>
                        <span>
                            {profile.aboutMe}
                        </span>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        {Object.keys(profile.contacts).map(key => {
                            return  <Contact key={key} contactTitle={key}
                                            contactValue={profile.contacts[key]}/>
                        })}
                    </div>
                </div>
            </label>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    let iconPath = null;

    switch (contactTitle){
        case 'facebook':
        iconPath = facebookIcon
            break;
        case 'vk':
            iconPath=vkIcon;
            break;
        case 'github':
            iconPath=githubIcon;
            break;
        case 'instagram':
            iconPath=instagramIcon;
            break;
        case 'website':
            iconPath=webSiteIcon;
            break;
        case 'twitter':
            iconPath=twitterIcon;
            break;
        case 'youtube':
            iconPath=youtubeIcon;
            break;
        case 'mainLink':
            iconPath=mainLinkIcon;
            break;
        default:
            iconPath = null
    }

    return (
        <div className={s.contactsInside}>
            <a href={contactValue}><img src={iconPath} alt={contactTitle}/></a>
        </div>
    )
}


export default ProfileData;