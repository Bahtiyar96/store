import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/queries/product";
import { Box, Typography, Divider } from "@mui/material";
import { MyImage } from "../../components";
import { DetailBox } from "./detail_product";

export const DetailProduct = () => {
  const { id } = useParams();

  const { data } = useGetProductByIdQuery(id!);
  if(!data) {
    return <>404</>;
  }
  data.description

  return <DetailBox>
    <Box className='detail_left'>
      <MyImage src={data.image} alt="" />
    </Box>
    <Box className='detail_right'>
      <Typography variant="h2">{data.brand}</Typography>
      <Typography variant="h1">{data.name}</Typography>
      <Divider />
      <Box className='detail_right_bottom'>
        <Typography className="detail_right_bottom_desc" variant="body1">{data.description}</Typography>
      </Box>
    </Box>
  </DetailBox>
};

