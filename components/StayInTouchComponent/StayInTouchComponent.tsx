import styles from "./stayInTouchComponent.module.css";
import { useState } from "react";

function StayInTouchComponent() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className={styles.stayInTouchContainer}>
        <div className={styles.stayInTouchTitle}>STAY IN TOUCH</div>
        <div className={styles.stayInTouchSubtitle}>
          Sign up for our newsletter today for wellness tips and special offers.
        </div>
        <div className={styles.emailContainer}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
            id="inputID"
            className={styles.emailTextBox}
          ></input>
          <button className={styles.subscribeButton}>SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
}

export default StayInTouchComponent;
