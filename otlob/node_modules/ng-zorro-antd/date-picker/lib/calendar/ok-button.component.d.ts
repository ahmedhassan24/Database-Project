import { EventEmitter } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class OkButtonComponent {
    locale: NzCalendarI18nInterface;
    okDisabled: boolean;
    readonly clickOk: EventEmitter<void>;
    prefixCls: string;
}
