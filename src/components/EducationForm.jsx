import Dropdown from "./DropdownComponent";

export default function EducationForm({ onSubmit, initialValues }) {
  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <div>
          <div>
            <div>
              <label>Level of education</label>
              <div>
                {/* <select
                  name="educationLevel"
                  defaultValue={initialValues.educationLevel}
                >
                  <option value="middleSchool">Middle school</option>
                  <option value="highSchool">Highschool</option>
                  <option value="bachelors">Bacherlors degree</option>
                </select> */}
                <Dropdown></Dropdown>
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
