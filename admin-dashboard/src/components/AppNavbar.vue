<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <!-- Brand / Logo -->
    <a class="navbar-brand" href="#">Admin Dashboard</a>

    <!-- Toggler for smaller screens -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar Content -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>
      </ul>

      <!-- Search Bar -->
      <form class="d-flex me-4" @submit.prevent="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
        />
        <button class="btn btn-outline-light" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>

      <!-- User Profile Dropdown -->
      <div class="dropdown">
        <button
          class="btn btn-outline-light dropdown-toggle"
          type="button"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person-circle me-1"></i> John Doe
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Logout</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      alert(`Search for: ${this.searchQuery}`);
    },
  },
};
</script>

<style scoped>
/* Adjust dropdown alignment */
.dropdown-menu {
  min-width: 150px;
}

/* Navbar background and text color adjustments for King Crimson theme */
.bg-dark {
  background-color: #2C2C2C !important; /* Dark gray for navbar */
}

.nav-link {
  color: #DC143C !important; /* Bright red for links */
}

.nav-link.active {
  color: #A52A2A !important; /* Darker red for active link */
}

.nav-link:hover {
  color: #A52A2A !important; /* Darker red on hover */
}

.btn-outline-light {
  color: #DC143C; /* Bright red for button text */
  border-color: #DC143C; /* Bright red border */
}

.btn-outline-light:hover {
  background-color: #DC143C; /* Bright red background on hover */
  color: white; /* White text on hover */
}
</style>
