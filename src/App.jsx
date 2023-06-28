import { useState } from "react";
import Description from "./description";

// export default function bebas() {
//   let counterBiasa = 0;
//   const [counterReactive, setCounterReactive] = useState(-5);
//   const [reactiveString, setReactiveString] = useState("ini string");
//   const [reactiveBoolean, setReactiveBoolean] = useState(false);

//   const tambahSatuCounterBiasa = () => {
//     counterBiasa++;
//     console.log(counterBiasa);
//   };

//   const tambahSatuCounterReactive = () => {
//     const hasilTambahSatu = counterReactive + 1;
//     setCounterReactive(hasilTambahSatu);
//   };

//   const onClickGenerateRandonString = () => {
//     setReactiveString("string baru: " + Math.random(10));
//   };

//   return (
//     <div
//       style={{
//         display: "grid",
//         alignItems: "center",
//         justifyContent: "center",
//         width: "100vw",
//         textAlign: "center",
//       }}
//     >
//       <h1>Ini Project Bebas</h1>
//       <button onClick={tambahSatuCounterBiasa}>Counter: {counterBiasa}</button>
//       <br />
//       <button onClick={tambahSatuCounterReactive}>
//         COUNTER REACTIVE: {counterReactive}
//       </button>
//       <br />
//       <button onClick={onClickGenerateRandonString}>{reactiveString}</button>
//       <br />
//     </div>
//   );
// }

export default function mencari() {
  const [inputVal, setInputVal] = useState("");
  const [inputs, setInputs] = useState([]);

  const onChangeInput = (event) => {
    setInputVal(event.target.value);
  };

  const onClicktambahArray = () => {
    const newArray = [...inputs, inputVal];
    setInputs(newArray);
  };

  const onDeleteItem = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <input value={inputVal} onChange={onChangeInput} placeholder="Simpan" />
      <button onClick={onClicktambahArray}>Submit</button>
      <ul>
        {inputs.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default function Solehah() {
//   const [isShowString, setIsShowString] = useState(false);

//   const onClickShowHideString = () => {
//     const showStringBaru = !isShowString;
//     setIsShowString(showStringBaru);
//   };

//   return (
//     <div style={{ display: "grid", justifyContent: "center", width: "100vw" }}>
//       {isShowString ? <h1>TAMPIL STRINGNYA!</h1> : <></>}
//       <button onClick={onClickShowHideString}>
//         {isShowString ? "Hide" : "Show"}
//       </button>
//     </div>
//   );
// }

// export default function app() {
//   const [inputValue, setInputValue] = useState("");

//   const onChangeInput = (event) => {
//     setInputValue(event.target.value);
//   };
//   const gantiTulisanMenjadiHelloWorld = () => {
//     setInputValue("Hello World!");
//   };

//   return (
//     <div
//       style={{
//         display: "grid",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100vw",
//       }}
//     >
//       <input value={inputValue} onChange={onChangeInput} />
//       <br />
//       <br />
//       <br />
//       <Description
//         tulisan={inputValue}
//         gantiTulisanMenjadiHelloWorld={gantiTulisanMenjadiHelloWorld}
//       />
//     </div>
//   );
// }
