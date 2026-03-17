import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ApplyNowPage from './pages/ApplyNow/ApplyNowPage.jsx'
import ContactUsPage from './pages/ContactUs/ContactUsPage.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import FaqPage from './pages/FAQ/FaqPage.jsx'
import InsuranceDealsPage from './pages/InsuranceDeals/InsuranceDealsPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage.jsx'
import TermsAndConditionsPage from './pages/TermsAndConditions/TermsAndConditionsPage.jsx'
import ProductPage from './pages/Product/ProductPage.jsx'
import WhoAreWePage from './pages/WhoAreWe/WhoAreWePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply-now" element={<ApplyNowPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/insurance-deals" element={<InsuranceDealsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/who-are-we" element={<WhoAreWePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
