import React from 'react'
import './ErrorModel.css'

export default function ErrorModel(props) {
    return (
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
    )
}
