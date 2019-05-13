/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLE1BQU0sT0FBZ0Isc0JBQXNCOzs7Ozs7SUFzQjFDLFlBQ0UsaUJBQThDLEVBQ3BDLEdBQXNCLEVBQ3RCLFFBQW1CO1FBRG5CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFFN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7Ozs7O0lBbEJELElBQWMsUUFBUTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFBYyxPQUFPO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxJQUFjLE1BQU07UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBY0Qsb0JBQW9CLENBQUMsUUFBc0Q7OztjQUVuRSxRQUFRLEdBQUcsbUJBQUEsSUFBSSxDQUFDLGlCQUFpQixFQUFDOztjQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQVdELFFBQVEsQ0FBQyxPQUFzQixJQUFTLENBQUM7Ozs7O0lBS3pDLE9BQU8sS0FBVSxDQUFDOzs7Ozs7O0lBRVIsbUJBQW1CLENBQUMsQ0FBUyxFQUFFLENBQVM7O2NBQzFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7UUFDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3BFLENBQUM7Q0FDRjs7Ozs7O0lBaEVDLG1EQUFnRTs7Ozs7SUFDaEUsMENBQWlEOzs7OztJQUNqRCw2Q0FBbUM7Ozs7O0lBQ25DLDhDQUFvQzs7Ozs7SUFDcEMsd0NBQXlCOzs7OztJQUN6QiwyQ0FBNEI7Ozs7O0lBQzVCLDRDQUE2Qjs7Ozs7SUFnQjNCLHFDQUFnQzs7Ozs7SUFDaEMsMENBQTZCOzs7Ozs7OztJQXdCL0IsZ0VBQTBEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRnJvbVRvSW50ZXJmYWNlLCBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsIFBvaW50ZXJWZWN0b3IgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1kZWZpbml0aW9ucyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcbiAgLy8gUHJvcGVydGllcyB0aGF0IHN0cmF0ZWdpZXMgbWF5IHdhbnQgdG8gdXNlLlxuICBwcm90ZWN0ZWQgY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSB8IG51bGw7XG4gIHByb3RlY3RlZCBjb250ZW50czogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmVbXTtcbiAgcHJvdGVjdGVkIHNsaWNrTGlzdEVsOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIHNsaWNrVHJhY2tFbDogSFRNTEVsZW1lbnQ7XG4gIHByb3RlY3RlZCBsZW5ndGg6IG51bWJlcjtcbiAgcHJvdGVjdGVkIHVuaXRXaWR0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdW5pdEhlaWdodDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBnZXQgbWF4SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBmaXJzdEVsKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1swXS5lbDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbGFzdEVsKCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50c1t0aGlzLm1heEluZGV4XS5lbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcm91c2VsQ29tcG9uZW50OiBOekNhcm91c2VsQ29tcG9uZW50QXNTb3VyY2UsXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5jYXJvdXNlbENvbXBvbmVudCA9IGNhcm91c2VsQ29tcG9uZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgZHJhZ2dpbmcgc2VxdWVuY2VzLlxuICAgKiBAcGFyYW0gY29udGVudHNcbiAgICovXG4gIHdpdGhDYXJvdXNlbENvbnRlbnRzKGNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+IHwgbnVsbCk6IHZvaWQge1xuICAgIC8vIFRPRE86IGNhcm91c2VsIGFuZCBpdHMgY29udGVudHMgc2hvdWxkIGJlIHNlcGFyYXRlZC5cbiAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhO1xuICAgIGNvbnN0IHJlY3QgPSBjYXJvdXNlbC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLnNsaWNrTGlzdEVsID0gY2Fyb3VzZWwuc2xpY2tMaXN0RWw7XG4gICAgdGhpcy5zbGlja1RyYWNrRWwgPSBjYXJvdXNlbC5zbGlja1RyYWNrRWw7XG4gICAgdGhpcy51bml0V2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMudW5pdEhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgIHRoaXMuY29udGVudHMgPSBjb250ZW50cyA/IGNvbnRlbnRzLnRvQXJyYXkoKSA6IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5jb250ZW50cy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciB0cmFuc2l0aW9uLlxuICAgKi9cbiAgYWJzdHJhY3Qgc3dpdGNoKF9mOiBudW1iZXIsIF90OiBudW1iZXIpOiBPYnNlcnZhYmxlPHZvaWQ+O1xuXG4gIC8qKlxuICAgKiBXaGVuIHVzZXIgZHJhZyB0aGUgY2Fyb3VzZWwgY29tcG9uZW50LlxuICAgKiBAb3B0aW9uYWxcbiAgICovXG4gIGRyYWdnaW5nKF92ZWN0b3I6IFBvaW50ZXJWZWN0b3IpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBzY3JvbGwgc3RyYXRlZ3kuXG4gICAqL1xuICBkaXNwb3NlKCk6IHZvaWQge31cblxuICBwcm90ZWN0ZWQgZ2V0RnJvbVRvSW5Cb3VuZGFyeShmOiBudW1iZXIsIHQ6IG51bWJlcik6IEZyb21Ub0ludGVyZmFjZSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5tYXhJbmRleCArIDE7XG4gICAgcmV0dXJuIHsgZnJvbTogKGYgKyBsZW5ndGgpICUgbGVuZ3RoLCB0bzogKHQgKyBsZW5ndGgpICUgbGVuZ3RoIH07XG4gIH1cbn1cbiJdfQ==