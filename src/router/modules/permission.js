/** When your routing table is too long, you can split it into small modules */

import Layout from '@/views/layout/Layout.vue';

const permissionRouter = {
  path: '/permission',
  component: Layout,
  redirect: 'noredirect',
  name: 'Permission',
  meta: {
    title: 'route.permission',
    icon: 'group'
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/permission/admin'),
      name: 'PermissionAdmin',
      meta: { title: 'route.permissions.admin', roles: ['admin'], noCache: true }
    },
    {
      path: 'editor',
      component: () => import('@/views/permission/editor'),
      name: 'PermissionEditor',
      meta: { title: 'route.permissions.editor', roles: ['editor'], noCache: true }
    },
    {
      path: 'visitor',
      component: () => import('@/views/permission/visitor'),
      name: 'PermissionVisitor',
      meta: { title: 'route.permissions.visitor', roles: ['visitor'], noCache: true }
    }
  ]
};

export default permissionRouter;
