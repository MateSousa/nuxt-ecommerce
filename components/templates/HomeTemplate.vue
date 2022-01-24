<template>
    <div class="home-template">
        <Container>
            <div class="content">
                <h1>O melhor da região</h1>
                <h2>Venha conhecer os nossos pasteis e outras variedades!!</h2>
                <NuxtLink to="/shop">
                    <button>Cardápio</button>
                </NuxtLink>
            </div>
        </Container>
    </div>
</template>


<style lang="scss" scoped>

    .home-template {
        width: 100%;
        height: 55vh;
        background: url('~/assets/img/bg-home.png');
        background-size: cover;
        background-position: center;
        .content {
            padding-top:200px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
                "title"
                "button";
            h1 {
                font-size: 2rem;
                color: #fff;
                text-shadow: 0px 0px 10px #000;
            }
            h2 {
                font-size: 1.5rem;
                color: #fff;
                text-shadow: 0px 0px 10px #000;
            }
            button {
                width: 200px;
                height: 60px;
                background: #fff;
                color: #000;
                padding: 10px;
                text-transform: uppercase;
                box-shadow: 0px 0px 10px #000;
                font-size: 1.375rem;
                cursor: pointer;
                transition: all 0.3s;
                &:hover {
                    background: #fd7e14;
                    color: #fff;
                }
            }
        }
    }

</style>