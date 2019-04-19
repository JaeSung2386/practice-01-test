import React, { Component } from "react";

import Navigation from './nav/Navigation';
import Contents from "./Contents";

class App extends Component {
    render() {
        return(
            <div id='wrapper'>
                <Navigation/>
                <Contents/>
            </div>
        );
    }
}
export default App;