import PropTypes from 'prop-types';

export const UsersList = ({ users, deleteUser }) => {
    return (
        <ul>
            {users.map(({ id, name, email }) => (
                <li key={id}>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <button type='button' onClick={()=>deleteUser(id)}>Delete</button>
                </li>
               
            ))}
        </ul>
    )
};

UsersList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    deleteUser: PropTypes.func.isRequired,
}