<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>User Management</h2>
      <button class="btn btn-success" @click="addUser">
        <i class="bi bi-person-plus me-2"></i>Add User
      </button>
    </div>


    <table class="table table-bordered table-hover table-striped align-middle">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <span
              :class="[
                'badge',
                user.status === 'Active' ? 'bg-success' : 'bg-secondary',
              ]"
            >
              {{ user.status }}
            </span>
          </td>
          <td class="text-center">
            <button
              class="btn btn-sm btn-primary me-2"
              @click="editUser(user.id)"
              data-bs-toggle="tooltip"
              title="Edit User"
            >
              <i class="bi bi-pencil"></i>
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deleteUser(user.id)"
              data-bs-toggle="tooltip"
              title="Delete User"
            >
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>


    <!-- Pagination -->
    <nav class="mt-3">
      <ul class="pagination justify-content-end">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="prevPage">Previous</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: "UserManagementPage",
  data() {
    return {
      currentPage: 1,
      usersPerPage: 5,
      users: [
        {
          id: 1,
          name: "John Doe",
          email: "john@example.com",
          role: "Admin",
          status: "Active",
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          role: "User",
          status: "Inactive",
        },
        {
          id: 3,
          name: "Michael Johnson",
          email: "michael@example.com",
          role: "Staff",
          status: "Active",
        },
        {
          id: 4,
          name: "Emily Davis",
          email: "emily@example.com",
          role: "User",
          status: "Active",
        },
        {
          id: 5,
          name: "Chris Lee",
          email: "chris@example.com",
          role: "Admin",
          status: "Inactive",
        },
        {
          id: 6,
          name: "Sarah Brown",
          email: "sarah@example.com",
          role: "User",
          status: "Active",
        },
      ],
    };
  },
  computed: {
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      return this.users.slice(start, start + this.usersPerPage);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.usersPerPage);
    },
  },
  methods: {
    editUser(id) {
      alert(`Edit user with ID: ${id}`);
      // Implement edit logic here
    },
    deleteUser(id) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.users = this.users.filter((user) => user.id !== id);
      }
    },
    addUser() {
      alert("Add User clicked!");
      // Implement add logic here
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  },
};
</script>


<style scoped>
/* Ensure buttons align with icons properly */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}


.table th,
.table td {
  vertical-align: middle;
}


.pagination .page-link {
  cursor: pointer;
}
</style>