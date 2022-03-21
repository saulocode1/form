import GlobalStyled from "./GlobalStyled";
import StyledForm from "./Components/StyledForm";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
   <>
      <QueryClientProvider client={queryClient}>
         <GlobalStyled />
         <StyledForm />
      </QueryClientProvider>
   </>
);

export default App;
