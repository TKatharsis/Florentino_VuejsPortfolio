<template>
  <div class="container mt-4">
    <h2 class="mb-4">Dashboard Overview</h2>

    <!-- Cards Row -->
    <div class="row g-4">
      <!-- Total Users Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card text-white bg-primary shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Total Users</h5>
            <p class="card-text fs-4">1,245</p>
            <i class="bi bi-people card-icon"></i>
          </div>
        </div>
      </div>

      <!-- Active Users Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card text-white bg-success shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Active Users</h5>
            <p class="card-text fs-4">945</p>
            <i class="bi bi-person-check card-icon"></i>
          </div>
        </div>
      </div>

      <!-- Sales Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card text-white bg-warning shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Sales</h5>
            <p class="card-text fs-4">$13,540</p>
            <i class="bi bi-currency-dollar card-icon"></i>
          </div>
        </div>
      </div>

      <!-- Pending Tasks Card -->
      <div class="col-md-6 col-lg-3">
        <div class="card text-white bg-danger shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Pending Tasks</h5>
            <p class="card-text fs-4">23</p>
            <i class="bi bi-list-task card-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
.card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
}

.card-icon {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 2rem;
  opacity: 0.3;
}
</style>