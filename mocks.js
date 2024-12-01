/* Arquivo mock-coffees.js */
import Express from "../../assets/express.jpeg";
import American from "../../assets/american.jpeg";
import Cappuccino from "../../assets/cappuccino.jpeg";

export const Coffees = [
  {
    id: 1,
    img: Express,
    name: "Espresso",
    description:
      "Um café forte e encorpado preparado sob alta pressão. É a base para diversas bebidas como cappuccino e latte.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: American,
    name: "Americano",
    description:
      "Um café suave feito diluindo um espresso em água quente, perfeito para quem prefere um sabor mais leve.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Cappuccino,
    name: "Cappuccino",
    description:
      "Uma combinação equilibrada de espresso, leite vaporizado e uma camada cremosa de espuma de leite.",
    aosDelay: "500",
  },
];

/* Arquivo menuitem.js*/
export const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Serviços",
    link: "/#services",
  },
  {
    id: 3,
    name: "Sobre Nós",
    link: "/#about",
  },
];

/* Arquivo testimonial.js   */
export const TestimonialData = [
  {
    id: 1,
    name: "João Silva",
    text: "O café daqui é simplesmente incrível! Sempre fresco e com um sabor marcante. Recomendo a todos!",
    img: "https://mighty.tools/mockmind-api/content/human/65.jpg",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    text: "Adoro vir aqui nas manhãs de sábado. O atendimento é excelente e o cappuccino é o melhor da cidade!",
    img: "https://mighty.tools/mockmind-api/content/human/38.jpg",
  },
  {
    id: 3,
    name: "Pedro Santos",
    text: "A atmosfera é tão acolhedora! Perfeito para relaxar enquanto saboreia um delicioso café com os amigos.",
    img: "https://mighty.tools/mockmind-api/content/human/42.jpg",
  },
  {
    id: 4,
    name: "Ana Paula",
    text: "Os doces são maravilhosos, e o café combina perfeitamente com eles. Amo cada detalhe dessa cafeteria!",
    img: "https://mighty.tools/mockmind-api/content/human/9.jpg",
  },
  {
    id: 5,
    name: "Carlos Mendes",
    text: "Eu trabalho próximo, e esse é o meu refúgio favorito no intervalo. O expresso é perfeito, e o ambiente, impecável.",
    img: "https://mighty.tools/mockmind-api/content/human/59.jpg",
  },
  {
    id: 6,
    name: "Sofia Ribeiro",
    text: "Lugar encantador! As opções de café são diversas, e o cuidado com os clientes faz toda a diferença. Nota 10!",
    img: "https://mighty.tools/mockmind-api/content/human/71.jpg",
  },
];

/* variável para o carrossel dos clientes*/
let settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
