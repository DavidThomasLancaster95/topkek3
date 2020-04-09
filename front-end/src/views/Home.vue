<template>
<div id="app">
  <div class="wrapper">
    <div class="memes">
      <p>Week {{ currentWeek }}</p>

      <div class="buttonholder">
        <button @click="decrementWeek()" id="backbutton">Backward</button>
        <button @click="incrementWeek()">Forward</button>
      </div>

      <!--<img src="@/assets/holder/meme3.jpg"> -->

      <div class="masonry-wrapper">
        <div class="masonry">
          <div class="meme" v-for="item in items" :key="item.id">
            <div class="info">
              <div class="masonry-item">
                <div class="image">
                  <img :src="item.path">
                </div>

                
              </div>
            </div>
          </div>
        </div>
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
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      console.log("getItems called");
      console.log("CurrentWeek:" + this.$root.$data.getCurrentWeek());
      this.$root.$data.changeCurrentWeek(this.$root.$data.getCurrentWeek());
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        this.items = response.data.filter(
          meme => meme.description == this.$root.$data.getCurrentWeek()
        );
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    incrementWeek() {
      //currentWeek++;
      if (this.$root.$data.currentWeek === this.$root.$data.topWeek) {
        alert('woah, you can"t go forward that far');
      } else {
        this.$root.$data.currentWeek++;
      }
      this.getItems();
      
    },
    decrementWeek() {
      if (this.$root.$data.currentWeek === 1) {
        alert('woah, you can"t go back that far');
      } else {
        this.$root.$data.currentWeek--;
      }
      this.getItems();

    }
  },
  computed: {
    currentWeek() {
      return this.$root.$data.getCurrentWeek();
    }
  }
}
</script>

<style>
.buttonholder {
  margin: 20px;
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    columns: 1;
  }
}
@media only screen and (min-width: 1024px) {
  .masonry {
    columns: 1;
  }
}
.masonry-item,
.masonry-content {
  border-radius: 4px;
  overflow: hidden;
}
.masonry-item {
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3));
  transition: filter 0.25s ease-in-out;
}
.masonry-item:hover {
  filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.3));
}
body {
  background-color: #4b4b4b;
  color: #333333;
}
.meme {
  /* width: 30%; */
  width: 30%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.masonry {
  columns: 1;
  column-gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

@media only screen and (max-width: 800px) and (min-width: 0px) {
  .meme {
    width: 70%;
  }
}
</style>