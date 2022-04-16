/* eslint react-hooks/exhaustive-deps: off  */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  const onClickCountup = () => {
    setNum(num + 1);
  };

  // Reactではステートが変わる度に、再レンダリングされる
  // useEffect関数は第２引数に配列を取ることができる
  // このコンポーネントで処理を一回だけしたい時に使える
  // ステートが変わる度に毎回情報を取ってくるのは大変
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // 左がfalseのときだけ右を返す
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 右がtrueのときだけ左を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <ColorfulMessage color="blue">ハロー</ColorfulMessage>
      <ColorfulMessage color="red">こんばんは</ColorfulMessage>
      <ColorfulMessage color="pink">おはよう</ColorfulMessage>
      {/* <ColorfulMessage color="red" message="こんばんは" /> */}
      {/* <ColorfulMessage color="pink" message="おはよう" /> */}
      <button onClick={onClickCountup}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {/* faceShowFlagがTrueのときに絵文字を返す */}
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
