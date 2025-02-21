import { useCallback, useMemo, useState } from "react"

export default function UserList({ users }) {
    const [filter, setFilter] = useState('');

    const filterUsers = useCallback(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [filter])

    const filteredUsers = useMemo(() => {
        return filterUsers();
    }, [users, filterUsers])

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Search User..." />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}