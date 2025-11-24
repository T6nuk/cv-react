export default function EducationForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <div>
            <div>
              <label>Level of education</label>
              <div>
                <input type="text" name="lvlEducation" />
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
