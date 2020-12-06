<template>
   <div class="wrap">
        <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
        <div class="content">
           <img  src="/img/studentGrow/img1.png">
           <img class="img2"  src="/img/studentGrow/img2.png">
           <img class="img3" src="/img/studentGrow/img3.png">
        </div>
        <Footer/>

       
   </div>
    
</template>

<script>
export default {
    data(){
      return{
          tabIndex:1,
          subIndex:1
      }
   },
    

     mounted(){
       document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
}
</script>

<style lang="less" scoped>
@import "./studentGrow.less";

</style>