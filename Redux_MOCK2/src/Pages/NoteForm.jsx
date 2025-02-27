import React from "react";
import NoteList from "./NoteList";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";


const NoteForm = () => {
  const user = useSelector((state)=>state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogin = ()=>{
   signInWithPopup(getAuth(),provider)
   .then((response)=>{
    dispatch(login(response.user))
     navigate("/notelist")
   }).catch((err)=>{
    console.log("Logging in Erro ",err)
   })
  }
    return (
    <div>
      {user ? (
        <NoteList />
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
};

export default NoteForm;
