<template>
    <div class="footer">
        <Container>
            <Logo/>
            <ul class="items">
                <li class="item">
                    Ajuda & Informações
                    <div class="border"></div>
                </li>
                
                <li class="item">
                    <NuxtLink to="/">
                        Termos e condições
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        Contato
                    </NuxtLink>
                </li>
            </ul>
            <ul class="items">
                <li class="item">
                    Sobre Nós
                <div class="border"></div>
                </li>
                <li class="item">
                    <NuxtLink to="/">
                        Endereço
                    </NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">Empresa</NuxtLink>
                </li>
            </ul>
            <ul class="items">
                <li class="item">
                    Categorias
                <div class="border"></div>
                </li>
                <li class="item">
                    <NuxtLink to="/">Delivery</NuxtLink>
                </li>
                <li class="item">
                    <NuxtLink to="/">Segurança no pagamento</NuxtLink>
                </li>
            </ul> 
            <div class="copyright">
                © Copyright 2022 | Pastel & Cia
            </div>
            <div class="img-payments">
                <img src="~/assets/img/payment.png" alt="">
            </div>
        </Container>
    </div>
</template>


<style lang="scss" scoped>

.footer {
    width: 100%;
    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-content: center;
        align-items: center;
        ul {
            list-style: none;
            li {
                &:first-child {
                    font-size: 1rem;
                    font-weight: 600;
                    .border {
                        padding-top: 10px;
                        width:10%;
                        border-bottom: 1px solid black;
                    }
                }
                padding-top: 30px;
                font-size: 0.938rem;
                font-weight: 400;
                a {
                    color: #000;
                    text-decoration: none;
                    &:hover {
                        color: #fd7e14;
                    }
                }
            }

        }
            .copyright { 
                grid-area: 2 / 1 / 3 / 5; 
            }
            .img-payments{
                grid-area: 2 / 4 / 3 / 5;
            }
        
       
    }
}

</style>