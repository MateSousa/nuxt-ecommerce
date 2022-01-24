<template>
    <div class="pastelecia">
        <Header/>        
        <Nuxt/>
        <clientOnly>
            <notifications
            position="center center"
            classes="notifications"
            :max="1"
            />
        </clientOnly>
        <Footer/>
    </div>
</template>


<style lang="scss" scoped>


.footer {    
    position: absolute;
    bottom: 0;
    left: 0;
}

</style>