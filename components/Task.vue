<template lang="pug">
.flex.d-flex.justify-content-between
  div task:
    .text-primary {{ task.value.task }}
  .text-danger.pointer(@click="busak")
    | {{ res.msg }}
</template>
<script>
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  props: {
    task: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["deleted"],
  setup(props, { emit }) {
    const res = reactive({
      msg: "delete",
    });

    const busak = () => {
      res.msg = "deleting";
      axios
        .delete(
          `https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today/${props.task.key}.json`
        )
        .then(() => {
          emit("deleted", props.task.key);
          res.msg = "delete";
        });
    };

    return { busak, res };
  },
});
</script>
<style lang="css">
.pointer {
  cursor: pointer;
}
</style>