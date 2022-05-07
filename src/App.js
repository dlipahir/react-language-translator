/*const encodedParams = new URLSearchParams();
encodedParams.append("source_language", "en");
encodedParams.append("target_language", "gu");
encodedParams.append("text", "What is your name?");

const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    "X-RapidAPI-Key": "d149cd54a2msh866b75e1b9b1e4ap1de6cajsn77c0c5a256b4",
  },
  body: encodedParams,
};

fetch("https://text-translator2.p.rapidapi.com/translate", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/
import OutputBox from "./components/input-box/output-box.components";
import "./App.css";
import { useState, useEffect } from "react";
import SelectLang from "./components/language-select/SelectLang.components";
/*
let languages = [
  { code: "af", name: "Afrikaans" },
  { code: "sq", name: "Albanian" },
  { code: "zh-TW", name: "Chinese (Traditional)" },
  { code: "en", name: "English" },
  { code: "gu", name: "Gujarati" },
  { code: "hi", name: "Hindi" },
];*/

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    "X-RapidAPI-Key": "d149cd54a2msh866b75e1b9b1e4ap1de6cajsn77c0c5a256b4",
  },
};
/*
fetch("https://text-translator2.p.rapidapi.com/getLanguages", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response.data.languages);
    const languages = response.data.languages;
  })
  .catch((err) => console.error(err));
*/
const App = () => {
  // console.log("render");
  const [input, setInput] = useState({ data: "", from: "", to: "" });
  const [sendInput, setSendInput] = useState({ data: "", from: "", to: "" });
  const [languages, setLanguages] = useState([
    { code: "af", name: "Afrikaans" },
    { code: "sq", name: "Albanian" },
    { code: "zh-TW", name: "Chinese (Traditional)" },
  ]);
  useEffect(() => {
    fetch("https://text-translator2.p.rapidapi.com/getLanguages", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data.languages);
        setLanguages(response.data.languages);
      })
      .catch((err) => console.error(err));
  }, []);

  const chngData = (e) => {
    setInput({ ...input, data: e.target.value });
  };
  const FromLang = (e) => {
    setInput({
      ...input,
      from: e.target.options[e.target.selectedIndex].getAttribute("code"),
    });
  };
  const ToLang = (e) => {
    setInput({
      ...input,
      to: e.target.options[e.target.selectedIndex].getAttribute("code"),
    });
  };

  const sendData = () => {
    setSendInput(input);
  };

  return (
    <div className="outer">
      <h1 className="heading">TRANSLATOR</h1>
      <div className="inner">
        <div className="container">
          <SelectLang languages={languages} selectHandler={FromLang} />
          <textarea className="box" onChange={chngData} />
        </div>
        <div className="container">
          <SelectLang languages={languages} selectHandler={ToLang} />
          <OutputBox value={sendInput} />
        </div>
      </div>
      <button onClick={sendData} className="btn">
        Translate
      </button>
    </div>
  );
};

export default App;
