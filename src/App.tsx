import './App.css'
import { PropertiesDisplay } from './components/properties-display'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Welcome to Marvelous Mansions</h1>
      <h2>A one stop shop to your dream property!</h2>
      <h3>Current property listings:</h3>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <PropertiesDisplay />
      </div>

    </>
  )
}

export default App
