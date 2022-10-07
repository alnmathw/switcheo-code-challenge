import Button from "./components/Button";
import FormRow from "./components/FormRow";

const App = () => {
  return (
    <div className="App">
      <form onsubmit="return !1">
        <FormRow text="ETH Address" />
        <FormRow text="Amount to Send"/>
        <FormRow text ="OTP Authentication"/>
        <Button text="SEND TOKENS"/>
      </form>
    </div>
  );
}

export default App;
