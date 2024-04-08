import './App.css'
import CardContainer from './components/CardContainer'
import { useTheme } from './utils/useTheme';

function App() {

  const { color, changeColor, colors } = useTheme();

  return (
    <div className={`bg-amber-100 p-4 min-h-screen w-full`}>

      <select defaultValue={colors.indexOf(color)} className="bg-white p-2 rounded" onChange={(e:any) => changeColor(e.target.value)}>
        {colors.map((c, i) => (
          <option key={i} value={i}>{c}</option>
        ))}
      </select>

      <h1 className={`text-4xl font-bold text-center mb-4 text-amber-800`}>Sorozatok</h1>
      <CardContainer /> 
    </div>
  )
}

export default App
