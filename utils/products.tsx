// Estou mudando os links de imagem do firebase para a Amazon, o firebase tem problemas com esses links diretos. Por favor, lembre-se de adicionar o link da Amazon (que aparecerá no erro) em vez de firebase no config para que ele funcione.

export const products = [
  {
    id: '64a654593e91b8e73a351e9b',
    name: 'iPhone 14',
    description: 'Breve descrição',
    price: 4199,
    brand: 'Apple',
    category: 'Celular',
    inStock: true,
    images: [
      {
        color: 'Branco',
        colorCode: '#FFFFFF',
        image: 'https://m.media-amazon.com/images/I/71p-tHQ0u1L._AC_SX679_.jpg'
      },
      {
        color: 'Cinza',
        colorCode: '#808080',
        image: 'https://m.media-amazon.com/images/I/417tEj3iJ8L._AC_.jpg'
      }
    ],
    reviews: []
  },
  {
    id: '64a4ebe300900d44bb50628a',
    name: 'Teclado Logitech MX Keys Wireless',
    description:
      'Teclas em formato esférico oferecem feedback satisfatório\nDesign para conforto, estabilidade e precisão',
    price: 780.99,
    brand: 'Logitech',
    category: 'Acessórios',
    inStock: true,
    images: [
      {
        color: 'Preto',
        colorCode: '#000000',
        image: 'https://m.media-amazon.com/images/I/71gOLg2-kqL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      }
    ],
    reviews: [
      {
        id: '64a65a6158b470c6e06959ee',
        userId: '6475af156bad4917456e6e1e',
        productId: '64a4ebe300900d44bb50628a',
        rating: 5,
        comment: 'Bom',
        createdDate: '2023-07-06T06:08:33.067Z',
        user: {
          id: '6475af156bad4917456e6e1e',
          name: 'Cristhian',
          email: 'exemplo@gmail.com',
          emailVerified: null,
          image: 'https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c',
          hashedPassword: null,
          createdAt: '2023-05-30T08:08:53.979Z',
          updatedAt: '2023-05-30T08:08:53.979Z',
          role: 'ADMIN'
        }
      }
    ]
  },
  {
    id: '648437b38c44d52b9542e340',
    name: 'Xiaomi Redmi 12 - 256GB',
    description:
      'O Redmi 12 oferece uma experiência visual premium e desempenho aprimorado com seu design sofisticado. Com uma tela FHD+ de 90 Hz, proteção para os olhos e som envolvente, este dispositivo oferece uma experiência imersiva. Sua bateria poderosa, processador MediaTek Helio G88 Octa-core e armazenamento expansível tornam-no uma escolha ideal. Garantido pela JanelaStore com garantia de 90 dias e elegibilidade para substituição ou reembolso.',
    price: 950,
    brand: 'Xiaomi',
    category: 'Celular',
    inStock: true,
    images: [
      {
        color: 'Midnight Black',
        colorCode: '#222',
        image: 'https://m.media-amazon.com/images/I/61t99wqLeaL._AC_SL1500_.jpg'
      },
      { color: 'Azul', colorCode: '#bad8f2', image: 'https://m.media-amazon.com/images/I/41i2bARv0ZL._AC_.jpg' }
    ],
    reviews: [
      {
        id: '6499b4887402b0efd394d8f3',
        userId: '6499b184b0e9a8c8709821d3',
        productId: '648437b38c44d52b9542e340',
        rating: 1,
        comment: 'Muito bom, nota dez! 👍',
        createdDate: '2024-06-26T15:53:44.483Z',
        user: {
          id: '6499b184b0e9a8c8709821d3',
          name: 'Cristhian',
          email: 'exemplo1@gmail.com',
          emailVerified: null,
          image: 'https://avatars.githubusercontent.com/u/25783243?v=4',
          hashedPassword: null,
          createdAt: '2023-06-26T15:40:52.558Z',
          updatedAt: '2023-06-26T15:40:52.558Z',
          role: 'ADMIN'
        }
      },
      {
        id: '6499a110efe4e4de451c7edc',
        userId: '6475af156bad4917456e6e1e',
        productId: '648437b38c44d52b9542e340',
        rating: 5,
        comment: 'Péssimo produto 😭',
        createdDate: '2023-06-25T14:30:40.998Z',
        user: {
          id: '6475af156bad4917456e6e1e',
          name: 'Ana',
          email: 'exemplo@gmail.com',
          emailVerified: null,
          image: 'https://avatars.githubusercontent.com/u/155864724?v=4',
          hashedPassword: null,
          createdAt: '2023-06-25T14:30:40.998Z',
          updatedAt: '2023-06-25T14:30:40.998Z',
          role: 'USER'
        }
      }
    ]
  },
  {
    id: '64a4e9e77e7299078334019f',
    name: 'Mouse Sem Fio Logitech MX Master 2S',
    description:
      'Controle de computadores cruzado: Capacidade de navegar perfeitamente em 3 computadores e copiar colar texto, imagens e arquivos usando Logitech Flow\nConectividade dupla: Use com até 3 computadores Windows ou Mac via receptor Unifying ou Bluetooth Smart',
    price: 860,
    brand: 'Logitech',
    category: 'Acessórios',
    inStock: true,
    images: [
      {
        color: 'Grafite',
        colorCode: ' #383838',
        image: 'https://m.media-amazon.com/images/I/61ni3t1ryQL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      }
    ],
    reviews: []
  },
  {
    id: '649d775128b6744f0f497040',
    name: 'Smartwatch (Atende/Faz Chamadas), 1.85" à Prova d\'Água IP68',
    description:
      'Lembrete de Chamada e Mensagem Bluetooth: Equipado com alto-falante HD. Use para atender/fazer chamadas, ler mensagens, armazenar contatos. Configure notificações de mensagens no aplicativo "GloryFit". Nunca perca chamadas e mensagens durante reuniões, exercícios e passeios.',
    price: 200,
    brand: 'Nerunsa',
    category: 'Relógio',
    inStock: true,
    images: [
      {
        color: 'Preto',
        colorCode: '#000000',
        image: 'https://m.media-amazon.com/images/I/71s4mjiit3L.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      },
      {
        color: 'Prata',
        colorCode: '#C0C0C0',
        image: 'https://m.media-amazon.com/images/I/71zbWSRMaYL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
      }
    ],
    reviews: []
  }
];
