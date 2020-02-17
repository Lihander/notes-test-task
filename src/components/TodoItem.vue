<template>
    <div class="todo-item" v-if="item">
        <Checkbox style="width: 80%" v-model="item.active" :disabled="disabled">
            <input type="text" v-model="item.name" :disabled="disabled" >
        </Checkbox>
        <AppButton class="btnDanger" v-if="!disabled" @click="$emit('remove')">
            <font-awesome-icon icon="times"></font-awesome-icon>
        </AppButton>
    </div>
</template>

<script>
    import Checkbox from "./UI/Checkbox.vue";
    import AppButton from "./UI/Button.vue";
    export default {
        name: "TodoItem",
        components: {Checkbox, AppButton},
        props: {
            todoItem: {
                type: Object,
                required: true
            },
            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        computed: {
            item() {
                return this.todoItem
            }
        }
    }
</script>

<style lang="scss">
    .todo-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px 20px;
        margin: 10px 0;
        .btnDanger {
            margin: 0;
        }
    }
</style>