<template>
  <h2>This is secret page</h2>
</template>

<script>
export default {
  middleware: ["check-auth", "notauthenticated"],
  components: {}
};
</script>
