<template>
    <div class="login-form">
        <Container>
            <form action="POST">
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="E-mail">
                </div>
                <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" class="form-control" placeholder="Senha">
                </div>
                <div class="form-group">
                    <p class="forgot-password">Esqueceu sua senha?</p>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
                <div class="form-group">
                    <p class="sign-up">Não tem uma conta? 
                        <NuxtLink to="/signup">Cadastre-se</NuxtLink>
                    </p>
                </div>
            </form>
        </Container>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
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
            grid-template-rows: repeat(5, 0.1fr);
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
                .forgot-password {
                    font-size: 0.8rem;
                    font-weight: bold;
                    margin-bottom: 0.5rem;
                    cursor: pointer;
                    color: #000;
                    opacity: 0.3;
                    &:hover {
                        opacity: 1;
                        color: #fd7e14;
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