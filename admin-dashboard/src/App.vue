<template>
  <div id="app" class="d-flex">
    <!-- Sidebar -->
    <AppSidebar />

    <!-- Main Content Wrapper -->
    <div class="content-wrapper d-flex flex-column flex-grow-1 w-100">
      <router-view class="content flex-grow-1 p-4" />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppSidebar from "./components/AppSidebar.vue";


export default {
  name: "AppRoot",
  components: {
    AppSidebar,
  },
};
</script>

<style>
/* Ensure the wrapper takes the full height */
#wrapper {
  min-height: 100vh;
  display: flex;
}

/* Sidebar stays fixed with a width */
#sidebar-wrapper {
  width: 250px;
  flex-shrink: 0;
  background-color: #f8f9fa;
  overflow-y: auto; /* Scrollable sidebar if content overflows */
}

/* Main content and footer take full remaining space */
#page-content-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

/* Ensure content area grows and pushes footer down */
.container-fluid {
  flex-grow: 1;
  overflow-y: auto;
}

/* Footer pinned at the bottom */
footer {
  height: 60px;
  background-color: #212529;
  color: white;
  text-align: center;
  line-height: 60px;
  flex-shrink: 0;
  width: 100%; /* Ensure footer spans full width */
}
body {
    background-color: #2C2C2C; /* Dark gray background */
    color: #D3D3D3; /* Light gray text */
}

/* Ensure links and buttons stand out */
a {
    color: #DC143C; /* Bright red for links */
}

a:hover {
    color: #A52A2A; /* Dark red on hover */
}

</style>
