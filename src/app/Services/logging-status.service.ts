export class LoggingStatusService {
    logToConsole(status: string): void{
        console.log('A server status changed, new status: ' + status);
    }
}