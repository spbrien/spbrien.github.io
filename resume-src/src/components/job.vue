<template>
  <div class="job row" v-if="data">
    <div class="columns small-12">
      <h5>{{data.company}} &ndash; {{data.position}}</h5>
      <p><em>{{formatDate(data.startDate)}} &ndash; {{formatDate(data.endDate)}}</em></p>
      <p>{{data.summary}}</p>
    </div>
    <div class="columns small-6">
      <h6>Projects</h6>
      <ul>
        <li v-for="item in data.highlights">{{item}}</li>
      </ul>
    </div>
    <div class="columns small-6">
      <h6>Technology</h6>
      <ul>
        <li v-for="item in data.experience">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'job',
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
