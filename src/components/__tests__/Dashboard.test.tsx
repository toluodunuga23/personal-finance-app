import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Dashboard from '../Dashboard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// Removed unused import
import budgetReducer from '../../state/budget/budgetSlice'

// Create a test store with the necessary reducers
const createTestStore = () => 
  configureStore({
    reducer: {
      initalState: budgetReducer, // Match the exact state structure used in the component
    },
    preloadedState: {
      initalState: { value: 0 } // Provide initial state that matches what the component expects
    }
  })

describe('Dashboard Component', () => {
  it('renders without crashing', () => {
    const store = createTestStore()
    
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
    
    // This is a basic test - you would typically add more assertions
    // based on what you expect to see in your Dashboard component
    expect(document.body).toBeDefined()
  })
})
