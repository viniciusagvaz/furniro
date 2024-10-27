//TODO: Fetch de produtos por categorias do modal
//TODO: Sort by dos produtos por preço
//TODO: Atualizar caminho do bradcrumbs
//TODO: Numeros dinamicos no show


//* DONE: Paginaçao de produtos
//* DONE : Limitador de produtos
//* DONE: Botão da pagina de detalhes do produto
//* DONE: category dos produtos fix!

// Retorne me 7 objetos seguindo este padrão de estrutura e obedecendo estas regras: 
//   1. Substitua valor com valor de [substituir]
//   2. Para o campo "image_link" usar aleatoriamenteos seguintes links: 
//   https://i.postimg.cc/RV4bt66d/abajur.png 
//   https://i.postimg.cc/sDmH4j5r/cadeira.png 
//   https://i.postimg.cc/XNcsnjHC/jantar.png 
//   https://i.postimg.cc/Qtc09hjv/mesa.png 
//   https://i.postimg.cc/MTJY8N15/quarto.png 
//   https://i.postimg.cc/Xq3x9mJq/sala.png 
//   https://i.postimg.cc/Z5gcwCR1/sofa.png 
//   https://i.postimg.cc/kGcsss6c/sofa-grande.png 
//   https://i.postimg.cc/DyvBZ9HY/sofa-grande2.png 
//   https://i.postimg.cc/3Jt9DLHr/sofa-pequeno.png 
//   https://i.postimg.cc/y8WjhFVm/sofa-sala.png 
//   https://i.postimg.cc/KYM5wx34/sofas.png
//   3. O campo id deve ser aleatório e inteiro com no máximo 3 casas decimais
//   4. O campo "name"  deve ser aleatorio entre os nomes do produto no final do link sem o ".png" ATENÇÃO: SEPARE AS PALAVRAS APENAS POR ESPAÇO EM BRANCO 
//   5. O campo "sku" deve conter o seguinte formato de duas letras em maiúsculo seguidas por 3 numeros
//   6. O campo "category_id" deve ser um inteiro entre 1 e 3
//   7. O campo "description" deve ser um texto aleatorio de no maximo 250 palavras
//   8. O campo "large_description" deve ser um texto aleatorio de no maximo 500 palavras
//   9. O campo "price" deve ser um inteiro entre 0 e 1000000

//   10. O campo "discount_percent" deve ter 95% de chance de ser 0
//   11. O campo "discount_percent" deve ser: 10, 25, 30 ou 35"
//   12. O campo "discount_price" deve ser uma regra de porcentagem baseado no campo "price" e "discount_price" 

//   13. O campo "is_new" deve ser um booleano com 10% de chance de ser true
//   14. Se o campo "is_new" for true, o campo "discount_percent" deve ser 0

//   15. O campo "image_link" deve ser uma string vazia ou uma string com url de imagem
//   16. O campo "other_image_link" deve ser mantido como está   
  

//   {
//     "name": [substituir],
//     "sku": [substituir],
//     "category_id": [substituir],
//     "description": [substituir],
//     "large_description": "Lorem ipsum dolor sit amet. Ex odit temporibus aut corporis inventore sit magni consequuntur non odit rerum et internos rerum quo ratione laboriosam! Et nihil aliquid non debitis porro non veritatis nihil a facere deleniti! Ut enim delectus ex necessitatibus nihil aut sunt voluptatem sed quasi doloribus non sint possimus et quisquam dolorem aut nulla sunt. Et modi nihil qui omnis sunt sit quaerat omnis est repellendus asperiores aut cupiditate autem.",
//     "price": [substituir],
//     "discount_price": [substituir],
//     "discount_percent": [substituir],
//     "is_new": [substituir],
//     "image_link": [substituir], 
//     "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png",
//       "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png",
//       "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png",
//       "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
  
  [
    {
        "name": "abajur",
        "sku": "SK001",
        "category_id": 3,
        "description": "Abajur moderno para iluminar seu espaço.",
        "large_description": "Este abajur é a escolha perfeita para adicionar um toque de elegância e conforto ao seu ambiente. Com um design moderno, ele proporciona uma iluminação suave e aconchegante, ideal para ler ou relaxar. Perfeito para mesas de cabeceira ou mesas de canto, ele combina com qualquer estilo de decoração.",
        "price": 15000,
        "discount_price": 0,
        "discount_percent": 0,
        "is_new": true,
        "image_link": "https://i.postimg.cc/RV4bt66d/abajur.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "sofa-grande2",
        "sku": "SK001",
        "category_id": 1,
        "description": "Sofá grande, ideal para famílias.",
        "large_description": "Este sofá grande é perfeito para famílias que buscam conforto e espaço. Com um design acolhedor, ele convida todos a se reunirem e desfrutarem de momentos juntos. Fabricado com materiais de alta qualidade, garante durabilidade e resistência ao desgaste, tornando-o uma escolha prática para o seu lar.",
        "price": 95000,
        "discount_price": 61750,
        "discount_percent": 35,
        "is_new": false,
        "image_link": "https://i.postimg.cc/DyvBZ9HY/sofa-grande2.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "sala",
        "sku": "SK001",
        "category_id": 1,
        "description": "Conjunto de móveis para sala de estar.",
        "large_description": "Este conjunto de móveis é projetado para transformar sua sala de estar em um espaço elegante e acolhedor. Inclui sofás e mesas que combinam conforto e estilo, perfeitos para receber amigos e familiares. Cada peça é feita com materiais de alta qualidade para garantir durabilidade.",
        "price": 130000,
        "discount_price": 84500,
        "discount_percent": 35,
        "is_new": false,
        "image_link": "https://i.postimg.cc/Xq3x9mJq/sala.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "sofa-pequeno2",
        "sku": "SK001",
        "category_id": 1,
        "description": "Sofá pequeno e elegante.",
        "large_description": "Este sofá pequeno é perfeito para apartamentos ou espaços menores. Com um design moderno e elegante, ele combina conforto e estilo sem ocupar muito espaço. Ideal para quem busca praticidade e sofisticação na decoração.",
        "price": 22000,
        "discount_price": 16500,
        "discount_percent": 25,
        "is_new": false,
        "image_link": "https://i.postimg.cc/3Jt9DLHr/sofa-pequeno.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "jantar",
        "sku": "SK001",
        "category_id": 2,
        "description": "Mesa de jantar com cadeiras inclusas.",
        "large_description": "Esta mesa de jantar é perfeita para criar um ambiente acolhedor durante as refeições. Acompanha cadeiras confortáveis que combinam estilo e funcionalidade. Feita com materiais de alta qualidade, esta mesa é ideal para jantares em família ou com amigos.",
        "price": 85000,
        "discount_price": 0,
        "discount_percent": 0,
        "is_new": true,
        "image_link": "https://i.postimg.cc/XNcsnjHC/jantar.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "cadeira-grande",
        "sku": "SK001",
        "category_id": 1,
        "description": "Cadeira grande para conforto máximo.",
        "large_description": "Esta cadeira grande oferece um conforto excepcional e é perfeita para longas horas de uso. Seu design ergonômico garante suporte adequado, tornando-a ideal para escritório ou sala de estar. Fabricada com materiais de alta qualidade, é uma peça durável e estilosa.",
        "price": 30000,
        "discount_price": 22500,
        "discount_percent": 25,
        "is_new": false,
        "image_link": "https://i.postimg.cc/sDmH4j5r/cadeira.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "quarto2",
        "sku": "SK001",
        "category_id": 3,
        "description": "Quarto moderno e elegante.",
        "large_description": "Este quarto moderno é perfeito para quem busca conforto e estilo. Com móveis projetados para otimizar o espaço, ele cria um ambiente aconchegante e funcional. As cores neutras e o design contemporâneo proporcionam uma atmosfera relaxante.",
        "price": 70000,
        "discount_price": 0,
        "discount_percent": 0,
        "is_new": true,
        "image_link": "https://i.postimg.cc/MTJY8N15/quarto.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },
    {
        "name": "sofa-sala2",
        "sku": "SK001",
        "category_id": 1,
        "description": "Sofá para sala com design elegante.",
        "large_description": "Este sofá é a escolha ideal para quem deseja adicionar um toque de sofisticação à sua sala de estar. Com um design moderno e confortável, ele se destaca pela sua elegância e funcionalidade. Perfeito para momentos de lazer e convívio.",
        "price": 60000,
        "discount_price": 39000,
        "discount_percent": 35,
        "is_new": false,
        "image_link": "https://i.postimg.cc/y8WjhFVm/sofa-sala.png",
        "other_image_link": ["https://i.postimg.cc/XYD2ts21/miniatura1-sofa.png", "https://i.postimg.cc/XYvH2Rgy/miniatura2-sofa.png", "https://i.postimg.cc/DzJCh1Hv/miniatura3-sofa.png", "https://i.postimg.cc/KY608Rhn/miniatura4-sofa.png"]
    },