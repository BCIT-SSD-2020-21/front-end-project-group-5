const products = [
  {
    name: 'Antique Native Vase',
    image: '/images/artcraft/ceramics/antique-native-vase.jpg',
    description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'artcraft',
    price: 89.99,
    rating: 0,
    numReviews: 0,
  },

  {
    name: 'Wrap #1',
    image: '/images/gloves-socks-hats/appaerl-wrap-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 15.55,
  },
  {
    name: 'Wrap #2',
    image: '/images/gloves-socks-hats/apparel-wrap-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 31.10,
  },
  {
    name: 'Gloves #1',
    image: '/images/gloves-socks-hats/apparel-gloves-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 46.65,
  },
  {
    name: 'Gloves #2',
    image: '/images/gloves-socks-hats/apparel-gloves-2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 77.75,
  },
  {
    name: 'Hat #1',
    image: '/images/gloves-socks-hats/apparel-hat-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 88.59,
  },
  {
    name: 'Scarves #1',
    image: '/images/gloves-socks-hats/apparel-scarvers-1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Apparel',
    price: 88.59,
  },
  {
    name: 'Sony Playstation 4 Pro White Version',
    image: '/images/playstation.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Electronics',
    price: 124.40,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Electronics',
    price: 202.15,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus mollis purus. Integer tristique urna sem, in egestas nibh dignissim nec. Aenean venenatis ac quam nec hendrerit. Aenean nisl magna, blandit vitae nisl ut, rhoncus malesuada velit. Integer venenatis quis elit sit amet sodales. Praesent dapibus ex scelerisque justo volutpat consequat. Aenean in eros eget erat elementum auctor eu in nulla. Ut in felis nulla. Nam tempus at enim porta congue. Fusce ultricies risus eu fringilla volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae metus dictum enim vestibulum pharetra. Fusce iaculis, sem pellentesque blandit imperdiet, eros est congue ligula, eget gravida dui est vitae lacus. Donec blandit dui id mauris aliquam hendrerit. Mauris ut lorem quis enim porttitor fringilla.',
    category: 'Electronics',
    price: 326.55,
  },
]

export default products
