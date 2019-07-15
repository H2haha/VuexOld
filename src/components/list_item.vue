<template lang="html">
  <li>
    <h3><input type="checkbox" v-model="a">{{data.name}}</h3>
    <span>￥{{data.price}}</span>
    <span>月售：{{data.sales}}件</span>
    <input type="button" value="加1" @click="fnAdd">
    <input type="button" value="减1" @click="fnMinus">
  </li>
</template>

<script>
export default {
  data(){
    return {
      a: false,
      data: {}
    };
  },
  mounted(){    //钩子——事件
    this.data=this.$attrs.data;
  },
  methods: {
    fnAdd(){
      this.$store.dispatch('addCount', 5);
    },
    fnMinus(){
      this.$store.dispatch('minusCount', 2);
    }
  },
  watch: {
    a(){
      if(this.a){
        this.$attrs.plus();
      }else{
        this.$attrs.minus();
      }
    }
  }
}
</script>

<style lang="css">
</style>
