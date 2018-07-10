<template>
    <form v-on:submit.prevent="onSubmit" class="measure-form">
      <label for="weight">Weight</label>
      <input required type="number" min="0" max="200" name="weight" v-model="weight">
      <label for="comment">Comment</label>
      <input required type="text" name="comment" v-model="comment">
      <label for="date">Date of measure</label>
      <input required type="date" name="date" v-model="date">
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
      comment: null,
      date: null,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.date);
      this.$store.dispatch(
        'addMeasure',
        {
          weight: this.weight,
          comment: this.comment,
          date: moment(this.date).format('DD/MM/YYYY'),
        },
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
