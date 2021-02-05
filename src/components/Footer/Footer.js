export function Footer({foo}){
  return (
    <footer className= "containerCol">
      <div className="container">
        <p>{foo.contact.email}</p>
        <p>{foo.contact.phone}</p>
        <p>{foo.contact.address.country}</p>
        <p>{foo.contact.address.street}</p>
        <p>{foo.contact.address.state}</p>
      </div>
      <div className="container">
        <Links data={foo.links}/>
      </div>
    </footer>
  )
}

function Links(props){
  return(
    <ul>
      {props.data.map(elem =>{
        return(
          <li><a href={elem.to}>{elem.label}</a></li>
        )
      })}
    </ul>

  )
}