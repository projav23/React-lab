export function Navbar({nav}){
  return (
    <>
      <img src={nav.logo.src} alt={nav.alt}></img>
      <h1>{nav.title}</h1>
      <List data={nav.links}/>
    </>
  )

}


function List(props){
  return (
    <ul>
    {
      props.data.map(elem =>{
        return <li><a href={elem.to}>{elem.label}</a></li>
      })
    }
  </ul>
  )

}