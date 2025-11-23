export default function EducationSection({ entries, onAdd, onEdit, onDelete }) {
  const eduArr = entries.education;
  console.log(eduArr.length);

  if (eduArr.length === 0)
    return (
      <div>
        <div>
          <header>Education</header>
        </div>
        <div>
          <button type="button">+ add new education</button>
        </div>
      </div>
    );
  return (
    <div>
      <div>
        <header>Education</header>
      </div>
      <div>
        {eduArr.map((entry) => (
          <article key={entry.id}>
            <div>
              <div>
                <strong>{entry.schoolName}</strong>
                <button>Change</button>
                <button>Delete</button>
              </div>
              <div style={{}}>
                <div>{entry.subject}</div>
                <div>{entry.years}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div>
        <button>+ Add new education</button>
      </div>
    </div>
  );
}
