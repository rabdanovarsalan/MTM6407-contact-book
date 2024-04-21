import { createRouter, createWebHistory  } from "vue-router";

import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory (),
  routes: [
    { 
      path: "/", 
      component: Home 
    },
    { path: "/contact/:id", 
      component: () => import("@/views/Contact.vue"), 
      props: true 
    },
    { path: "/add", 
      component: () => import("@/views/Add.vue"), 
    },
    { path: "/edit/:id", 
      component: () => import("@/views/Edit.vue"), 
      props: true 
    },   
  ]
});

export default router