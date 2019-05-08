export interface IndexedList<T> {
    [key: string]: T;
}
export declare const renderCalendarWidget: (startYear?: number, startMonth?: number, container?: string, translations?: IndexedList<string | string[]>) => void;
export default renderCalendarWidget;
