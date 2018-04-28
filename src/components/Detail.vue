<template>
  <div>
    <my-header></my-header>
    <h1>this is detail page</h1>
  </div>  
</template>

<script>
import axios from 'axios'

export default{
  mounted:function(){
    axios.get('http://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      //console.log(res)
    })
  }
}

</script>