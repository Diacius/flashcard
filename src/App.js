import "./styles.css";

import { useState } from "react";
import { data, setName } from "./data";
import Card from "./Card";
localStorage.setItem('current-user-flashcards', data)
export default function App() {
  const [cardNumber, setCardNumber] = useState(0);
  const [answerShown, showAnswer] = useState(false);
  return (
    <div className="App">
      <h1 className="settitle">
        <span>{setName}</span>
      </h1>
      <h1>
        Card: {cardNumber + 1}/{data.length}
      </h1>
      <button onClick={previousCard}> &lt;-- </button>

      <div onClick={toggleAnswer}>
        <Card
          key={cardNumber}
          title={data[cardNumber].title}
          content={data[cardNumber].content}
          cardAnswerShown={answerShown}
        />
      </div>
      {/*<div className="itemsGrid">
        {data.map((item) => (
          <Card key={item.title} title={item.title} content={item.content} />
        ))}
        </div>*/}
      <button onClick={nextCard}> --&gt; </button>
    </div>
  );
  function previousCard() {
    if (cardNumber + 1 !== 1) {
      setCardNumber(cardNumber - 1);
      showAnswer(false);
    } else {
      alert("END");
    }
  }
  function nextCard() {
    if (cardNumber + 1 < data.length) {
      setCardNumber(cardNumber + 1);
      showAnswer(false);
    } else {
      alert("END");
    }
  }
  function toggleAnswer() {
    if (answerShown === false) {
      showAnswer(true);
    }
    if (answerShown === true) {
      showAnswer(false);
    }
  }
}
