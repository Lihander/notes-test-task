<template>
    <div class="checkbox">
        <input
                type="checkbox"
                :id="id"
                :checked="value"
                @change="$emit('input', $event.target.checked)"
                v-bind="$attrs"
        >
        <label :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        name: "Checkbox",
        props: {
            value: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                id: null
            }
        },
        mounted () {
            this.id = this._uid
        }
    }
</script>

<style lang="scss">
    .checkbox input[type="checkbox"] {
        display: none;
    }
    .checkbox label {
        position: relative;
        cursor: pointer;
        display: inline-block;
        font-size: 18px;
        padding-left: 30px;
    }

    .checkbox label::before,
    .checkbox label::after {
        position: absolute;
        content: "";
        display: inline-block;
    }
    .checkbox label::before{
        height: 24px;
        width: 24px;
        border: 2px solid $danger-color;
        border-radius: 50%;
        left: 0;
        top: 0;
    }
    .checkbox label::after {
        height: 16px;
        width: 16px;
        background-color: $success-color;
        border: 2px solid $default-color;
        border-radius: 50%;
        left: 4px;
        top: 4px;
    }
    .checkbox input[type="checkbox"] + label::after {
        content: none;
    }
    .checkbox input[type="checkbox"]:checked + label::after {
        content: "";
    }
    .checkbox input[type="checkbox"]:checked + label::before {
        border: 2px solid $success-color;
    }
    .checkbox input[type="checkbox"]:focus + label::before {
        outline: none;
    }
    .checkbox input[type="checkbox"]:disabled + label {
        opacity: 0.5;
    }
</style>