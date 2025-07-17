import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Lastbar from './Lastbar'

function App() {

  return (
    <>
      <div className='d-flex vh-100'>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50'><Feed/></div>
        <div className='w-30'><Lastbar /></div>
      </div>
    </>
  )
}

export default App
