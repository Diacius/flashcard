import "./styles.css";
export default function Card(props) {
  return (
    <div className="Card">
      <div className="CardInner">
        {!props.cardAnswerShown ? (
          <h1 className="Title">{props.title}</h1>
        ) : (
          <h1 className="Answer">{props.content}</h1>
        )}
      </div>
    </div>
  );
  /*function handleClick() {
    if (answerShown === false) {
      showAnswer(true);
    }
    if (answerShown === true) {
      showAnswer(false);
    }
  }*/
}
