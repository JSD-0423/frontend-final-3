import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box } from '@mui/material'

import { AdminDashBord as AdminDashBordComponent } from "../../Components/DashBoard";

const queryClient = new QueryClient();

function AdminDashBoard() {
  return (
    <Box width="100%" component="article">
      <QueryClientProvider client={queryClient}>
        <AdminDashBordComponent />
      </QueryClientProvider>
    </Box>
  );
}

export default AdminDashBoard;
