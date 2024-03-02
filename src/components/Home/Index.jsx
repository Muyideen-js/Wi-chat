import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
import sec from "../img/secimg.webp"


const Index = () => {
  const navtop = [
    {
      name : "Home"
    },
    {
      name : "Documentation"
    },
    {
      name : "Api Reference"
    },
    {
      name : "Demo"
    }
  ]

  const [value, setValue] = useState();

  const navigate = useNavigate();
  const JoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <div className="top-cont">
        {
          navtop.map((item, i)=> 
            <a href="#" className="nav" key={i}>{item.name}</a>
          )
        }
      </div>
     <div className="both-flx">
     <div>
     <h1>High-quality video conferences. Complimentary for all.</h1>
     <p>We transformed our secure business meeting service, Google Meet, into a freely accessible platform for everyone.</p>
     <div className="input-sec">
     <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={JoinRoom}>Join Via Code</button>
     </div>
     </div>
     <div>
          <img src={sec} alt={sec} />
     </div>
     </div>
    </div>
  );
};

export default Index;
