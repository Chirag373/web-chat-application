"use client";

import styles from "../styles/sidebarcontainer.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Input, Box, InputAdornment } from "@mui/material";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Badge } from "@mui/material";
import { useState, ChangeEvent } from "react";

const Chats = [
  {
    id: 1,
    name: "Chokoma Hiroshi",
    time: "01:20 PM",
    message: "Hey, how are you?",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Maria Gonzalez",
    time: "12:45 PM",
    message: "See you tomorrow!",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Raj Patel",
    time: "11:30 AM",
    message: "Thanks for the update!",
    unread: 5,
    online: true,
  },
  {
    id: 4,
    name: "Sophie Müller",
    time: "10:15 AM",
    message: "Let's meet at 3 PM hey aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    unread: 1,
    online: true,
  },
  {
    id: 5,
    name: "Kwame Nkrumah",
    time: "09:00 AM",
    message: "Document attached",
    unread: 3,
    online: false,
  },
  {
    id: 6,
    name: "Chokoma Hiroshi",
    time: "01:20 PM",
    message: "Hey, how are you?",
    unread: 2,
    online: true,
  },
  {
    id: 7,
    name: "Maria Gonzalez",
    time: "12:45 PM",
    message: "See you tomorrow!",
    unread: 0,
    online: false,
  },
  {
    id: 8,
    name: "Raj Patel",
    time: "11:30 AM",
    message: "Thanks for the update!",
    unread: 5,
    online: true,
  },
  {
    id: 9,
    name: "Sophie Müller",
    time: "10:15 AM",
    message: "Let's meet at 3 PM hey aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    unread: 1,
    online: true,
  },
  {
    id: 10,
    name: "Kwame Nkrumah",
    time: "09:00 AM",
    message: "Document attached",
    unread: 3,
    online: false,
  },
  {
    id: 11,
    name: "Chokoma Hiroshi",
    time: "01:20 PM",
    message: "Hey, how are you?",
    unread: 2,
    online: true,
  },
  {
    id: 12,
    name: "Maria Gonzalez",
    time: "12:45 PM",
    message: "See you tomorrow!",
    unread: 0,
    online: false,
  },
  {
    id: 13,
    name: "Raj Patel",
    time: "11:30 AM",
    message: "Thanks for the update!",
    unread: 5,
    online: true,
  },
  {
    id: 14,
    name: "Sophie Müller",
    time: "10:15 AM",
    message: "Let's meet at 3 PM hey aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    unread: 1,
    online: true,
  },
  {
    id: 15,
    name: "Kwame Nkrumah",
    time: "09:00 AM",
    message: "Document attached",
    unread: 3,
    online: false,
  },
];

const SideBarContainer = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section className={styles.sideBarContainer}>
      <div className={styles.sideTopBar}>
        <MenuIcon />
        <div className={styles.sideTopBarSearch}>
          <Box
            sx={{
              height: "42px",
              paddingLeft: "10px",
              paddingRight: "10px",
              borderRadius: "40px",
              border: "1px solid #e0e0e0",
              "&:hover": {
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              },
            }}
          >
            <Input
              fullWidth
              disableUnderline
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className={styles.searchInput}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "action.active" }} />
                </InputAdornment>
              }
              sx={{
                fontSize: "1rem",
                "& .MuiInput-input": {
                  py: 1,
                },
              }}
            />
          </Box>
        </div>
      </div>
      <div className={styles.chatListArea}>
        {Chats.map((chat) => (
          <div key={chat.id} className={styles.chatContainer}>
            <SupervisedUserCircleIcon sx={{ fontSize: 50 }} />
            <div className={styles.chat}>
              <div className={styles.titleTimeContainer}>
                <h3>{chat.name}</h3>
                <p>{chat.time}</p>
              </div>
              <div className={styles.messageContainer}>
                <p className={styles.chatMessage}>{chat.message}</p>
                {chat.unread > 0 && (
                  <Badge
                    badgeContent={chat.unread}
                    className={styles.badge}
                    color="primary"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideBarContainer;
