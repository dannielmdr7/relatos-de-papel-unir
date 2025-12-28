import { QueryClientProvider } from "@tanstack/react-query";
import { DIProvider } from "./common/context/di-context";
import { bookRepository } from "./modules/books";
import { CartProvider } from "./modules/cart/context/cart-context";
import AppRoutes from "./routes/pages/app-routes";
import { queryClient } from "./utils/config/query-client.config";

//TODO revisar lo del cart provider
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DIProvider
        repositories={{
          bookRepository,
        }}
      >
        <CartProvider>
          <div className="app">
            <AppRoutes />
          </div>
        </CartProvider>
      </DIProvider>
    </QueryClientProvider>
  );
}

export default App;
