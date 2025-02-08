export const customers = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali.khan@example.com",
    phone: "+92-300-1234567",
    address: "123 Street, Karachi, Pakistan",
    purchaseHistory: [
      { item: "Laptop", amount: 75000, date: "2025-01-20" },
      { item: "Headphones", amount: 5000, date: "2025-01-22" },
    ],
  },
  {
    id: 2,
    name: "Fatima Malik",
    email: "fatima.malik@example.com",
    phone: "+92-300-9876543",
    address: "45 Avenue, Lahore, Pakistan",
    purchaseHistory: [
      { item: "Smartphone", amount: 50000, date: "2025-01-15" },
      { item: "Tablet", amount: 30000, date: "2025-01-18" },
    ],
  },
  {
    id: 3,
    name: "Usman Ahmed",
    email: "usman.ahmed@example.com",
    phone: "+92-321-4567890",
    address: "78 Road, Islamabad, Pakistan",
    purchaseHistory: [
      { item: "Camera", amount: 85000, date: "2025-01-25" },
      { item: "Tripod", amount: 7000, date: "2025-01-27" },
    ],
  },
  {
    id: 4,
    name: "Ayesha Karim",
    email: "ayesha.karim@example.com",
    phone: "+92-333-1122334",
    address: "56 Block, Faisalabad, Pakistan",
    purchaseHistory: [
      { item: "Refrigerator", amount: 120000, date: "2025-01-10" },
      { item: "Microwave", amount: 15000, date: "2025-01-12" },
    ],
  },
  {
    id: 5,
    name: "Hassan Raza",
    email: "hassan.raza@example.com",
    phone: "+92-301-2233445",
    address: "89 Lane, Multan, Pakistan",
    purchaseHistory: [
      { item: "Washing Machine", amount: 40000, date: "2025-01-08" },
      { item: "Iron", amount: 3000, date: "2025-01-09" },
    ],
  },
];


export const orders = [
  {
    id: 1,
    orderId: "ORD123",
    orderDate: "Jan 12, 12:23 PM",
    customer: "John Doe",
    total: "$250",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 2,
    orderId: "ORD124",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Jane Smith",
    total: "$450",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 3,
    orderId: "ORD125",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Samuel Lee",
    total: "$120",
    payment: "Transfer",
    status: "Delivered",
  },
  {
    id: 4,
    orderId: "ORD126",
    orderDate: "Jan 12, 12:23 PM",
    customer: "Emily Davis",
    total: "$30",
    payment: "Transfer",
    status: "Cancelled",
  },
  {
    id: 5,
    orderId: "ORD127",
    orderDate: "Jan 13, 09:45 AM",
    customer: "Michael Brown",
    total: "$620",
    payment: "PayPal",
    status: "Processing",
  },
  {
    id: 6,
    orderId: "ORD128",
    orderDate: "Jan 13, 10:15 AM",
    customer: "Sophia Wilson",
    total: "$85",
    payment: "Debit Card",
    status: "Delivered",
  },
  {
    id: 7,
    orderId: "ORD129",
    orderDate: "Jan 13, 02:30 PM",
    customer: "David Clark",
    total: "$300",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 8,
    orderId: "ORD130",
    orderDate: "Jan 14, 11:05 AM",
    customer: "Olivia Martinez",
    total: "$175",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 9,
    orderId: "ORD131",
    orderDate: "Jan 14, 03:20 PM",
    customer: "James Anderson",
    total: "$490",
    payment: "Transfer",
    status: "Delivered",
  },
  {
    id: 10,
    orderId: "ORD132",
    orderDate: "Jan 15, 01:10 PM",
    customer: "Emma Thomas",
    total: "$95",
    payment: "Debit Card",
    status: "Processing",
  },
  {
    id: 11,
    orderId: "ORD133",
    orderDate: "Jan 15, 04:50 PM",
    customer: "Liam Garcia",
    total: "$600",
    payment: "PayPal",
    status: "Cancelled",
  },
  {
    id: 12,
    orderId: "ORD134",
    orderDate: "Jan 16, 08:20 AM",
    customer: "Charlotte Rodriguez",
    total: "$220",
    payment: "Credit Card",
    status: "Pending",
  },
  {
    id: 13,
    orderId: "ORD135",
    orderDate: "Jan 16, 02:10 PM",
    customer: "Benjamin Hall",
    total: "$330",
    payment: "Transfer",
    status: "Shipped",
  },
  {
    id: 14,
    orderId: "ORD136",
    orderDate: "Jan 17, 12:00 PM",
    customer: "Amelia Young",
    total: "$140",
    payment: "Debit Card",
    status: "Processing",
  },
  {
    id: 15,
    orderId: "ORD137",
    orderDate: "Jan 17, 03:30 PM",
    customer: "Elijah King",
    total: "$275",
    payment: "PayPal",
    status: "Delivered",
  },
];


export const furnitureItems = [
  {
    image: "/assets/main-logo.svg",
    name: "Luxury Sofa Set",
    category: "Sofa",
    price: 45000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Modern Dining Table",
    category: "Dining",
    price: 35000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "King Size Bed",
    category: "Bedroom",
    price: 55000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Ergonomic Office Chair",
    category: "Office",
    price: 12000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Wooden Wardrobe",
    category: "Storage",
    price: 40000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Glass Coffee Table",
    category: "Living Room",
    price: 15000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Minimalist TV Stand",
    category: "Living Room",
    price: 18000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Bookshelf with Storage",
    category: "Study",
    price: 22000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Recliner Lounge Chair",
    category: "Living Room",
    price: 30000,
  },
  {
    image: "/assets/main-logo.svg",
    name: "Wooden Nightstand",
    category: "Bedroom",
    price: 8000,
  },
];
