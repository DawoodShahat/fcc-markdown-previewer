import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
    gfm: true,
    breaks: true
});

const initial = 
`
<a href="https://marked.js.org" target="_blank">
  <img width="60px" height="60px" src="https://marked.js.org/img/logo-black.svg" align="right" />
</a>
# Marked
[![npm](https://badgen.net/npm/v/marked)](https://www.npmjs.com/package/marked)
[![gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/npm/marked/marked.min.js?compression=gzip)](https://cdn.jsdelivr.net/npm/marked/marked.min.js)
[![install size](https://badgen.net/packagephobia/install/marked)](https://packagephobia.now.sh/result?p=marked)
[![downloads](https://badgen.net/npm/dt/marked)](https://www.npmjs.com/package/marked)
[![travis](https://badgen.net/travis/markedjs/marked)](https://travis-ci.org/markedjs/marked)

- ⚡ built for speed
- ⬇️ low-level compiler for parsing markdown without caching or blocking for long periods of time
- ⚖️ light-weight while implementing all markdown features from the supported flavors & specifications
- 🌐 works in a browser, on a server, or from a command line interface (CLI)

## Demo

Checkout the [demo page](https://marked.js.org/demo/) to see marked in action ⛹️

## Docs

Our [documentation pages](https://marked.js.org) are also rendered using marked 💯

Also read about:

* [Options](https://marked.js.org/#/USING_ADVANCED.md)
* [Extensibility](https://marked.js.org/#/USING_PRO.md)

## License

Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)`;

function Editor(props){
    const {
        value,
        handleChange,
    } = props;
    return (
        <div class="editor-wrapper">
            <div class="title-bar">Editor</div>
            <textarea id="editor" value={value} onChange={handleChange}>
            </textarea>
        </div>
    );
}

function Preview(props){
    const {
        outputMarkdown
    } = props;

    return (
        <div class="preview-wrapper">
            <div class="title-bar">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={{__html: outputMarkdown}}>
            </div>
        </div>
    );
}


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
        this.setState({
            inputString: initial,
            outputMarkdown: marked(initial)
        });
    }

    handleChange(e){
        this.setState({
            inputString: e.target.value,
            outputMarkdown: marked(e.target.value) 
        });
    }

    render(){
        return (
            <div className="container">
                <h1 className="title"> Markdown Previewer </h1>
                <div className="editor-preview-wrapper">
                    <Editor
                        value={this.state.inputString}
                        handleChange={this.handleChange}
                    />
                    <div style={{clear: 'both'}}></div>
                    <Preview
                        outputMarkdown={this.state.outputMarkdown}
                    />
                    <div style={{clear: 'both'}}></div>
                </div>
            </div>
        )
    }
}

export default App;
