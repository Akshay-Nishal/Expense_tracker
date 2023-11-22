import { render, screen } from "@testing-library/react"
import Logout from "./Logout"



describe('Logout component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<Logout/>)
    
        //Act
        //...nothing
        
        //Assert
        const Logout = screen.getByText('Logout',{exact : false})
        expect(Logout).toBeInTheDocument()
    })
})
