class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.componentWillMount = this.componentWillMount.bind(this)
  
    }
    componentWillMount() {
      // Change code below this line
  console.log("Hallo World")
  
    
      // Change code above this line
    }
    render() {
      return <div />
    }
  };