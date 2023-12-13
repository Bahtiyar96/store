import { useGetProductsQuery } from "../../store/queries/product";
import { Productcard, SkeletonCard } from "../../components";
import { Box } from "@mui/material";
import styled from "styled-components";

export const Main = () => {
  const { data, isLoading } = useGetProductsQuery("");

  return (
    <MyBox>
      {isLoading 
        ? [1, 2, 3, 4, 5, 6].map((_, index) => {
          return <SkeletonCard key={index} />
        }) 
        : data &&
        data?.map((item, index) => (
          <Productcard key={"product" + index + item._id} {...item} />
        ))}
    </MyBox>
  );
};

const MyBox = styled(Box)`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`