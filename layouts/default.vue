<template>
    <div class="default-layout">   
        <clientOnly>
            <notifications
            position="bottom center"
            classes="notifications"
            :max="1"
            />
        </clientOnly>
        <Nuxt/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
        
    })
</script>

<style scoped>

</style>