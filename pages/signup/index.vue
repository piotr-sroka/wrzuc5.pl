<template>
  <app-auth-signup/>
</template>

<script>
import AppAuthSignup from "@/components/Auth/Signup";

export default {
  middleware: ["check-auth", "notauthenticated"],
  components: {
    AppAuthSignup
  }
};
</script>
