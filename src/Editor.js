import "./styles.css";
import { useState } from "react";
import react from "react";

export default function Editor() {
    const [stater, setStater] = useState(59);
    // const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('current-user-flashcards')))
    var cardData = JSON.parse(localStorage.getItem('current-user-flashcards'))
    console.log(cardData)
    function handleNewCardData(type, event) {
        // Get the data of the card the user tries to update
        console.log(event.target.name)
        console.log(type)
        // Change the data to the new value
        console.log(event.target.boxtype)
        if (type === "title"){
        cardData[event.target.name].title = event.target.value}
        if (type === "content"){
          cardData[event.target.name].content = event.target.value
        }
        localStorage.setItem('current-user-flashcards', JSON.stringify(cardData))
        setStater(Math.random())
        // var a = cardData.map((item) => (<textarea key={item.id} value={item.title} name={item.id} onChange={handleNewCardTitle}></textarea>))
      };
      
  return (
    <div className="App">
      {cardData.map((item) => (
          <div>
            <p>Title</p>
            <textarea key={Math.random()} value={item.title} name={item.id} fixer={stater} boxtype={"title"} onChange={(e) => handleNewCardData("title", e)}></textarea>
            <p>Answer</p>
            <textarea key={item.id} value={item.content} name={item.id} fixer={stater} boxtype={"content"} onChange={(e) => handleNewCardData("content", e)}></textarea>
          </div>
      ))}
    <h2>Due to bad code, this works better if you copy and paste your flashcards into the boxes.</h2>
    {/*<textarea key={cardData[0].id} value={cardData[0].title} name={cardData[0].id} onChange={handleNewCardTitle}></textarea>*/}
    </div>
  );
}
