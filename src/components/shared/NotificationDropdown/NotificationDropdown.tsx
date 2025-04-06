"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/Dropdown/Dropdown";
import { IoIosNotifications } from "react-icons/io";
import styles from "./NotificationDropdown.module.scss";

const notifications = [
  { id: 1, text: "Новое сообщение" },
  { id: 2, text: "Счет пополнен" },
  { id: 3, text: "Оповещение о платеже" },
];

export default function NotificationDropdown() {
  return (
    <div className={styles.container}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className={styles.notificationIcon}>
            <IoIosNotifications />
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={styles.dropdownContent} align="end">
          <DropdownMenuLabel className={styles.DropdownMenuLabelNotif}>Уведомления</DropdownMenuLabel>
          <DropdownMenuSeparator className = {styles.DropMenuSeparatorNotif}/>
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className={styles.menuItem}>
              {notification.text}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator className = {styles.DropMenuSeparatorNotif}/>
          <DropdownMenuItem className={styles.showAllButton}>
            Показать все
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}