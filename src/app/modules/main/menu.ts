export const Menu = [
  {
    name: 'Dashboard',
    path: ['/'],
  },
  {
    name: 'Blank',
    path: ['/blank'],
  },
  {
    name: 'Main Menu',
    children: [
      {
        name: 'Sub Menu',
        path: ['/sub-menu-1'],
      },

      {
        name: 'Blank',
        path: ['/sub-menu-2'],
      },
    ],
  },
];
