/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export const NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
export class LoggerService {
    /**
     * @param {?} _loggerState
     */
    constructor(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    log(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (this._loggerState) {
            console.warn(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    error(...args) {
        if (this._loggerState) {
            console.error(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    info(...args) {
        if (this._loggerState) {
            console.log(...args);
        }
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    debug(...args) {
        if (this._loggerState) {
            console.log('[NG-ZORRO-DEBUG]', ...args);
        }
    }
}
LoggerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LoggerService.ctorParameters = () => [
    { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoggerService.prototype._loggerState;
}
/**
 * @param {?} exist
 * @param {?} loggerState
 * @return {?}
 */
export function LOGGER_SERVICE_PROVIDER_FACTORY(exist, loggerState) {
    return exist || new LoggerService(loggerState);
}
/** @type {?} */
export const LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJsb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVqRyxNQUFNLE9BQU8sZUFBZSxHQUFHLElBQUksY0FBYyxDQUFVLGlCQUFpQixDQUFDOztBQUc3RSxNQUFNLE9BQU8sYUFBYTs7OztJQUN4QixZQUE2QyxZQUFxQjtRQUFyQixpQkFBWSxHQUFaLFlBQVksQ0FBUztJQUFHLENBQUM7Ozs7OztJQUd0RSxHQUFHLENBQUMsR0FBRyxJQUFXO1FBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7Ozs7SUFHRCxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7Ozs7SUFHRCxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFHRCxJQUFJLENBQUMsR0FBRyxJQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7Ozs7SUFHRCxLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7WUFyQ0YsVUFBVTs7OzswQ0FFSSxNQUFNLFNBQUMsZUFBZTs7Ozs7OztJQUF2QixxQ0FBc0Q7Ozs7Ozs7QUFzQ3BFLE1BQU0sVUFBVSwrQkFBK0IsQ0FBQyxLQUFvQixFQUFFLFdBQW9CO0lBQ3hGLE9BQU8sS0FBSyxJQUFJLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7O0FBRUQsTUFBTSxPQUFPLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUUsZUFBZSxDQUFDO0NBQ3pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTlpfTE9HR0VSX1NUQVRFID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KCduei1sb2dnZXItc3RhdGUnKTsgLy8gV2hldGhlciBwcmludCB0aGUgbG9nXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChOWl9MT0dHRVJfU1RBVEUpIHByaXZhdGUgX2xvZ2dlclN0YXRlOiBib29sZWFuKSB7fVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9nKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHdhcm4oLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGVycm9yKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgaW5mbyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBkZWJ1ZyguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgY29uc29sZS5sb2coJ1tORy1aT1JSTy1ERUJVR10nLCAuLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZXhpc3Q6IExvZ2dlclNlcnZpY2UsIGxvZ2dlclN0YXRlOiBib29sZWFuKTogTG9nZ2VyU2VydmljZSB7XG4gIHJldHVybiBleGlzdCB8fCBuZXcgTG9nZ2VyU2VydmljZShsb2dnZXJTdGF0ZSk7XG59XG5cbmV4cG9ydCBjb25zdCBMT0dHRVJfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IExvZ2dlclNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBMb2dnZXJTZXJ2aWNlXSwgTlpfTE9HR0VSX1NUQVRFXVxufTtcbiJdfQ==