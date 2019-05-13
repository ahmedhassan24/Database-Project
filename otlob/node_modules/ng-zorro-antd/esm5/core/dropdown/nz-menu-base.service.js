/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { merge, BehaviorSubject, Subject } from 'rxjs';
var NzMenuBaseService = /** @class */ (function () {
    function NzMenuBaseService() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.check$ = merge(this.theme$, this.mode$, this.inlineIndent$);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    NzMenuBaseService.prototype.onMenuItemClick = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.menuItemClick$.next(menu);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzMenuBaseService.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.mode$.next(mode);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NzMenuBaseService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        this.theme$.next(theme);
    };
    /**
     * @param {?} indent
     * @return {?}
     */
    NzMenuBaseService.prototype.setInlineIndent = /**
     * @param {?} indent
     * @return {?}
     */
    function (indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    };
    NzMenuBaseService.decorators = [
        { type: Injectable }
    ];
    return NzMenuBaseService;
}());
export { NzMenuBaseService };
if (false) {
    /** @type {?} */
    NzMenuBaseService.prototype.isInDropDown;
    /** @type {?} */
    NzMenuBaseService.prototype.menuItemClick$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme$;
    /** @type {?} */
    NzMenuBaseService.prototype.mode$;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent$;
    /** @type {?} */
    NzMenuBaseService.prototype.check$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme;
    /** @type {?} */
    NzMenuBaseService.prototype.mode;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent;
    /** @type {?} */
    NzMenuBaseService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdkQ7SUFBQTtRQUdFLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2Qjs7UUFDbEUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFxQixVQUFVLENBQUMsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFdBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1RCxVQUFLLEdBQXFCLE9BQU8sQ0FBQztRQUNsQyxTQUFJLEdBQXVCLFVBQVUsQ0FBQztRQUN0QyxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7SUFxQmxELENBQUM7SUFuQkMsa0NBQWtDOzs7Ozs7SUFDbEMsMkNBQWU7Ozs7OztJQUFmLFVBQWdCLElBQVM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsSUFBd0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBUTs7OztJQUFSLFVBQVMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwyQ0FBZTs7OztJQUFmLFVBQWdCLE1BQWM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Z0JBL0JGLFVBQVU7O0lBZ0NYLHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksaUJBQWlCOzs7SUFDNUIseUNBQXNCOztJQUN0QiwyQ0FBb0M7O0lBQ3BDLG1DQUF1Qjs7SUFDdkIsa0NBQTREOztJQUM1RCwwQ0FBZ0Q7O0lBQ2hELG1DQUE0RDs7SUFDNUQsa0NBQWtDOztJQUNsQyxpQ0FBc0M7O0lBQ3RDLHlDQUFrQjs7SUFDbEIsc0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOek1lbnVCYXNlU2VydmljZSB7XG4gIGlzSW5Ecm9wRG93bjogYm9vbGVhbjtcbiAgbWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gIHRoZW1lJCA9IG5ldyBTdWJqZWN0KCk7XG4gIG1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekRpcmVjdGlvblZISVR5cGU+KCd2ZXJ0aWNhbCcpO1xuICBpbmxpbmVJbmRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDI0KTtcbiAgY2hlY2skID0gbWVyZ2UodGhpcy50aGVtZSQsIHRoaXMubW9kZSQsIHRoaXMuaW5saW5lSW5kZW50JCk7XG4gIHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnID0gJ2xpZ2h0JztcbiAgbW9kZTogTnpEaXJlY3Rpb25WSElUeXBlID0gJ3ZlcnRpY2FsJztcbiAgaW5saW5lSW5kZW50ID0gMjQ7XG4gIG1lbnVPcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcbiAgb25NZW51SXRlbUNsaWNrKG1lbnU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogTnpEaXJlY3Rpb25WSElUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlID0gbW9kZTtcbiAgICB0aGlzLm1vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyk6IHZvaWQge1xuICAgIHRoaXMudGhlbWUgPSB0aGVtZTtcbiAgICB0aGlzLnRoZW1lJC5uZXh0KHRoZW1lKTtcbiAgfVxuXG4gIHNldElubGluZUluZGVudChpbmRlbnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5saW5lSW5kZW50ID0gaW5kZW50O1xuICAgIHRoaXMuaW5saW5lSW5kZW50JC5uZXh0KGluZGVudCk7XG4gIH1cbn1cbiJdfQ==