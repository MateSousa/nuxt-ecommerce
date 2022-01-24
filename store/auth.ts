import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

type Token = string | null

interface CreatePayload {
    email: string,
    password: string,
}

interface UpdatePayload  {
    token?: string,
}

@Module({ namespaced: true, name: 'auth', stateFactory: true })
export default class Auth extends VuexModule { 
    private token = null as Token

    get $token() {
        return this.token
    }

    @Mutation
    SET_TOKEN(token: Token) {
        this.token = token
    }

    @Action
    public async create(payload: CreatePayload) { 
        const { token } = await $axios.$post('/auth/login', payload)
        $cookies.set('token', token, {
            path: '/',
            maxAge: 60 * 60 * 24 * 30,
        })
        this.context.commit('SET_TOKEN', token)
    }

    @Action
    public update(payload: UpdatePayload) {
        const token = payload?.token ? payload.token : $cookies.get('token')
        this.context.commit('SET_TOKEN', token || null)        
    }


    @Action
    public async destroy() {
        await $axios.$delete('/auth/logout')
        $cookies.remove('token')
        this.context.commit('SET_TOKEN', null)
    }
}
