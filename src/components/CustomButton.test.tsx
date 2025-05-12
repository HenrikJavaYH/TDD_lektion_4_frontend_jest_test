import CustomButton, { ButtonState } from "./CustomButton"
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"







describe("Easy examples", () => {

    test("2 + 2 = 4", () => {
        expect(2+2).toBe(4)
    })

    test("Is 2 + 4 greater than zero", () => {
        expect(2+4).toBeGreaterThan(0)
    })
})


describe("Custom button component states", () => {


    //Idle
    test("Check if button component starts with idle", () => {})
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        //expect(ButtonState.idle).toBe(ButtonState.idle)
        expect(customButtonComponent).toHaveClass(ButtonState.idle)

    //Hover
    test("Check if button on hover state change", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        //expect(ButtonState.idle).toBe(ButtonState.idle)
        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)
    })

    //Clicked
    test("Custom Button component on click state change", () => {
        const buttonText: string = "signup"
        const { getByText } = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)

    })

    test("This test should fail for my github actions training", () => {
        expect(2+2).toBe(999)
    })

})

