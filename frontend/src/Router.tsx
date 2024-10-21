import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layout/index";
import { UnderConstruction } from "./pages/UnderConst";
import { Shop } from "./pages/Shop";
import { Product } from "./pages/Product";
import { Category } from "./pages/Category";
// import { Tests } from "./Tests";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/shop" element={<Shop />}/>
          
        <Route path="product" element={<Product />}>
          <Route path=":productName" element={<Product />} />
        </Route>

        <Route path="category/:categoryName" element={<Category />}/>
        <Route path="invalid-path" element={<UnderConstruction />} />
      </Route>
    </Routes>
  );
}
