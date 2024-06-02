function Dog(props){
    return(
        <div className="dog">
            <img src={props.source} alt=""/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Dog