<template>
    <div class="navigation">
        <nav class="nav">
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

<style lang="scss" scoped>

.navigation {
    width: 100%;
    .nav {
        width: 100%;
        ul {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            justify-items: center;
            align-items: center;
            li {
                font-size: 17px;
                font-weight: bold;
                color: #000;
                text-transform: uppercase;
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