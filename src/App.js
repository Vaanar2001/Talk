import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Stories from './Stories';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

function App() {
  const [posts, setPosts] = useState([
    {
      username: "nigga",
      caption: ": Dogs!",
      image: "./images/post1.jpg"
    },
    {
      username: "Fruits",
      caption: ": Blue Orange!",
      image: "./images/post2.jpg"
    },
    {
      username: "Nature",
      caption: ": Next Generation",
      image: "./images/post3.jpg"
    },
    {
      username: "Vannar",
      caption: ": Random",
      image: "./images/post4.jpg"
    },
    {
      username: "user",
      caption: ": just Smile",
      image: "./images/post5.jpg"
    },{
      username: "garg",
      caption: ": No caption",
      image: "./images/post6.jpg"
    }
  ]);
  const [stories, setStories] = useState([

    {
      username: " nigga ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " Fruits ",
      avatarurl: "./imagaes/a2.png"
    },
    {
      username: " natue ",
      avatarurl:"./images/a3.jpg"
    },
    {
      username: " nigga ",
      avatarurl: "./images/a4.jpg"
    },
    {
      username: " Fruits ",
      avatarurl: "./images/a4.jpg"
    },
    {
      username: " natue ",
      avatarurl: "./images/a4.jpg"
    },
    {
      username: " nigga ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " Fruits ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " natue ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " nigga ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " Fruits ",
      avatarurl: "./images/a1.jpg"
    },
    {
      username: " natue ",
      avatarurl: "./images/a3.jpg"
    },
    {
      username: " vannar ",
      avatarurl: "./images/a3.jpg"
    }
  ]);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const signUp = (event) => {
    event.preventDefault();
  }

  return (
    <div className="App">
     <Modal
       open={open}
       onClose={() => setOpen(false)}
     >
      <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
         <form className="app_signUp">
          <center>
           <img
           className="app_headerImage"
           src="./images/logo.png"
           alt="logoImage" />

           <Input
            placeholder="email"
            type="text"
            value={email}
            onchange={(e) => setEmail(e.target.value)}
            />
            <Input
             placeholder="password"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>SignUp</Button>
          </center>
        </form>
       </Typography>
       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       </Typography>
      </Box>
     </Modal>

       <div className="app_header">
        <img
         className="app_headerImage"
         src="./images/logo.png"
         alt="logoImage" />
        </div>
        <div className="stories">
          {
            stories.map(story =>(
              <Stories username={story.username} url={story.avatarurl} />
            ))
          }
        </div>
        <Button onClick={() => setOpen(true)}>signUp</Button>
        {
          posts.map(post =>(
            <Post username={post.username} caption={post.caption} image={post.image} />
          ))
        }

    </div>
  );
}

export default App;
