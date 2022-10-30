import  Axios  from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import {useEffect, useState} from "react";
import {Card} from "../../components/Card/Card";
import style from "./oferts.module.css"


export default function Oferts()
{
    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        try{
            const res = await Axios.get("http://localhost:8088/api/getAllPost");
            setProducts(res.data)
            console.log(res.data);
        } catch (e){
            console.log(e)
        }
    }

    useEffect(() =>{
       getProducts();
    },[])

    return <div>
        <Navbar></Navbar>
        <div className={style.containerCards}>
                {
                    products.map(products =>{
                        return <Card
                            key={products.id}
                            description={products.description}
                            imgUrl={products.imgUrl}
                            date={products.date}
                            status={products.status}
                            />
                    })
                }
        </div>
    </div>
}
