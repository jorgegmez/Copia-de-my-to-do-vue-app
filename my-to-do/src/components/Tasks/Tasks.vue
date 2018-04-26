<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>Change Status</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="task in tasks" :key="task._id">
        <td>{{task.title}}</td>
        <td>{{task.description}}</td>
        <td>{{task.done ? 'Completado' : 'Sin completar'}}</td>
        <!-- <td><input type="checkbox" @click="handleChangeStatus(task)"></td> -->
        <td><button @click="handleChangeStatus(task)" class="btn btn-sm btn-success">{{task.done ? 'Undo' : 'Mark as done'}}</button></td>
        <td><button type="button" @click="handleDeleteTask(task._id)" class="btn btn-sm btn-danger">Remove</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axiosInstance from '../../axiosIntance'
import _ from 'lodash'
export default {
  data () {
    return{
      tasks: []
    }
  },
  async created (){
    try {
      const {data} = await axiosInstance.get('get/')
      this.tasks = data
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async handleDeleteTask (taskToRemoveId){
      try {
        const willDelete = await swal({
          title      : 'Are you sure?',
          text       : 'Once deleted, you will not be able to recover this task again!',
          icon       : 'warning',
          buttons    : true,
          dangerMode : true,
        });
        if (willDelete) {
          await axiosInstance.post('delete/', {
            _id : taskToRemoveId,
          });
          this.tasks = this.tasks.filter((task) => taskToRemoveId  !== task._id);
          swal('Poof! Your task has been deleted!', {
            icon : 'success',
          });
        } else {
          swal('Your task is safe!');
        }
      } catch (err) {
        console.log(err);
      }
    },
    async handleChangeStatus (taskToUpdate){
      try {
        await axiosInstance.post('update/', {
          _id         : taskToUpdate._id,
          title       : taskToUpdate.title,
          description : taskToUpdate.description,
          done        : !taskToUpdate.done,
        });
        const indexToModify = _.findIndex(this.tasks, {_id : taskToUpdate._id});
        this.tasks[indexToModify].done = !this.tasks[indexToModify].done;
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>

