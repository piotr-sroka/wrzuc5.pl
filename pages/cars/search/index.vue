<template>
  <app-search-results></app-search-results>
</template>

<script>
import AppSearchResults from "@/components/Cars/SearchResults";

export default {
  middleware: ['check-auth'],
  components: {
      AppSearchResults
  },
  head() {
    return {
      title: "Wyniki wyszukiwania"
    }
  },
}
</script>

<style>

</style>
