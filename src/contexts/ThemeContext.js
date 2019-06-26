import React, { createContext, Component } from 'react';

// creating context and putting in to variable
export const ThemeContext = createContext()

class ThemeContextProvider extends Component {

    // setting states for context
    state = { 
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
     }

     // function to change the state of theme
     toggleTheme = () => {
         this.setState({
             isLightTheme: !this.state.isLightTheme
         })
     }

    render() { 
        return ( 

            // provider from createContext()
            // passes and saves states and functions to context whicj can be used later in other components
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {/* children are wrapped elements in app.js passed here as props */}
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;