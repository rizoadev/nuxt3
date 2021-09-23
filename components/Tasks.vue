<template lang="pug">
.flex
  .flex.my-1
    AddTask(@added="res.Added")

  .flex.my-1(v-for="d in res.datas", :key="d")
    .card
      .card-body
        Task(:task="d", @deleted="res.deleted($event)")
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const res = reactive({
      datas: [],

      Loads: async () => {
        const { data } = await axios.get(
          `https://ikamai-sandbox.firebaseio.com/sandbox/tasks/today.json`
        );
        if (data) {
          //- ubah ke KeyValue
          res.datas = Object.keys(data)
            .map((k) => ({
              key: k,
              value: data[k],
            }))
            .reverse();
        }
      },

      Added: () => {
        res.Loads();
      },

      deleted: (k) => {
        res.Loads();
      },
    });

    onMounted(() => {
      res.Loads();
    });

    return { res };
  },
};
</script>

<style lang="scss" scoped>
</style>