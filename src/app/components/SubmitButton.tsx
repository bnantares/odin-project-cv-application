import { FunctionComponent } from "react";
import styles from "./../styles/styles.module.css";


interface Props {
    handleSubmit: any;
}

export const SubmitButton: FunctionComponent<Props> =  ({
    handleSubmit
}) => {
    return (
        <button className={styles.submit__button} onClick={handleSubmit}>Submit</button>
    )
}