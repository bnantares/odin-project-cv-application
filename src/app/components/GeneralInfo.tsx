import { FunctionComponent, useState } from "react";
import styles from "./../styles/styles.module.css";

interface Props {
    inputLocked: boolean;
    firstName: string;
    handleNameChange: any;
    lastName: string;
    handleLastNameChange: any;
    email: string;
    handleEmailChange: any;
    phoneNubmer: number;
    handlePhoneNumberChange: any;
}

export const GeneralInfo: FunctionComponent<Props> = ({
    inputLocked,
    firstName,
    handleNameChange,
    lastName,
    handleLastNameChange,
    email,
    handleEmailChange,
    phoneNubmer,
    handlePhoneNumberChange,
}) => {
    if (inputLocked) {
        return (
            <>
                <p className={styles.cv__info__segment}>
                    <label>
                        First name: {firstName}
                    </label>
                    <label>
                        Last name: {lastName}
                    </label>
                    <label>
                        Email: {email}
                    </label>
                    <label>
                        Phone: {phoneNubmer}
                    </label>
                </p>    
            </>
        )
    } else {
        return (
            <>
                <p className={styles.cv__info__segment}>
                    <label>
                        First name: <input className={styles.input__info} name="myInput" value={firstName} onChange={handleNameChange} />
                    </label>
                    <label>
                        Last name: <input className={styles.input__info} name="myInput" value={lastName} onChange={handleLastNameChange} />
                    </label>
                    <label>
                        Email: <input className={styles.input__info} name="myInput" value={email} onChange={handleEmailChange} />
                    </label>
                    <label>
                        Phone: <input className={styles.input__info} type="number" name="myInput" value={phoneNubmer} onChange={handlePhoneNumberChange} />
                    </label>
                </p>
            </>
        )
    }

}