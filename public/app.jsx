var GreeterMessage = React.createClass({

render:function(){

  return (

    <div>
      <h1>{this.props.name}!!</h1>
      <p>{this.props.message}</p>
    </div>
  )
}
});

var InputField = React.createClass({
onFormSubmit:function(e){
e.preventDefault()
var update = {};

var nameVal = this.refs.name.value;
var messageVal = this.refs.message.value;

if(nameVal.length > 0 ){
this.refs.name.value= "";
  update.name = nameVal;
}
if(messageVal.length > 0){
  this.refs.message.value = "";
  update.message = messageVal;
}
console.log(update)
this.props.onNewData(update)

},

render:function(){

  return (

    <div>
      <form onSubmit={this.onFormSubmit}>
      <input type="text" ref="name"  placeholder="Name"></input>

<br/>
<textarea type="text" ref="message" placeholder="New Message"></textarea>
  <br/>
        <button className="btn-success">Submit</button>
      </form>
    </div>
  )
}
});

var Greeter = React.createClass({
  getDefaultProps:function(){
    return {
      name: "Wali Gauvin",
      message: "This is the default message"
    }
  },

getInitialState:function(){
return({name: this.props.name,
        message: this.props.message
        })
},

handleNewName:function(obj){
this.setState(obj)
},

render(){
var name = this.state.name;
var message = this.state.message;
  return (
    <div className="container">
<GreeterMessage name={name} message={message} />
<InputField onNewData={this.handleNewName}/>
    </div>
  )
}
});


ReactDOM.render(<Greeter />, document.getElementById("app"));
