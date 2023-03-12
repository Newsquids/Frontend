export interface GoogleCallback {
  code: string | string[];
}

export interface GoogleCallbackResponse {
  access: string;
  refresh: string;
}