import { useState } from "react";
import "./App.css";

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
        schoolName: "",
        subject: "",
        years: "",
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

  return (
    <>
      <div>ge</div>
    </>
  );
}

export default App;
