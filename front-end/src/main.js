import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let data = {
  currentWeek: 15,
  numberOfWeeks: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], // TODO fix this, maybe delete
  topWeek: 15,
  getNumberOfWeeks(){
    return this.numberOfWeeks;
  },
  getCurrentWeek(){
    return this.currentWeek;
  },
  changeCurrentWeek(inValue) {
    this.currentWeek = inValue;
  },
  incrementWeek() {

  },
  decrementWeek(){

  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
