import React, { Component } from 'react'

const TableHeader = () =>{
    return (
        <thead>
        <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Nome</th>
            <th>Link</th>
            {/* <th>Número de Repositórios</th> */}
        </tr>
        </thead>
    )
}

const TableBody = (props) =>{
    const rows = props.array.map((obj) => {
        return(
            <tr key={obj.name}>
                <td><img src = {obj.avatar_url} width='100'></img></td>
                <td>{obj.login}</td>
                <td>{obj.name}</td>
                <td><a href={obj.html_url}>{obj.html_url}</a></td>
            </tr>
        )
    })
    return(
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const {array} = this.props

        return (
            <div className='tableDiv'>
            <table className='alunos'>
                <TableHeader/>
                <TableBody array={array}/>
            </table>
            </div>
        )
    }
}

export default Table