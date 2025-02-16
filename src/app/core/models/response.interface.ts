// export interface Response{
//   success: boolean;
//   message: string;
//   statusCode: number;
//   token: string;
//   error: string;
// }

// export interface ResponseWithData<T> extends Response {
//   data: T;
// }

export interface Response {
  data:       Data;
  success:    boolean;
  message:    string;
  statusCode: number;
  token:      string;
  error:      string;
}

export interface Data {
  result: Result[];
  count:  number;
}

export interface Result {
  code:        string;
  description: string;
  unitPrice:   number;
  stock:       number;
}
