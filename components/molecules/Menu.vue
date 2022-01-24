<template>
    <div class="menu">
        <div class="btn-choice">
            <button @click="changeView('Chicken')">Frango</button>
            <button @click="changeView('Pastry')">Pastel</button>
            <button @click="changeView('Combo')">Combos</button>
            <button @click="changeView('Drinks')">Bebidas</button>
        </div>
        
        <component :is="currentView" />
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
        display: grid;
        justify-content: center;
        align-items: center;
        .btn-choice {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
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
        }
    }

</style>