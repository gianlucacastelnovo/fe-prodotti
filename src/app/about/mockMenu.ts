
import { MenuItem } from '../models/menu/MenuItem';
export const MENUITEMS: MenuItem[] = [

  {

      label: 'Acquisti Precedenti',
      faIcon: 'fab fa-50px',
      link: 'https://www.supermercato24.it/s#/locations/10723/stores/183/products/list/past-purchased',

    },

    {
      label: 'Preferiti',
      icon: 'playlist_add_check',
      link: 'https://www.supermercato24.it/s#/locations/10723/stores/183/products/list/favorites'
    },

    {
      label: 'Offerte',
      icon: 'alarm',
      link: 'https://www.supermercato24.it/s#/locations/10723/stores/183/products/list/offers'
    },

    {
      label: 'Frutta e Verdura',
      icon: 'alarm',
      items: [
        {
          label: 'Frutta Fresca',
          link: '/item-2-1',
          icon: 'favorite'
        },
        {
          label: 'Verdura Fresca',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Carne e Pesce',
      link: '/item-3',
      icon: 'offline_pin',
      items: [
        {
          label: 'Manzo',
          link: '/item-2-1',
          icon: 'favorite'
        },
        {
          label: 'Pesce',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Formaggi,Salumi,Gastronomia',
      link: '/item-4',
      icon: 'star_rate',
     // hidden: true
     items: [
      {
        label: 'Formaggi da Banco',
        link: '/item-2-1',
        icon: 'favorite'
      },
      {
        label: 'Formaggi confezionati',
        link: '/item-2-2',
        icon: 'favorite_border'
      }
    ]
    }

    ];
