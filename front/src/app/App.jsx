import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState(["Hello, man!", "Hello, faggot!"]);
  const messagesDiv = messages.map((message, i) => (
    <div
      className={
        "w-1/2 rounded-xl p-2 m-2 text-white shadow-lg " +
        (i % 2 ? "bg-sky-500 self-start" : "bg-indigo-400 self-end")
      }
    >
      {message}
    </div>
  ));
  return (
    <div class="flex bg-sky-100 flex-col max-w-lg h-full mx-auto font-['Jetbrains_Mono'] text-sm">
      {messagesDiv}
      <input
        type="text"
        className="m-2 mt-auto rounded p-2 my-2 h-10 focus:outline-0 focus:border border-black"
      ></input>
    </div>
  );
  <div class="max-w-2xl mx-auto border flex items-center justify-center">
    <button
      class="border-5"
      type="button"
      onClick={() => setCount((count) => count + 1)}
    >
      count is: {count}
    </button>
  </div>;
}

export default App;
