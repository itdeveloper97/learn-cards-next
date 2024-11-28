// app/users/page.tsx
"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState("");

  // Fetch users from the API when the page loads
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  // Handle form submission to add a new user
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newUserName) return;

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newUserName }),
    });

    const data = await response.json();
    setUsers([...users, data.user]);
    setNewUserName("");
  };

  return (
    <div>
      <h1>User List</h1>

      {/* Display the list of users */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {/* Form to add a new user */}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter new user name"
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
