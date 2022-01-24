<template>
    <LoginTemplate />
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        layout: 'pastelecia',
        middleware: 'guest',
    })
</script>

<style scoped>

</style>