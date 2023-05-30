import React from 'react'
import Chatbot from "react-chatbot-kit";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./bot.css";

export default function Bot() {
  return (
    <>
    <div className="app">
      <div className="App mx-auto col-md-6 col-sm-8 col-lg-4 cpl-xl-3 my-5">
        <Chatbot
          config={Config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  </>
  )
}
