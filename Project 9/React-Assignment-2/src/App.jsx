import { useState } from "react"
import { Table1 } from "./components/Table1"
import { Table2 } from "./components/Table2"

function App() {
  const [table, setTable] = useState('table1')
  return (

    <>
      <div className='d-flex justify-content-center gap-2'>
        <button className='btn btn-primary' onClick={() => setTable("table1")}>Fetch Albums</button>
        <button className='btn btn-primary' onClick={() => setTable("table2")}>Fetch Posts</button>
      </div>
      <div>
        {
          table === "table1" ? <Table1 /> : <Table2 />
        }
      </div>
    </>
  )
}

export default App
