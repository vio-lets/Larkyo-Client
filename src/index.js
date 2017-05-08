import React from 'react'
import ReactDOM from 'react-dom';
import Home from './screens/home'

class App extends React.Component {
    render() {
        return(
            // Common header if any

            <Home/>

            // Common footer if any
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);