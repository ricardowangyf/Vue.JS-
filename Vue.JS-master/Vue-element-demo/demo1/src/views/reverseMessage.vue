<template>
    <div>
        <div>
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">反转消息</button>
        </div>
        <hr/>
        <div>
            <p>{{ messagae }}</p>
            <input v-model="messagae">
        </div>
        <hr/>
        <div>
            <ol>
                <li v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></li>
            </ol>
        </div>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'MessAge',
    template: '<li>{{ todo.text }}</li>',
    props: ['todo'],
    data() {
        return {
            message: 'Hello Vue.js!',
            messagae: 'Hello Vue!',
            groceryList: [
                { id: 0, text: '蔬菜' },
                { id: 1, text: '奶酪' },
                { id: 2, text: '随便其它什么人吃的东西' }
            ]
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>

<style lang="scss" scoped></style>