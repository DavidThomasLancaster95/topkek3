<template>
  <div class="admin">
    <h1>Edit Formatting</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h1>Add a Week</h1>
      <h2>Top Week is Currently {{this.$root.$data.topWeek}}</h2> 
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title" />
        <p></p>
        <!-- <textarea v-model="description" placeholder="write your descirption here!"/> -->
        <p></p>
        <input type="file" name="photo" @change="fileChanged" />
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{ addItem.title }}</h2>
        <img :src="addItem.path" />
      </div>
    </div>

    
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      title: "",
      file: null,
      addItem: null,
      items: [],
      findTitle: "",
      findItem: null,
      description: "",
    };
  },
  computed: {
    suggestions() {
      let items = this.items.filter((item) =>
        item.title.toLowerCase().startsWith(this.findTitle.toLowerCase())
      );
      return items.sort((a, b) => a.title > b.title);
    },
  },
  created() {
    this.getItems();
  },
  methods: {
    async testFunction() {
      try {
        console.log("testfunction clicked");
        let value = await axios.get("/test");
        console.log(value);
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async editItem(item) {
      try {
        if (this.findItem.description > this.$root.$data.topWeek) {
          alert(
            'woah, you can"t go forward that far\nPlease choose a week between 1 and ' +
              this.$root.$data.topWeek
          );
          throw "exceed bounds";
        }

        await axios.put("/api/items/" + item._id, {
          title: this.findItem.title,
          description: this.findItem.description,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectItem(item) {
      this.findTitle = "";
      this.findItem = item;
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append("photo", this.file, this.file.name);
        let r1 = await axios.post("/api/photos", formData);
        let r2 = await axios.post("/api/items", {
          title: this.title,
          path: r1.data.path,
          description: this.$root.$data.topWeek,
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center;
}

/* Form */
input,
textarea,
select,
button {
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5bdeff;
  color: #fff;
}
</style>
