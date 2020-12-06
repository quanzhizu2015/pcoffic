<template>
     <div class="wrap">
          <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
         <img class="header"
             src="/img/solutionFour/solutionFour.png"
        />
         <div class="content">
             <div class="content1">
                 <div class="button_content1">
                     <div></div>
                     <img class="button_img" 
                          :src="buttonImg1" 
                          @mouseover="mouseOver(1)"
                          @mouseleave="mouseLeave(1)"
                          @click="goPage('/electronicPaper')">
                 </div>
             </div>
             <div class="content2">
                  <div class="button_content2">
                     <div></div>
                     <img class="button_img" 
                          :src="buttonImg2" 
                          @mouseover="mouseOver(2)"
                          @mouseleave="mouseLeave(2)" 
                          @click="goPage('/artTeacher')">
                 </div>
                 
             </div>
             <div class="content3">

                  <div class="button_content3">
                     <div></div>
                     <img class="button_img" 
                          :src="buttonImg3" 
                          @mouseover="mouseOver(3)"
                          @mouseleave="mouseLeave(3)"
                          @click="goPage('/smartSchool')">
                 </div>
                 
             </div>
         </div>
         <Footer/>
     </div>
    
</template>

<script>
export default {
    name:"SolutionFour",
    data(){

        return{
            buttonImg1:'/img/solutionFour/item2.png',
            buttonImg2:'/img/solutionFour/item2.png',
            buttonImg3:'/img/solutionFour/item2.png',
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
    methods:{
        goPage(url){
            this.$router.push(url)
        },
       
        // 移入
        mouseOver(index) {
            switch (index){
                case 1:
                    this.buttonImg1= '/img/solutionFour/item1.png'
                    break;
                case 2:
                    this.buttonImg2= '/img/solutionFour/item1.png'
                    break;
                case 3:
                    this.buttonImg3= '/img/solutionFour/item1.png'
                    break;
                default:
                    break;            

            }
            
        //    this.active = "background-color:black";
        //    // 操作dom 获取p标签改变其样式
        //     var acps = this.$refs.acp
        //     acps.style.color = "red"
       },
        // 移出
       mouseLeave(index) {

            switch (index){
                case 1:
                    this.buttonImg1= '/img/solutionFour/item2.png'
                    break;
                case 2:
                    this.buttonImg2= '/img/solutionFour/item2.png'
                    break;
                case 3:
                    this.buttonImg3= '/img/solutionFour/item2.png'
                    break;
                default:
                    break;            
            }
            // this.active = "";
            // this.$refs.acp.style=''
        }
    }
    
}
</script>

<style lang="less" scoped>
@import "./solutionFour.less";

</style>