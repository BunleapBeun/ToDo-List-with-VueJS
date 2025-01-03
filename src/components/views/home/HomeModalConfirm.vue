<template>
  <!-- Modal -->
  <div class="modal fade" id="mdl-confirm" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Delete Task</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">Are sure to delete?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="onClickOk()">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from "bootstrap";
import { onMounted } from "vue";
import { useHomeStore } from "@/stores/views/home_store";

const homeStore = useHomeStore();

onMounted(() => {
  homeStore.mdl_confirm = Modal.getOrCreateInstance(
    document.getElementById("mdl-confirm")
  );
});

const onClickOk = () => {
  let newArr = homeStore.tasks.filter(
    (item) => item.id != homeStore.selected_id
  );
  homeStore.tasks = newArr;
  homeStore.mdl_confirm.hide();
  homeStore.selected_id = 0;
};
</script>
