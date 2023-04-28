import React,{useState} from 'react'
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId,setRoomId] = useState('');
    const [username,setUsername] = useState('');
    const createNewRoom = (e) =>{
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Create a new room');
    }

    const joinRoom =()=>{
        if(!roomId || !username){
            toast.error('ROOM ID & username is required');
            return;
        }

        //Redirect
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            },
        });
    };

    const handleInputEnter = (e)=>{
        if(e.code==='Enter'){
            joinRoom();
        }
    }
  return (
    <div className='homePageWrapper'>
      <div className="formWrapper">
        <div className="logowrapper">
            <img className='homePagelogo' src="https://www.pngitem.com/pimgs/m/336-3367242_atom-code-editor-logo-hd-png-download.png" alt="code-sync-logo" />
            <div className="logo-txt">
            <h3>Code Sync</h3>
            <h5>Realtime Collaborator</h5>
            </div>
            
        </div>
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
            <input 
            type="text" value = {roomId}
            onChange = {(e)=> setRoomId(e.target.value)}
            className='inputBox' placeholder='ROOM ID'
            onKeyUp={handleInputEnter} 
            />
            <input 
            type="text"  
            onChange = {(e)=> setUsername(e.target.value)}
            value={username} className='inputBox' placeholder='USERNAME'
            onKeyUp={handleInputEnter}  
            />
            <button className="btn joinBtn" onClick={joinRoom}>Join</button>
            <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createNewRoom} href="" className='createNewBtn'>new room</a>
        </span>
        </div>
      </div>
      <footer>
        <h4>Built with 💛 by &nbsp;<a href="https://github.com/Shreyanshi200">Shreyanshi Srivastava</a> </h4>
      </footer>
    </div>
  )
}

export default Home
