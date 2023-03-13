<template>
    <div>

        <div id="app">
            <ul>
                <li v-for="(o1, o2, o3) in obj" :key="o1">{{ o1 }}--{{ o2 }}--{{ o3 }}</li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ItemIndex',
    data() {
        return {
            obj:
            {
                name: '小红',
                age: 21,
                sex: '女'
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>