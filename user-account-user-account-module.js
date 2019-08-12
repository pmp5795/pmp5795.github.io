(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-account-user-account-module"],{

/***/ "./src/app/user/account/components/account-page/styles/user-account-page.styles.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/styles/user-account-page.styles.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-user-account-page {\n  display: block;\n  min-height: calc(100vh - 3.5rem);\n  padding-bottom: 6rem; }\n  app-user-account-page .account-title {\n    padding-top: 2rem;\n    margin-bottom: 2rem;\n    color: #1e1e1e;\n    font-size: 1.8rem;\n    font-weight: 900;\n    letter-spacing: 0.25rem; }\n  app-user-account-page .account-sidebar {\n    border: 2px solid #9e9e9e; }\n  @media (max-width: 991.98px) {\n      app-user-account-page .account-sidebar {\n        margin-bottom: 2rem; } }\n  app-user-account-page .account-sidebar .user-info {\n      padding: 1rem;\n      text-align: center; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer {\n        margin: 0 20% 1rem; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer .user-img-wrapper {\n          border-radius: 50%; }\n  app-user-account-page .account-sidebar .user-info .user-img-outer .user-img-wrapper .user-img {\n            width: 100%;\n            border-radius: 50%; }\n  app-user-account-page .account-sidebar .user-info .user-name {\n        display: block;\n        color: #1e1e1e;\n        font-size: 0.9rem;\n        font-weight: 600; }\n  app-user-account-page .account-sidebar .user-info .user-handle {\n        display: block;\n        color: #9e9e9e;\n        font-size: 0.9rem;\n        font-weight: 500; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item {\n      padding-top: 1.5rem;\n      padding-bottom: 1.5rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item .badge {\n        color: #FFFFFF;\n        background-color: #9e9e9e; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.active {\n        background-color: #9e9e9e;\n        border-color: #9e9e9e;\n        color: #FFFFFF; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.active .badge {\n          color: #9e9e9e;\n          background-color: #FFFFFF; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item.disabled {\n        opacity: 0.6; }\n  app-user-account-page .account-sidebar .user-actions.list-group .list-group-item-action {\n      color: #9e9e9e;\n      font-size: 1.1rem;\n      font-weight: 500;\n      cursor: pointer; }\n  app-user-account-page .no-orders-message {\n    color: #9e9e9e;\n    text-align: center; }\n  app-user-account-page .user-orders .orders-title {\n    background-color: #9013fe;\n    color: #FFFFFF;\n    font-size: 1.4rem;\n    font-weight: 800;\n    letter-spacing: 0.15rem;\n    margin-bottom: 2rem;\n    padding: 1rem; }\n  app-user-account-page .user-orders .orders-table-list {\n    border-collapse: separate;\n    border-spacing: 0 0.75rem; }\n  app-user-account-page .user-orders .orders-table-list caption {\n      color: #9e9e9e;\n      font-size: 0.8rem; }\n  app-user-account-page .user-orders .orders-table-list thead th {\n      border: none;\n      vertical-align: middle;\n      color: #9e9e9e;\n      font-size: 0.9rem;\n      font-weight: 600;\n      padding-bottom: 0;\n      padding-top: 0; }\n  app-user-account-page .user-orders .orders-table-list .order-item {\n      color: #9e9e9e;\n      border-color: #3f3f3f; }\n  app-user-account-page .user-orders .orders-table-list .order-item:hover {\n        color: #3f3f3f;\n        border-color: #1e1e1e; }\n  app-user-account-page .user-orders .orders-table-list .order-item th,\n      app-user-account-page .user-orders .orders-table-list .order-item td {\n        vertical-align: middle;\n        border-bottom-width: 1px;\n        border-bottom-style: solid;\n        border-top-width: 1px;\n        border-top-style: solid;\n        border-color: inherit;\n        padding: 0.75rem; }\n  app-user-account-page .user-orders .orders-table-list .order-item th:first-child,\n        app-user-account-page .user-orders .orders-table-list .order-item td:first-child {\n          border-left-width: 1px;\n          border-left-style: solid; }\n  app-user-account-page .user-orders .orders-table-list .order-item th:last-child,\n        app-user-account-page .user-orders .orders-table-list .order-item td:last-child {\n          border-right-width: 1px;\n          border-right-style: solid; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview {\n        min-width: calc(((0.75rem * 2) + (50px * 3)) - (2rem * 2)); }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-products-list {\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item {\n          width: 50px; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item:not(:first-child) {\n            margin-left: -2rem; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item .product-img-wrapper {\n            border-radius: 50%; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview .order-product-item .product-img-wrapper .product-img {\n              width: 100%;\n              border-radius: 50%; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview.big-order .order-product-item:last-child {\n          position: relative; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-products-preview.big-order .order-product-item:last-child::after {\n            content: \"+\" attr(data-products-length);\n            position: absolute;\n            top: 0;\n            left: 0;\n            background-color: rgba(144, 19, 254, 0.7);\n            color: #FFFFFF;\n            font-weight: 500;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 50px; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn {\n        color: #9013fe;\n        font-size: 1rem;\n        font-weight: 500;\n        letter-spacing: 0.1rem;\n        transition: color .5s;\n        font-size: 0.9rem;\n        letter-spacing: normal; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:hover:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:active:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn.active:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn:focus:not([disabled]), app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn.focus:not([disabled]) {\n          color: #7601dd; }\n  app-user-account-page .user-orders .orders-table-list .order-item .order-item-action-btn[disabled] {\n          cursor: not-allowed;\n          opacity: .5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFx1c2VyXFxhY2NvdW50XFxjb21wb25lbnRzXFxhY2NvdW50LXBhZ2VcXHN0eWxlc1xcdXNlci1hY2NvdW50LXBhZ2Uuc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3VzZXIvYWNjb3VudC9jb21wb25lbnRzL2FjY291bnQtcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9zcmNcXGFwcFxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3VzZXIvYWNjb3VudC9jb21wb25lbnRzL2FjY291bnQtcGFnZS9zdHlsZXMvRTpcXGFuZ3VsYXItc2l0ZS10ZW1wbGF0ZS0xLjEuMC9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyIsInNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy9FOlxcYW5ndWxhci1zaXRlLXRlbXBsYXRlLTEuMS4wL3NyY1xcYXBwXFxzdHlsZXNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWM7RUFDZCxpQ0FBNkM7RUFDN0MscUJBQW9CLEVBd05yQjtFQTNORDtJQU1JLGtCQUFpQjtJQUNqQixvQkFBbUI7SUFDbkIsZUNUVztJRFVYLGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsd0JBQXVCLEVBQ3hCO0VBWkg7SUFlSSwwQkNiVSxFRHVGWDtFRWxCQztNRnZFSjtRQWtCTSxvQkFBbUIsRUF1RXRCLEVBQUE7RUF6Rkg7TUFzQk0sY0FBYTtNQUNiLG1CQUFrQixFQTRCbkI7RUFuREw7UUEwQlEsbUJBQWtCLEVBVW5CO0VBcENQO1VBNkJVLG1CQUFrQixFQU1uQjtFQW5DVDtZQWdDWSxZQUFXO1lBQ1gsbUJBQWtCLEVBQ25CO0VBbENYO1FBdUNRLGVBQWM7UUFDZCxlQ3pDTztRRDBDUCxrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ2pCO0VBM0NQO1FBOENRLGVBQWM7UUFDZCxlQzdDTTtRRDhDTixrQkFBaUI7UUFDakIsaUJBQWdCLEVBQ2pCO0VBbERQO01BdURRLG9CQUFtQjtNQUNuQix1QkFBc0I7TUFDdEIsY0FBYTtNQUNiLCtCQUE4QjtNQUM5QixvQkFBbUIsRUFxQnBCO0VBaEZQO1FBOERVLGVDN0RLO1FEOERMLDBCQzdESSxFRDhETDtFQWhFVDtRQW1FVSwwQkNqRUk7UURrRUosc0JDbEVJO1FEbUVKLGVDcEVLLEVEMEVOO0VBM0VUO1VBd0VZLGVDdEVFO1VEdUVGLDBCQ3hFRyxFRHlFSjtFQTFFWDtRQThFVSxhQUFZLEVBQ2I7RUEvRVQ7TUFtRlEsZUNqRk07TURrRk4sa0JBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixnQkFBZSxFQUNoQjtFQXZGUDtJQTRGSSxlQzFGVTtJRDJGVixtQkFBa0IsRUFDbkI7RUE5Rkg7SUFrR00sMEJDM0ZVO0lENEZWLGVDbEdTO0lEbUdULGtCQUFpQjtJQUNqQixpQkFBZ0I7SUFDaEIsd0JBQXVCO0lBQ3ZCLG9CQUFtQjtJQUNuQixjQUFhLEVBQ2Q7RUF6R0w7SUE0R00sMEJBQXlCO0lBQ3pCLDBCQUF5QixFQTRHMUI7RUF6Tkw7TUFnSFEsZUM5R007TUQrR04sa0JBQWlCLEVBQ2xCO0VBbEhQO01Bc0hVLGFBQVk7TUFDWix1QkFBc0I7TUFFdEIsZUN2SEk7TUR3SEosa0JBQWlCO01BQ2pCLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsZUFBYyxFQUNmO0VBOUhUO01Ba0lRLGVDaElNO01EaUlOLHNCQ25JVSxFRHdOWDtFQXhOUDtRQXNJVSxlQ3RJUTtRRHVJUixzQkN4SUssRUR5SU47RUF4SVQ7O1FBNElVLHVCQUFzQjtRQUN0Qix5QkFBd0I7UUFDeEIsMkJBQTBCO1FBQzFCLHNCQUFxQjtRQUNyQix3QkFBdUI7UUFDdkIsc0JBQXFCO1FBQ3JCLGlCQUFnQixFQVdqQjtFQTdKVDs7VUFxSlksdUJBQXNCO1VBQ3RCLHlCQUF3QixFQUN6QjtFQXZKWDs7VUEwSlksd0JBQXVCO1VBQ3ZCLDBCQUF5QixFQUMxQjtFQTVKWDtRQW1LVSwyREFBMEQsRUE2QzNEO0VBaE5UO1VBc0tZLGNBQWE7VUFDYix3QkFBdUI7VUFDdkIsb0JBQW1CLEVBQ3BCO0VBektYO1VBNEtZLFlBQVcsRUFjWjtFQTFMWDtZQStLYyxtQkFBa0IsRUFDbkI7RUFoTGI7WUFtTGMsbUJBQWtCLEVBTW5CO0VBekxiO2NBc0xnQixZQUFXO2NBQ1gsbUJBQWtCLEVBQ25CO0VBeExmO1VBOExjLG1CQUFrQixFQWdCbkI7RUE5TWI7WUFpTWdCLHdDQUF1QztZQUN2QyxtQkFBa0I7WUFDbEIsT0FBTTtZQUNOLFFBQU87WUFDUCwwQ0M5TEE7WUQrTEEsZUNyTUQ7WURzTUMsaUJBQWdCO1lBQ2hCLFlBQVc7WUFDWCxhQUFZO1lBQ1osbUJBQWtCO1lBQ2xCLG1CQUFrQjtZQUNsQixrQkFBaUIsRUFDbEI7RUE3TWY7UUdERSxlRlFjO1FFUGQsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsdUJBQXNCO1FBQ3RCLHNCQUFxQjtRSGlOYixrQkFBaUI7UUFDakIsdUJBQXNCLEVBQ3ZCO0VBdE5UO1VHV00sZUFic0QsRUFjdkQ7RUhaTDtVR2dCSSxvQkFBbUI7VUFDbkIsWUFBVyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci9hY2NvdW50L2NvbXBvbmVudHMvYWNjb3VudC1wYWdlL3N0eWxlcy91c2VyLWFjY291bnQtcGFnZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fc2hhcmVkJztcblxuYXBwLXVzZXItYWNjb3VudC1wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyAkbmF2YmFyLWhlaWdodCB9KTtcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XG5cbiAgLmFjY291bnQtdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgY29sb3I6ICRibGFjaztcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cmVtO1xuICB9XG5cbiAgLmFjY291bnQtc2lkZWJhciB7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGdyZXk7XG5cbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLnVzZXItaW5mbyB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAudXNlci1pbWctb3V0ZXIge1xuICAgICAgICBtYXJnaW46IDAgMjAlIDFyZW07XG5cbiAgICAgICAgLnVzZXItaW1nLXdyYXBwZXIge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAgICAgICAgIC51c2VyLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogJGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cblxuICAgICAgLnVzZXItaGFuZGxlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgfS8vIC51c2VyLWluZm9cblxuICAgIC51c2VyLWFjdGlvbnMubGlzdC1ncm91cCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5iYWRnZSB7XG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRncmV5O1xuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XG5cbiAgICAgICAgICAuYmFkZ2Uge1xuICAgICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGlzdC1ncm91cC1pdGVtLWFjdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9Ly8gLnVzZXItYWN0aW9uc1xuICB9Ly8gLmFjY291bnQtc2lkZWJhclxuXG4gIC5uby1vcmRlcnMtbWVzc2FnZSB7XG4gICAgY29sb3I6ICRncmV5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC51c2VyLW9yZGVycyB7XG4gICAgLm9yZGVycy10aXRsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfS8vIC5vcmRlcnMtdGl0bGVcblxuICAgIC5vcmRlcnMtdGFibGUtbGlzdCB7XG4gICAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDAgMC43NXJlbTtcblxuICAgICAgY2FwdGlvbiB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICB9XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgdGgge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICAgY29sb3I6ICRncmV5O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH0vLyB0aGVhZFxuXG4gICAgICAub3JkZXItaXRlbSB7XG4gICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGFya2dyZXk7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICRkYXJrZ3JleTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuXG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9Ly8gdGgsIHRkXG5cbiAgICAgICAgLm9yZGVyLXByb2R1Y3RzLXByZXZpZXcge1xuICAgICAgICAgIC8vIFRha2UgaW50byBjb25zaWRlcmF0aW9uOlxuICAgICAgICAgIC8vICAgIC0gVGhlIDx0ZD4gcGFkZGluZ2xlZnQgYW5kIHBhZGRpbmcgcmlnaHQgKDAuNzVyZW0gKjIpXG4gICAgICAgICAgLy8gICAgLSBUaHJlZSBwcm9kdWN0IGltYWdlcyAoNTBweCAqIDMpLCB0d28gb2Ygd2hpY2ggaGF2ZSAnbWFyZ2luLWxlZnQ6IC0ycmVtJyAoMnJlbSAqIDIpXG4gICAgICAgICAgbWluLXdpZHRoOiBjYWxjKCgoMC43NXJlbSAqIDIpICsgKDUwcHggKiAzKSkgLSAoMnJlbSAqIDIpKTtcblxuICAgICAgICAgIC5vcmRlci1wcm9kdWN0cy1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9yZGVyLXByb2R1Y3QtaXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMnJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByb2R1Y3QtaW1nLXdyYXBwZXIge1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgICAgLnByb2R1Y3QtaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmJpZy1vcmRlciB7XG4gICAgICAgICAgICAub3JkZXItcHJvZHVjdC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcrJyBhdHRyKGRhdGEtcHJvZHVjdHMtbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkcHVycGxlLCAuNyk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS8vIC5vcmRlci1wcm9kdWN0cy1wcmV2aWV3LmJpZy1vcmRlclxuICAgICAgICB9Ly8gLm9yZGVyLXByb2R1Y3RzLXByZXZpZXdcblxuICAgICAgICAub3JkZXItaXRlbS1hY3Rpb24tYnRuIHtcbiAgICAgICAgICBAaW5jbHVkZSBsaW5rLWJ1dHRvbigkcHVycGxlKTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgIH0vLyAub3JkZXItaXRlbVxuICAgIH0vLyAub3JkZXJzLXRhYmxlLWxpc3RcbiAgfS8vIC51c2VyLW9yZGVyc1xufVxuIiwiLy8gQ29sb3JzXG4kYmxhY2s6ICMxZTFlMWU7XG4kZGFya2dyZXk6ICMzZjNmM2Y7XG4kd2hpdGU6ICNGRkZGRkY7XG4kZ3JleTogIzllOWU5ZTtcbiRncmV5LTI6ICNkN2Q3ZDc7XG4kZ3JleS0zOiAjZTVlNWU1O1xuXG4kYXF1YW1hcmluYTogIzUwZTNjMjtcbiRwdXJwbGU6ICM5MDEzZmU7XG4kY2hlcnJ5OiAjZjgyYzUxO1xuJHJlZDogI2Q2MTgzYTtcbiRnb2xkOiAjZmNiMzAwO1xuJGZhY2Vib29rLWJsdWU6ICMzYjU5OTg7XG5cbi8vIFNpemVzXG4kbmF2YmFyLWhlaWdodDogJG5hdi1saW5rLWhlaWdodCArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHByZWxvYWQtaW1hZ2UtYmc6IHJnYmEoZGFya2VuKCR3aGl0ZSwgMTApLCAuMjUpO1xuXG4vLyBQcmVsb2FkIEltYWdlIC8gQmFja2dyb3VuZCBJbWFnZVxuJHNwaW5uZXItc2l6ZTogMjhweDtcbiRzcGlubmVyLWNvbG9yOiAkZ3JleTtcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDJweCwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gbGluay1idXR0b24oJGNvbG9yLCAkaG92ZXItY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSkpIHtcbiAgY29sb3I6ICRjb2xvcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XG5cbiAgJjpob3ZlcixcbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAmOmZvY3VzLFxuICAmLmZvY3VzIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBvdXRsaW5lLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyLCAkaG92ZXItY29sb3I6ICRiYWNrZ3JvdW5kLCAkaG92ZXItYmFja2dyb3VuZDogJGNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycmVtO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjVzLCBjb2xvciAuNXMsIGJhY2tncm91bmQtY29sb3IgLjVzO1xuXG4gICY6aG92ZXIge1xuICAgICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGhvdmVyLWJhY2tncm91bmQsIC43KTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgkYm9yZGVyLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG5cbkBtaXhpbiBmaWxsLWJ1dHRvbigkY29sb3IsICRiYWNrZ3JvdW5kLCAkaG92ZXItY29sb3I6ICRjb2xvciwgJGhvdmVyLWJhY2tncm91bmQ6IGRhcmtlbigkYmFja2dyb3VuZCwgNSUpKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGNvbG9yO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIC41cztcblxuICAmOmhvdmVyIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRob3Zlci1iYWNrZ3JvdW5kLCAuNyk7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSxcbiAgJjpmb2N1cyxcbiAgJi5mb2N1cyB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZbZGlzYWJsZWRdIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IC41O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/account/components/account-page/user-account-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/user-account-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"account-title\">My account</h1>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!-- Sidebar -->\n    <div class=\"col-12 col-lg-3\">\n      <div class=\"row no-gutters account-sidebar\">\n        <div class=\"col-12 col-sm-6 col-lg-12\">\n          <div class=\"user-info\">\n            <div class=\"user-img-outer\">\n              <app-preload-image class=\"user-img-wrapper\" [classes]=\"'user-img'\" [ratio]=\"{w:1, h:1}\" [src]=\"user.image\" alt=\"User image\" title=\"User image\">\n              </app-preload-image>\n            </div>\n            <span class=\"user-name\">{{ user.name }}</span>\n            <span class=\"user-handle\">@{{ user.handle }}</span>\n          </div>\n        </div>\n        <div class=\"col-12 col-sm-6 col-lg-12\">\n          <div class=\"list-group list-group-flush user-actions\">\n            <a class=\"list-group-item list-group-item-action\" tabindex=\"-1\">\n              Profile\n            </a>\n            <a class=\"list-group-item list-group-item-action active\" tabindex=\"-1\" [ngClass]=\"{'disabled' : !(user.orders && user.orders.length)}\">\n              My Orders\n              <span class=\"badge badge-pill\" *ngIf=\"user.orders && user.orders.length\">{{ user.orders.length }}</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Main content -->\n    <div class=\"col-12 col-lg-9\">\n      <h4 class=\"no-orders-message\" *ngIf=\"!(user.orders && user.orders.length)\">There are no order associated with your account</h4>\n      <!-- User Orders -->\n      <div class=\"user-orders\" *ngIf=\"(user.orders && user.orders.length)\">\n        <h2 class=\"orders-title\">ORDERS</h2>\n        <div class=\"table-responsive\">\n          <table class=\"table table-hover orders-table-list\">\n            <caption>User orders list</caption>\n            <thead>\n              <tr>\n                <th scope=\"col\">\n                  Order number\n                </th>\n                <th scope=\"col\">\n                  Date\n                </th>\n                <th class=\"text-center\" scope=\"col\">\n                  Preview\n                </th>\n                <th scope=\"col\">\n                  Total\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"order-item\" *ngFor=\"let order of user.orders\">\n                <th scope=\"row\">#{{ order.number }}</th>\n                <td>\n                  {{ order.date }}\n                </td>\n                <td class=\"order-products-preview\" [ngClass]=\"{ 'big-order': (order.preview.length > 3) }\">\n                  <div class=\"order-products-list\">\n                    <div class=\"order-product-item\" *ngFor=\"let productImage of order.preview | slice:0:3\" [attr.data-products-length]=\"(order.preview.length - 3)\">\n                      <app-preload-image class=\"product-img-wrapper\" [classes]=\"'product-img'\" [ratio]=\"{w:1, h:1}\" [src]=\"productImage\" alt=\"Order product image\" title=\"Order product image\">\n                      </app-preload-image>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"font-weight-bold\">\n                  {{ order.total }}\n                </td>\n                <td class=\"text-center\">\n                  <a class=\"btn btn-sm order-item-action-btn\" tabindex=\"-1\">Details</a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <!-- / User Orders -->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/account/components/account-page/user-account-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/user/account/components/account-page/user-account-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UserAccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountPageComponent", function() { return UserAccountPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserAccountPageComponent = /** @class */ (function () {
    function UserAccountPageComponent(route) {
        this.route = route;
        this.user = {};
        this.user = route.snapshot.data['data'].userData;
    }
    UserAccountPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-account-page',
            template: __webpack_require__(/*! ./user-account-page.component.html */ "./src/app/user/account/components/account-page/user-account-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./styles/user-account-page.styles.scss */ "./src/app/user/account/components/account-page/styles/user-account-page.styles.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserAccountPageComponent);
    return UserAccountPageComponent;
}());



/***/ }),

/***/ "./src/app/user/account/resolvers/user-account-page.resolver.ts":
/*!**********************************************************************!*\
  !*** ./src/app/user/account/resolvers/user-account-page.resolver.ts ***!
  \**********************************************************************/
/*! exports provided: UserAccountPageResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountPageResolver", function() { return UserAccountPageResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/user/services/user.service.ts");



var UserAccountPageResolver = /** @class */ (function () {
    function UserAccountPageResolver(userDataService) {
        this.userDataService = userDataService;
    }
    UserAccountPageResolver.prototype.resolve = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var seo = {
                title: 'Account',
                description: 'Your account description',
                keywords: 'your, account, keywords'
            };
            _this.userDataService.getAccountData()
                .then(function (userData) {
                return resolve({
                    userData: userData,
                    seo: seo
                });
            });
        });
    };
    UserAccountPageResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserAccountPageResolver);
    return UserAccountPageResolver;
}());



/***/ }),

/***/ "./src/app/user/account/user-account.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/account/user-account.module.ts ***!
  \*****************************************************/
/*! exports provided: userAccountRoutes, UserAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAccountRoutes", function() { return userAccountRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAccountModule", function() { return UserAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./src/app/user/index.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account-page/user-account-page.component */ "./src/app/user/account/components/account-page/user-account-page.component.ts");
/* harmony import */ var _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/user-account-page.resolver */ "./src/app/user/account/resolvers/user-account-page.resolver.ts");









var userAccountRoutes = [
    {
        path: '',
        component: _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__["UserAccountPageComponent"],
        resolve: {
            data: _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__["UserAccountPageResolver"]
        },
        canActivate: [_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
    }
];
var UserAccountModule = /** @class */ (function () {
    function UserAccountModule() {
    }
    UserAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_account_page_user_account_page_component__WEBPACK_IMPORTED_MODULE_7__["UserAccountPageComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(userAccountRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ___WEBPACK_IMPORTED_MODULE_5__["UserSharedModule"]
            ],
            providers: [
                _resolvers_user_account_page_resolver__WEBPACK_IMPORTED_MODULE_8__["UserAccountPageResolver"]
            ]
        })
    ], UserAccountModule);
    return UserAccountModule;
}());



/***/ }),

/***/ "./src/app/user/index.ts":
/*!*******************************!*\
  !*** ./src/app/user/index.ts ***!
  \*******************************/
/*! exports provided: UserService, UserSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]; });

/* harmony import */ var _user_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-shared.module */ "./src/app/user/user-shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSharedModule", function() { return _user_shared_module__WEBPACK_IMPORTED_MODULE_1__["UserSharedModule"]; });





/***/ }),

/***/ "./src/app/user/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var UserService = /** @class */ (function () {
    function UserService(http, baseHref) {
        this.http = http;
        this.baseHref = baseHref;
    }
    UserService.prototype.getAccountData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.baseHref + '/assets/data/user.json')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject();
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user-shared.module.ts":
/*!********************************************!*\
  !*** ./src/app/user/user-shared.module.ts ***!
  \********************************************/
/*! exports provided: UserSharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSharedModule", function() { return UserSharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/user/services/user.service.ts");



var UserSharedModule = /** @class */ (function () {
    function UserSharedModule() {
    }
    UserSharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
            entryComponents: [],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
            ],
            exports: []
        })
    ], UserSharedModule);
    return UserSharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-account-user-account-module.js.map