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

interface Log{
    timestamp: number,
    message: string
}

class Logger {
  logs: Log[] = [];

  addLog(message: string) {
    this.logs.push({ timestamp: Date.now(), message });
  }

   clearLogs():void {
    this.logs = [];
  }
}
