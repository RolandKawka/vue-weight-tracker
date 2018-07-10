<template>
  <div>
    <h1>Your measurements:</h1>
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
  name: 'Measurements',
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
