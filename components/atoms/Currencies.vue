<template>
    <div class="currencies">
        <!-- <NuxtLink to="/">
            <img src="~/assets/img/search.svg" alt="Ícone de procura">
        </NuxtLink> -->
        <NuxtLink to="/login">
            <img src="~/assets/img/user.svg" alt="Ícone de usuário">
        </NuxtLink>
        <!-- <NuxtLink to="/">
            <img src="~/assets/img/heart.svg" alt="Ícone de coração">
        </NuxtLink> -->
        <NuxtLink to="/">
            <img src="~/assets/img/bag.svg" alt="Ícone de sacola">
        </NuxtLink>
    </div>
</template>



<style lang="scss" scoped>

.currencies {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 0.1fr);
    justify-items: center;
    align-items: center;
    a {
        img {
            width:  24px;
            height: 24px;
            cursor: pointer;
        }   
    }
}
</style>