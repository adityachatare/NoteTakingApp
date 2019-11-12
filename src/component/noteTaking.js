import React, { Component } from 'react';
//import App from '../App';

class NoteTaking extends Component{

constructor(props)
{
    super(props);
    this.state = {
        items : []
    }
    this.addNote = this.addNote.bind(this);

}
addNote(event)
{
    console.log("Working");
    if( this.theTitle.value !=="" ){
        var newItem = {
            title: this.theTitle.value,
            note: this.theNote.value
        };
    }
    this.setState((prevState)=>{
        return{
            items: prevState.items.concat(newItem)
        };
    });
this.theNote.value="";
this.theTitle.value="";

event.preventDefault();  
}
    render()
    {
        return(
            <div>
                    <header>
                        <h1>To Do App</h1>
                    </header>
                    <div className="main-content">
                        <ul>
                       {this.state.items.map((val)=> <li>{val.title} <br></br> {val.note}</li>)}
                       </ul>
                    </div>
                    <footer>
                        <form onSubmit={this.addNote}>
                            <input type="text" placeholder="Enter Note Title Here" ref={(title)=> this.theTitle = title}/><br></br>
                            <textarea 
                            placeholder="Enter Your Note here"
                            ref={(note)=>this.theNote=note}
                            />
                            <button type="submit"> Add to list </button>
                        </form>
                    </footer>
            </div>
        );
    }

}
export default NoteTaking;