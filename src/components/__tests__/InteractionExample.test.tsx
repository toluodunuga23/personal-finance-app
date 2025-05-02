import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { AnyAction, Dispatch } from 'redux'
import budgetReducer from '../../state/budget/budgetSlice'

// A simple component to test interactions
const Counter = ({ onIncrement }: { onIncrement: () => void }) => {
  return (
    <div>
      <button data-testid="increment-button" onClick={onIncrement}>
        Increment
      </button>
    </div>
  )
}

describe('Component Interaction Tests', () => {
  it('calls the increment function when button is clicked', () => {
    // Create a mock function
    const mockIncrement = vi.fn()
    
    // Render the component with the mock function
    render(<Counter onIncrement={mockIncrement} />)
    
    // Find the button
    const button = screen.getByTestId('increment-button')
    
    // Simulate a click
    fireEvent.click(button)
    
    // Assert that the mock function was called
    expect(mockIncrement).toHaveBeenCalledTimes(1)
  })

  it('demonstrates testing with Redux', () => {
    // Create a test store
    const store = configureStore({
      reducer: {
        initalState: budgetReducer,
      },
      preloadedState: {
        initalState: { value: 0 }
      }
    })
    
    // Create a spy on the dispatch function instead of replacing it
    const dispatchSpy = vi.spyOn(store, 'dispatch')
    
    // Render a component that uses Redux
    render(
      <Provider store={store}>
        <div data-testid="redux-example">Redux Example</div>
      </Provider>
    )
    
    // Assert the component rendered
    expect(screen.getByTestId('redux-example')).toBeDefined()
  })
})
