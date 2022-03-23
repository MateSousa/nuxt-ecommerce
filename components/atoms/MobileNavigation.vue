<template>
    <div class="mobile-navigation">
        <button class="btn btn-open" @click="toggle">
            <img src="~/assets/img/bars.svg" alt="Ícone de barra">
        </button>
        <nav v-show="show">
            <button class="btn btn-close" @click="toggle">
                <img src="~/assets/img/close.svg" alt="Ícone de fechar">
            </button>
            <ul class="items">
                <li class="item">
                    <NuxtLink to="/" class="nav-link">
                        Inicio
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/shop" class="nav-link">
                        Cardápio
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/about" class="nav-link">
                        Sobre nós
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/contact" class="nav-link">
                        Contato
                    </NuxtLink>
                </li>
            </ul>
        </nav>        
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                show: false
            }
        },
        methods: {
            toggle() {
                this.show = !this.show
            }
        }
    })
</script>

<style lang="scss" scoped>

.mobile-navigation {
    width: 100%;
    button {
        background: transparent;
        img {
            width: 24px;
            height: 24px;
        }
    }
    nav {
        width: 100%;
        height: 100vh;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        ul {
            // center the items in screen
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            justify-items: center;
            align-items: center;
            li {
                font-size: 17px;
                font-weight: bold;
                color: #000;
                text-transform: uppercase;
                padding-bottom: 50px;
                a {
                    color: #000;
                    text-decoration: none;
                    &:hover {
                        color: #fd7e14;
                        border-bottom: 1px solid #fd7e14
                    }
                }
                .nuxt-link-exact-active {
                    color: #fd7e14;
                    border-bottom: 1px solid #fd7e14
                }

            }
        }           
    }
}

</style>