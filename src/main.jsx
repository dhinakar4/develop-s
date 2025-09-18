import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import Bootstrap from './Bootstrap.jsx'
import Boottemplate from './Boottemplate.jsx';
import State from './State.jsx'
import Props from './Props.jsx';
import States from './States.jsx';
import Mycom from './Mycom.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home name ="This is a!"/> */}
    {/* <Bootstrap/> */}
    {/* <Boottemplate/> */}
    {/* <State />
    <Props name = "jhon" age = "31" city = "North!" />
    <States /> */}
    <Mycom />
  </StrictMode>,
)
