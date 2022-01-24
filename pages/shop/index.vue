<template>
<ShopTemplate/>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {shopProducts} from '@/store'
    export default Vue.extend({
        layout: 'pastelecia',
        async asyncData() {
            await shopProducts.index()
        }
    })
</script>

