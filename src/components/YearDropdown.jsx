import Dropdown from "./DropdownComponent";

export default function YearDropdown({ value, name }) {
  const current = new Date().getFullYear();
  const year = Array.from({ length: 60 }, (v, i) => current - i);
  console.log(year);

  return <Dropdown value={value} name={name} options={year}></Dropdown>;
}
