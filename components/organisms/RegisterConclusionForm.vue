<template>
    <div class="login-form">
        <Container>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <input readonly type="email" name="email" id="email" class="form-control" v-model="user.email" placeholder="E-mail">
                </div>
                <div class="form-group">
                    <input type="text" name="name" id="name" class="form-control" v-model="user.name" placeholder="Nome">
                </div>
                <div class="form-group">
                    <input type="text" name="lastname" id="lastname" class="form-control" v-model="user.lastName" placeholder="Sobrenome">
                </div>
                <div class="form-group">
                    <input type="tel"  name="phone" id="phone" class="form-control" v-model="user.phone" placeholder="Celular">
                </div>
                <div class="form-group">
                    <input type="password" name="password" id="password" class="form-control" v-model="user.password" placeholder="Senha">
                </div>
                <div class="form-group">
                    <input type="password" name="password" id="password" class="form-control" v-model="user.passwordConfirmation" placeholder="Confirmar senha">
                </div>                
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Finalizar cadastro</button>
                </div>
                <div class="form-group">
                    <p class="sign-up">Já possuí uma conta? 
                        <NuxtLink to="/login">Entrar</NuxtLink>
                    </p>
                </div>
            </form>
        </Container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { userRegister } from '@/store'

export default Vue.extend({
    data() { 
        return {
            user: {
                email: userRegister.$user.email,
                name: '',
                lastName: '',
                phone: '',
                password: '',
                passwordConfirmation: '',
            }
        }
    },
    methods: {
        async onSubmit() {
            try {
                await userRegister.update({
                    key: this.$route.params.key,
                    ...this.user
                })
                this.$router.push('/login')                
            } catch {
                this.$notify({
                    type: 'error',
                    text: 'Ops...Algo deu errado.'
                })
            }
        }
    }
})
</script>

<style lang="scss" scoped>

.login-form {
    width: 100%;
    .container {
        margin-top: 20px;
        display: grid;
        justify-content: center;
        align-items: center;
        form {
            display:grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(7, 0.1fr);
            grid-gap: 1rem;
            justify-content: center;
            align-items: center;    
            .form-group {
                display: grid;

                label {
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                }
                input {
                    width: 300px;
                    height: 2.5rem;
                    border-radius: 0.25rem;
                    border: 1px solid #ccc;
                    padding: 0.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                button {
                    width: 100%;
                    height: 3rem;
                    background-color: #111;
                    color: #fff;
                    border-radius: 0.25rem;
                    border: 1px solid #ccc;
                    text-transform: uppercase;
                    padding: 0.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    cursor: pointer;
                    &:hover {
                        background-color: #fd7e14;
                    }
                }
                .sign-up {
                    font-size: .8rem;
                    font-weight: bold;
                    margin-bottom: .5rem;
                    color: #000;
                    opacity: .8;
                    a {
                        color: #000;
                        opacity: .3;
                        &:hover {
                            opacity: 1;
                            color: #fd7e14;
                        }
                    }

                }
            }
        }
    }
}


</style>