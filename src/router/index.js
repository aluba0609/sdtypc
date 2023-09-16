import { createRouter as _createRouter, createWebHashHistory ,createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/view/indexPage.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/productList',
    name: 'productList',
    component: () => import('@/view/productList.vue'),
    props: true,
    meta: {
      title: '产品服务'
    }
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: () => import('@/view/product_detail.vue'),
    props: true,
    meta: {
      title: '产品服务-详情'
    }
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('@/view/solution.vue'),
    meta: {
      title: '典型案例'
    }
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import('@/view/introduction.vue'),
    meta: {
      title: '公司介绍'
    }
  },
  {
    path: '/contactus',
    name: 'contactUs',
    component: () => import('@/view/ContactUs.vue'),
    meta: {
      title: '联系我们'
    }
  },
  {
    
    path: '/index',
    redirect: '/',
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/'
  }
]

export function createRouter() {
  return _createRouter({
    history: createWebHistory(),
    routes
  })
}

