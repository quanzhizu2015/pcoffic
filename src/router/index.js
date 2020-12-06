import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/home.vue'; // 首页
import smartSchool from '../views/smartSchool/smartSchool.vue'; // 智慧校园
import electronicPaper from '../views/electronicPaper/electronicPaper.vue'; // 电子阅卷
import artTeacher from '../views/artTeacher/artTeacher.vue'; // 美术教师

import schoolManage from '../views/artTeacher/schoolManage/schoolManage.vue'; // 校园管理
import teachManage from '../views/artTeacher/teachManage/teachManage.vue'; // 教学管理
import studentGrow from '../views/artTeacher/studentGrow/studentGrow.vue'; // 学生成长
import homeSchoolMutual from '../views/artTeacher/homeSchoolMutual/homeSchoolMutual.vue'; // 家校互助
import intellOnlineSchool from '../views/artTeacher/intellOnlineSchool/intellOnlineSchool.vue'; // 智慧网校
import studentResource from '../views/artTeacher/studentResource/studentResource.vue'; // 预备生源



import cooperateSupport from '../views/cooperateSupport/cooperateSupport.vue'; // 合作支持
import SolutionOne from '../views/solutionOne/solutionOne.vue'; // 考试院业务专业解决方案
import SolutionTwo from '../views/solutionTwo/solutionTwo.vue'; // 第三方机构业务专业解决方案
import SolutionThree from '../views/solutionThree/solutionThree.vue'; // 高校教务处考试解决方案
import SolutionFour from '../views/solutionFour/solutionFour.vue'; // 画室业务解决方案

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/smartSchool',
		name: 'smartSchool',
		component: smartSchool
	},
	{
		path: '/electronicPaper',
		name: 'electronicPaper',
		component: electronicPaper
	},
	{
		path: '/artTeacher',
		name: 'artTeacher',
		component: artTeacher
	},
	{
		path: '/cooperateSupport',
		name: 'cooperateSupport',
		component: cooperateSupport
	},
	{
		path: '/solutionOne',
		name: 'solutionOne',
		component: SolutionOne
	},
	{
		path: '/solutionTwo',
		name: 'solutionTwo',
		component: SolutionTwo
	},
	{
		path: '/solutionThree',
		name: 'solutionThree',
		component: SolutionThree
	},
	{
		path: '/solutionFour',
		name: 'solutionFour',
		component: SolutionFour
	},
	{
		path: '/schoolManage',
		name: 'schoolManage',
		component: schoolManage
	},
	{
		path: '/teachManage',
		name: 'teachManage',
		component: teachManage
	},
	{
		path: '/studentGrow',
		name: 'studentGrow',
		component: studentGrow
	},
	{
		path: '/homeSchoolMutual',
		name: 'homeSchoolMutual',
		component: homeSchoolMutual
	},
	{
		path: '/intellOnlineSchool',
		name: 'intellOnlineSchool',
		component: intellOnlineSchool
	},
	{
		path: '/studentResource',
		name: 'studentResource',
		component: studentResource
	},

	
]
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})
// 路由全局守卫设置color值
router.beforeEach((to, from, next) => {
	next();
})
export default router
