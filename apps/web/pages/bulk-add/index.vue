<template>
  <h1>{{ slug }}</h1>
  test
</template>

<script>
  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    }
  }
</script>