import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private getCurrentDate(): Date {
    return new Date();
  }

  getTime(): string {
    const now = this.getCurrentDate();
    return now.toLocaleTimeString(); // e.g., 10:30:45 AM
  }

  // Method 2: Get current date as string
  getDate(): string {
    const now = this.getCurrentDate();
    return now.toLocaleDateString(); // e.g., 10/3/2025
  }

  // Method 3: Get full timestamp
  getFullTimestamp(): string {
    const now = this.getCurrentDate();
    return now.toISOString(); // e.g., 2025-10-03T14:30:45.123Z
  }
}
