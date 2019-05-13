import { EventEmitter } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class TimePickerButtonComponent {
    locale: NzCalendarI18nInterface;
    timePickerDisabled: boolean;
    showTimePicker: boolean;
    readonly showTimePickerChange: EventEmitter<boolean>;
    prefixCls: string;
    onClick(): void;
}
