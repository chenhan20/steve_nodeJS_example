//-----------------------example_01
ReactDOM.render(
  <h1>Hello, world!(使用bebel渲染)</h1>,
  document.getElementById('example_01')
);
//-----------------------example_02
var a=1;
var b=2;
if(b>a){
  ReactDOM.render(
  <h2>a={a},b={b},a+b={a+b}</h2>,
  document.getElementById('example_02')
)};

//------------------------example_03
function Article() { 
  return (
    <div className="article">
      <h1 className="article-title">Title</h1>
      <p className="article-body">Body</p>
    </div>
  );
}

ReactDOM.render(
Article(),
document.getElementById('example_03')
);

//------------------------example_04
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '123'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <br></br>
        {this.state.value}
      </form>
    );
  }
}


ReactDOM.render(
  <NameForm />,
  document.getElementById('example_04')
);


//------------------------example_05
