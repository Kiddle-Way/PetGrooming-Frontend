import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutRouter from "../../member/router/about/AboutRouter";
import DesignerRouter from "../../admin/router/designer/DesignerRouter";
import productsRouter from "../../admin/router/product/productRouter";

const Loading = <div>Loading....</div>;
const Main = lazy(() => import("../../member/pages/main/MainPage"));
const AboutIndex = lazy(() => import("../../member/pages/about/IndexPage"));
const DesignerIndex = lazy(() =>
  import("../../admin/pages/designer/IndexPage")
);
const ProductsIndex = lazy(() => import("../../admin/pages/product/IndexPage"));
const GuideIndex = lazy(() => import("../../member/pages/guide/IndexPage"));
// const DesignerList = lazy(() => import("../../admin/pages/designer/ListPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <AboutIndex />
      </Suspense>
    ),
    children: AboutRouter(),
  },
  {
    path: "designer",
    element: (
      <Suspense fallback={Loading}>
        <DesignerIndex />
      </Suspense>
    ),
    children: DesignerRouter(),
  },
  {
    path: "product",
    element: (
      <Suspense fallback={Loading}>
        <ProductsIndex />
      </Suspense>
    ),
    children: productsRouter(),
  },
  {
    path: "guide",
    element: (
      <Suspense fallback={Loading}>
        <GuideIndex />
      </Suspense>
    ),
  },
]);

export default root;