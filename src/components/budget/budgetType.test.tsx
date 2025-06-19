import {render, screen} from "@testing-library/react"
import BudgetType from "./budgetType";
import userEvent from "@testing-library/user-event";
import {describe, it, expect, vi} from "vitest";

// npm test -- budgetType.test.tsx



describe("BudgetType", () => {
   
    it("renders without crashing", () => {
        render(<BudgetType activeStep={0} setActiveStep={() => {}} />);
    });

    it("Renders Monthly Income Label", () => {
        render(<BudgetType activeStep={0} setActiveStep={() => {}} />);
        const label = screen.getByText("Monthly Income");
        expect(label).toBeInTheDocument();
    })

    it("Calls setActiveStep with incremented value when button is clicked", async () => {
        // Create a mock function to track calls to setActiveStep
        const mockSetActiveStep = vi.fn();
        
        render(
            <BudgetType 
                activeStep={0} 
                setActiveStep={mockSetActiveStep} 
            />
        );
        
        // First, select a budget type to enable the button
        const budgetType = screen.getByText("50/30/20 Budget");
        await userEvent.click(budgetType);
        
        // Now the button should be enabled
        const button = screen.getByRole("button", { name: "Create Your Budget" });
        await userEvent.click(button);
        
        // Verify setActiveStep was called with the next step (0 + 1)
        expect(mockSetActiveStep).toHaveBeenCalledWith(1);
    });



});
