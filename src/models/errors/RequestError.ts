export class RequestError extends Error {
   constructor(message: string) {
      super("Request Error : " + message);
   }
}