<template>
    <div>
        <div id="app">
            <h1>{{ message }}</h1>
            <p>Count: {{ count }}</p>
            <ul>
                <li v-for="item in items" :key="item">{{ item }}</li>
            </ul>
            <input v-model="newItem" type="text" placeholder="Add new item...">
            <button v-on:click="addItem">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItemIndex',
    data() {
        return {
            message: 'Hello, world!',
            count: 0,
            items: ['Item 1', 'Item 2', 'Item 3'],
            newItem: ''
        }
    },
    methods: {
        addItem() {
            this.items.push(this.newItem);
            this.newItem = '';
        }
    }
}
</script>

<style lang="scss" scoped></style>