<template>
    <div class="wrap">
        <Header :tabIndex="tabIndex" :subIndex="subIndex"/>
        <!-- banndr图 -->
        <img class="header" src="/img/banner/atrTeacher.png"
                >
        <!-- 行业痛点 -->
        
        <div class="h1">
            <img src="../../assets/img/h1.png" alt="行业痛点" class="img1">
        </div>
        <!-- 产品优势 -->
        <div class="h1" style="margin-top:0.3rem;">
            <div class="title">
                <img src="../../assets/img/t1.png" alt="">
            </div>
            <div class="img-wrap">
                <img :src="item.imgUrl" alt="" v-for="(item,index) in imgList" :key="index" @click="goToPage(item.targetUrl)">
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgList:[
                {
                    imgUrl:require("../../assets/img/c1.png"),
                    targetUrl:'/schoolManage'
                },
                {
                    imgUrl:require("../../assets/img/c2.png"),
                    targetUrl:'/teachManage'
                },
                {
                    imgUrl:require("../../assets/img/c3.png"),
                    targetUrl:'/studentGrow'
                },
                {
                    imgUrl:require("../../assets/img/c4.png"),
                    targetUrl:'/homeSchoolMutual'
                },
                {
                    imgUrl:require("../../assets/img/c5.png"),
                    targetUrl:'/intellOnlineSchool'
                },
                {
                    imgUrl:require("../../assets/img/c6.png"),
                    targetUrl:'/studentResource'
                }
            ],
            tabIndex:1,
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
        goToPage(targetUrl){
            this.$router.push(targetUrl)
        }
    }
}
</script>
<style lang="less" scoped>
    @import './artTeacher.less';
</style>