<template>
    <form v-on:submit.prevent="onSubmit" class="measure-form">
      <label for="weight">Weight</label>
      <input
        required
        type="number"
        min="0"
        max="200"
        name="weight"
        v-model="weight"
      >
      <label for="date">Date of measure</label>
      <input
        required
        type="date"
        name="date"
        v-model="date"
        v-bind:max="maxDate"
      >
      <button type="submit">Submit</button>
    </form>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MeasureForm',
  data() {
    return {
      weight: null,
      date: null,
      maxDate: moment().format('YYYY-MM-DD'),
    };
  },
  methods: {
    onSubmit() {
      console.log(this.date);
      this.$store.dispatch(
        'addMeasure',
        {
          weight: this.weight,
          date: moment(this.date).format('DD/MM/YYYY'),
        },
      );
    },
  },
};
</script>

<style scoped lang="scss">
  .measure-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    margin-top: 20px;
  }
  input {
    width: 200px;
  }
  button[type="submit"] {
    margin-top: 20px;
  }
</style>
