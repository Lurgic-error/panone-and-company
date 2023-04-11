import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import BaseTemplate from '../views/BaseTemplate.vue'
import CompaniesView from '../views/CompaniesView.vue'
import CompanyFourView from '../views/CompanyFourView.vue'
import CompanyOneView from '../views/CompanyOneView.vue'
import CompanyThreeView from '../views/CompanyThreeView.vue'
import CompanyTwoView from '../views/CompanyTwoView.vue'
import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import HotelsView from '../views/HotelsView.vue'
import ServicesView from '../views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseTemplate,
      children: [
        // Home View
        {
          path: '',
          name: 'HomeView',
          component: HomeView
        },

        // About View
        {
          path: 'about',
          name: 'AboutView',
          component: AboutView
        },

        // Contact Us
        {
          path: 'contact-us',
          name: 'ContactView',
          component: ContactView
        },

        // Services View
        {
          path: 'services',
          name: 'ServicesView',
          component: ServicesView
        },

        // Companies View
        {
          path: 'companies',
          name: 'CompaniesView',
          component: CompaniesView
        },

        // Panone Bulk Oil Importers View
        {
          path: 'panone-bulk-oil-importers',
          name: 'CompanyOneView',
          component: CompanyOneView
        },

        // Panone Mini Supermarkets View
        {
          path: 'panone-mini-supermarkets',
          name: 'CompanyTwoView',
          component: CompanyTwoView
        },

        // Panone Bakeries View
        {
          path: 'panone-bakeries',
          name: 'CompanyThreeView',
          component: CompanyThreeView
        },

        // Ngiloi Ulomi Enterprise View
        {
          path: 'ngilio-ulomi-enterprise',
          name: 'CompanyFourView',
          component: CompanyFourView
        },

        // Panone Bulk Oil Importers
        {
          path: 'panone-bulk-oil-importers',
          name: 'CompanyOneView',
          component: CompanyOneView
        },

        // Panone Hotels
        {
          path: 'panone-hotels',
          name: 'HotelsView',
          component: HotelsView
        }
      ]
    }
  ]
})

export default router
