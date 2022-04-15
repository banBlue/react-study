import logo from './logo.svg';
import React from 'react'
import './App.css';

function App() {
  const b = {a : 'ppppppppp'}
  let time = 3

  let a = true
  
  return (
    <div className="App" onClick={() => {a=Date.now();console.log(2)}}>
      <Fs ccc={a} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
            
            1 !== 2 && 'c12321321'.split("")
          }
          <Bottom name="9999999" fff={b} time={time}></Bottom>
          <Acc c="89" />
      </header>
    </div>
  );
}

function Bottom (props) {
  console.log(`--DEBUG--props.fff`,props.fff)
  props.fff.a = 'kkkkkkkkk'
  function handleBbbb() {
    console.log(`--DEBUG--io`,)
  }
  return (
    <div className="accc" onClick={handleBbbb}>{props.name}-{props.time}</div>
  )
}

function Acc(props) {
  return <div className='ops'>AACC{props.c}</div>
}
class Fs extends React.Component  {
  constructor(props) {
    super()
    this.state = { bb: 'state'}
    console.log('9999999999')
  }

  componentDidMount() {
    console.log(`--DEBUG--111我挂在了`,)
    // setInterval(() => {
    //   this.setState({
    //     bb:Date.now()
    //   })
    // },1000)
  }

  componentDidUpdate() {
    console.log(`-ddd我溢出了`)
  }

  componentWillUnmount() {
    console.log(`--DEBUG--w我被干掉饿了`,)
  }

  render() {
    console.log(`--DEBUG--this.props.a`,this.props.ccc)
    return (
      <div className="accc">{this.state.bb}Fsfffffffffff----{this.props.ccc}</div>
    )
  }
}

export default App;
