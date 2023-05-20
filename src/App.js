import Header from './components/Header'
import Hero from './components/Hero'
import Footer2 from './components/Footer2'
function App() {
  return (
    <div className='d-flex justify-content-sb flex-column full-height align-items-center'>
      <>
        <Header />
        <Hero />
      </>
      <Footer2 className='footer' text={'Copyright 2023'} />
    </div>
  )
}

export default App
