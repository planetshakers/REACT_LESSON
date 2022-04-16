import React from "react";

const colorfulMessage = (props) => {
  // console.log("カラフル")
  // console.log(props) 値が渡ってきているか確認;
  // 分割代入で毎回propsと入力しなくてもいいようにする
  const { color, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "22px"
  };
  return <h1 style={contentStyle}>{children}</h1>;
};

export default colorfulMessage;
