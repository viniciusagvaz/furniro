import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./components/layout/default-layout";
import { UnderConstruction } from "./pages/UnderConst";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetails";
import { Category } from "./pages/Category";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="product" element={<ProductDetail />}>
          <Route path=":productName" element={<ProductDetail />} />
        </Route>
        <Route path="category/:categoryId" element={<Category />} />
        <Route path="invalid-path" element={<UnderConstruction />} />
      </Route>
    </Routes>
  );
}
