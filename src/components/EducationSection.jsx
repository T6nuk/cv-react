export default function EducationSection({ entries, onAdd, onEdit, onDelete }) {
  const eduArr = entries;
  console.log(eduArr.length);

  if (eduArr.length === 0)
    return (
      <div>
        <div>
          <header>Education</header>
        </div>
        <div>
          <button type="button" onClick={onAdd}>
            + add new education
          </button>
        </div>
      </div>
    );
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "left",
      }}
    >
      <div
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          paddingLeft: "1.75rem",
          borderBottom: "1px solid #d0ceceff",
        }}
      >
        <header>Education</header>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1.75rem",
        }}
      >
        {eduArr.map((entry) => (
          <article key={entry.id}>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <strong>
                  {entry.schoolName} ({entry.country}, {entry.educationLevel})
                </strong>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <a type="button" onClick={() => onEdit(entry.id)}>
                    Change
                  </a>
                  <a type="button" onClick={() => onDelete(entry.id)}>
                    Delete
                  </a>
                </div>
              </div>

              <div style={{}}>
                <div>{entry.subject}</div>
                <div>
                  {entry.yearStarting} - {entry.yearEnding}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div
        style={{
          paddingLeft: "1.5rem",
          paddingBottom: "1rem",
        }}
      >
        <button
          type="button"
          onClick={onAdd}
          style={{
            borderRadius: "9999px",
            backgroundColor: "white",
            borderColor: "rgb(214 222 230)",
            height: "fit-content",
            lineHeight: "0.5rem",
          }}
        >
          + Add new education
        </button>
      </div>
    </div>
  );
}
