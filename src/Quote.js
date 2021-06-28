

import Instagram from "./instagram.png";
import Github from "./github.png";


function Quote(props) {



    function RandomNumber(max) {
        return Math.floor(Math.random() * max);
    }


    function give() {

        let pg = RandomNumber(102);
        let col = props.colorbook[RandomNumber(4)];



        props.setPag(pg ? pg : 0);
        props.setColor(col ? col : props.colorbook[0]);

    }


    return (

        <div className="Quote">
            <p className="text" style={{ color: props.color }}>
                <q>{props.quotes[props.pag].quote}</q></p>
            <p className="author">- {props.quotes[props.pag].author}</p>
            <div className="buttons">
                <a
                    href={"https://www.instagram.com/juanmojica17/"}
                    style={{
                        backgroundImage: `url(${Instagram})`,

                    }}
                    className="logo instagram"
                >
                </a>
                <a
                    href={"https://github.com/juanmojica17/quotesjuanmojica"}
                    style={{
                        backgroundImage: `url(${Github})`,

                    }}
                    className="logo instagram"
                >
                </a>


                <button

                    style={{ borderColor: props.color}}
                    onClick={function () {
                        give();
                    }}
                >
                    ►
                </button>
            </div>
        </div>
    );
}

export default Quote;