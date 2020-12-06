<template>
    <div class="content">
        <Header :tabIndex="tabIndex"/>
        
         <el-carousel  height="5.2rem" :interval="5000" arrow="always">
                <el-carousel-item  v-for="item in list" :key="item">
                    <img class="banner" :src="item">
                </el-carousel-item>
        </el-carousel>
        <div class="content1">
            <img  src="/img/img1.png">
            <img class="img2" src="/img/img2.png">
        </div>
        <div class="content2">
             <img class="img3" src="/img/img3.png">
             <img class="img3" src="/img/img4.png">
             <img class="img3" src="/img/img5.png">
             <img class="img6" src="/img/img6.png">
             <img class="img7" src="/img/img7.png">
        </div>
        <Footer/>
    </div>
</template>
<script>
import floatButton from '../../components/FloatButton/floatButton.vue';

export default {
  components: { floatButton },
    
    data(){
        return{
            list:[
                '/img/banner/cooperateSupport.png',
                '/img/banner/electronicPaper.png',
                '/img/banner/atrTeacher.png',
                '/img/banner/smartSchool.png'              
             ],
             
             tabIndex:0           
        }
    },


    methods:{
        change(affixed) {
             console.log(affixed);
         },

    }
    
}
</script>



<style>

.content .el-carousel__container .el-carousel__arrow {
  width: .6rem;
  height: .6rem;
}

.content .el-carousel__container .el-carousel__arrow--left{
    left: 1rem;
}

.content .el-carousel__container .el-carousel__arrow--right{
    right: 1rem;
}

 .el-carousel__container .el-carousel__arrow .el-icon-arrow-left {
    transform:scale(2,2)
}

.el-carousel__container .el-carousel__arrow .el-icon-arrow-right {
    transform:scale(2,2)
}

#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>


<style lang="less" scoped>
 @import "./home.less";
</style>