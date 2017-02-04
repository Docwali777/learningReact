var React = require("react");


var GreeterMessage = require("./GreeterMessage.jsx");
var GreeterForm = require("./GreeterForm.jsx")

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
<GreeterForm onNewData={this.handleNewName}/>
    </div>
  )
}
});

module.exports = Greeter;
