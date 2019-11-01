<style scoped>
h3 {
  margin: 40px 0 0;
}

</style>

<template>
	<div class="home">
    <h1>Hello ! {{ userName }}</h1>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'home',
	computed: {
        ...mapGetters({
            userName: 'getUserName'
        })
    },
	
}
</script>