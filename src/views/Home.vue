<template>
  <div class="home">
    <Measurements />
  </div>
</template>

<script>
// @ is an alias to /src
import Measurements from '@/components/Measurements.vue';

export default {
  name: 'home',
  components: {
    Measurements,
  },
};
</script>
