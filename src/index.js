import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { registerLicense } from "@syncfusion/ej2-base";
// Registering Syncfusion license key
registerLicense(
  // Essential Studio 7-Day License Key
  "@32302e342e30Il3UR9AHVXOA0rfTnSfxWbrAyVPGq7JNI/TT1MMpoiY=;Mgo DSMBaFt/QHRqVVhkVFpGaV1GQmFJfFBmRGJTe1l6dVJWACFaRnZdQV1hSHlRdUFkWHhZc3dW;Mgo DSMBMAY9C3t2VVhkQlFacldJX3xLekx0RWFab19xflFBal1WVBYiSV9jS31TdERkW3xad3VSQWNYUg==;Mgo DSMBPh8sVXJ0S0J XE9AflRAQmFNYVF2R2BJfl96cFJMYVtBJAtUQF1hSn5Rd0JhWntZcXNSRWZf;@32302e342e30agKzpCjwoDjLp5GdkLfaNUo4eFa0 xjMPrTuw1bHbKA=;NRAiBiAaIQQuGjN/V0Z WE9EaFtKVmFWfFdpR2NbfE5xdV9CZ1ZQQ2Y/P1ZhSXxQdkdiXn1ddHNUQWdYUUc=;NT8mJyc2IWhhY31nfWN9Z2toYXxhZ3xhY2Fgc2JiaWdkaWJkcwMeaCcmNTUmPCE9Mj0yEzQ Mjo/fTA8Pg==;ORg4AjUWIQA/Gnt2VVhkQlFacldJX3xLekx0RWFab19xflFBal1WVBYiSV9jS31TdERkW3xad3VSQWReUg==;@32302e342e30XsUiluytKJu/zTRkg7SwLjbpDwUnho iCi ozXZUsR4=;@32302e342e30OkyCfiXtyNgZVtHS3DVI2HAZ9hgpO 7R0ADR2q5Hzqs=;@32302e342e30USRGmfQe iM5RhSO1CjQ8eztnKr0EbS6yAMXHPxfkbI=;@32302e342e30M 7j3 wTsXUr4VJUAUQ4j/8szfopVN5ZX2Tko9PDNVE=;@32302e342e30Il3UR9AHVXOA0rfTnSfxWbrAyVPGq7JNI/TT1MMpoiY="
);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
