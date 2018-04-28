<template>
  <h1>this is header</h1>
</template>
<script>
  export default{
    mounted(){
      this.$axios.get('http://jsonplaceholder.typicode.com/users')
      .then((result)=>{
        //console.log(result.data);
      })
    }
  }
</script>
