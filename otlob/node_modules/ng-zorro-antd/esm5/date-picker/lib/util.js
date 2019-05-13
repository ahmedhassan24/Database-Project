/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFHTSxtQkFBbUIsR0FBdUI7SUFDOUMsZUFBZTs7O0lBQWY7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGlCQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0Y7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE0Qjs7UUFDdEUsa0JBQWtCLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxFQUFFLEVBQXNCLENBQUM7SUFDNUcsa0JBQWtCLHdCQUNiLG1CQUFtQixFQUNuQixrQkFBa0IsQ0FDdEIsQ0FBQztJQUNGLE9BQU8sa0JBQWtCLENBQUM7QUFDNUIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWdCLEVBQUUsa0JBQXNDOztRQUN0RixXQUFXLEdBQUcsS0FBSztJQUN2QixJQUFJLEtBQUssRUFBRTs7WUFDSCxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRTs7WUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7O1lBQzVCLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFOztZQUM1QixhQUFhLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFO1FBQzFELElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7Z0JBQ2hDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7WUFDbEUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztvQkFDckMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQzNFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O1FBQ2xFLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO0lBQzdELE9BQU8sbUJBQW1CLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE2QixFQUFFLFlBQTZCO0lBQzFHLElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcblxuY29uc3QgZGVmYXVsdERpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lQ29uZmlnID0ge1xuICBuekRpc2FibGVkSG91cnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgbnpEaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgbnpEaXNhYmxlZFNlY29uZHMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IERpc2FibGVkVGltZUNvbmZpZyB7XG4gIGxldCBkaXNhYmxlZFRpbWVDb25maWcgPSBkaXNhYmxlZFRpbWUgPyBkaXNhYmxlZFRpbWUodmFsdWUgJiYgdmFsdWUubmF0aXZlRGF0ZSkgOiAoe30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnKTtcbiAgZGlzYWJsZWRUaW1lQ29uZmlnID0ge1xuICAgIC4uLmRlZmF1bHREaXNhYmxlZFRpbWUsXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXG4gIH07XG4gIHJldHVybiBkaXNhYmxlZFRpbWVDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZUNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogYm9vbGVhbiB7XG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xuICBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkSG91cnMoKTtcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRNaW51dGVzKGhvdXIpO1xuICAgICAgaWYgKGRpc2FibGVkTWludXRlcy5pbmRleE9mKG1pbnV0ZXMpID09PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XG4gICAgICAgIGludmFsaWRUaW1lID0gZGlzYWJsZWRTZWNvbmRzLmluZGV4T2Yoc2Vjb25kcykgIT09IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiAhaW52YWxpZFRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpc2FibGVkVGltZUNvbmZpZyA9IGdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZSk7XG4gIHJldHVybiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVDb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxvd2VkRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbiwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVkVGltZSkge1xuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=