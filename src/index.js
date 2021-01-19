import React from "react";
import ReactDom from "react-dom";

const greeting = <div>Hello React</div>;
const rootNode = document.getElementById("root");

ReactDom.render(greeting, rootNode);
