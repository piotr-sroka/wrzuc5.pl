<template>
  <app-auth-login/>
</template>

<script>
import AppAuthLogin from "@/components/Auth/Login";

export default {
  middleware: ["check-auth", "notauthenticated"],
  components: {
    AppAuthLogin
  }
};
</script>
