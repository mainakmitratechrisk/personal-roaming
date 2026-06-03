export interface AccountLoginResponse {
  status: boolean;
  status_code: number;
  datalist: {
    userID: string;
    company_name: string;
    company_Persons_name: string | null;
    country: string;
    division: string;
    district: string;
    contact_no: string;
    address: string;
    currency: string;
    emailID: string;
    balance: string;
    credit_balance: string;
    loginString: string;
    Authorization: string; // 👈 JWT token
  };
}


export interface AccountLoginRequest {
  bsUsername: string;
  password: string;
}