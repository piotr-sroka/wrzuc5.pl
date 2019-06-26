<template>
  <app-auth-login/>
</template>

<script>
import AppAuthLogin from "@/components/Auth/Login";

export default {
	middleware: ["check-auth", "authenticated"],
	components: {
		AppAuthLogin
	},
	head() {
		return {
			title: "Zaloguj się"
		};
	}
};
</script>
