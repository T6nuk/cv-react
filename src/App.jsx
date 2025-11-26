import { useState } from "react";
import "./App.css";
import EducationSection from "./components/EducationSection";
import EducationForm from "./components/EducationForm";
import Modal from "./components/Modal";

function App() {
  const [education, setEducation] = useState([]);
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
  const [modalMode, setMode] = useState("");
  const [selectedId, setId] = useState();

  const emptyEducation = {
    country: "",
    educationLevel: "",
    schoolName: "",
    subject: "",
    years: "",
  };

  function handleAddEducation() {
    setOpen(true);
    setMode("add");
    setId(null);
  }
  function handleEditEducation(id) {
    setOpen(true);
    setMode("edit");
    setId(id);
  }

  function generateId() {
    return crypto.randomUUID();
  }
  let initialValues = "";

  if (modalMode === "edit") {
    initialValues = education.find((e) => e.id === selectedId);
  } else {
    initialValues = emptyEducation;
  }

  console.log(initialValues);

  function handleSubmitEducation(e) {
    console.log(modalMode);

    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const id = generateId();
    const formJson = Object.fromEntries(formData.entries());
    let newEducation = {
      ...formJson,
      id,
    };

    if (modalMode === "add") {
      setEducation((prev) => [...prev, newEducation]);
    }

    console.log("selected" + selectedId);
  }

  return (
    <>
      <div>
        <EducationSection
          entries={education}
          onAdd={handleAddEducation}
          onEdit={handleEditEducation}
        ></EducationSection>
        {isModalOpen && (
          <Modal open={isModalOpen} onClose={() => setOpen(false)}>
            <EducationForm
              onSubmit={handleSubmitEducation}
              initialValues={initialValues}
            ></EducationForm>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
