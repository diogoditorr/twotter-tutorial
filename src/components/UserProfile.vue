<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
            <div class="user-profile__user-panel">
                <h1 class="user-profile__username">@{{ state.user.username }}</h1>
                <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                    Admin
                </div>
                <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{ state.followers }}
                </div> 
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>

        <div class="user-profile__twoots-wrapper">
            <TwootItem 
                v-for="twoot in state.user.twoots" 
                :key="twoot.id" 
                :username="state.user.username" 
                :twoot="twoot" 
            />
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import TwootItem from "./TwootItem"
import CreateTwootPanel from "./CreateTwootPanel"

export default {
    name: "UserProfile",

    components: { CreateTwootPanel, TwootItem },
    
    setup() {
        const state = reactive({
            followers: 0,
            user: {
                id: 1,
                username: 'diogoditorr',
                firstName: 'Diogo',
                lastName: 'Alvares',
                email: 'diogoditorr@hotmail.com',
                isAdmin: true,
                twoots: [
                    { id: 1, content: 'Twotter is Amazing' },
                    { id: 2, content: "Don't forget to subscriber to The Earth is Square!"},
                    { id: 3, content: "Don't forget to subscriber to The Earth is Square!"},
                    { id: 4, content: "Don't forget to subscriber to The Earth is Square!"}
                ]
            }
        })

        function addTwoot(twoot) {
            state.user.twoots.unshift({ id: state.user.twoots.length + 1, content: twoot });
        }

        return {
            state,
            addTwoot
        }
    },

    // watch: {
    //     followers(newFollowerCount, oldFollowerCount) {
    //         if (oldFollowerCount < newFollowerCount) {
    //             console.log(`${this.user.username} has gained a follower!`)
    //         }
    //     }
    // },

    // computed: {
    //     fullName() {
    //         return `${this.user.firstName} ${this.user.lastName}`;
    //     }
    // },

    // methods: {
    //     followUser() {
    //         this.followers++
    //     },

    //     toggleFavourite(id) {
    //         console.log(`Favourited Tweet #${id}`)
    //     }
        
    // },

    // Load when first load the component
    // mounted() {
    //     this.followUser();
    // }
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 50px;
    // width: auto;
    padding: 50px 5%;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        margin-bottom: auto;

        // margin-right: 50px;
        // height: fit-content;

        h1 {
            margin: 0;
        }

        .user-profile__admin-badge {
            background: purple;
            color: white;
            border-radius: 5px;
            margin-right: auto;
            padding: 0 10px;
            font-weight: bold;
        }

        .user-profile__username, 
        .user-profile__admin-badge {
            margin-bottom: 8px;
        }

        
    }

    .user-profile__twoots-wrapper {
        display: grid;
        grid-gap: 10px;
        margin-bottom: auto;
    }
}


</style>
