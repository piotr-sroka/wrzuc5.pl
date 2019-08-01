<template>
    <app-home></app-home>
</template>

<script>
import AppHome from "@/components/Home";

export default {
  middleware: ['check-auth'],
  components: {
    AppHome
  },
  head() {
    return {
      title: "Wrzuć5"
    }
  },
};
</script>
