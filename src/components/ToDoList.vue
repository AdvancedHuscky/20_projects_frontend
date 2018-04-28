<template>
  <div>
    <my-header></my-header>
    <input type="text" v-model="msg">
    <button @click="addToList">add</button>
    <ul>
      <li v-for="(tmp,index) of list" :key="index">
        <span>{{tmp}}</span>
        <button @click="deleteFromList">delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg:'',
      }
    },
    methods:{
      addToList(){
        this.$store.commit('add',this.msg)
      },
      deleteFromList(index){
        this.$store.commit('delete',index)
      }
    },
    computed:{
      list(){
        return this.$store.getters.getList
      }
    },
    mounted:function(){
      console.log(this.$store);
    }
  }
</script>
