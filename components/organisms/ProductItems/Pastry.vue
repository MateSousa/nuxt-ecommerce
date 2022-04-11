<template>
    <div class="pastry">
        <ProductCard v-for="product in $pastry" :key="product.id" :product="product"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {  shopProducts } from '@/store'
    export default Vue.extend({
        // filter products by category
        computed: {
            $pastry() {
                return shopProducts.$Pastry
            },
        },
        methods: {
            showId() {
                console.log('alo')
            }
        }
    })
</script>

<style lang="scss" scoped>

.pastry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
}

</style>