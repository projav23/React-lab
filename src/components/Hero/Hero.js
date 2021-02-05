export function Hero({her}){
  return (
    <>
      <h1>{her.title}</h1>
      <h2>{her.subtitle}</h2>
      <img src={her.img.src} alt={her.img.alt}></img>
    </>
  )
}