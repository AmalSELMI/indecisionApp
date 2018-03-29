// How we lose binding in event handlers>>fix with bind

// const obj = {
//   name: 'Vikram',
//   getName(){
//     return this.name;
//   }
// };
// console.log(obj.name);
// returns vikram

// const func = function () {
//   console.log(this);
// }
// func();
// returns undefined

// const getName = obj.getName.bind(obj);
// const getName = obj.getName.bind({name:'Amaru'});>>Forces the context=name
// console.log(getName());
// error : we lose this binding >> cannot read prop name of undefined


class IndecisionApp extends React.Component {
  render() {
    const title ='Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options =['opt1','opt2','opt3','opt4'];
    return (
      <div>
        {/* <Header title="test"/> */}
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}
// Renders an instance of option for each option+set text and key 
//map converts from array to string

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // this binding in constructor allows it for every event use
  }
    // Const props=this.props + call super to access/connect props
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('handleRemoveAll');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}
// adding bind(this) after eventhandler allows it to have the same context/this as the render


class Option extends React.Component {
  render() {
    return (
      <div>
        option: {this.props.optionText}
      </div>
    );
  }
}
//set up form with input and submit
class AddOption extends React.Component {
  handleAddOption(e){
    e.preventDefault();

  const option = e.target.elements.option.value.trim();
  if (option) {
    alert('Option');
  }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
