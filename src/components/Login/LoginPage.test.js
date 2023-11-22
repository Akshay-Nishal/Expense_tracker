import { render, screen } from "@testing-library/react"
import LoginPage from "./LoginPage"



describe('LoginForm component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<LoginPage/>)
    
        //Act
        //...nothing
        
        //Assert
        const LoginMessage = screen.getByText('Login Successful',{exact : false})
        expect(LoginMessage).toBeInTheDocument()
    })
})
