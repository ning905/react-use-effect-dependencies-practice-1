function SelectTypeForm(props) {
  // Write code here...
  const { setDataType } = props;

  function handleTypeChange(e) {
    console.log("Select new type: " + e.target.value);
    setDataType(e.target.value);
  }

  return (
    <form className="three-column-grid__expand-two gap-md">
      <label htmlFor="type">Data Type</label>
      <select id="type" name="type" onChange={handleTypeChange}>
        <option value="">Please select...</option>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        <option value="starships">Starships</option>
      </select>
    </form>
  );
}

export default SelectTypeForm;
