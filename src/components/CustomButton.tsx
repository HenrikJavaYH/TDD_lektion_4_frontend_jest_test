//Enum - #3 differnet states for button.

import { useState } from "react"

// IDLE || HOVER || CLICKED
export enum ButtonState {
    idle = "idle",
    hover = "hover",
    clicked = "clicked",
}

interface buttonProps {
    buttonText: string
}



export default function CustomButton(props: buttonProps) {
const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)

    return (<input 
        type="button" 
        value={props.buttonText}
        className={buttonState}
        onMouseLeave={() => {
            setButtonState(ButtonState.idle)
        }}
        onMouseEnter={() => {
            setButtonState(ButtonState.hover)
        }}
        onClick={() => {
            setButtonState(ButtonState.clicked)
        }}
        />
)}