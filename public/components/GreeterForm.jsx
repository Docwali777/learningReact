var React = require("react")

var GreeterForm = React.createClass({
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
module.exports = GreeterForm;
