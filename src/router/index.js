import Vue from 'vue' //se importa desde node_modules
import VueRouter from 'vue-router' //se importa desde node_modules
import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import IssueList from '../views/IssueList.vue'
import TodosIssues from '../views/TodosIssues.vue'

Vue.use(VueRouter)

//en routes se definen los enrutamientos, es decir
//se definen las URL y sus componentes y se pueden agregar paginas
const routes = [
  {
    path: '/',  //definicion de URL
    name: 'home', //NOmbre de su enrutamiento
    component: HomeView //el componente a renderizar
  },
  {
    path: '/todo-list',  //definicion de URL
    name: 'TodoList', //NOmbre de su enrutamiento
    component: TodoList //el componente a renderizar
  },
  {
    path: '/issue-list',  //definicion de URL
    name: 'IssueList', //NOmbre de su enrutamiento
    component: IssueList //el componente a renderizar
  },
  {
    path: '/todos-issues',  //definicion de URL
    name: 'TodosIssues', //NOmbre de su enrutamiento
    component: TodosIssues //el componente a renderizar
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //ruta de carga diferida: carga el componente solo cuando se solicita la pagina
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    //define una funcion que crea el componente About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, //especifica la URL base desde la cual iniciar la aplicación
  routes  //se establece el enrutamiento definido por const routes=[]
})

export default router

//La url base para un entorno local seria http://localhost:8080/
//la url base para un entorno de produccion seria su dominio
