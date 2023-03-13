<template>
    <div>
        <div id="app">
            <ul>
                <!--in前边只写一个变量,变量中保存的是数据-->
                <!--in前边写2个变量,第一个变量中保存的是数据,第二个变量中保存的是下标-->
                <li style="color:red" v-for="(item, index) in array" :key="item">
                    {{ item }} -- {{ index }}
                </li>
                <!-- item:数组中的每一项  index:索引值    如果只需要第一个参数item ,index可以不写,括号可以省略 -->
                <!-- v-for 遍历普通数组 -->
            </ul>
        </div>

    </div>
</template>

 
<script>

export default {
    name: 'ItemIndex',
    data() {
        return {
            array: ['吃饭', '睡觉', '敲代码']
        }
    },
}
</script>

<style lang="scss" scoped></style>