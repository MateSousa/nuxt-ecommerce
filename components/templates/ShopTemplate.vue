<template>
    <div class="shop-template">
        <h1>Cardápio</h1>
        <Container>
            <Menu 
            @chicken="changeView('chicken')"
            @pastry="changeView('pastry')" 
            @combo="changeView('combo')" 
            @drinks="changeView('drinks')" 
            />
            <component :is="currentView" class="product-card-container"/>        
        </Container>
    </div>
    
</template>

'
<script lang="ts">
    import Vue from 'vue'
    

    export default Vue.extend({
        data(){
            return {
                currentView: 'Chicken'
            }
        },
        methods: {
            changeView(view: string){
                this.currentView = view
            }
        }
    })
</script>

<style lang="scss" scoped>

.shop-template {

    h1 {
        text-align: center;
        color: #000;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .product-card-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        justify-content: center;
        align-items: center;
        gap: 20px;
        @media (max-width: 480px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
        }        
    }
}

</style>