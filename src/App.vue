<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "vue-select/dist/vue-select.css";

export default {};
</script>

<style scope>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:wght@300;400;500&display=swap");

html,
* {
  font-family: "Noto Sans TC";
}
body {
  font-family: "Noto Sans TC", sans-serif;
}

#app {
  font-family: "Noto Sans TC", sans-serif;
}

input[type="button"],
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Noto Sans TC", sans-serif;
}

.map_gc {
  background: url(./assets/images/basemap.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 1024px;
  min-width: 1024px;

  width: 100%;
  height: auto;
}

.txt-label {
  background-color: rgb(192, 213, 230);
  color: darkblue;
}

fieldset {
  border: 1px solid #0489b1;
  padding: 0 1.4em 1em 1.4em !important;
  margin: 0 0 0.2em 0 !important;
  -webkit-box-shadow: 0px 0px 0px 0px #000;
  box-shadow: 0px 0px 0px 0px #000;
}

legend {
  padding: 0.2em 0.5em;
  border: 1px solid #0489b1;
  color: #0489b1;
  font-size: 90%;
}
</style>
