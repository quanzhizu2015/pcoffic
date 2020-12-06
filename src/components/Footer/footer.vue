<template>
    <div class="footer">
        <div class="footer_content">
            <div class="footer_content1">
                <img class="footer_logo" src="/img/logo_btm.png">
                <div class="footer_line1"></div>
                <div class="footer_content2">
                    <div class="footer_item_content">
                        <div class="content_width">
                             <div>
                                <h4>解决方案</h4>
                                <ul>
                                    <li><a  @click="goToPage({name:'solutionFour',index:3})">画室业务专业解决方案</a></li>
                                    <li><a  @click="goToPage({name:'solutionOne',index:0})">考试院业务专业解决方案</a></li>
                                    <li><a  @click="goToPage({name:'solutionThree',index:2})">高校教务处考试解决方案</a></li>
                                    <!-- <li><a>艺术类招生考试解决方案</a></li> -->
                                    <li><a @click="goToPage({name:'solutionTwo',index:1})">第三方机构业务专业解决方案 </a></li>
                                </ul>
                             </div>
                        </div>
                        <div class="footer_line2"></div>
                    </div>
                    <div class="footer_item_content">
                         <div class="content_width1">
                              <div>
                                  <h4>产品介绍</h4>
                                  <ul>
                                    <!-- <li><a @click="goToPage('/electronicPaper')">月考系统</a></li> -->
                                    <li><a @click="goToPage({name:'artTeacher',index:1})">美术教师</a></li>
                                    <li><a @click="goToPage({name:'smartSchool',index:2})">智慧校园</a></li>
                                    <li><a @click="goToPage({name:'electronicPaper',index:0})">美术电子阅卷系统</a></li>
                                  </ul>
                              </div>
                         </div>
                         <div class="footer_line2"></div>

                    </div>
                    <!-- <div class="footer_item_content">
                         <div class="content_width1">
                             <h4>关于我们</h4>
                             <ul>
                                 <li><a>公司简介</a></li>
                                 <li><a>新闻动态</a></li>
                                 <li><a>联系我们</a></li>
                                 <li><a>加入我们</a></li>
                             </ul>
                         </div>
                         <div class="footer_line2"></div>

                    </div> -->
                    <div class="footer_item_content">
                        <div class="content_width1">
                             <div>
                                 <h4>合作支持</h4>
                                <ul>
                                    <li><a @click="goToPage({name:'cooperateSupport'})">客户服务</a></li>
                                    <li><a @click="goToPage({name:'cooperateSupport'})">项目优势</a></li>
                                    <li><a @click="goToPage({name:'cooperateSupport'})">项目合作</a></li>
                                </ul>
                             </div>
                        </div>

                    </div>
                    
                    <div class="footer_item_content">

                          <div class="content_width content_code">
                          <div class="content_code_inner">
                            <img class="img_code" src="/img/weichat.jpg">
                            <span>微信扫码联系</span>

                          </div>
                          </div>

                    </div>
                   
                </div>
                <div class="footer_item">
                    <div class="l">
                        <img class="footer_item_img" src="/img/item1.png" style="width:0.27rem;">
                        <span class="footer_item_space">地址：浙江省杭州市富阳区九龙大道富春硅谷创智中心1号楼1102</span>
                    </div>
                    <div class="l">
                        <img class="footer_item_img" src="/img/item2.png">
                        <span class="footer_item_space">0571-88951783</span>
                    </div>
                </div>
             </div>
        </div>
        <div class="footer_bottom">
            <span>美术教师 | 浙ICP备20026115号</span>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
      
        }
    },
    methods:{
        goToPage(obj){
           
          
            this.$router.push({name:obj.name,query:{index:obj.index}});
        }
    }
}
</script>


<style lang="less" scoped>
@import "./footer.less";
</style>