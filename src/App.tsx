/*
  Megcsináltam a plusz pontot is, azaz a színek dinamikusan változnak egy select elem segítségével. Azonban a leírtak alapján a kód nem működik. A hiba a következő:
  https://stackoverflow.com/a/72481793

  Viszont a HTML-ben a class nevek megváltoznak a választott színre.

*/

import { useState } from 'react';
import CardContainer from './components/CardContainer'

const colors = ['amber','slate', 'green', 'blue', 'red', 'yellow', 'indigo', 'pink', 'purple', 'gray', 'teal', 'cyan', 'rose', 'orange', 'lime'];

function App() {
  const [color, setColor] = useState<string>(colors[0]);

  return (
    <div className={`bg-${color}-100 p-4 min-h-screen w-full`}>

      <select defaultValue={color} className="bg-white p-2 rounded" onChange={(e:any) => setColor(e.target.value)}>
        {colors.map((c, i) => (
          <option key={i} value={c}>{c}</option>
        ))}
      </select>

      <h1 className={`text-4xl font-bold text-center mb-4 text-${color}-800`}>Sorozatok</h1>
      <CardContainer theme={color} /> 
    </div>
  )
}

export default App
