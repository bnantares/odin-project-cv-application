import { FunctionComponent } from "react";
import styles from "./../styles/styles.module.css";

interface Props {
    inputLocked: boolean;
    companyName: string;
    handleCompanyNameChange: any;
    positionTitile: string;
    handlePositionTitileChange: any;
    mainResponsibilities: string;
    handleMainResponsibilitiesChange: any;
}

export const PracticalInfo: FunctionComponent<Props> = ({
    inputLocked,
    companyName,
    handleCompanyNameChange,
    positionTitile,
    handlePositionTitileChange,
    mainResponsibilities,
    handleMainResponsibilitiesChange,
}) => {
    if (inputLocked) {
        return (
            <>
                <p className={styles.cv__info__segment}>
                    <label>
                        Company name: {companyName}
                    </label>
                    <label>
                        Position titile: {positionTitile}
                    </label>
                    <label>
                        Main responsibilities: {mainResponsibilities}
                    </label>    
                </p>
            </>
        )
    } else {
        return (
            <>  
                <p className={styles.cv__info__segment}>
                    <label>
                        Company name: <input className={styles.input__info} name="myInput" value={companyName} onChange={handleCompanyNameChange}/>
                    </label>
                    <label>
                        Position titile: <input className={styles.input__info} name="myInput" value={positionTitile} onChange={handlePositionTitileChange}/>
                    </label>
                    <label>
                        Main responsibilities: <textarea className={styles.input__info} name="myTextareaInput" rows={4} cols={40} value={mainResponsibilities} onChange={handleMainResponsibilitiesChange}/>
                    </label>
                </p>
            </>
        )
    }
}