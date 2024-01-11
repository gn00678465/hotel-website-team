import type { CalendarDate } from './types';
import dayjs from 'dayjs';

/**
 * 日曆時間計算
 */
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

  get monthDate(): CalendarDate[] {
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

/**
 * 格式化日期
 * @param date 須帶入 Date 物件或 Milliseconds 時間格式
 * @param format 輸出的時間格式
 * @returns {string}
 */
export function formatDate(date: dayjs.ConfigType, format: string): string {
  return dayjs(date).format(format);
}

/**
 * 格式化日期(curry)
 * @param format
 * @returns
 */
export const curryFormatDate = (format: string) => (date: dayjs.ConfigType) =>
  dayjs(date).format(format);

/**
 * 計算日期差距
 * @param startDate 須帶入 Date 物件或 Milliseconds 時間格式
 * @param endDate 須帶入 Date 物件或 Milliseconds 時間格式
 * @param unit 單位, day, week, ...
 * @returns {number} 日期差距
 */
export function diffDate(
  startDate: dayjs.ConfigType,
  endDate: dayjs.ConfigType,
  unit: dayjs.UnitType,
): number {
  return dayjs(startDate).diff(dayjs(endDate), unit, false);
}

/**
 * 日期小於今天
 * @param date 須帶入 Date 物件或 Milliseconds 時間格式
 * @returns {boolean}
 */
export function isSmallThenToday(date: dayjs.ConfigType): boolean {
  return dayjs().isAfter(dayjs(date));
}
