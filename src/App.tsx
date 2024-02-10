import './App.css'
import {About ,Contact,Portfolio,Resume,Service}from './components/Home'

function App() {
  return (
    <section className='relative h-screen w-full overflow-scroll'>
      <About/>
      <Resume/>
      <Portfolio/>
      <Service/>
      <Contact/>
    </section>
  )
}

export default App
