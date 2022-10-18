import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Form, Card, Icon, Image } from 'semantic-ui-react';

function App() {
  // const [userName, setUserName] = useState('')
  // const [followers, setFollowers] = useState('')
  // const [following, setFollowing] = useState('')
  // const [avatar_url, setAvatar] = useState('')
  const [data, setDataList] = useState('')
  const [userInput, setUserInput] = useState('')
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetch(`https://api.github.com/search/users?q=andjela-kostic}`)
    .then(res=>res.json())
    .then(data=>{
      setData(data)
    })
  }, [])

  const setData = ( data) => {
    //setName(name)
    //setUserName(login)
    //setFollowers(followers_url)
    //setFollowing(following_url)
    //setAvatar(avatar_url)
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
  function printList(data){
    const row=[]
    if(data){
      data.forEach(d => {
        row.push( 
            <p>{login}</p>
      )});
    }
    
    return row
  }

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
      <div className='list'>
        {printList(data)}
        
      </div>
      <div className='card'>
      {/* <Card>
        <Image src={avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userName}</Card.Header>

        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {followers} followers
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {following} following
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            
          </a>
        </Card.Content>
  </Card> */}
      </div>
    </div>
  );
}

export default App;
