export default function EditorBox(props) {
    return(
        <textarea key={props.id} value={props.title} name={props.id} onChange={handleNewCardTitle}></textarea>
    );
}