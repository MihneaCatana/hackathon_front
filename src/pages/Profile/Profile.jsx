import Navbar from "../../components/Navbar/Navbar";
import {auth} from "../../firebase/firebase-config"
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import profile from "../../images/profile.jpg"
import { Button } from 'primereact/button';
import "./profile.css"

export default function Profile(){

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        console.log(currentUser)
    })

    return( <div>
        <Navbar></Navbar>
        <div className="containerProfile">
            <div className="elementsContainerProfile">
            <img src={profile} alt="profile_picture"/>
            {/*<p> Email: {user.email} </p>*/}
                <Button label="Change Info" className="p-button-raised "  />
            </div>
        </div>

    </div>)
}