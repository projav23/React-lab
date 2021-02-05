export function Body({bod}){
  return (
    <>
      <section>
        <h1>{bod.utilsSection.sectionTitle}</h1>
      <Article data={bod.utilsSection.cards}/>
      </section>
      <section>
        <h1>{bod.developersSection.sectionTitle}</h1>
        <p>{bod.developersSection.desctionDescription}</p>
        <Develops data={bod.developersSection.developers}/>
      </section>
    </>
  )

}

function Article(props){
  return(
    <>
    {props.data.map(elem =>{
      return (
        <article>
          <h3>{elem.utilName}</h3>
          <p>{elem.utilDescription}</p>
          <img src={elem.utilImg.src} alt={elem.utilImg.alt}></img>
        </article>
      )
    })}
    </>
  )

}

function Develops(props){
  return (
    <>
    {
      props.data.map(elem =>{
        return (
          <article>
            <h3>{elem.name}</h3>
            <p>{elem.description}</p>
            <img src={elem.developerImg.src} alt={elem.developerImg.alt}></img>
          </article>
        )
      })
    }
    </>
  )
}