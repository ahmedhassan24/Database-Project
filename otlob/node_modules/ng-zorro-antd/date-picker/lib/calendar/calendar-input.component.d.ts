import { EventEmitter, OnInit } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class CalendarInputComponent implements OnInit {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    onInputKeyup(event: Event): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
}
