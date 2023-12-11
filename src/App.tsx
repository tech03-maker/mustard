// import { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Stash } from './components/Stash/Stash'
import { PaymentType } from './components/PaymentType/PaymentType'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header />
        <Hero />
        <Stash />
        <PaymentType />
    </div>
  )
}

export default App
