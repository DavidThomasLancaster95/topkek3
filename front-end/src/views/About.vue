<template>
<div id="app">
  <h1> Current Week Selected: {{currentWeek}} </h1>
  <div class="about">
    <div class="holder">
      <p></p>
      <div class="bg-text">
        <ul>
          <li v-for="item in this.$root.$data.getNumberOfWeeks()" :key="item.id">
            <div style="cursor: pointer"><p @click="setWeek(item)">Week {{ item }}</p></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
  integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"
></script>

 <script>
export default {
  name: "About",

  data() {
    return {};
  },
  methods: {
    setWeek(item) {
      //this.$root.$data.currentWeek++;
      //console.log(item);
      //this.$root.$data.currentWeek = item;
      this.$root.$data.changeCurrentWeek(item);
      //console.log(this.$root.$data.getCurrentWeek());
      this.$router.push("/");
      //this.$router.replace({ name: '/', force: true});
      //this.$router.replace("/Apipage", {silent:true})
    }
  },
  computed: {
    currentWeek() {
      return this.$root.$data.getCurrentWeek();
    }
  }
};

</script>

<style scoped>
.about {
  display: flex;
  -ms-flex-align: center;
  width: 100mv;
  justify-content: center;
}
.bg-text {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

  a:visited { text-decoration: none; color:rgb(185, 185, 185); }
a:hover { text-decoration: none; color:rgb(224, 224, 228); }
a:focus { text-decoration: none; color:rgb(185, 185, 182); }
a:hover, a:active { text-decoration: none; color:black }

</style>
