<template>
    <div>
      <h2>User List</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="{ name: 'UserDetail', params: { id: user.id } }">
            {{ user.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name:"UserList",
    data() {
      return {
        users: [
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
          { id: 3, name: 'Charlie' }
        ]
      }
    }
  }
  </script>
  