<template>
  <div class="experience row">
    <div class="columns small-12">
      <h3>Work Experience</h3>
      <job v-for="item in data" :data="item" :key="item.company"></job>
    </div>
  </div>
</template>

<script>
import job from '@/components/job'

export default {
  name: 'experience',
  props: ['data'],
  components: {
    job
  },
}
</script>

<style>
</style>
