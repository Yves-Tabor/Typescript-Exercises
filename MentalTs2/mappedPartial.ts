// 1. Task: Create a mapped type `PartialWithExceptions<T, K>` such that all properties in `T` are optional **except** those in union `K`, which stay required.
    
//     Example:
    
//     interface Config {
//       host: string;
//       port: number;
//       timeout: number;
//     }
//     type PartialConfig = PartialWithExceptions<Config, 'host'>;
//     // host must be present; port and timeout are optional
    
interface Config {
      host: string;
      port: number;
      timeout: number;
    }
type PartialWithExceptions<T, K> ={
    [K in keyof T]?: T[K]
}
    
type PartialConfig = PartialWithExceptions<Config, 'host'>;
const obj: PartialConfig = {
    port: 443,
    timeout: 1000
}

console.log(obj)