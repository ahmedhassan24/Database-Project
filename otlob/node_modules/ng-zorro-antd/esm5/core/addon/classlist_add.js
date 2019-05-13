/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var NzClassListAddDirective = /** @class */ (function () {
    function NzClassListAddDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    Object.defineProperty(NzClassListAddDirective.prototype, "nzClassListAdd", {
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var _this = this;
            this.classList.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, name);
            }));
            list.forEach((/**
             * @param {?} name
             * @return {?}
             */
            function (name) {
                _this.renderer.addClass(_this.elementRef.nativeElement, name);
            }));
            this.classList = list;
        },
        enumerable: true,
        configurable: true
    });
    NzClassListAddDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzClassListAdd]',
                    exportAs: 'nzClassListAdd'
                },] }
    ];
    /** @nocollapse */
    NzClassListAddDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzClassListAddDirective.propDecorators = {
        nzClassListAdd: [{ type: Input }]
    };
    return NzClassListAddDirective;
}());
export { NzClassListAddDirective };
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFkZG9uL2NsYXNzbGlzdF9hZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEU7SUFrQkUsaUNBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFidkUsY0FBUyxHQUFhLEVBQUUsQ0FBQztJQWFpRCxDQUFDO0lBWDNFLHNCQUNJLG1EQUFjOzs7OztRQURsQixVQUNtQixJQUFjO1lBRGpDLGlCQVNDO1lBUEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRSxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNmLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlELENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7Ozs7Z0JBTG1CLFVBQVU7Z0JBQVMsU0FBUzs7O2lDQVM3QyxLQUFLOztJQVlSLDhCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FmWSx1QkFBdUI7OztJQUNsQyw0Q0FBeUI7Ozs7O0lBYWIsNkNBQThCOzs7OztJQUFFLDJDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnpDbGFzc0xpc3RBZGRdJyxcbiAgZXhwb3J0QXM6ICduekNsYXNzTGlzdEFkZCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDbGFzc0xpc3RBZGREaXJlY3RpdmUge1xuICBjbGFzc0xpc3Q6IHN0cmluZ1tdID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2xhc3NMaXN0QWRkKGxpc3Q6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0pO1xuICAgIGxpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xhc3NMaXN0ID0gbGlzdDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxufVxuIl19