import './HomePage.css';
import User from './ui/User';
import { useState } from 'react';
import axios from "../axios";
import 'semantic-ui-css/semantic.min.css'
import {Form } from 'semantic-ui-react';

function HomePage() {
  const [data, setDataList] = useState([])
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)

  const setData = ( data) => {
    setDataList(data)
  }

  const fetchUsers = async () => {
    try{
      const response = await axios.get("/search/users?q="+userInput)
      console.log(response.data.items)
      return response?.data.items
    }catch(error){
      console.log(error)
      return null;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(userInput){
      const items =   await fetchUsers()
      console.log(items)
      setData(items)
    }
    else{
      console.log("Query is empty")
    }
  }

  const handleSearch = (e) => {
    const value=e.target.value
    setUserInput(value) 
    e.currentTarget.style.width = '300px';
  }

  return (
    <div>
      <div className='navbar'>Github Search</div>
      <div className='search'>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Input placeholder='Name' name='name' onChange={handleSearch} style={{}}/>
              <Form.Button content='Search' />
            </Form.Group>
          </Form>
      </div>
      <div className='cart'>

        {data ? (
          data.map((user) => {

           return <User user = {user} key = {user.id} />
          
          })

         ) : "" 
        }
      </div>
    </div>
  );
}

export default HomePage;
