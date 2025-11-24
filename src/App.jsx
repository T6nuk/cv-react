import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import EducationForm from "./components/EducationForm";
import Modal from "./components/Modal";

function App() {
  const [education, setEducation] = useState([
    // {
    //   country: "Estonia",
    //   educationLevel: "Bachelors",
    //   schoolName: "Some school",
    //   subject: "Informatics",
    //   years: "2000-2003",
    // },
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

  function generateId() {
    return crypto.randomUUID();
  }

  function handleSubmitEducation(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const id = generateId();
    const formJson = Object.fromEntries(formData.entries());
    let newEducation = {
      ...formJson,
      id,
    };
    setEducation((prev) => [...prev, newEducation]);

    console.log(newEducation);
    console.log(education);
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
            <EducationForm onSubmit={handleSubmitEducation}></EducationForm>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
