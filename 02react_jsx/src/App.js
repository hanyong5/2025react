import logo from "./logo.svg";
import "./App.css";

function App() {
  const test = "안녕하세요";
  const style = {
    color: "blue",
  };

  const testFn = () => {
    console.log("testFn1");
  };
  // function testFn() {
  //   console.log("testFn");
  // }
  return (
    <div>
      <h3 style={{ color: "red" }}>test</h3>
      {test}
      {testFn()}
      <img src={logo} alt="" />
      <img src="images/logo.svg" alt="" />
    </div>
  );
}

export default App;
