import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/Home",
    },
    {
        path: "/home",
        name:"Home",
        //当路由被触发时，该组件才会被异步加载，举列：打开页面就不会加载所有的组件，而是根据当前页面需要的组件进行异步加载
        //这样可以减少初始加载时间，提升用户体验，同时也节省了不必要的资源消耗。
        component: ()=> import("../views/Home.vue")
    },
    {
        path: "/news/add",  //路径：底部选项卡
        name: "AddNews",  //路由名称，如果不指定name 默认的name为default

        //当路由被触发时，该组件才会被异步加载，举列：打开页面就不会加载所有的组件，而是根据当前页面需要的组件进行异步加载
        //这样可以减少初始加载时间，提升用户体验，同时也节省了不必要的资源消耗。
        component: () => import("../views/AddNews.vue"),

    },
    {
        path: "/news/list",  //路径：底部选项卡
        name: "NewsList",  //路由名称，如果不指定name 默认的name为default

        //当路由被触发时，该组件才会被异步加载，举列：打开页面就不会加载所有的组件，而是根据当前页面需要的组件进行异步加载
        //这样可以减少初始加载时间，提升用户体验，同时也节省了不必要的资源消耗。
        component: () => import("../views/NewsList.vue"),

    },
    {
        path: "/:pathMatch(.*)",  //404错误
        name: "NotFound",  //路由名称，如果不指定name 默认的name为default
        component: () => import("../views/NotFound.vue")
    }

];

const router = createRouter({
        history: createWebHistory(),
        routes,
    }
);


//路由全局拦截：在进入页面之前就进行拦截。可以用于做用户登陆验证
//参数to：  表示即将进入的目标路由对象
//参数from：表示当前导航正要离开的路由
//参数next：调用该方法后才能进入下一个钩子。next() 直接进入下一个钩子,next(false) 中断当前的导航。next('/') 或者 next({ path: '/' }) 则会进入一个不同的地址。
router.beforeEach( async (to ,from,next)=>{
    console.log(to.fullPath); //全路径
    console.log(to.path);     //路径
    console.log(to.name);     //路由名称
    console.log(to.params);   //路由参数：http://localhost:5173/FilmsDetail/123
    console.log(to.query);    //路由参数：http://localhost:5173/FilmsDetail?myid=123
    console.log(to.meta);     //路由自定义参数
    next();
})


//路由全局拦截：在进入页面之后才进行触发拦截。
router.afterEach(async (to, form) => {
    //用的比较少，一般用于收集一些日志信息,做用户行为分析:例如：收集页面浏览量:PV
})
export default router;