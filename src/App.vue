<template>
  <div id="app" class="container-xl p-8">
    <h1 class="mb-6">Jen's Feed Warp</h1>
  
    <FeedReader />
  </div>
</template>

<script>
import FeedReader from './components/feed-reader/index.vue'

export default {
  name: 'app',

  components: { FeedReader }
}
</script>
