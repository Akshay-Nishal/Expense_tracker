import { render, screen } from "@testing-library/react"
import Welcome from "./Welcome"




describe('Welcome component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<Welcome/>)
    
        //Act
        //...nothing
        
        //Assert
        const welcomeMessage = screen.getByText('Welcome to Expense Tracker App',{exact : false})
        expect(welcomeMessage).toBeInTheDocument()
    })
})
