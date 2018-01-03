<template>
  <div class="education padding row">
    <div class="columns small-12">
      <h3>Education</h3>
      <p>
        {{data.institution}}<br />
        {{data.studyType}} in {{data.area}}<br />
        {{formatDate(data.endDate)}}
      </p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'education',
  props: ['data'],
  methods: {
    formatDate(date) {
      return moment(date).format('YYYY')
    },
  }
}
</script>

<style>
</style>
