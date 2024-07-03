import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className={`sidebar ${extended ? '' : 'collapsed'}`}>
            <div className="top">
                <img 
                    onClick={() => setExtended(prev => !prev)} 
                    className='menu' 
                    src={assets.menu_icon} 
                    alt="Menu" 
                />
                <div className={`new-chat ${extended ? '' : 'collapsed'}`}>
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                <div className={`recent ${extended ? '' : 'collapsed'}`}>
                    <p className="recent-title">Recent</p>
                    <div className={`recent-entry ${extended ? '' : 'collapsed'}`}>
                        <img src={assets.message_icon} alt="Message" />
                        {extended ? <p>What is react...</p> : null}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className={`bottom-item recent-entry ${extended ? '' : 'collapsed'}`}>
                    <img src={assets.question_icon} alt="Help" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${extended ? '' : 'collapsed'}`}>
                    <img src={assets.history_icon} alt="Activity" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className={`bottom-item recent-entry ${extended ? '' : 'collapsed'}`}>
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;