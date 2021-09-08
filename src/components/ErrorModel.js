import React from 'react';
import ReactDOM from 'react-dom';
import './ErrorModel.css';

const ModelOverlay = (props) => {
                    return <div className="background">
                    <div className="modal">
                    <header className="modal__header">
                            <h2>{props.title}</h2>
                        </header>
                        <div className="modal__error-message">
                            {props.message}
                        </div>
                        <footer className="modal__footer"> 
                        <button onClick={props.onConfirm}>Okay</button>
                        </footer>
                    </div>
                    </div>
                    
}

export default function ErrorModel(props) {
    return (
        <>
        {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message}  onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </>
    )
}
