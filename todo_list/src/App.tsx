import {useState} from 'react'
import * as C from "./styles/App.styles"
import {Item} from './types/Item'
import { GlobalStyle } from './styles/global'

function App() {

  //O state recebe array de items, por isso a tipagem. Para exemplo vamos iniciar o estado com dois items
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Estudar useContext', done: false},
    {id:2, name: 'Estudar CSS Grid', done: false},
  ])

  return(
    <>
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/*Área de adicionar nova tarefa*/}

        {list.map((item, index) => {
          return(
            <div>{item.name}</div>
          )
        })}

      </C.Area>
    </C.Container>
    <GlobalStyle />
    </>
  )
}

export default App