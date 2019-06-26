<template>
    <app-add-car></app-add-car>
</template>
<script>
import AppAddCar from "@/components/Cars/AddCar";

export default {
	middleware: ["check-auth"],
	components: {
		AppAddCar
    },
    head() {
        return {
            title: "Dodaj ogłoszenie"
        }
    }
};
</script>
