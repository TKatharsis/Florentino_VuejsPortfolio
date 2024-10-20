import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const routes = [
  { path: "/", name: "Home", component: LoginPage }, // Home route to LoginPage
  { path: "/login", name: "Login", component: LoginPage }, // New route for login
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "users",
        name: "Users",
        component: () => import("../views/UserManagementPage.vue"),
      },
      {
        path: "portfolio/profile",
        name: "PortfolioProfile",
        component: () => import("../views/PortfolioProfile.vue"), // Lazy load Profile page
      },
      {
        path: "portfolio/showcase",
        name: "PortfolioShowcase",
        component: () => import("../views/PortfolioShowcase.vue"), // Lazy load Showcase page
      },
      {
        path: "portfolio/contact",
        name: "PortfolioContact",
        component: () => import("../views/PortfolioContact.vue"), // Lazy load Contact page
      },
      {
        path: "portfolio/creative",
        name: "PortfolioCreative",
        component: () => import("../views/PortfolioCreative.vue"), // Lazy load Creative page
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
