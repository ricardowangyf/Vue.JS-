<template>
    <!-- v-for历遍对象数组 -->
    <div>
        <div id="app">
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox">
                        </th>
                        <th>序号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in array" :key="item">
                        <td><input type="checkbox"></td>
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.age }}</td>
                        <td>{{ item.sex }}</td>
                        <td>
                            <button>编辑</button>
                            <button>删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ItemIndex',
    data() {
        return {
            array: [
                {
                    name: '小红',
                    age: 21,
                    sex: '女'
                },
                {
                    name: '小黄',
                    age: 21,
                    sex: '男'
                },
                {
                    name: '小蓝',
                    age: 21,
                    sex: '男'
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>