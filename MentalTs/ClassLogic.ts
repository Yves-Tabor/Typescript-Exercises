// 1. Fix all type errors without changing the logic

// class Logger {
//   logs = [];

//   addLog(message: string) {
//     this.logs.push({ timestamp: Date.now(), message });
//   }

//   static clearLogs() {
//     this.logs = [];
//   }
// }

// interface Log{
//     timestamp: number,
//     message: string
// }

// class Logger {
//   logs: Log[] = [];

//   addLog(message: string) {
//     this.logs.push({ timestamp: Date.now(), message });
//   }

//    clearLogs():void {
//     this.logs = [];
//   }
// }

interface Log {
  timestamp: number;
  message: string;
}

class Logger {
  static logs: Log[] = [];

  static addLog(message: string): void {
    this.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs(): void {
    this.logs = [];
  }
}

Logger.addLog("Hello");
Logger.addLog("World");

console.log(Logger.logs);

Logger.clearLogs();
console.log(Logger.logs);