<template lang="pug">
.container
  nuxt-link(to="/kopet") Tasks
</template>
<script>
import { onMounted } from "vue";
export default {
  setup(props, { $hello }) {
    // const { $hello } = useContext;
    const res = {};

    onMounted(() => {
      $hello.load();
    });
    return { res };
  },
};
</script>
