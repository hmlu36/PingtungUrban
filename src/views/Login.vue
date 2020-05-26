
<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <div class="text-center mb-2">
            <img src="../assets/images/logo-GEOSAT-W592.png" style="max-width: 20rem;" />
          </div>
          <form class="form-signin">
            <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user-circle"></i>
                </span>
              </div>
              <input type="email" class="form-control" placeholder="帳號" />
            </div>
            <br />
            <div class="input-group input-group-lg">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-unlock-alt"></i>
                </span>
              </div>
              <input type="password" class="form-control" placeholder="密碼" />
            </div>
            <br />
            <router-link :to="{ name: 'Apply'}">
              <button class="btn btn-primary btn-block">進入圖台</button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      account: "admin",
      password: "admin123",
      showPassword: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-body {
  padding: 2rem;
}
</style>