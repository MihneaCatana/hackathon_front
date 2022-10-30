import style from "./card.module.css"
import { Button } from 'primereact/button';

export function Card(props){

    return(
        <div className={style.cardProduct}>
            <div key={props.id} className={style.productCard}>
                <img src={props.imgUrl} alt="product-img" className={style.productImage}/>
                <h1>{props.title}</h1>
                <p> {props.description}</p>
                <i>Expira pe data de: {props.date}</i>
                { props.status=="available" ? (<div>
                            <div className={style.availableCard}>Available</div>
                        <Button label="Reserve" className="p-button-raised p-button-success" />
                    </div>
                ) : props.status==="pending" ? (<div className={style.pendingCard}>Pending</div>) : (<div className={style.soldCard}>Sold</div>) }

            </div>

        </div>
    )
}