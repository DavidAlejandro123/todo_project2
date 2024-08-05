<template>
  <div>
    <h1>lista de tareas</h1>
    <!-- formulario de entrada de tareas -->
    <form @submit.prevent="addTodo()">
      <el-input placeholder="todo" v-model="todo"></el-input>
    </form>
    <el-row :gutter="12">
      <!-- v-forAñade. -->
      <TodoItem v-for="( todo, index ) in todos" :msg="todo" :index="index" :removeTodo="removeTodo" :key="index" />
      <TodoItem v-for="(issue, index) in issues" :msg="issue.title" :index="index" :removeTodo="closeIssue" :key="issue.id" />
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

import TodoItem from '@/components/TodoItem';

const client = axios.create({
  baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`,
  headers: {
    'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type':'application/json',
  },
})

export default {
  name: 'TodosIssues',
  // Añadir como componente secundario
  components: {
    TodoItem
  },
  data () {
    return {
      todo: '',
      
      todos: [],
      issues: []
    }
  },
  methods: {
    // Gestionar tareas desde aquí
    addTodo(){
      this.todos.push(this.todo);
      this.todo= '';
    },
    removeTodo(index){
      this.todos.splice(index, 1);
    },
    // Gestionar los problemas desde aquí
    closeIssue(index){
      const target = this.issues[index];
      client.patch(`/issues/${target.number}`,
          {
            state: "closed"
          },
        )
        .then(() => {
         this.issues.splice(index, 1);
      })
    },
    getIssues() {
      client.get('issues')
        .then((res) => {
          this.issues = res.data
      })
    }
  },
  created() {
    this.getIssues();
  }
}
</script>