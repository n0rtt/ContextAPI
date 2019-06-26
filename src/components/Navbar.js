import React, {Component} from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    render() { 
        return ( 
            // another method to provide states in functional components

            <AuthContext.Consumer>
                {(authContext) => (
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            
                            //ThemeContext conditions
                            const {isLightTheme, dark, light} = themeContext
                            const theme = isLightTheme ? light : dark
                            
                            // AuthContext conditions
                            const { isAuthenticated, toggleAuth } = authContext
                            return (
                                <nav style={{background: theme.ui, color: theme.syntax}}>
                                    <h1>Context App</h1>
                                    <div onClick={toggleAuth}>
                                        { isAuthenticated ? 'Logged in' : 'Logged out' }
                                    </div>
                                    <ul>
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                            )
                        }}
                    </ThemeContext.Consumer>
                )}          
            </AuthContext.Consumer>
         );
    }
}
 
export default Navbar;