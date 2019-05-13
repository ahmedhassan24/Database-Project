/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
NzCarouselBaseStrategy = /** @class */ (function () {
    function NzCarouselBaseStrategy(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "maxIndex", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "firstEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[0].el;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselBaseStrategy.prototype, "lastEl", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.contents[this.maxIndex].el;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize dragging sequences.
     * @param contents
     */
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.withCarouselContents = /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        var carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        var rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    };
    /**
     * When user drag the carousel component.
     * @optional
     */
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dragging = /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    function (_vector) { };
    /**
     * Destroy a scroll strategy.
     */
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.dispose = /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    function () { };
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.getFromToInBoundary = /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    function (f, t) {
        /** @type {?} */
        var length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    };
    return NzCarouselBaseStrategy;
}());
/**
 * @abstract
 */
export { NzCarouselBaseStrategy };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOzs7O0lBc0JFLGdDQUNFLGlCQUE4QyxFQUNwQyxHQUFzQixFQUN0QixRQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxDQUFDO0lBbEJELHNCQUFjLDRDQUFROzs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBYywyQ0FBTzs7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQWMsMENBQU07Ozs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFVRDs7O09BR0c7Ozs7OztJQUNILHFEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsUUFBc0Q7OztZQUVuRSxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDOztZQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQU9EOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFROzs7Ozs7SUFBUixVQUFTLE9BQXNCLElBQVMsQ0FBQztJQUV6Qzs7T0FFRzs7Ozs7SUFDSCx3Q0FBTzs7OztJQUFQLGNBQWlCLENBQUM7Ozs7Ozs7SUFFUixvREFBbUI7Ozs7OztJQUE3QixVQUE4QixDQUFTLEVBQUUsQ0FBUzs7WUFDMUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUNoQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDcEUsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQzs7Ozs7Ozs7OztJQWhFQyxtREFBZ0U7Ozs7O0lBQ2hFLDBDQUFpRDs7Ozs7SUFDakQsNkNBQW1DOzs7OztJQUNuQyw4Q0FBb0M7Ozs7O0lBQ3BDLHdDQUF5Qjs7Ozs7SUFDekIsMkNBQTRCOzs7OztJQUM1Qiw0Q0FBNkI7Ozs7O0lBZ0IzQixxQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUE2Qjs7Ozs7Ozs7SUF3Qi9CLGdFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZyb21Ub0ludGVyZmFjZSwgTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlLCBQb2ludGVyVmVjdG9yIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtZGVmaW5pdGlvbnMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTnpDYXJvdXNlbEJhc2VTdHJhdGVneSB7XG4gIC8vIFByb3BlcnRpZXMgdGhhdCBzdHJhdGVnaWVzIG1heSB3YW50IHRvIHVzZS5cbiAgcHJvdGVjdGVkIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UgfCBudWxsO1xuICBwcm90ZWN0ZWQgY29udGVudHM6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlW107XG4gIHByb3RlY3RlZCBzbGlja0xpc3RFbDogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBzbGlja1RyYWNrRWw6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgbGVuZ3RoOiBudW1iZXI7XG4gIHByb3RlY3RlZCB1bml0V2lkdGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHVuaXRIZWlnaHQ6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgZ2V0IG1heEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmlyc3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbMF0uZWw7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGxhc3RFbCgpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudHNbdGhpcy5tYXhJbmRleF0uZWw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlLFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQgPSBjYXJvdXNlbENvbXBvbmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGRyYWdnaW5nIHNlcXVlbmNlcy5cbiAgICogQHBhcmFtIGNvbnRlbnRzXG4gICAqL1xuICB3aXRoQ2Fyb3VzZWxDb250ZW50cyhjb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPiB8IG51bGwpOiB2b2lkIHtcbiAgICAvLyBUT0RPOiBjYXJvdXNlbCBhbmQgaXRzIGNvbnRlbnRzIHNob3VsZCBiZSBzZXBhcmF0ZWQuXG4gICAgY29uc3QgY2Fyb3VzZWwgPSB0aGlzLmNhcm91c2VsQ29tcG9uZW50ITtcbiAgICBjb25zdCByZWN0ID0gY2Fyb3VzZWwuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5zbGlja0xpc3RFbCA9IGNhcm91c2VsLnNsaWNrTGlzdEVsO1xuICAgIHRoaXMuc2xpY2tUcmFja0VsID0gY2Fyb3VzZWwuc2xpY2tUcmFja0VsO1xuICAgIHRoaXMudW5pdFdpZHRoID0gcmVjdC53aWR0aDtcbiAgICB0aGlzLnVuaXRIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICB0aGlzLmNvbnRlbnRzID0gY29udGVudHMgPyBjb250ZW50cy50b0FycmF5KCkgOiBbXTtcbiAgICB0aGlzLmxlbmd0aCA9IHRoaXMuY29udGVudHMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgdHJhbnNpdGlvbi5cbiAgICovXG4gIGFic3RyYWN0IHN3aXRjaChfZjogbnVtYmVyLCBfdDogbnVtYmVyKTogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICAvKipcbiAgICogV2hlbiB1c2VyIGRyYWcgdGhlIGNhcm91c2VsIGNvbXBvbmVudC5cbiAgICogQG9wdGlvbmFsXG4gICAqL1xuICBkcmFnZ2luZyhfdmVjdG9yOiBQb2ludGVyVmVjdG9yKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgc2Nyb2xsIHN0cmF0ZWd5LlxuICAgKi9cbiAgZGlzcG9zZSgpOiB2b2lkIHt9XG5cbiAgcHJvdGVjdGVkIGdldEZyb21Ub0luQm91bmRhcnkoZjogbnVtYmVyLCB0OiBudW1iZXIpOiBGcm9tVG9JbnRlcmZhY2Uge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubWF4SW5kZXggKyAxO1xuICAgIHJldHVybiB7IGZyb206IChmICsgbGVuZ3RoKSAlIGxlbmd0aCwgdG86ICh0ICsgbGVuZ3RoKSAlIGxlbmd0aCB9O1xuICB9XG59XG4iXX0=