/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, Optional, SkipSelf } from '@angular/core';
/** @type {?} */
export var NZ_LOGGER_STATE = new InjectionToken('nz-logger-state');
// Whether print the log
var LoggerService = /** @class */ (function () {
    function LoggerService(_loggerState) {
        this._loggerState = _loggerState;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.log = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.warn = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.warn.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.error = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.error.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.info = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(args));
        }
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    LoggerService.prototype.debug = 
    // tslint:disable-next-line:no-any
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._loggerState) {
            console.log.apply(console, tslib_1.__spread(['[NG-ZORRO-DEBUG]'], args));
        }
    };
    LoggerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LoggerService.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: Inject, args: [NZ_LOGGER_STATE,] }] }
    ]; };
    return LoggerService;
}());
export { LoggerService };
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
export var LOGGER_SERVICE_PROVIDER = {
    provide: LoggerService,
    useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
    deps: [[new Optional(), new SkipSelf(), LoggerService], NZ_LOGGER_STATE]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJsb2dnZXIvbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFakcsTUFBTSxLQUFPLGVBQWUsR0FBRyxJQUFJLGNBQWMsQ0FBVSxpQkFBaUIsQ0FBQzs7QUFFN0U7SUFFRSx1QkFBNkMsWUFBcUI7UUFBckIsaUJBQVksR0FBWixZQUFZLENBQVM7SUFBRyxDQUFDO0lBRXRFLGtDQUFrQzs7Ozs7O0lBQ2xDLDJCQUFHOzs7Ozs7SUFBSDtRQUFJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2hCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sbUJBQVEsSUFBSSxHQUFFO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLDRCQUFJOzs7Ozs7SUFBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsSUFBSSxHQUFFO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLDZCQUFLOzs7Ozs7SUFBTDtRQUFNLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsS0FBSyxPQUFiLE9BQU8sbUJBQVUsSUFBSSxHQUFFO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLDRCQUFJOzs7Ozs7SUFBSjtRQUFLLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sbUJBQVEsSUFBSSxHQUFFO1NBQ3RCO0lBQ0gsQ0FBQztJQUVELGtDQUFrQzs7Ozs7O0lBQ2xDLDZCQUFLOzs7Ozs7SUFBTDtRQUFNLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sb0JBQUssa0JBQWtCLEdBQUssSUFBSSxHQUFFO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBckNGLFVBQVU7Ozs7OENBRUksTUFBTSxTQUFDLGVBQWU7O0lBb0NyQyxvQkFBQztDQUFBLEFBdENELElBc0NDO1NBckNZLGFBQWE7Ozs7OztJQUNaLHFDQUFzRDs7Ozs7OztBQXNDcEUsTUFBTSxVQUFVLCtCQUErQixDQUFDLEtBQW9CLEVBQUUsV0FBb0I7SUFDeEYsT0FBTyxLQUFLLElBQUksSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsQ0FBQzs7QUFFRCxNQUFNLEtBQU8sdUJBQXVCLEdBQWE7SUFDL0MsT0FBTyxFQUFFLGFBQWE7SUFDdEIsVUFBVSxFQUFFLCtCQUErQjtJQUMzQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsRUFBRSxlQUFlLENBQUM7Q0FDekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUHJvdmlkZXIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBOWl9MT0dHRVJfU1RBVEUgPSBuZXcgSW5qZWN0aW9uVG9rZW48Ym9vbGVhbj4oJ256LWxvZ2dlci1zdGF0ZScpOyAvLyBXaGV0aGVyIHByaW50IHRoZSBsb2dcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2dlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KE5aX0xPR0dFUl9TVEFURSkgcHJpdmF0ZSBfbG9nZ2VyU3RhdGU6IGJvb2xlYW4pIHt9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBsb2coLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd2FybiguLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9sb2dnZXJTdGF0ZSkge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZXJyb3IoLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fbG9nZ2VyU3RhdGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBpbmZvKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2xvZ2dlclN0YXRlKSB7XG4gICAgICBjb25zb2xlLmxvZygnW05HLVpPUlJPLURFQlVHXScsIC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShleGlzdDogTG9nZ2VyU2VydmljZSwgbG9nZ2VyU3RhdGU6IGJvb2xlYW4pOiBMb2dnZXJTZXJ2aWNlIHtcbiAgcmV0dXJuIGV4aXN0IHx8IG5ldyBMb2dnZXJTZXJ2aWNlKGxvZ2dlclN0YXRlKTtcbn1cblxuZXhwb3J0IGNvbnN0IExPR0dFUl9TRVJWSUNFX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTG9nZ2VyU2VydmljZSxcbiAgdXNlRmFjdG9yeTogTE9HR0VSX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIExvZ2dlclNlcnZpY2VdLCBOWl9MT0dHRVJfU1RBVEVdXG59O1xuIl19