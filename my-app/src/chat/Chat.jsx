import React from 'react'
import { Button } from 'react-bootstrap'

function Chat() {
  const [chats, setchats] = useState([])
  const fetchChats=async () =>{
    try{
      const foodresponse = await axios.get('http://localhost:5000/getcart')
              
    setfirst(foodresponse.data)
    console.log(first);
    }
    catch{
      
    }
  }
  return (
    <div>
      <Button>button</Button>
    </div>
  )
}

export default Chat
