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
      }}
    >
      <div>
        <header>Education</header>
      </div>
      <div>
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
      <div>
        <button type="button" onClick={onAdd}>
          + Add new education
        </button>
      </div>
    </div>
  );
}
