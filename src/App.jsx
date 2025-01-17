import React from "react";
import {
  Container,
  Header,
  OrderButton,
  ProductCard,
  ProductDetails,
  ProductImages,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductColors,
  ProductSize,
} from "./styles";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Tenis XXX",
      price: "R$ 500,00",
      colors: ["Preto", "Azul", "Vermelho"],
      size: ["37", "38", "39", "40", "41", "42"],
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      id: 2,
      name: "Tenis YYY",
      price: "R$ 500,00",
      colors: ["Branco", "Cinza"],
      size: ["37", "38", "39", "40", "41", "42"],
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      id: 3,
      name: "Tenis ZZZ",
      price: "R$ 500,00",
      colors: ["Branco", "Cinza"],
      size: ["37", "38", "39", "40", "41", "42"],
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
    {
      id: 4,
      name: "Tenis 000",
      price: "R$ 500,00",
      colors: ["Branco", "Cinza"],
      size: ["37", "38", "39", "40", "41", "42"],
      images: [
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
        "https://via.placeholder.com/300",
      ],
    },
  ];

  return (
    <Container>
      <Header>
        <h1>Catálogo de Produtos</h1>
        <OrderButton href="#">Faça seu pedido</OrderButton>
      </Header>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductDetails>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductColors>
              <strong>Cores:</strong> {product.colors.join(", ")}
            </ProductColors>
            <ProductSize>
              <strong>Tamanhos:</strong> {product.size.join(", ")}
            </ProductSize>
          </ProductDetails>
          <ProductImages>
            {product.images.map((image, index) => (
              <ProductImage key={index} src={image} alt={`Imagem ${index + 1}`} />
            ))}
          </ProductImages>
        </ProductCard>
      ))}
    </Container>
  );
};

export default App;
