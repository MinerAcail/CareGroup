import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT = gql`
query GetNewProduct {
  getNewProduct {
    id
    name
    other
    price
    state
    title
    brand
    imageUrls
    isLocal
  }
}
`;

export default function  () {

  const data = useQuery( GET_PRODUCT, {});

    
    return data;
  }