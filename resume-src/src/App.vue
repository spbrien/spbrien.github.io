<template>
  <div id="app" v-if="data" class="padding">
    <basics :data="data.basics"></basics>
    <experience :data="data.work"></experience>
    <education :data="data.education[0]"></education>
    <skills :data="data.skills"></skills>
  </div>
</template>

<script>
import data from '@/assets/resume.json'
import basics from '@/components/basics'
import experience from '@/components/experience'
import education from '@/components/education'
import skills from '@/components/skills'

export default {
  name: 'app',
  components: {
    basics,
    experience,
    education,
    skills,
  },
  computed: {
    data() {
      return data
    },
  },
}
</script>

<style lang="scss">
@import './scss/base.scss';
</style>
