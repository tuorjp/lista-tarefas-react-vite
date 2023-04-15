import {useState} from 'react'
import * as C from "./styles/App.styles"
import {Item} from './types/Item'
import { GlobalStyle } from './styles/global'
import {ListItem} from './components/ListItem'
import {AddArea} from './components/AddArea'

function App() {

  //O state recebe array de items, por isso a tipagem. Para exemplo vamos iniciar o estado com dois items
  const [list, setList] = useState<Item[]>([])

  //função que adiciona uma nova tarefa na lista
  function handleAddTask(taskName: string) {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    })
    setList(newList)
  }

  return(
    <>
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => {
          return(
            <ListItem key={index} item={item}></ListItem>
          )
        })}

      </C.Area>
    </C.Container>
    <GlobalStyle />
    </>
  )
}

export default App