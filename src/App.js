import logo from './logo.svg';
import './App.css';
import {React, Component} from 'react';
import Title from './components/Header/Title';
import Data from './components/Employees/Data';
import Loading from './components/Loading/Loading';
import Top from './components/Header/Top';

class App extends Component {
  state = {
    data: [],
    isLoaded: false,
    counter: 0
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

  render() {
    let {data} = this.state
    if(this.state.isLoaded === false) {
      return <Title><Loading /></Title>
    } else if (data.length !== 16){
      return <Title><Loading /></Title>
    } else {
      console.log(data);
      console.log(new Date(data[0].dob.date).toLocaleDateString("en-US").split('/').join('-'));
      return (
        <Title>
          <Top sort={this.sort} />
          {data.map(employee => <Data source={employee.picture.large} firstName={employee.name.first} lastName={employee.name.last} email={employee.email} dob={new Date(employee.dob.date).toLocaleDateString("en-US").split('/').join('-')}/>)}
        </Title>
      )
    }
  }
}

export default App;
