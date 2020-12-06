<template>
    <div :class="[{'isFixed':isFixed},'wrap']">
        <div class="content" :style="{'width':(100/items.length)+'%'}" v-for="(item,index) in items"
              :key="index"
        >
            <div  class="item"  @click="itemAction(item)">
                <a :href="'#'+item.anchorId">{{item.title}}</a>
                <!-- <a href="javascript:void(0)">{{item.title}}</a> -->
               
            </div>
            <div class="line" v-if="index<items.length-1"></div>

        </div>

    </div>
    
</template>

<script>
export default {
    name:"SubHeader",
    props:{
        items:{
            type:Array,
            default:()=>{
                return []
            }
        },
        onClick:{
            type:Function,
            default:function (){}
        },
        isFixed:{
            type:Boolean,
            default:false
        }
        
    },
    methods:{
        itemAction(item){

            this.onClick(item)
        }
    }
    
}
</script>

    
<style lang="less" scoped>
@import "./subHeader.less";

</style>