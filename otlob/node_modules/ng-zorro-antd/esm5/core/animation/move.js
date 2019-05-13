/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { AnimationDuration } from './animation-consts';
/** @type {?} */
export var moveUpMotion = trigger('moveUpMotion', [
    transition('* => enter', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    transition('* => leave', [
        style({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        animate("" + AnimationDuration.BASE, style({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbImFuaW1hdGlvbi9tb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUE0QixNQUFNLHFCQUFxQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxNQUFNLEtBQU8sWUFBWSxHQUE2QixPQUFPLENBQUMsY0FBYyxFQUFFO0lBQzVFLFVBQVUsQ0FBQyxZQUFZLEVBQUU7UUFDdkIsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUM7UUFDRixPQUFPLENBQ0wsS0FBRyxpQkFBaUIsQ0FBQyxJQUFNLEVBQzNCLEtBQUssQ0FBQztZQUNKLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFNBQVMsRUFBRSxnQkFBZ0I7WUFDM0IsT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQ0g7S0FDRixDQUFDO0lBQ0YsVUFBVSxDQUFDLFlBQVksRUFBRTtRQUN2QixLQUFLLENBQUM7WUFDSixlQUFlLEVBQUUsS0FBSztZQUN0QixTQUFTLEVBQUUsZ0JBQWdCO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQztRQUNGLE9BQU8sQ0FDTCxLQUFHLGlCQUFpQixDQUFDLElBQU0sRUFDM0IsS0FBSyxDQUFDO1lBQ0osZUFBZSxFQUFFLEtBQUs7WUFDdEIsU0FBUyxFQUFFLG1CQUFtQjtZQUM5QixPQUFPLEVBQUUsQ0FBQztTQUNYLENBQUMsQ0FDSDtLQUNGLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRHVyYXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbi1jb25zdHMnO1xuXG5leHBvcnQgY29uc3QgbW92ZVVwTW90aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdtb3ZlVXBNb3Rpb24nLCBbXG4gIHRyYW5zaXRpb24oJyogPT4gZW50ZXInLCBbXG4gICAgc3R5bGUoe1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCAwJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KSxcbiAgICBhbmltYXRlKFxuICAgICAgYCR7QW5pbWF0aW9uRHVyYXRpb24uQkFTRX1gLFxuICAgICAgc3R5bGUoe1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDAlKScsXG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0pXG4gICAgKVxuICBdKSxcbiAgdHJhbnNpdGlvbignKiA9PiBsZWF2ZScsIFtcbiAgICBzdHlsZSh7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwIDAnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwJSknLFxuICAgICAgb3BhY2l0eTogMVxuICAgIH0pLFxuICAgIGFuaW1hdGUoXG4gICAgICBgJHtBbmltYXRpb25EdXJhdGlvbi5CQVNFfWAsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAgMCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTEwMCUpJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSlcbiAgICApXG4gIF0pXG5dKTtcbiJdfQ==