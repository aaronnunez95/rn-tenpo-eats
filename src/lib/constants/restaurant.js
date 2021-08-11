export const DATA = [
  {
    data: [
      {
        items: [
          {
            discount_percent: 50,
            duration_str    : '10-50 min.',
            image_src       : require('@assets/img/logo-mcdonals.png'),
            name            : 'Mc Donalds',
            rating          : 3.5
          },
          {
            discount_percent: 30,
            duration_str    : '10-60 min.',
            image_src       : require('@assets/img/logo-melt.png'),
            name            : 'MELT Pizzas',
            rating          : 4.5
          },
          {
            discount_percent: 20,
            duration_str    : '10-50 min.',
            image_src       : require('@assets/img/logo-yokono.png'),
            name            : 'YOKONO',
            rating          : 3.5
          },
          {
            discount_percent: null,
            duration_str    : '10-30 min.',
            image_src       : require('@assets/img/logo-papajhons.png'),
            name            : "Papa John's",
            rating          : 5
          }
        ],
        kind: 'restaurant'
      }
    ],
    first: true,
    title: 'Restaurantes'
  },
  {
    data: [
      {
        items: [
          {
            image_src: require('@assets/img/category-hamburguer.jpeg'),
            name     : 'Hamburguesas'
          },
          {
            image_src: require('@assets/img/category-italian.jpeg'),
            name     : 'Italiana'
          },
          {
            image_src: require('@assets/img/category-pizza.jpeg'),
            name     : 'Pizzas'
          }
        ],
        kind: 'restaurant-category'
      }
    ],
    title: 'Categorías'
  },
  {
    data: [
      {
        items: [
          {
            duration_str: '10-50 min.',
            image_src   : require('@assets/img/product-hamburguer.jpeg'),
            name        : 'Combo hamburguesa Bigmac',
            rating      : 3.5,
            restaurant  : {
              image_src: require('@assets/img/logo-mcdonals.png'),
              name     : 'Mc Donalds'
            }
          },
          {
            duration_str: '10-30 min.',
            image_src   : require('@assets/img/product-pizza.jpeg'),
            name        : 'Pizza Mediana Napolitana',
            rating      : 4.5,
            restaurant  : {
              image_src: require('@assets/img/logo-melt.png'),
              name     : 'MELT Pizzas'
            }
          }
        ],
        kind: 'restaurant-product'
      }
    ],
    title: 'Tus favoritos'
  }
]
