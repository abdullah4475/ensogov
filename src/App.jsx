import "./App.css";
import { CreateAccount } from "./components/auth/CreateAccount";
import { Login } from "./components/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThankYou } from "./components/auth/ThankYou";
import { EmailVerified } from "./components/auth/EmailVerified";
import { ForgotPassword } from "./components/auth/ForgotPassword";
import { ResetPassword } from "./components/auth/ResetPassword";
import { TwoStepAuth } from "./components/auth/TwoStepAuth";
import { TwoStepAuthOTP } from "./components/auth/TwoStepAuthOTP";
import CompleteProfileWithTabs from "./components/auth/CompleteProfileWithTabs";
import { CompleteProfilePersonalInfo } from "./components/auth/CompleteProfilePersonalInfo";
import { CompleteProfileCompanyInfo } from "./components/auth/CompleteProfileCompanyInfo";
import { CompleteProfileContactPerson } from "./components/auth/CompleteProfileContactPerson";
import { CompleteProfileDescription } from "./components/auth/CompleteProfileDescription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompleteProfilePersonalInfo />} />
        <Route
          path="/complete-profile-company-info"
          element={<CompleteProfileCompanyInfo />}
        />
        <Route
          path="/complete-profile-contact-person"
          element={<CompleteProfileContactPerson />}
        />
        <Route
          path="/complete-profile-description"
          element={<CompleteProfileDescription />}
        />
        <Route
          path="/complete-profile-person-info"
          element={<CompleteProfilePersonalInfo />}
        />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
