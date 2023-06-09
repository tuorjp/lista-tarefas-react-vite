import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (taskName: string) => void
}

export function AddArea({onEnter}: Props) {
    const [inputText, setInputText] = useState('')

    function handleKeyUp(e: KeyboardEvent) {
        if(e.code === 'Enter' && inputText) {
            onEnter(inputText)
            setInputText('')
        }
    }

    return(
        <C.Container>
            <div className='img'>+</div>
            <input 
                type="text"
                placeholder='adicione uma tarefa...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}