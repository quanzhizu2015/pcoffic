<template>

     <div :class="isOUt?'wrap_button':'wrap_button_active'">
          <img  :src="imageUrl"
               @mouseover="mouseOver"
               @mouseleave="mouseLeave"
               @click="btnClick"
               
          >
    </div>
     
    
</template>

<script>
export default {
    name:"FloatButton",
    props:{
        item:{
            type:Object,
            default:()=>{
                return {
                     normal_img:'',
                     select_img:'',
                     contentType:0,//0 图片  1 文字 2事件
                     content:''
                }
            }
        },
      
        onClick:{
            type:Function,
            default:function (){}
        }
    },
    data(){
        return{

            imageUrl:this.item.normal_img,
            isOUt:true,

        }
    },
    methods:{

        mouseOver(index) {
            this.imageUrl=this.item.select_img
            this.isOUt = false
        },
        // 移出
       mouseLeave(index) {

            this.imageUrl=this.item.normal_img  
            this.isOUt =true   
       },
       btnClick(){

           this.onClick(this.item)

       }

    }
    
}
</script>

<style lang="less" scoped>
@import "./floatButton.less";

</style>