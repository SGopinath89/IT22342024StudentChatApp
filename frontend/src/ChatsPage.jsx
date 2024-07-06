import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"
import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '7d251d3b-90b1-46f2-a44e-285323c62c7b', 
        props.user.username,
        props.user.secret
    );
    return (
    <div style={{height:'100vh'}}>
        {/* <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height:'100%'}}/> */}
        <PrettyChatWindow
        projectId="7d251d3b-90b1-46f2-a44e-285323c62c7b"
        username = {props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
        />
    </div>
    );
  };
  export default ChatsPage;