import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const ScrollToTop = lazy(() => import("./components/forAll/ScrollToTop"));
const Header = lazy(() => import("./components/main/header/Header"));
const Footer = lazy(() => import("./components/main/Footer"));
const Home = lazy(() => import("./components/pages/home/Home"));
const News = lazy(() => import("./components/pages/news/News"));
const NewsDetail = lazy(() => import("./components/pages/news/NewsDetail"));
const Videos = lazy(() => import("./components/pages/videos/Videos"));
const Notice = lazy(() => import("./components/pages/notice/Notice"));
const NoticeDetail = lazy(() =>
  import("./components/pages/notice/NoticeDetail")
);
const MemberTimeline = lazy(() =>
  import("./components/pages/memberTimeline/MemberTimeline")
);
const OrganizationTimeline = lazy(() =>
  import("./components/pages/organizationTimeline/OrganizationTimeline")
);

const Gallery = lazy(() => import("./components/pages/gallery/Gallery"));
const Archive = lazy(() => import("./components/pages/archive/Archive"));

// const Profile = lazy(() => import("./components/pages/profile/Profile"));
// const Products = lazy(() => import("./components/pages/products/Products"));
// const Checkout = lazy(() => import("./components/pages/checkout/Checkout"));
// const Delivery = lazy(() => import("./components/pages/deliveryForm/Delivery"));
// const Cart = lazy(() => import("./components/pages/cart/Cart"));
// const Register = lazy(() => import("./components/pages/register/Register"));
// const DetailPage = lazy(() =>
//   import("./components/pages/detailPage/DetailPage")
// );

// const AboutUs = lazy(() => import("./components/pages/about/AboutUs"));
// const Contact = lazy(() => import("./components/pages/contact/Contact"));
// const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback=<div>Loading</div>>
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news-detail" element={<NewsDetail />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/notice-detail" element={<NoticeDetail />} />

              <Route path="/videos" element={<Videos />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/member-timeline" element={<MemberTimeline />} />
              <Route path="/timeline" element={<OrganizationTimeline />} />
            </Route>
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
