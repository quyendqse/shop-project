import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

export const items1 = [
  { key: 'Home', label: 'Home', path: '/home' },
  { key: 'Product', label: 'Product', path: '/products' },
  { key: 'New Product', label: 'New Product', path: '/products/new' },
  { key: 'Login', label: 'Login', path: '/login' },
];

export const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);