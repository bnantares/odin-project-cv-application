'use client'

import { EducationalInfo } from "./components/EducationalInfo";
import { GeneralInfo } from "./components/GeneralInfo";
import { PracticalInfo } from "./components/PracticalInfo";
import { useState } from "react";
import styles from "./styles/styles.module.css";
import { SubmitButton } from "./components/SubmitButton";
import { EditButton } from "./components/EditButton";

const initialItems = 
  { 
    inputLocked: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 89771237121,
    schoolName: "",
    titleOfStudy: "",
    companyName: "",
    positionTitile: "",
    mainResponsibilities: ""
  };


export default function Home() {
  const [inputLocked, setInputLocked] = useState(initialItems.inputLocked);
  const [firstName, setFirstName] = useState(initialItems.firstName);
  const [lastName, setLastName] = useState(initialItems.lastName);
  const [email, setEmail] = useState(initialItems.email);
  const [phoneNumber, setPhoneNumber] = useState(initialItems.phoneNumber);
  const [schoolName, setSchoolName] = useState(initialItems.schoolName);
  const [titleOfStudy, setTitleOfStudy] = useState(initialItems.titleOfStudy);
  const [companyName, setCompanyName] = useState(initialItems.companyName);
  const [positionTitile, setPositionTitile] = useState(initialItems.positionTitile);
  const [mainResponsibilities, setMainResponsibilities] = useState(initialItems.mainResponsibilities);

  function handleSubmit() {
    setInputLocked(true)
  }

  function handleEdit() {
    setInputLocked(false)
  }

  function handleNameChange(e: any) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: any) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e: any) {
    setPhoneNumber(e.target.value);
  }

  function handleSchoolNameChange(e: any) {
    setSchoolName(e.target.value);
  }

  function handleTitleOfStudyChange(e: any) {
    setTitleOfStudy(e.target.value);
  }

  function handleCompanyNameChange(e: any) {
    setCompanyName(e.target.value);
  }

  function handlePositionTitileChange(e: any) {
    setPositionTitile(e.target.value);
  }

  function handleMainResponsibilitiesChange(e: any) {
    setMainResponsibilities(e.target.value);
  }

  let button: any;

  if (inputLocked) {
    button = <EditButton handleEdit={handleEdit}/>
  } else {
    button = <SubmitButton handleSubmit={handleSubmit}/>
  }

  return (
    <div className={styles.cv__form}>
      <header>Your resume here</header>
      <GeneralInfo
        inputLocked={inputLocked}
        firstName={firstName}
        handleNameChange={handleNameChange}
        lastName={lastName}
        handleLastNameChange={handleLastNameChange}
        email={email}
        handleEmailChange={handleEmailChange}
        phoneNubmer={phoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <EducationalInfo
        inputLocked={inputLocked} 
        schoolName={schoolName}
        handleSchoolNameChange={handleSchoolNameChange}
        titleOfStudy={titleOfStudy}
        handleTitleOfStudyChange={handleTitleOfStudyChange}
      />
      <PracticalInfo
        inputLocked={inputLocked}
        companyName={companyName}
        handleCompanyNameChange={handleCompanyNameChange}
        positionTitile={positionTitile}
        handlePositionTitileChange={handlePositionTitileChange}
        mainResponsibilities={mainResponsibilities}
        handleMainResponsibilitiesChange={handleMainResponsibilitiesChange}
      />

      {button}

    </div>
  );
}
