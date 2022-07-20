
import "../css/card.css"

const Card =(props) =>{
  
    return (
      <div>
        <img className={"image"} src={props.image} alt=" "/>
        <h1 className="TitleName">{props.name}</h1>
      </div>
    )
  
}
export default Card;