import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
function App(){

    if( !localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
        height="100vh"
        projectID="ff13b3bf-725d-4cea-b852-8da0a1ccd15a"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App