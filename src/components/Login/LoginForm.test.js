import { render, screen } from "@testing-library/react"
import LoginForm from "./LoginForm"




describe('LoginForm component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<LoginForm/>)
    
        //Act
        //...nothing
        
        //Assert
        const LoginForm = screen.getByText('Confirm Password',{exact : false})
        expect(LoginForm).toBeInTheDocument()
    })
})
