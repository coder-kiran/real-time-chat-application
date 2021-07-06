import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
function App(){
    return(
        <ChatEngine
        height="100vh"
        projectID="ff13b3bf-725d-4cea-b852-8da0a1ccd15a"
        userName="kiran"
        userSecret="1234abcd@"
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App