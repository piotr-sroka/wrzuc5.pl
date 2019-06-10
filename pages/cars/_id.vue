<template>
    <app-long-car-info></app-long-car-info>
</template>
<script>
import AppLongCarInfo from "@/components/Cars/CarInfo/long";

export default {
    middleware: ["check-auth"],
    components: {
        AppLongCarInfo
    }
};
</script>
