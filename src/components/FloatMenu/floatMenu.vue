<template>
    <div class="wrap1">
        <div class="content1" >
            <div v-for="(item,index) in items" :key="index">
                 <transition name="el-fade-in">
                    <div  v-show="item.isShow" class="transition-box">
                    <!-- <img v-if="item.contentType==0" :src="item.content">
                    <span v-if="item.contentType==1">{{item.content}}</span> -->
                    <img v-show="item.isShow&&item.contentType==0" :src="item.content">
                    <span v-show="item.isShow&&item.contentType==1">{{item.content}}</span>
                    </div>
         
                </transition>
                <div class="floatButton">
                    <FloatButton :item="item" :onClick="btnClick"/>
                </div>
            </div>
        </div>  
    </div>
    
</template>

<script>
export default {
    name:'FloatMenu',
   
    data(){
        return{

            scrollTop:0,
            items:[
                 {
                     normal_img:'/img/menu_unselect_1.png',
                     select_img:'/img/menu_select_1.png',
                     contentType:2,
                     isShow:false,
                     content:''

                 },
                 {
                     normal_img:'/img/menu_unselect_2.png',
                     select_img:'/img/menu_select_2.png',
                     contentType:0,
                     isShow:false,
                     content:'/img/weichat.jpg'

                 },
                 {
                     normal_img:'/img/menu_unselect_3.png',
                     select_img:'/img/menu_select_3.png',
                     contentType:1,
                     isShow:false,
                     content:'地址：浙江省杭州市富阳区九龙大道富春硅谷创智中心1号楼1102'

                 },
                 {
                     normal_img:'/img/menu_unselect_4.png',
                     select_img:'/img/menu_select_4.png',
                     contentType:1,
                     isShow:false,
                     content:'咨询电话：0571-88951783'

                 },
                 
             ],
           

        }
    },
    methods:{
        btnClick(item){
            if(item.contentType==2){
                 this.items.forEach((value,index)=>{
                     value.isShow = false
                 })
                this.backTop()
                return
                
            }
            if(item.isShow){
                item.isShow = false
            }else{
                 this.items.forEach((value,index)=>{
                     value.isShow = false
                 })
                  item.isShow = true
            }
        },
         // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
            let that = this
            let timer = setInterval(() => {
            let ispeed = Math.floor(-that.scrollTop / 5)
             document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
             if (that.scrollTop === 0) {
              clearInterval(timer)
             }
            }, 16)
           },
        
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
                let that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
         
         }
   },


    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    },

    destroyed () {
         window.removeEventListener('scroll', this.scrollToTop)
    },




    
}
</script>

<style lang="less" scoped>
@import "./floatMenu.less";

</style>