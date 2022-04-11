<template>
    <div class="menu">
        <button class="btn-choice btn chicken" @click="$emit('chicken')">Frango</button>
        <button class="btn-choice btn pastry" @click="$emit('pastry')">Pastel</button>
        <button class="btn-choice btn combo" @click="$emit('combo')">Combos</button>
        <button class="btn-choice btn drinks" @click="$emit('drinks')">Bebidas</button>
    </div>
        
</template>

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

<style  lang="scss" scoped>

.menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;    
    button {
        background: #000;
        color: #fff;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            background: #fd7e14;
        }
    }
    @media (min-width: 768px) {
        justify-content:center;
        gap: 20px;
    }

            
}
    

</style>