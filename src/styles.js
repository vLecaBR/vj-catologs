import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  color: #333;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #2c3e50;
  color: #fff;
  border-radius: 8px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }
`;

export const OrderButton = styled.a`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
`;

export const ProductDetails = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const ProductTitle = styled.h2`
  margin: 0 0 10px;
  font-size: 22px;
  color: #2c3e50;
`;

export const ProductPrice = styled.p`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: bold;
  color: #e74c3c;
`;

export const ProductColors = styled.p`
  margin: 0;
  font-size: 16px;
  color: #7f8c8d;

  strong {
    color: #34495e;
  }
`;

export const ProductSize = styled.p`
  margin: 0;
  font-size: 16px;
  color: #7f8c8d;

  strong {
    color: #34495e;
  }
`;

export const ProductImages = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
