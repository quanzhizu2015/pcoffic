<template>
  <div>
    <div class="wrap">
      <div class="logo">
        <img src="/img/logo.png" alt="" />
      </div>
      <div class="nav-list">
        <div
          :class="[{'active':item.active},'item']"
          v-for="(item, index) in navList"
          :key="index"
          @click="toggleItem(item,index)"   

        >
          <div class="nav-title">{{ item.title }}</div>
          <div class="line" v-if="item.active"></div>
          <!-- 子菜单 -->
          <collapse-transition>
            <div class="sub-list" v-if="item.hasSubList">
              <ul class="list">
                <li v-for="(x, y) in item.subList" :key="y" :class="{'active':x.active}"  @click.stop="goToPage(item.subList,x,y)">{{ x.title }}</li>
              </ul>
            </div>
          </collapse-transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import collapseTransition from "~/utils/collapse.js";
export default {
  components: {
    collapseTransition,
  },
  props:{
    tabIndex:{
      default:''
    },
    subIndex:{
      default:''
    }
  },
  data() {
    return {
      navList: [
        {
          title: "平台首页",
          active: false,  // 是否选中该标签
          hasSubList:false, // 是否有子列表
          subList: [],
          targetUrl:'/'
        },
        {
          title: "产品介绍",
          active: false,  // 是否选中该标签
          hasSubList:false, // 是否有子列表
          targetUrl:null,
          subList: [
            {
              title: "美术电子阅卷系统",
              query:{name:'electronicPaper',index:0},
              active: false,
            },
            {
              title: "美术教师",
              query:{name:'artTeacher',index:1},
              active: false,
            },
            {
              title: "智慧校园",
              query:{name:'smartSchool',index:2},
              active: false,
            },
            // {
            //   title: "月考系统",
            //   url:'/d',
            //   active: false,
            // },
          ],
        },
        {
          title: "合作支持",
          active: false,  // 是否选中该标签
          hasSubList:false, // 是否有子列表
          subList: [],
          targetUrl:'/cooperateSupport'
        },
        {
          title: "解决方案",
          targetUrl:null,
          active: false,  // 是否选中该标签
          hasSubList:false, // 是否有子列表
          subList: [
             {
              title: "考试院业务专业解决方案",
              query:{name:'solutionOne',index:0},
              active: false,
            },
             {
              title: "第三方机构业务专业解决方案",
              query:{name:'solutionTwo',index:1},
              active: false,
            },
             {
              title: "高校教务处考试解决方案",
              query:{name:'solutionThree',index:2},
              active: false,
            },
             {
              title: "画室业务解决方案",
              query:{name:'solutionFour',index:3},
              active: false,
            },
          ],
          targetUrl:null,
        },        
      ],
    };
  },
  mounted(){
    this.navList[this.tabIndex].active = true;
    if(this.navList[this.tabIndex].subList.length > 0 ){
       this.navList[this.tabIndex].subList[this.subIndex].active = true;
    }
  },
  methods: {
   // 点击选中主Tab
    toggleItem(item,index) {
      this.navList.forEach((x,y)=>{
          x.active = false;
          if(y!=index){
            x.hasSubList = false;
          }
      })
      this.navList[index].active = true;
      if(item.subList.length > 0){
        item.hasSubList = !item.hasSubList;
      }
      else{
         this.$router.push(item.targetUrl)
      }
    },
   // 点击选中子tab
   goToPage(list,x,y){
    this.navList.forEach(item=>{
         item.hasSubList = false;
      })
     this.$router.push({name:list[y].query.name,query:{index:list[y].query.index}})
    }
  },

};
</script>
<style lang="less" scoped>
@import "./header.less";
</style>