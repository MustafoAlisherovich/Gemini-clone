import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

const Sidebar = () => {

    const [extendend, setExtendend] = useState(false)

    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>setExtendend(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extendend ? <p>New Chat</p> : null}
                </div>
                {extendend
                    ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react...</p>
                        </div>
                    </div>
                    : null
                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extendend ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extendend ? <p>Activity</p> : null}
                </div><div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extendend ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar