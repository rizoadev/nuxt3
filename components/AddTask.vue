<template lang="pug">
.flex
  .card
    .card-body
      form(action="#", v-on:submit.prevent="onSubmit")
        label.form-label(for="a1") Add Task
        .my-2(style="position: relative")
          input#a1.form-control(
            type="text",
            v-model="res.value",
            placeholder="new task",
            @keyup.enter="res.Add"
          )
          .spinx(v-if="res.loading")
            .spinner-border.spinner-border-sm.text-primary(role="status")
              span.visually-hidden Loading... loading...
</template>
<script>
import { defineComponent, reactive } from "vue";
import axios from "axios";

export default defineComponent({
  emits: ["added"],
  setup(props, { emit }) {
    const res = reactive({
      loading: false,
      value: "",
      Add: async () => {
        res.loading = true;
        const { data } = await axios.post(
          "https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json",
          {
            task: res.value,
          }
        );
        if (data) {
          res.value = "";
          res.loading = false;
          emit("added");
        }
      },
    });
    return { res };
  },
});
</script>

<style lang="css">
.spinx {
  position: absolute;
  top: 7px;
  right: calc(0.375em + 0.1875rem);
  z-index: 4;
}
</style>