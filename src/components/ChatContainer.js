import ChatHeader from './ChatHeader'
// import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'
import { useState } from 'react'

const ChatContainer = ({ user }) => {
    const [ clickedUser, setClickedUser ] = useState(null)

    return (
        <div className="chat-container">
            <ChatHeader user={user}/>

            <div>
                <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
                <button className="option" onClick={() => setClickedUser(true)}>Chat</button>
            </div>

            {/* {!clickedUser && <MatchesDisplay matches={'user.matches'} setClickedUser={setClickedUser}/>} */}

            {clickedUser && <ChatDisplay user={'Bk'} clickedUser={clickedUser}/>}
        </div>
    )
}

export default ChatContainer