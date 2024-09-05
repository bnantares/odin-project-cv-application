import { FunctionComponent } from "react";
import styles from "./../styles/styles.module.css";

interface Props {
    inputLocked: boolean;
    schoolName: string;
    handleSchoolNameChange: any;
    titleOfStudy: string;
    handleTitleOfStudyChange: any;
}

export const EducationalInfo: FunctionComponent<Props> = ({
    inputLocked,
    schoolName,
    handleSchoolNameChange,
    titleOfStudy,
    handleTitleOfStudyChange,
}) => {
    if (inputLocked) {
        return (
            <>
            <p className={styles.cv__info__segment}>
                <label>
                    School name: {schoolName}
                </label>
                <label>
                    Title of study: {titleOfStudy}
                </label>
            </p> 
            </>
        )
    } else {
        return (
            <>  
            <p className={styles.cv__info__segment}>
                <label>
                    School name: <input className={styles.input__info} name="myInput" value={schoolName} onChange={handleSchoolNameChange}/>
                </label>
                <label>
                    Title of study: <input className={styles.input__info} name="myInput" value={titleOfStudy} onChange={handleTitleOfStudyChange}/>
                </label>
            </p>
            </>
        )
    }
}