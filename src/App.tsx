// import { Fragment } from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Stash } from './components/Stash/Stash'
import { PaymentType } from './components/PaymentType/PaymentType'
import { MoneySafety } from './components/MoneySafety/MoneySafety'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header />
        <Hero />
        <Stash />
        <PaymentType />
        <MoneySafety />
    </div>
  )
}

export default App
