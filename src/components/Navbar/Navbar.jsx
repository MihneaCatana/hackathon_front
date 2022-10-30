import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import {useNavigate} from 'react-router-dom';
import {signOut} from "firebase/auth"
import style from "./navbar.module.css"
import {auth} from "../../firebase/firebase-config";

export default function Navbar()
{

    const logout = async () =>{
        await signOut(auth);
        navigate("/")
    }

    const [visibleLeft, setVisibleLeft] = useState(false);

    let navigate = useNavigate();

    return <div>
        <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
            <h3>ReFeeder</h3>
            <ul className={style.listNavbar}>
                <li onClick={() =>navigate("/homepage")}>Homepage</li>
                <li onClick={() =>navigate("/profile")}>Profile</li>
                <li onClick={() =>navigate("/oferts")}>Oferts</li>
                <li onClick={() =>navigate("/postProduct")}>Post a product</li>
                <li onClick={() =>navigate("/contact")}>Contact</li>
                <li onClick={() =>navigate("/about")}>About</li>
                <li onClick={logout}>Logout </li>
            </ul>
        </Sidebar>

        <div className={style.navbar}>
            <h1>ReFeeder</h1>
            <Button icon="pi pi-align-justify" id="buton-navbar" onClick={() => setVisibleLeft(true)} className="mr-2" />
        </div>
    </div>
}