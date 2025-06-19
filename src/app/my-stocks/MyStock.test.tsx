import {render, screen, waitFor} from "@testing-library/react"
import MyStocks from "./page";
import userEvent from "@testing-library/user-event";
import {describe, it, expect, vi} from "vitest";

describe("MyStocks", () => {
beforeEach(() => {
   global.fetch = vi.fn() //Mock fetch
});
afterEach(() => {
    vi.resetAllMocks() //Reset mocks
})
    it("renders without crashing", () => {
        render(<MyStocks />);
    });

    it("Search Button is Clickable", () => {
        render(<MyStocks />);
        const button = screen.getByRole("button", { name: "Search" });
        expect(button).toBeEnabled();
    })



    // it("fetches data and displays stock search", async () => {
    //     global.fetch.mockResolvedValueOnce({
    //       ok: true,
    //       json: async () => ({
    //         "Meta Data": {
    //             "1. Information": "Monthly Prices (open, high, low, close) and Volumes",
    //             "2. Symbol": "NFLX",
    //             "3. Last Refreshed": "2025-06-18",
    //             "4. Time Zone": "US/Eastern"
    //         },
    //         "Monthly Time Series": {
    //             "2025-06-18": {
    //                 "1. open": "1201.2000",
    //                 "2. high": "1262.8100",
    //                 "3. low": "1180.6100",
    //                 "4. close": "1222.2900",
    //                 "5. volume": "32203184"
    //             },
    //         }
    //     }),
    //     });
      
    //     render(<MyStocks />);
      
    //     await waitFor(() => {
    //       // Use a flexible matcher
    //       expect(screen.getByText((text) => text.includes("NFLX"))).toBeInTheDocument();
    //     });
    //   });
      
 



});