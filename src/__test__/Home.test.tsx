import { fireEvent, render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import Home from "../Compoents/Home";

describe("App testing", () => {
    test("render test of input field and button", () => {
        render(<Home />);
        const inputEl = screen.getByTestId("country_input");
        const submit = screen.getByTestId("submit");

        expect(inputEl).toBeInTheDocument();
        expect(submit).toBeInTheDocument();
    });

    test("input value is updated correctly", () => {
        render(<Home />);

        const inputEl = screen.getByTestId("country_input");
        UserEvent.type(inputEl, "Bangladesh");

        expect(inputEl).toHaveValue("Bangladesh");
    });
    test("input value is Linked successfully", () => {
        render(<Home />);

        const linkElement = screen.getByTestId("link");
        expect(linkElement).toBeInTheDocument();
    });

    test("enables the submit button when the input is filled out", () => {
        render(<Home />);

        const inputEl = screen.getByTestId("country_input");
        const submit = screen.getByTestId("submit");

        fireEvent.change(inputEl, { target: { value: "bd" } });

        expect(submit).not.toHaveClass("Mui-disabled");
    });
});
