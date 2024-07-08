import React from 'react';

const UserTable = props => (
  
    <table className="responsive-table">
        <thead>
            <tr>
                <th>Nombe</th>
                <th>Usuario</th>
                <th>Acciones</th>
            </tr>
        </thead>
    <tbody>
        {
            props.users.length > 0 ? (
                props.users.map (user => (

                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td className="center-align">
                            <button 
                                className="waves-effect waves-light btn-small"
                                onClick={() => props.editRow(user)}>
                                editar
                            </button>

                            <button 
                                className="waves-effect waves-light btn-small red darken-4"
                                onClick={() => props.deleteUser(user.id)}>
                                eliminar
                            </button>
                        </td> 
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>{props.users[0]} Sin usuarios</td>
                    </tr>
                )
        }          
    </tbody>
  </table>
);
    
export default UserTable;