<template>
    <div class="product-card">
        <div class="img">
                <img src="https://www.solucoesindustriais.com.br/images/produtos/imagens_11773/p_balde-para-frango-frito_11773_3648291601919655229_3.jpg" alt="">
        </div>
        <div class="container-info">
            <div class="info">
                <h1>{{ product.name }}</h1>
                <p>R$ {{ product.price }}</p>   
            </div>
            <div class="button-add-to-card">
                <button @click="addToCart(product)">Adicionar ao carrinho</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue, {PropOptions} from 'vue'
    import {  Product } from '@/models'
    export default Vue.extend({
        props: {
            product: {
                type: Object,
                required: true
            } as PropOptions<Product>
        },
        methods: {
            addToCart(product: Product) {
               console.log(product.id)
            }
        }
    })
</script>

<style lang="scss" scoped>

    .product-card {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
        width: 200px;
        height: 450px;
        align-items: center;
        @media (min-width: 481px) {
            width: 300px;
            justify-content: center;            
        }
         img  {
            width: 180px;
            height: auto;
        }
        .container-info {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
            grid-gap: 10px;
            justify-content: center;
            align-items: center;
            .info {
                padding: 10px;
                h1 {
                    color: #000;

                }
                p {
                    color: #000;
                }
            }
            button {
                background-color: #000;
                color: #fff;
                border: none;
                padding: 10px;
                border-radius: 5px;
                cursor: pointer;
                &:hover {
                    background-color: #fd7e14;
                    color: #fff;
                }
            }
            @media (max-width: 480px) {
                
                h1 {
                    font-size: 18px;
                }

                p {
                    font-size: 14px;
                }

                button {
                    font-size: 14px;
                }
            }
        }
    }

</style>