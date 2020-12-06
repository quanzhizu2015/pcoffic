<template>
     <div class="wrap">
          <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
        <img class="header"
             src="/img/solutionThree/solutionThree.png"
        />
        <div class="content">

           <img class="img1" src="/img/solutionThree/img1.png">
           <img class="img2" src="/img/solutionThree/img2.png">
           <img class="img3" src="/img/solutionThree/img3.png">
           <img class="img4" src="/img/solutionThree/img4.png">
       </div>
       <Footer/>
     </div>
    
</template>

<script>
export default {
    name:"SolutionThree",
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

@import "./solutionThree.less";

</style>