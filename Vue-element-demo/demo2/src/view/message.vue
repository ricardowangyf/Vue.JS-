<template>
  <div>
    <div>
      <input type="text" v-model="message" @keyup.enter="submitForm" />
      <textarea v-model="message" @keydown.ctrl.enter="submitForm"></textarea>
    </div>
  </div>
</template>
<script>
export default {
    name:'ItemIndex',
  data() {
    return {
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Do something when user presses "enter"
    },
  },
};
</script>
  