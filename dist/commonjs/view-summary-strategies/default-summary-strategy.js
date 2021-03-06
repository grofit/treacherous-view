"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var summary_handler_1 = require("./summary-handler");
var DefaultViewSummary = /** @class */ (function () {
    function DefaultViewSummary(summaryHandler) {
        if (summaryHandler === void 0) { summaryHandler = new summary_handler_1.SummaryHandler(); }
        this.summaryHandler = summaryHandler;
        this.summaryName = "default";
    }
    DefaultViewSummary.prototype.setupContainer = function (summaryContainerElement) {
        this.summaryHandler.applyContainerClass(summaryContainerElement);
    };
    DefaultViewSummary.prototype.propertyBecomeValid = function (summaryContainerElement, propertyRoute) {
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
    };
    DefaultViewSummary.prototype.propertyBecomeInvalid = function (summaryContainerElement, error, propertyRoute) {
        var message = propertyRoute + " - " + error;
        this.summaryHandler.removePropertyErrorElement(summaryContainerElement, propertyRoute);
        this.summaryHandler.createPropertyErrorElement(message, summaryContainerElement, propertyRoute);
    };
    return DefaultViewSummary;
}());
exports.DefaultViewSummary = DefaultViewSummary;
