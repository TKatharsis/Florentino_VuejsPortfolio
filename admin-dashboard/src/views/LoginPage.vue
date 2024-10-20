<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="card p-4" style="width: 300px;">
        <h5 class="text-center mb-4">Login</h5>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter username" />
        </div>
        <div class="form-group mt-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password" />
        </div>
        <button class="btn btn-primary w-100 mt-4">Login</button>
      </div>
    </div>
  </template>
  <script>
  export default { name: 'LoginPage' };
  </script>