<template>
    <div class="twoot-item">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ username }}
            </div>

            <div class="twoot-item__content">
                {{ twoot.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwootItem',
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    },

    // methods: {
    //     favouriteTwoot(id) {
    //         this.$emit('favourite', id)
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.twoot-item {
    margin-bottom: 10px;
    padding: 20px;
    
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    
    box-sizing: border-box;
    
    background-color: white;
    
    cursor: pointer;
    
    transition: all 0.25s ease;

    // In scss '&' means 'this'
    &:hover {
        transform: scale(1.1, 1.1)
    }

    .twoot-item__user {
        font-weight: bold;
    }

    .twoot-item__content {
        word-break: break-word;
    }
}
</style>