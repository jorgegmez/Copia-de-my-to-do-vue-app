<template>
  <div class="container AddTask-container">
    <form>
      <div class="form-group">
        <label>Titulo: </label>
        <input class="form-control" name="inputTitle" v-model="tasks.title" type="text"/>
        <small class="form-text text-muted">Este campo es requerido!.</small>
      </div>
      <div>
        <label>Descripcion: </label>
        <input class="form-control" name="inputDescription" v-model="tasks.description" type="text"/>
        <small class="form-text text-muted">Este campo es requerido!.</small>
      </div>
      <button type="button" class="btn btn-primary AddTask-button btn-sm" @click="handleAddTask">Add task</button>
    </form>
  </div>
</template>


<script>
import axiosInstance from '../../axiosIntance'
import swal from 'sweetalert'
export default {
  data () {
    return {
      title: '',
      description: '',
      tasks: {title: '', description: ''}
    }
  },
  methods:{
    async handleAddTask(event){
      const newTask = {
        title: this.tasks.title,
        description: this.tasks.description
      }
      try {
        swal({
          title: "Good job!",
          text: "You added a new task!",
          icon: "success",
          button: "Okay!",
        });
        const {data} = await axiosInstance.post('create/', {
          title: newTask.title,
          description: newTask.description
        });
        console.log('event', event);
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

