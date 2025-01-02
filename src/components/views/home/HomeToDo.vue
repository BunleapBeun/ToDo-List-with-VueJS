<template>
  <div style="width: 380px; margin: auto" class="py-5">
    <h1 class="text-white text-center fw-bold">ToDo List</h1>

    <form @submit.prevent="onClickAdd()">
      <div class="d-flex mt-3">
        <input
          type="text"
          class="form-control rounded-end-0 fw-medium"
          placeholder="Add new task"
          v-model="state.task_name"
        />
        <button class="btn btn-primary rounded-start-0">
          {{ state.selected_id == 0 ? "Add" : "Update" }}
        </button>
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
              <a
                role="button"
                v-show="!task.is_completed"
                class="text-primary"
                @click="onClickEdit(task.name, task.id)"
                ><i class="bi bi-pencil-square"></i
              ></a>
              <a role="button" class="text-danger"
                ><i class="bi bi-trash"></i
              ></a>
              <a
                role="button"
                v-show="!task.is_completed"
                @click="onClickComplete(task.id)"
                ><i class="bi bi-check-circle text-success"></i
              ></a>
              <a
                role="button"
                v-show="task.is_completed"
                class="text-warning"
                @click="onClickCancel(task.id)"
                ><i class="bi bi-x-circle"></i
              ></a>
            </div>
          </div>
        </li>
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
  selected_id: 0,
});

const onClickAdd = () => {
  if (state.selected_id == 0) {
    let ids = state.tasks.map((item) => item.id);
    let maxID = Math.max(...ids) + 1;

    state.tasks.push({
      id: maxID,
      name: state.task_name,
      is_completed: false,
    });
  } else {
    let index = state.tasks.findIndex((item) => item.id == state.selected_id);
    state.tasks[index].name = state.task_name;
    state.selected_id = 0;
  }
  state.task_name = "";
};

const onClickComplete = (id) => {
  // JS ES6

  let index = state.tasks.findIndex((item) => item.id == id);
  // console.log(index);
  state.tasks[index].is_completed = true;
};

const onClickCancel = (id) => {
  // JS ES6

  let index = state.tasks.findIndex((item) => item.id == id);
  // console.log(index);
  state.tasks[index].is_completed = false;
};

const onClickEdit = (name, id) => {
  // alert(name)
  state.task_name = name;
  state.selected_id = id;
};
</script>
