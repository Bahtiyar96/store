import { Card, Box, CardContent, Skeleton } from "@mui/material"

export const SkeletonCard = () => {
  return (
   <Card sx={{ flex: 1, minWidth: '350px', maxWidth: '400px' }}>
      <Skeleton variant='rounded' width={'100%'} height={140} />
      <CardContent>
         <Skeleton variant='rectangular' width={'90%'} height={30} />
         <Skeleton variant='rounded' sx={{mt: '1rem'}} width={'100%'} height={80} />
      </CardContent>
      <Box sx={{display: 'flex', gap: '15px', mt: '1rem'}}>
         <Skeleton variant='rounded' width={50} height={30} />
         <Skeleton variant='rounded' width={100} height={30} />
      </Box>
    </Card>
  )
}
