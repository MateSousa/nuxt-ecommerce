import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'
import { Product } from '@/models'

interface CreatePayload {
    name: string
    description: string
    price: number
    SKU: string
}

interface UpdatePayload {
    id: number
    name: string
    description: string
    price: number
}
    

@Module({ namespaced: true, name: 'shop/products', stateFactory: true })
export default class ShopProducts extends VuexModule { 
    private products = {} as Product
    private product = {} as Product
    private chickenProduct = {} as Product

    public get $All() {
        return this.products
    }

    public get $Single() {
        return this.product
    }

    public get $Chicken() {
        return this.chickenProduct
    }


    @Mutation
    UPDATE_PRODUCTS(products: Product) {
        this.products = products
    }
    

    @Mutation
    UPDATE_PRODUCT(product: Product) {
        this.product = product
    }

    @Mutation
    UPDATE_CHICKEN_PRODUCT(product: Product) {
        this.chickenProduct = product
    }


    @Action({ rawError: true })
    public async index() {
        
        const products = await $axios.$get('/products')
        this.context.commit('UPDATE_PRODUCTS', products)

        const chickenProducts = products.filter(product => product.categoryName === 'Frango')
        this.context.commit('UPDATE_CHICKEN_PRODUCT', chickenProducts)
    }

    @Action({ rawError: true })
    public async show() {
        const product = await $axios.$get('/products')
        this.context.commit('UPDATE_PRODUCT', product)
    }

    @Action({ rawError: true })
    public async create(payload: CreatePayload) {
        const products = await $axios.$post('/products', payload) 
    }


    @Action({ rawError: true })
    public async update(payload: UpdatePayload ) {
        const product = await $axios.$put('/products/:id', payload)
        this.context.commit('UPDATE_PRODUCTS', product)
    }

    @Action({ rawError: true })
    public async destroy(id: number) {
        const product = await $axios.$delete(`/products/${id}`)
    }
    
    

}