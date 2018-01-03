
<template>
  <div class="basics" v-if="data">
    <div class="introduction row">
      <div class="columns small-12">
        <h1>{{data.name}}</h1>
      </div>
      <div class="columns small-12">
        <p>
          {{data.label}}<br />
          {{data.website}}<br />
          <!-- {{data.email}}<br />
          {{data.phone}}<br /> -->
        </p>
        </p>
      </div>
    </div>
    <div class="about padding-sm row">
      <div class="columns small-12">
        <h3>About</h3>
        <p v-html="data.summary">
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'basics',
  props: ['data'],
  components: {
  },
}
</script>

<style>
</style>
