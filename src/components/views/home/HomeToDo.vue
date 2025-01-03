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
        <li
          v-for="task in homeStore.tasks"
          :key="task.id"
          class="list-group-item"
        >
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
              <a
                role="button"
                class="text-danger"
                @click="onClickDelete(task.id)"
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
  <HomeModalConfirm />
</template>

<script setup>
import { reactive } from "vue";
import HomeModalConfirm from "./HomeModalConfirm.vue";
import { useHomeStore } from "@/stores/views/home_store";

const homeStore = useHomeStore();

const state = reactive({
  task_name: "",
  selected_id: 0,
});

const onClickAdd = () => {
  if (state.selected_id == 0) {
    let maxID = 1;
    if (homeStore.tasks.length > 0) {
      let ids = homeStore.tasks.map((item) => item.id);
      maxID = Math.max(...ids) + 1;
    }
    homeStore.tasks.push({
      id: maxID,
      name: state.task_name,
      is_completed: false,
    });
  } else {
    let index = homeStore.tasks.findIndex(
      (item) => item.id == state.selected_id
    );
    homeStore.tasks[index].name = state.task_name;
    state.selected_id = 0;
  }
  state.task_name = "";
};

const onClickComplete = (id) => {
  // JS ES6

  let index = homeStore.tasks.findIndex((item) => item.id == id);
  // console.log(index);
  homeStore.tasks[index].is_completed = true;
};

const onClickCancel = (id) => {
  // JS ES6

  let index = homeStore.tasks.findIndex((item) => item.id == id);
  // console.log(index);
  homeStore.tasks[index].is_completed = false;
};

const onClickEdit = (name, id) => {
  // alert(name)
  state.task_name = name;
  state.selected_id = id;
};

const onClickDelete = (id) => {
  homeStore.selected_id = id;
  homeStore.mdl_confirm.show();
};
</script>
