import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import Modal from "./components/Modal";

function App() {
  const [education, setEducation] = useState([
    {
      schoolName: "Some school",
      subject: "Informatics",
      years: "2000-2003",
    },
  ]);
  const [isModalOpen, setOpen] = useState(false);

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

  function handleAddEducation() {
    setOpen(true);
  }

  return (
    <>
      <div>
        <EducationSection
          entries={education}
          onAdd={handleAddEducation}
        ></EducationSection>
        {isModalOpen && (
          <Modal open={isModalOpen} onClose={() => setOpen(false)}></Modal>
        )}
      </div>
    </>
  );
}

export default App;
