import './App.css';
import {React, Component} from 'react';
import Title from './components/Header/Title';
import Employees from './components/Employees/Employees';
import Loading from './components/Loading/Loading';
import Top from './components/Header/Top';

class App extends Component {
  state = {
    data: [],
    isLoaded: false,
    counter: 0,
    searchInput: '',
  }

  componentDidMount() {
    let dataArr = [];
    for(let i = 0;i<16;i++) {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(({results}) => {
        dataArr.push(results[0]);
        this.setState({
          data: dataArr
        })
      });
    }
    this.setState({
      isLoaded: true
    })
  }

  sort = () => {
    let data = this.state.data.sort((a,b) => {
      let nameA = a.name.first.toUpperCase();
      let nameB = b.name.first.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }

      return 0;
    })
    if(this.state.counter === 0) {
      this.setState(
        {data: data, counter: 1}
      )
    }

    if(this.state.counter === 1) {
      this.setState(
        {
          data: data.reverse(),
          counter: 0
        }
      )
    }
  }

  inputChange = (event) => {
    let value = event.target.value;
    // let dataArr = this.state.data.filter(element => element.name.first.includes(value))
    console.log(value);
    this.setState({
      searchInput: value,
      // data: dataArr
    })
  }

  dataFilter = () => {
    return this.state.data.filter(employee => employee.name.first.toLowerCase().includes(this.state.searchInput.toLowerCase()))
  }


  render() {
    let {data, searchInput} = this.state
    if(this.state.isLoaded === false) {
      return <Title><h3 style={{textAlign: "Center"}}>Fetching data...</h3><br /><Loading /></Title>
    } else if (data.length !== 16){
      return <Title><h3 style={{textAlign: "Center"}}>Fetching data...</h3><br /><Loading /></Title>
    } else {
      return (
        <Title inputChange={this.inputChange} value={searchInput}>
          <Top sort={this.sort} icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
</svg>} />
          <Employees data={this.dataFilter()} />
        </Title>
      )
    }
  }
}

export default App;
