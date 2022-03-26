import { useParams } from "react-router-dom";
import {Moment} from 'react-moment';
import { useQuery } from "react-query";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  return (
    <div>
      <Button colorScheme="pink">Add to basket</Button>

      <Text as="h2" fontSize="2xl">
          {data.title}
      </Text>
      <Text>{Moment(data.createdAt).format("DD/MM/YYYY")}</Text>

      <p>{data.description}</p>
    </div>
  );
}

export default ProductDetail;
