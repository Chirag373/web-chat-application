import React from "react";
import styles from "../styles/mainchatcontainer.module.css";
import MainChatTopContainer from "./MainChatTopContainer";

const MainChatContainer = () => {
    return (
        <section className={styles.chatContainer}>
            <div className={styles.chat}>
                <MainChatTopContainer />
                
            </div>
        </section>
    )
}

export default MainChatContainer;