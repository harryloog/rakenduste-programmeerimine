import React from "react";
import { render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import Item from "antd/lib/list/Item";

it('checks if greeting text title exists', () => {
    const div = document.CreateElement('div')
    render(<Greeting/>, div)

    const titleElement = screen.queryByText(/greeting title/i)

    expect(titleElement).not.toBeNull()
})