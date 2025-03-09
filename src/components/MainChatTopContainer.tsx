import React from "react";
import styles from "../styles/mainchattopcontainer.module.css";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MainChatTopContainer = () => {
  return (
    <section className={styles.mainChatTopContainer}>
      <div className={styles.mainChatTop}>
        <div className={styles.chatUserDetailContainer}>
          <SupervisedUserCircleIcon sx={{ fontSize: 50 }} />
          <div className={styles.chatUserDetails}>
            <h3>Chokoma Hiroshi</h3>
            <p>Online</p>
          </div>
        </div>
        <div className={styles.chatUserOptions}>
          <LocalPhoneIcon />
          <SearchIcon />
          <MoreVertIcon />
        </div>
      </div>
    </section>
  );
};

export default MainChatTopContainer;
