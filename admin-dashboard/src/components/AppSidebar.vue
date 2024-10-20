<template>
  <div id="sidebar-wrapper" class="vh-100 d-flex flex-column">
    <!-- Logo Section -->
    <div class="navbar-brand text-center py-3 fs-4 text-dark border-bottom">
      <strong>MyAdmin</strong>
    </div>

    <!-- Sidebar Links -->
    <div class="list-group list-group-flush flex-grow-1 overflow-auto">
      <router-link
        to="/dashboard"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="bi bi-speedometer2 me-2"></i> Dashboard
      </router-link>

      <!-- User Management Section -->
      <button
        class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
        data-bs-toggle="collapse"
        data-bs-target="#userManagementCollapse"
      >
        <span><i class="bi bi-people me-2"></i> User Management</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="collapse" id="userManagementCollapse">
        <router-link
          to="/dashboard/users"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-person"></i> All Users
        </router-link>
        <router-link
          to="/dashboard/users/add"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-person-plus"></i> Add User
        </router-link>
      </div>

      <!-- Portfolio Dropdown Section -->
      <button
        class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
        data-bs-toggle="collapse"
        data-bs-target="#portfolioCollapse"
      >
        <span><i class="bi bi-briefcase me-2"></i> Portfolio</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="collapse" id="portfolioCollapse">
        <router-link
          to="/dashboard/portfolio/profile"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-person-circle"></i> Profile
        </router-link>
        <router-link
          to="/dashboard/portfolio/showcase"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-image"></i> Showcase
        </router-link>
        <router-link
          to="/dashboard/portfolio/contact"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-envelope"></i> Contact
        </router-link>
        <router-link
          to="/dashboard/portfolio/creative"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-lightbulb"></i> Creative
        </router-link>
      </div>

      <!-- Settings Section -->
      <button
        class="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
        data-bs-toggle="collapse"
        data-bs-target="#settingsCollapse"
      >
        <span><i class="bi bi-gear me-2"></i> Settings</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="collapse" id="settingsCollapse">
        <router-link
          to="/dashboard/settings/profile"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-person-circle"></i> Profile Settings
        </router-link>
        <router-link
          to="/dashboard/settings/security"
          class="list-group-item list-group-item-action ps-5"
        >
          <i class="bi bi-shield-lock"></i> Security
        </router-link>
      </div>

      <div class="sidebar-section mt-3 px-3">
        <small class="text-white">Reports</small>
      </div>
      <router-link
        to="/dashboard/reports/sales"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="bi bi-graph-up-arrow me-2"></i> Sales Report
      </router-link>
      <router-link
        to="/dashboard/reports/audit"
        class="list-group-item list-group-item-action d-flex align-items-center"
      >
        <i class="bi bi-journal-text me-2"></i> Audit Logs
      </router-link>
    </div>

    <!-- Logout Button at the Bottom -->
    <div class="p-3 border-top">
      <button
        class="btn btn-dark w-100 d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
#sidebar-wrapper {
  background-color: #A52A2A; /* King Crimson red for the sidebar */
  color: #FFFFFF; /* White text for visibility */
}

.list-group-item {
  background-color: transparent; /* Transparent background */
  color: #FFFFFF; /* White text */
}

.list-group-item:hover {
  background-color: #DC143C; /* Bright red on hover */
}

/* Ensure the links scroll independently of the logout button */
.list-group-flush {
  overflow-y: auto;
}

/* Ensure sidebar fills the height and logout stays pinned */
.flex-grow-1 {
  flex-grow: 1;
}
</style>
