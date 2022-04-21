// import { render, screen } from "@testing-library/react";
// import { createMemoryHistory } from "history";
// import React from "react";
// import { Router } from "react-router-dom";
// import App from "../App";

// describe("Full App component testing", () => {
//     test("full app rendering", () => {
//         render(<App />);
//         const linkElement = screen.getByTestId("app");
//         expect(linkElement).toBeInTheDocument();
//     });

//     test("should render CountryInfo page component", () => {
//         const history = createMemoryHistory({
//             initialEntries: ["/country/Bangladesh"],
//         });
//         render(
//             <Router history={history}>
//                 <App />
//             </Router>
//         );

//         expect(history.location.pathname).toBe("/country/Bangladesh");
//     });

//     test("landing on a bad page", () => {
//         const history = createMemoryHistory({
//             initialEntries: ["/some/bad/routes"],
//         });
//         render(
//             <Router history={history}>
//                 <App />
//             </Router>
//         );

//         expect(history.location.pathname).toBe("/some/bad/routes");
//     });
// });

import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import App from "../App";

jest.mock("../Compoents/Home.tsx", () => {
    const MockName = () => <div>HomePageMock</div>;
    return MockName;
});

describe("should test react router", () => {
    test("should render Home page component", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    });

    test("should render CountryInfo page component", () => {
        const history = createMemoryHistory({
            initialEntries: ["/country/Bangladesh"],
        });
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        expect(history.location.pathname).toBe("/country/Bangladesh");
    });

    test("landing on a bad page", () => {
        const history = createMemoryHistory({
            initialEntries: ["/some/bad/routes"],
        });
        render(
            <Router history={history}>
                <App />
            </Router>
        );

        expect(history.location.pathname).toBe("/some/bad/routes");
    });
});
