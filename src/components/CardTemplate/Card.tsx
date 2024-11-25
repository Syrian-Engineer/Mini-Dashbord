import "./Card.css"

interface Props{
    title?: string,
    Icon:React.ComponentType; // Accepts any react-icon component}
    value?:string
}


const Card = ({title,Icon,value}:Props) => {
  return (
    <div className="card">
        {Icon && <Icon className="icon" />}
        <h2 className="title">{title ? title:null}</h2>
        <h2 className="value">{value ? value:null}</h2>
    </div>
  )
}

export default Card