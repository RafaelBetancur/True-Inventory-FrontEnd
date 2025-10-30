export const categoriesData = [
  { id: 1, name: "Electrónica", description: "Dispositivos y accesorios tecnológicos." },
  { id: 2, name: "Hogar y Decoración", description: "Muebles y artículos decorativos." },
  { id: 3, name: "Moda", description: "Ropa, calzado y accesorios de vestir." },
  { id: 4, name: "Deportes y Aire Libre", description: "Equipamiento y artículos deportivos." },
  { id: 5, name: "Cocina y Gastronomía", description: "Utensilios y herramientas de cocina." }
];

export const productsData = [
  {
    id: "1",
    name: "Cafetera Espresso Barista X",
    description: "Cafetera espresso profesional con sistema de vaporizador.",
    category_id: 5,
    image: "https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg",
    price: 249,
    quantity: 15
  },
  {
    id: "2",
    name: "Auriculares Inalámbricos SoundMax Pro",
    description: "Auriculares con cancelación de ruido y carga rápida.",
    category_id: 1,
    image: "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
    price: 129,
    quantity: 30
  },
  {
    id: "3",
    name: "Reloj Deportivo UltraRunner 3000",
    description: "Reloj GPS multideporte con medición de oxígeno.",
    category_id: 4,
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    price: 199,
    quantity: 20
  },
  {
    id: "4",
    name: "Smartphone Galaxy Zenith 12",
    description: "Pantalla AMOLED de 6.7'' y cámara de 108MP.",
    category_id: 1,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    price: 899,
    quantity: 10
  },
  {
    id: "5",
    name: "Sofá Modular Loft Grey",
    description: "Sofá modular gris claro, lavable y con estructura metálica.",
    category_id: 2,
    image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
    price: 799,
    quantity: 5
  },
  {
    id: "6",
    name: "Lámpara Colgante Nordic Wood",
    description: "Diseño nórdico en madera y lino, ideal para comedor.",
    category_id: 2,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    price: 89,
    quantity: 25
  },
  {
    id: "7",
    name: "Camisa Oxford Slim Fit Blanca",
    description: "Camisa de algodón 100% corte slim fit.",
    category_id: 3,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    price: 49,
    quantity: 40
  },
  {
    id: "8",
    name: "Mochila Urbana CityPack 20L",
    description: "Mochila impermeable con puerto USB y espacio para laptop.",
    category_id: 4,
    image: "https://images.pexels.com/photos/374746/pexels-photo-374746.jpeg",
    price: 59,
    quantity: 35
  },
  {
    id: "9",
    name: "Set de Ollas Gourmet Chef 8 piezas",
    description: "Acero inoxidable con recubrimiento antiadherente.",
    category_id: 5,
    image: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg",
    price: 149,
    quantity: 12
  },
  {
    id: "10",
    name: "Altavoz Bluetooth Waterproof XtremeSound",
    description: "Sonido 360° resistente al agua con 15h de batería.",
    category_id: 1,
    image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    price: 99,
    quantity: 18
  }
];

export const usersData = [
  {
    id: 1,
    email: "admin@tienda.com",
    password: "admin123"
  }
];


export const movesData = [
  { id: 1, product_id: 1, quantity: 5, move_type: "entrada", user_id: 1 },
  { id: 2, product_id: 2, quantity: 10, move_type: "entrada", user_id: 1 },
  { id: 3, product_id: 3, quantity: 3, move_type: "salida", user_id: 1 },
  { id: 4, product_id: 4, quantity: 2, move_type: "salida", user_id: 1 },
  { id: 5, product_id: 5, quantity: 1, move_type: "salida", user_id: 1 },
  { id: 6, product_id: 6, quantity: 8, move_type: "entrada", user_id: 1 },
  { id: 7, product_id: 7, quantity: 4, move_type: "salida", user_id: 1 },
  { id: 8, product_id: 8, quantity: 6, move_type: "entrada", user_id: 1 },
  { id: 9, product_id: 9, quantity: 2, move_type: "salida", user_id: 1 },
  { id: 10, product_id: 10, quantity: 5, move_type: "entrada", user_id: 1 }
];
