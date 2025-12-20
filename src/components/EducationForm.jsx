import EducationLevelDropdown from "./EducationLevelDropdown";
import YearDropdown from "./YearDropdown";
import "../App.css";

export default function EducationForm({ onSubmit, initialValues, onClose }) {
  return (
    <div
      style={{
        padding: "2rem",
        width: "800px",
      }}
    >
      {/* nudge the X more to the top right corner */}
      <div
        className="modal-header"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <span>Education</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            class="w-6 h-6 dismiss"
            onClick={() => onClose(true)}
          >
            <path
              d="M4.39705 4.55379L4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L10 8.939L14.4697 4.46967C14.7626 4.17678 15.2374 4.17678 15.5303 4.46967C15.8232 4.76256 15.8232 5.23744 15.5303 5.53033L11.061 10L15.5303 14.4697C15.7966 14.7359 15.8208 15.1526 15.6029 15.4462L15.5303 15.5303C15.2641 15.7966 14.8474 15.8208 14.5538 15.6029L14.4697 15.5303L10 11.061L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303C4.17678 15.2374 4.17678 14.7626 4.46967 14.4697L8.939 10L4.46967 5.53033C4.2034 5.26406 4.1792 4.8474 4.39705 4.55379L4.46967 4.46967L4.39705 4.55379Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className="modal-content"
        style={{
          width: "100%",
        }}
      >
        <form
          method="post"
          onSubmit={onSubmit}
          style={{
            marginTop: "1.25rem",
          }}
        >
          <div>
            <div>
              <div>
                <label>Level of education</label>
                <div className="input-box">
                  <EducationLevelDropdown
                    value={initialValues.educationLevel}
                  ></EducationLevelDropdown>
                </div>
              </div>
              <div>
                <label>School name</label>
                <div className="input-box">
                  <input
                    type="text"
                    name="schoolName"
                    defaultValue={initialValues.schoolName}
                  />
                </div>
              </div>
              <div>
                <label>Subject</label>
                <div className="input-box">
                  <input
                    type="text"
                    name="subject"
                    defaultValue={initialValues.subject}
                  />
                </div>
              </div>
              <div
                className="edu-year"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <label>Starting</label>
                  <div className="input-box">
                    <YearDropdown
                      name="yearStarting"
                      value={initialValues.yearStarting}
                    ></YearDropdown>
                  </div>
                </div>
                <div>
                  <label>Ending</label>
                  <div className="input-box">
                    <YearDropdown
                      name="yearEnding"
                      value={initialValues.yearEnding}
                    ></YearDropdown>
                  </div>
                </div>
              </div>
              <div>
                <label>Country of education</label>
                <div className="input-box">
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div className="form-button">
              <button type="submit">Save changes</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
