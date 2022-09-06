class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault();
      this.setState(state => ({
        submit: state.submit = state.input
  
      }))
  
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>{this.state.submit}</h1>
            <input value={this.state.input} onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
        </div>
      );
    }
  }