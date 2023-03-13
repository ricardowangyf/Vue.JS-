<!-- ParentComponent.vue -->
<template>
    <div>
      <child-component>
        <template slot-scope="{ items }">
          <ul>
            <li v-for="item in items" :key="item.id">{{ item.text }}</li>
          </ul>
        </template>
      </child-component>
    </div>
  </template>
  
  <script>
  import ChildComponent from '../components/childcomponent.vue';
  
  export default {
    name:'ItemIndex',
    components: {
      ChildComponent,
    },
    data() {
      return {
        list: [
          { id: 1, text: 'item 1' },
          { id: 2, text: 'item 2' },
          { id: 3, text: 'item 3' },
        ],
      };
    },
  };
  </script>
  