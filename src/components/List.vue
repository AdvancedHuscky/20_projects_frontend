<template>
<div>
  <ul>
    <li v-for="tmp in list" :key="tmp.id">{{tmp.name}}</li>
  </ul>
  <button @click="jump">detail</button>
</div>
</template>
<script>
export default {
  name:'List',
  data:function() {
    return{
      list:[]
    }
  },
  methods:{
    jump:function(){
      this.$router.push('/detail')
    }
  },
  mounted(){
    this.$http.get('http://jsonplaceholder.typicode.com/users').then((result)=>{
      console.log(result.data);
      this.list = result.data;
    })
  }
}
</script>