import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            inputString: '',
            outputMarkdown: ''
        }
    }

    componentDidMount(){
    }

    handleChange(e){
        this.setState({
            outputMarkdown: marked(e.target.value) 
        });
    }

    render(){
        return (
            <div className="container">
                <textarea id="editor" onChange={this.handleChange}>
                </textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html: this.state.outputMarkdown}}>
                </div>
            </div>
        )
    }
}

export default App;
