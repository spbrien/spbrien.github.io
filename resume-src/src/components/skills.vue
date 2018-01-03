<template>
  <div class="skills row">
    <div class="columns small-12">
      <h3>Skills</h3>
      <div class="row">
        <div class="columns padding-sm small-12 medium-6 " v-for="item in data">
          <h5>
            {{item.name}}
          </h5>
          <ul>
            <li v-for="skill in item.keywords">{{skill}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'skills',
  props: ['data'],
}
</script>

<style>
</style>
