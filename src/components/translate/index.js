import React, { Component, createRef } from 'react'; 


export default class TranslateContainer extends Component { 
    
    componentDidMount() { 
        this.ref.current.focus();
    }
    handleSubmit = event => {
        event.preventDefault(); 
        console.log('ref', this.ref.current.value); 
    }

    ref = createRef(); 
    render(){
        return(
            <section>
                <h1>Translate to Yodish...</h1> 
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="user-text">Translate to yodish: </label><br/>
                    <textarea ref={this.ref}placeholder="Enter your text here."/><br/>
                    <button type="submit">Translte</button> 
                </form> 
                <br/>
                <p></p>
            </section>
        ); 
    }
}