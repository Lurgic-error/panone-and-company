import { createRouter, createWebHistory } from 'vue-router'
import BaseRouterView from '../views/BaseRouterView.vue'
import BaseView from '../views/BaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseView,
      children: [
        {
          path: '',
          name: 'HomeView',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'about',
          name: 'AboutView',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'services',
          name: 'ServicesView',
          component: () => import('../views/ServicesView.vue')
        },
        {
          path: 'careers',
          name: 'CareersView',
          component: () => import('../views/CareersView.vue')
        },
        {
          path: 'contacts',
          name: 'ContactsView',
          component: () => import('../views/ContactsView.vue')
        },
        {
          path: 'companies',
          component: BaseRouterView,
          children: [
            {
              path: '',
              name: 'CompaniesView',
              component: () => import('../views/companies/CompaniesView.vue')
            },
            {
              path: 'panone-bulk-oil-importers',
              name: 'PanoneBulkOilImporters',
              component: () => import('../views/companies/PanoneBulkOilImporters.vue')
            },
            {
              path: 'ngilio-ulomi-enterprises',
              name: 'NgilioUlomiEnterprises',
              component: () => import('../views/companies/NgilioUlomiEnterprises.vue')
            },
            {
              path: 'panone-hotels',
              name: 'PanoneHotels',
              component: () => import('../views/companies/PanoneHotels.vue')
            },
            {
              path: 'panone-mini-supermarkets',
              name: 'PanoneMiniSupermarkets',
              component: () => import('../views/companies/PanoneMiniSupermarkets.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
