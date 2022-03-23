<template>
    <div class="drinks">
        <ProductCard v-for="product in $drinks" :key="product.id" :product="product"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {  shopProducts } from '@/store'
    export default Vue.extend({
        // filter products by category
        computed: {
            $drinks() {
                return shopProducts.$Drinks
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

.chicken {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
}

</style>