<template>
   <div class="wrap">
      <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
        <img class="header"
             src="/img/solutionOne/solutionOne.png"
        />
        <div class="content">

           <img class="img1" src="/img/solutionOne/img1.png">
           <img class="img2" src="/img/solutionOne/img2.png">
           <img class="img3" src="/img/solutionOne/img3.png">
           <img class="img4" src="/img/solutionOne/img4.png">
       </div>
       <Footer/>
   </div>
    
</template>

<script>
export default {
    name:"SolutionOne",
      data(){
            return{
               tabIndex:3,
               subIndex:''
            }
      },
      created(){
        this.subIndex = parseInt(this.$route.query.index);
    },
    mounted(){
       document.documentElement.scrollTop = document.body.scrollTop = 0;
  }, 
    
}
</script>

<style lang="less" scoped>
@import "./solutionOne.less";
</style>