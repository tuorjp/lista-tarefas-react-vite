import styled from 'styled-components'

type ContainerInputProps = {
    done: boolean
}

export const Container = styled.div(({done}: ContainerInputProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px 10px;
    border-radius: 10px;
    margin: 10px;
    align-items: center;

    input {
        :hover{
            cursor: pointer;
        }
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
))