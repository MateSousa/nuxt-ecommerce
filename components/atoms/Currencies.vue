<template>
    <div class="currencies">
        <img src="~/assets/img/search.svg" alt="Ícone de procura">
        <img src="~/assets/img/user.svg" alt="Ícone de usuário">
        <img src="~/assets/img/heart.svg" alt="Ícone de coração">
        <img src="~/assets/img/bag.svg" alt="Ícone de sacola">
    </div>
</template>



<style lang="scss" scoped>

.currencies {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 0.1fr);
    justify-items: center;
    align-items: center;
    img {
        width: 1.1rem;
        cursor: pointer;
    }
}

</style>