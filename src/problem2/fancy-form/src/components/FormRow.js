const FormRow = ({ text }) => {
  return (
    <div>
        <label for="input-address">{text}</label>
        <input id="input-address" />
    </div>
  );
}

export default FormRow;
