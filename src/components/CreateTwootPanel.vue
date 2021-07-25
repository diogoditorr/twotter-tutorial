<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{ '--exceeded': newTwootCharacterCount > 180 }">
        <label for="newTwoot"><strong>New Twoot</strong> ({{ newTwootCharacterCount }}/180)</label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>

        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="state.selectedTwootType">
                    <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
                        {{ option.name }}
                    </option>
                </select>
            </div>


            <button :disabled="newTwootCharacterCount > 180">
                Twoot it!
            </button>
        </div>
    </form> 
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: "CreateTwootPanel",
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [
                { value: 'draft', name: 'Draf' },
                { value: 'instant', name: 'Instant Twoot' }
            ]
        })

        const newTwootCharacterCount = computed(() => state.newTwootContent.length)

        function createNewTwoot() {
            if (state.newTwootContent && state.selectedTwootType !== 'draft') {
                ctx.emit('add-twoot', state.newTwootContent);
                state.newTwootContent = '';
            }
        }

        return {
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    }
};
</script>


<style lang="scss" scoped>
.create-twoot-panel {
    // border-top: 1px solid #DFE3E8;
    padding-top: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-twoot-panel__submit {
        display: flex;
        justify-content: space-between;

        .create-twoot-type {
            padding: 10px 0;

            #newTwootType {
                margin-left: 5px;
                padding: 5px 10px;
                
                border-radius: 5px;
                border: none;
                
                background-color: #3f7394;
                font: 16px sans-serif;
                color: white;
            }
        }

        button {
            margin: auto 0;
            padding: 5px 20px;
            
            border-radius: 5px;
            border: none;
            
            background-color: var(--base-color);
            color: white;
            font-weight: bold;

            transition: background-color 0.2s ease-in-out;

            &:hover {
                background-color: #018577;
            }
        }
    }

    &.--exceeded {
        > label {
            color: red;
        }

        .create-twoot-panel__submit {
            button {
                background-color: #cccccc;
                cursor: not-allowed;
            }
        }
    }
}
</style>