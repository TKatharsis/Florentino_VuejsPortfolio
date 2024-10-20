<template>
  <div class="d-flex" id="wrapper">
    <AppSidebar />
    <div id="page-content-wrapper" class="w-100">
      <AppNavbar />
      <div class="container-fluid my-4">
        <router-view />
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<script>

import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';

export default { components: { AppNavbar, AppFooter } };
</script>

<style>
  #wrapper { display: flex; }
  #sidebar-wrapper { width: 250px; }
  #page-content-wrapper { flex: 1; }
</style>
