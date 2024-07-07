import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const {onSent, prevPrompts, setRecentPompt, newChat} = useContext(Context);

    const loadPrompt = async(prompt) => {
        setRecentPompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className={`sidebar ${extended ? '' : 'collapsed'}`}>
            <div className="top">
                <img 
                    onClick={() => setExtended(prev => !prev)} 
                    className='menu' 
                    src={assets.menu_icon} 
                    alt="Menu" 
                />
                <div onClick={()=>newChat()} className={`new-chat ${extended ? '' : 'collapsed'}`}>
                    <img src={assets.plus_icon} alt="New Chat" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                <div className={`recent ${extended ? '' : 'collapsed'}`}>
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index)=> {
                        return  (
                            <div onClick={()=> loadPrompt(item)} className={`recent-entry ${extended ? '' : 'collapsed'}`}>
                            <img src={assets.message_icon} alt="Message" />
                            {extended ? <p>{item.slice(0,18)}...</p> : null}
                        </div>
                        )
                    })}
                    
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