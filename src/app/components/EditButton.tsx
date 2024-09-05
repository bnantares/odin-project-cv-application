import { FunctionComponent } from "react";
import styles from "./../styles/styles.module.css";

interface Props {
    handleEdit: any;
}

export const EditButton: FunctionComponent<Props> =  ({
    handleEdit
}) => {
    return (
        <button className={styles.submit__button} onClick={handleEdit}>Edit</button>
    )
}