import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
let name = "Venky";
function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" about="About Us" />
      <br/>
      <br/>
      <div className="container"><TextForm area="Text Area" heading="Enter the text"/></div>      
      <About/>
      <br/>
      <br/>
      
    </>
  );
}

export default App;
