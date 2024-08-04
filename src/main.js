import Vue from 'vue'
import App from './App.vue'
import router from './router' //se hace import y se utiliza como enrutador cuando se crea la instancia de Vue
//Importar ElementUI y archivos CSS
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI);

//se crea una instancia de vue
new Vue({
  router,   //se registra la importacion de routercomopropdeobjVue
  render: h => h(App) //descripcion para renderizar App en elemtno DOM montado
}).$mount('#app')
//la instancia de VUe se monta en <div id="app"></div> en index.html
//en $mount() se pueden especificar elementos DOM 


/*
linea 10 es abreviatura de 

render: function(createElement){
  return createElement(App)
}
*/

//render es una funcion para generar un DOM virtual