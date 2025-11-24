import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import EducationForm from "./components/EducationForm";
import Modal from "./components/Modal";

function App() {
  const [education, setEducation] = useState([
    {
      schoolName: "Some school",
      subject: "Informatics",
      years: "2000-2003",
    },
  ]);
  const [general, setGeneral] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
  });
  const [experience, setExperince] = useState([
    {
      jobTitle: "",
      company: "",
      years: "",
      description: "",
    },
  ]);
  const [isModalOpen, setOpen] = useState(false);

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
          <Modal open={isModalOpen} onClose={() => setOpen(false)}>
            <EducationForm></EducationForm>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
