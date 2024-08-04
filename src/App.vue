<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todo-list">TodoList</router-link> |
      <router-link to="/issue-list">IssueList</router-link> |
      <router-link to="/todos-issues">TodosIssues</router-link>
    </nav>
    <router-view/>

    <!--
      <router-link> genera un enlace a la ruta establecida en to.
      <router-view> renderiza el componente correspondiente a la ruta.
      La parte <router-view/> muestra el componente Home si la URL es la raíz (/) 
      y el componente About si la URL es /about.
      Las partes que no sean <router-view/> siempre se muestran en la aplicación, por lo que es una buena
       idea describir los elementos comunes, como los encabezados y la navegación.
    -->

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
