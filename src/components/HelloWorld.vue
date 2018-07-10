<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div
      v-bind:key="measure.id"
      v-for="measure of measurements"
    >
      {{ measure.date + 'r, ' + measure.weight + 'kg' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      measurements: this.$store.state.measurements,
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
