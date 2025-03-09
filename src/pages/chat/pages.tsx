import MainChatContainer from "@/components/MainChatContainer";
import SideBarContainer from "@/components/SideBarContainer";
import React from "react";
import styles from "../../styles/chatpage.module.css";

const ChatPage = () => {
    return (
        <div className={styles.chatContainer}>
            <SideBarContainer />
            <MainChatContainer />
        </div>
    )
}

export default ChatPage;