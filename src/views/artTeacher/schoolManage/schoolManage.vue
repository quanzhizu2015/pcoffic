<template>
   <div class="wrap">
     
     <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
      <div class="header">
         <img src="/img/schoolManage/img1.png">
      </div>
      <div class="content1">
          <img src="/img/schoolManage/img2.png">
      </div>
       <div class="content2">
          <img src="/img/schoolManage/img3.png">
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
@import "./schoolManage.less";

</style>