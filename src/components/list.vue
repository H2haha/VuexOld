<template lang="html">
  <div class="">
    <span style="font-size:30px;">{{state.count}}</span>
    已选中：{{count}}件
    <ul>
      <ListItem v-for="item in items" :data="item" :plus="plusOne" :minus="minusOne" />
    </ul>
  </div>
</template>

<script>
import ListItem from './list_item'

export default {
  data(){
    return {
      count: 0,
      items: [],
      state: this.$store.state
    };
  },
  async mounted(){
    /*try{
      this.items=(await this.ajax('http://localhost:8081/list')).data;
    }catch(e){
      alert('数据加载失败，请刷新重试');
    }*/

    this.items=await (await fetch('http://localhost:8081/list')).json();
  },
  components: {
    ListItem
  },
  methods: {
    plusOne(){
      this.count++;
    },
    minusOne(){
      this.count--;
    }
  }
}
</script>

<style lang="css">
</style>
