import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "INICIO",
    icon: "home-outline",
    link: "/pages/dashboard"
  },
  {
    title: "MODULOS",
    group: true
  },
  {
    title: "Gestión de Productos",
    icon: "layout-outline",
    children: [
      {
        title: "Listar Productos",
        link: "/pages/products"
      },
    ]
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];
