// import {navbar, hero, body, footer} from '../data'
import {Navbar} from '../components/Navbar/Navbar'
import {Hero} from '../components/Hero/Hero'
import {Body} from '../components/Body/Body'
import {Footer} from '../components/Footer/Footer'


export function Main({data}){
  return (
    <main>
      <Navbar nav={data.navbar} />
      <Hero her={data.hero} />
      <Body bod={data.body} />
      <Footer foo={data.footer} />
    </main>
  )
}