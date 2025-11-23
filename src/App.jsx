import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);
  const data = {
    general: {
      fullName: "",
      email: "",
      phone: "",
      birthDate: "",
    },
    education: [
      {
        schoolName: "Some school",
        subject: "Informatics",
        years: "2000-2003",
      },
      {
        schoolName: "test4",
        subject: "test5",
        years: "test6",
      },
    ],
    experience: [
      {
        jobTitle: "",
        company: "",
        years: "",
        description: "",
      },
    ],
  };

  function onAdd() {}

  return (
    <>
      <div>
        <EducationSection entries={data}></EducationSection>
      </div>
      <div>
        <Modal></Modal>
      </div>
    </>
  );
}

export default App;
