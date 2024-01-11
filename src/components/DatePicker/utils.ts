import type { CalendarDate } from './types';

export class Calendar {
  today: Date;
  current: Date;
  count: number;
  constructor(options: Partial<{ today: Date; current: Date; count: number }> = {}) {
    const { today = new Date(), current = new Date(), count = 35 } = options;
    this.today = today;
    this.current = current;
    this.count = count;
  }

  get firstDate(): Date {
    return new Date(this.current.getFullYear(), this.current.getMonth(), 1);
  }

  get firstMonthDate(): Date {
    return new Date(
      this.firstDate.getFullYear(),
      this.firstDate.getMonth(),
      this.firstDate.getDate() - this.firstDate.getDay(),
    );
  }

  get format(): string {
    return `${this.current.getFullYear()} 年 ${String(this.current.getMonth() + 1).padStart(
      2,
      '0',
    )} 月`;
  }

  get monthDate(): { date: number; other: boolean }[] {
    return [...new Array(this.count)].map((_, i) => {
      const _date = this.firstMonthDate;
      return {
        date: _date.setDate(_date.getDate() + i),
        other: _date.getMonth() !== this.current.getMonth(),
      };
    });
  }

  preMonth(): void {
    this.current.setMonth(this.current.getMonth() - 1);
  }

  nextMonth(): void {
    this.current.setMonth(this.current.getMonth() + 1);
  }
}
