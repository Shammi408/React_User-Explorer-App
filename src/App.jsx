import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const controller = new AbortController(); // safe cancellation
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        });
        setUsers(res.data);
      } catch (err) {
        const isCanceled =
          err?.name === 'CanceledError' ||
          err?.code === 'ERR_CANCELED' ||
          axios.isCancel?.(err);
        if (!isCanceled) {
          setError('Failed to load users.');
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, []);

  const normalized = query.trim().toLowerCase();
  const filteredUsers = normalized
    ? users.filter(u => (u.name || '').toLowerCase().includes(normalized))
    : users;

  return (
    <div className="app">
      <h1>User Explorer</h1>

      <div className='search-container'>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search users by name..."
          aria-label="Search users by name"
          className='search-input'
        />
      </div>

      {loading && <p>Loading users…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          {filteredUsers.length === 0 ? (
            <p>No users match your search.</p>
          ) : (
            <UserList users={filteredUsers} />
          )}
        </>
      )}
    </div>
  );
}
export default App;