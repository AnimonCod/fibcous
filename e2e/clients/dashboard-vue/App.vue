<template>
  <dashboard :fibcous="fibcous" />
</template>

<script>
import Vue from 'vue'
import fibcous from '@fibcous/core'
import { Dashboard } from '@fibcous/vue'

export default {
  name: 'App',
  components: {
    Dashboard,
  },
  computed: {
    fibcous: () => new fibcous(),
  },
}
</script>

<style src="@fibcous/core/dist/style.css"></style>
<style src="@fibcous/dashboard/dist/style.css"></style>
