
import Quote from "./Quote";

function Label(props) {

    return (
        <div className="Label" style={{ boxShadow: props.color }}>
            <Quote
                setQuotes={props.setQuotes}
                setPag={props.setPag}
                setColor={props.setColor}
                colorbook={props.colorbook}
                quotes={props.quotes}
                pag={props.pag}
                color={props.color}

            />
        </div>
    );
}

export default Label;