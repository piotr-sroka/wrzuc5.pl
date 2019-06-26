<template>
  <app-auth-signup/>
</template>

<script>
import AppAuthSignup from "@/components/Auth/Signup";

export default {
	middleware: ["check-auth", "authenticated"],
	components: {
		AppAuthSignup
	},
	head() {
		return {
			title: "Zarejestruj się"
		};
	}
};
</script>
