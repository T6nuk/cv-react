import Dropdown from "./DropdownComponent";

export default function EducationForm({ onSubmit, initialValues }) {
  const eduLevels = [
    "Elementary school",
    "Middle school",
    "High school",
    "Vocational school",
    "Bachelor",
    "Master",
    "Doctorate",
  ];
  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <div>
          <div>
            <div>
              <label>Level of education</label>
              <div>
                <Dropdown
                  name="eductionLevel"
                  options={eduLevels}
                  value={initialValues.educationLevel}
                ></Dropdown>
              </div>
            </div>
            <div>
              <label>School name</label>
              <div>
                <input
                  type="text"
                  name="schoolName"
                  defaultValue={initialValues.schoolName}
                />
              </div>
            </div>
            <div>
              <label>Subject</label>
              <div>
                <input
                  type="text"
                  name="subject"
                  defaultValue={initialValues.subject}
                />
              </div>
            </div>
            <div>
              <label>Country of education</label>
              <div>
                <input
                  type="text"
                  name="country"
                  defaultValue={initialValues.country}
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}
