<template>
  <div style="width: 380px; margin: auto">
    <h1 class="text-white text-center pt-5 fw-bold">ToDo List</h1>

    <form @submit.prevent="onClickAdd()">
      <div class="d-flex mt-3">
        <input
          type="text"
          class="form-control rounded-end-0 fw-medium"
          placeholder="Add new task"
          v-model="state.task_name"
        />
        <button class="btn btn-primary rounded-start-0">Add</button>
      </div>
      <ul class="list-group mt-4">
        <li v-for="task in state.tasks" :key="task.id" class="list-group-item">
          <div class="d-flex justify-content-between">
            <span
              class="fw-medium"
              :class="{ 'text-decoration-line-through': task.is_completed }"
              >{{ task.id }}. {{ task.name }}</span
            >
            <div class="d-flex gap-2">
              <a role="button" v-show="!task.is_completed" class="text-primary"
                ><i class="bi bi-pencil-square"></i
              ></a>
              <a role="button" class="text-danger"
                ><i class="bi bi-trash"></i
              ></a>
              <a role="button" v-show="!task.is_completed"
                ><i class="bi bi-check-circle text-success"></i
              ></a>
              <a role="button" v-show="task.is_completed" class="text-warning"
                ><i class="bi bi-x-circle"></i
              ></a>
            </div>
          </div>
        </li>
        <!-- <li class="list-group-item">
          <div class="d-flex justify-content-between">
            <span class="fw-medium text-decoration-line-through"
              >Go to school</span
            >
            <div class="d-flex gap-3">
              <a role="button" class="text-danger"
                ><i class="bi bi-trash"></i
              ></a>
              <a role="button"><i class="bi bi-x-circle"></i></a>
            </div>
          </div>
        </li> -->
      </ul>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  tasks: [
    { id: 1, name: "Go count down", is_completed: false },
    { id: 2, name: "Go home", is_completed: true },
    { id: 3, name: "Go to sleep", is_completed: false },
    { id: 4, name: "Go to USA", is_completed: true },
  ],
  task_name: "",
});

const onClickAdd = () => {
  alert(state.task_name);
};
</script>
