// Public routes
export const LINKS = "/links";
export const PLANS = "/plans";
export const FAQS = "/faq/questions";
export const LOGIN = "/login";
export const LOGOUT = "/logout";
export const LOGOUT_ALL = "/logout-all";
export const COUPON = "/verify-coupon";
export const UPDATE_PASSWORD = "/update-password";
export const UPDATE_PROFILE = "/update-profile";
export const INVOICES = "/invoices";
export const VERIFY_EMAIL = "/check-email-verification";
export const VERIFY_OTP = "/verify-otp";
export const SET_PASSWORD = "/set-password";
export const GET_OTP = "/get-otp";
export const DEVICE_LIST = "/device-list";
export const USER_PROFILE = "/user-profile";
export const CHECKOUT = "/checkout";
export const PAYMENT = "/payment";
export const DASHBOARD = "/dashboard";
export const ALL_TICKETS = "/list-all-tickets";
export const BLOGS = "/blog/articles";
export const DELETE_ACCOUNT = "/delete";
export const LOGOUT_DEVICE = "/logout-device/";
export const ALL_PAYMENTS_METHODS = "/list-all-payment-methods";
export const DEFAULT_PAYMENT_METHOD = "/mark-payment-method-default";
export const DELETE_PAYMENT_METHOD = "/remove-payment-method";
export const ADD_PAYMENT_METHOD = "/add-payment-method";
export const LOGOUT_ALL_DEVICES = "/logout-all-devices";

// Dynamic invoice route
export const INVOICE = (invoiceId: string) => `/invoice/${invoiceId}`;

// Support-related routes
export const SUPPORT = "/support";
export const TICKETS = `${SUPPORT}/tickets/`;

// Dynamic ticket route
export const TICKET = (ticketId: string) => `${SUPPORT}/tickets/${ticketId}`;

// Customer-related routes
export const CUSTOMER = "/customer";

// Transaction history route
export const TRANSACTION_HISTORY = `${CUSTOMER}/transaction-history`;
