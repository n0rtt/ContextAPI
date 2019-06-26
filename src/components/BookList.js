import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {

    // including context to this file
    static contextType = ThemeContext

    render() {

        // destructure states saved in context
        const { isLightTheme, light, dark } = this.context

        const theme = isLightTheme ? light : dark

        return (
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of kings</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;