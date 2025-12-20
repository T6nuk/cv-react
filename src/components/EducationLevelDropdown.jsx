import Dropdown from "./DropdownComponent";

export default function EducationLevelDropdown({ value }) {
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
    <Dropdown
      name="educationLevel"
      options={eduLevels}
      value={value}
    ></Dropdown>
  );
}
