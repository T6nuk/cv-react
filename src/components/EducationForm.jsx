export default function EducationForm({ onSubmit }) {
  return (
    <div>
      <form method="post" onSubmit={onSubmit}>
        <div>
          <div>
            <div>
              <label>Level of education</label>
              <div>
                <select name="educationLevel">
                  <option value="middleSchool">Middle school</option>
                  <option value="highSchool">Highschool</option>
                  <option value="bachelors">Bacherlors degree</option>
                </select>
              </div>
            </div>

            <div>
              <label>Country of education</label>
              <div>
                <input type="text" name="country" />
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
