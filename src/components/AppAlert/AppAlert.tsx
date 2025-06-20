"use client"

import { useAppAlertStore } from "@/store/AppAlertStore"
import styles from "./AppAlert.module.css"



export function AppAlert() {

  const { text, isVisible } = useAppAlertStore((state) => state)

  return (
    <div className={`${styles.alert} ${isVisible ? styles.visible : ""} UICase`}>
      <p>{text}</p>
    </div>
  )
}