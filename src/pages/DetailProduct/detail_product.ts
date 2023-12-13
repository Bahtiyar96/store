import { Box, styled } from "@mui/material";


export const DetailBox = styled(Box)`
   display: flex;
   gap: 2rem;
   .detail_left {
      img {
         width: 350px;
         height: 350px;
      }
   }
   .detail_right {
      &_bottom {
         padding: 1.5rem 0;
         &_desc {
            font-size: 18px;
            
         }
      }
   }
`;