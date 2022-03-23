<template>
    <header class="header">
        <Container>
            <Logo/>
            <Navigation />
            <Currencies />
            <MobileNavigation />
        </Container>
    </header>
</template>


<style lang="scss" scoped>

.header {
    .container {
        width: 100%;
        height: 80px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 1fr;
        justify-items: center;
        align-items: center;
        .navigation {

            @media (max-width: 480px) { 
                display: none;
            }
        }
    }
}

</style>