<template>
  <div id="app">
    <div class="header">
      <div id="nav">
        <div class="centerit">
          
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Meme Archeives</router-link> |
        <router-link to="/write">Submit a meme</router-link> 
        
        

        </div>
      </div>
    </div>

    <router-view />


    <div class="footer">
  <p>Repository: <a href="https://github.com/DavidThomasLancaster95/topkek3.git">Repository</a></p>
  </div> 
  </div>
</template>

<style>
.footer {
  position: fixed;
  left: 
  0;
  bottom: 0;
  width: 100%;  
  background-color: rgb(44, 44, 44);
  color: white;
  text-align: center;
}
.header {
  /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
  background-color: #2e2e2e;
  display: flex;
}

.centerit {
  text-align: center;
  
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b8bbbe;
}

#nav {
  padding: 30px;
  width:100vw;
  
}

#nav a {
  font-weight: bold;
  color: #a6a6a7;
}

#nav a.router-link-exact-active {
  color: #dbe7e2;
}
</style>
