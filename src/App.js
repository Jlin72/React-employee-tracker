import logo from './logo.svg';
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
      return <Title><Loading /></Title>
    } else if (data.length !== 16){
      return <Title><Loading /></Title>
    } else {
      return (
        <Title inputChange={this.inputChange} value={searchInput}>
          <Top sort={this.sort} />
          <Employees data={this.dataFilter()} />
        </Title>
      )
    }
  }
}

export default App;
