<template>
    <div id="app">
        <nav>
            <router-link to="/">
                <div class="navigation__logo">
                    Twotter
                </div>
            </router-link>
            <div class="navigation__user" v-if="getUser">
                {{ getUser.username }}
            </div>    
        </nav>
        <router-view/>
    </div>
</template>

<script>
import { useStore } from 'vuex'; 
// import { computed } from 'vue';

export default {
    name: 'App',
    data() {
        return {
            store: useStore(),
            option: 'safe'
        }
    },
    // setup() {
    //     const store = useStore();        
    //     const user = computed(() => store.state.User.user)

    //     return {
    //         option: 'safe',
    //         user
    //     }
    // },
    // Change the presentation of existence data
    computed: {
        getUser() {
            return this.store.state.User.user;
        }
    }
}
</script>

<style lang="scss">

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #F3F5FA;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 5%;
        background-color: var(--base-color-2);
        color: white;

        .navigation__logo {
            font-weight: bold;
            font-size: 24px;
        }

        .navigation__user {
            font-weight: bold;
        }
    }
}
</style>