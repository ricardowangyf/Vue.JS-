<template>
    <div>
        <div :class="{ 'bg-red': isRed }" :style="{ color: textColor }">
            {{ message }}
        </div>
        <div>
            <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
            <!-- 对象语法 -->
        </div>
        <div>
            <div v-bind:class="classObject"></div>
            <!-- 对象语法 -->
        </div>
        <div>
            <div v-bind:class="[activeClass, errorClass]"></div>
            <!-- 数组语法 -->
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ClassStyle',
    data() {
        return {
            message: 'Hello World',
            isRed: true,
            textColor: 'blue',
            isActive: true,
            hasError: false,//对象语法
            isxActive: true,//对象语法
            error: null,//对象语法
            activeClass: 'active',//数组语法
            errorClass: 'text-danger'//数组语法
        }
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>
  
<style>
.bg-red {
    background-color: red;
}
</style>
  