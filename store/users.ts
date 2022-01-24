import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'
import { User } from '@/models'


@Module({ namespaced: true, name: 'users', stateFactory: true })
export default class Users extends VuexModule { 
    private users = {} as User

    get $single() {
        return this.users
    }

    @Mutation
    SET_USER(users: User) {
        this.users = users
    }

    @Action({ rawError: true })
    public async show() {
        if(!$cookies.get('token')) return
        const users = await $axios.$get('/users')
        this.context.commit('SET_USER', users)
    }
}
