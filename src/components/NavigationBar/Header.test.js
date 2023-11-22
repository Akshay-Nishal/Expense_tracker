import { render, screen } from "@testing-library/react"
import HeaderNav from "./HeaderNav"




describe('Welcome component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<HeaderNav/>)
    
        //Act
        //...nothing
        
        //Assert
        const headerNav = screen.getByText('Expense Tracker',{exact : false})
        expect(headerNav).toBeInTheDocument()
    })
})
