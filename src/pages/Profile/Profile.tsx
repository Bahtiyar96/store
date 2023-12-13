import { Box, Backdrop, CircularProgress, Typography, Tab } from "@mui/material"
import { useGetUserDataQuery } from "../../store/queries/user";
import { useState } from "react";
import { TabContext, TabList, TabPanel, } from "@mui/lab";
 
export const Profile = () => {
   const { _id } = JSON.parse(localStorage.getItem('user')!);
   const {data, isLoading} = useGetUserDataQuery(_id!);
   const [currentTab, setCurrentTab] = useState<string>('1');

   return (
      <Box>
         {
            isLoading ? (
               <Backdrop
                  sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                  open={true}
                  >
                  <CircularProgress color="inherit" />
               </Backdrop>
            ) : (
               <Box>
                  <TabContext value={currentTab}>
                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList 
                           onChange={(e, value) => setCurrentTab(value)} 
                           aria-label="lab API tabs example"
                        >
                           <Tab label="Item One" value="1" />
                           <Tab label="Item Two" value="2" />
                           <Tab label="Item Three" value="3" />
                        </TabList>
                     </Box>
                     <TabPanel value="1">
                        <Box>
                           <Typography variant="h2">{data?.name}</Typography>
                           <Typography variant="h4">email:{data?.email}</Typography>
                           <Typography variant="h4">phone:{data?.phone}</Typography>
                           <Typography variant="h4">created:{data?.createdAt}</Typography>
                        </Box>
                     </TabPanel>
                     <TabPanel value="2">Item Two</TabPanel>
                     <TabPanel value="3">Item Three</TabPanel>
                  </TabContext>
               </Box>
            ) 
         }
      </Box>
   )
};
