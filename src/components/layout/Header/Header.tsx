import React from "react";
import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";
import styles from "./Header.module.scss";

interface HeaderProps {
  balance: number;
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ balance, userName }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>PakostiBank</div>
      <div className={styles.userSection}>
        <div className={styles.userInfo}>
          <div className={styles.userOptions}>
            <span className={styles.userBalance}>Баланс: {balance} руб.</span>
            <span className={styles.userNotifications}>
              <IoIosNotifications className={styles.notificationIcon} />
            </span>
          </div>
          <div className={styles.userBlock}>
            <div className={styles.userAvatar}>
              <Image
                src="/avatars/avatar.jpg"
                alt="user-avatar"
                width={50}
                height={50}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.userName}>{userName}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
