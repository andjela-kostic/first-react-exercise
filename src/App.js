import logo from './logo.svg';

import './App.css';
import { useEffect, useState } from 'react';
import {Form, Card, Icon, Image } from 'semantic-ui-react';

function App() {
  const [data, setDataList] = useState([])
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch(`https://api.github.com/search/users?q=andjela-kostic}`)
    .then(res=>res.json())
    .then(data=>{
      if (data) setData(data)
    })
    .catch(console.error)
  }, [])

  const setData = ( data) => {
    console.log(data.items)
    setDataList(data.items)

  }

  const handleSearch = (e) => {
    setUserInput(e.target.value) 
  }

  const handleSubmit= () =>{
    fetch(`https://api.github.com/search/users?q=${userInput}`)
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setData(data)
    })
  }

  // const returnProfile = () => {
  //   setUserInput(userInput)
  //  // handleSubmit()
  // }

  return (
    <div>
      <div className='navbar'>Github Search</div>
      <div className='search'>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input placeholder='Name' name='name' onChange={handleSearch}/>
              <Form.Button content='Search' />
            </Form.Group>
          </Form>
      </div>
      <div className='cart'>
        {data ? data.map(el=>
        <div className='cartItem'>
          <img src={el.avatar_url} />
          <p>{el.login}</p>
          <button>View</button>
        </div>)
         : "" }
      </div>
      <div className='card'>

      </div>
    </div>
  );
}

export default App;
