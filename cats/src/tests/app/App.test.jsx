import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import App from "../../App";


test('first test', () => {
    render(<App />)
})

test('integration test', () => {
    render(<App />)
    const button = screen.getAllByRole('button');
    button.forEach((i) => {
        const text = screen.getByText('p')
        fireEvent.click(i)

    });

    
})


