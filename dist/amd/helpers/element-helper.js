define(["require", "exports", "./js-literal-helper"], function (require, exports, js_literal_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementHelper = (function () {
        function ElementHelper() {
        }
        ElementHelper.getPropertyRouteFrom = function (element) {
            return element.getAttribute(ElementHelper.ValidatePropertyAttributeName);
        };
        ElementHelper.getViewStrategyFrom = function (element) {
            return element.getAttribute(ElementHelper.ViewStrategyAttributeName);
        };
        ElementHelper.getViewOptionsFrom = function (element) {
            var optionsLiteral = element.getAttribute(ElementHelper.ViewOptionsAttributeName);
            if (!optionsLiteral) {
                return;
            }
            return js_literal_helper_1.JsLiteralHelper.literalToJson(optionsLiteral);
        };
        ElementHelper.getSummaryStrategyFrom = function (element) {
            return element.getAttribute(ElementHelper.ViewSummaryStrategyAttributeName);
        };
        ElementHelper.getSummaryOptionsFrom = function (element) {
            var optionsLiteral = element.getAttribute(ElementHelper.SummaryOptionsAttributeName);
            if (!optionsLiteral) {
                return;
            }
            return js_literal_helper_1.JsLiteralHelper.literalToJson(optionsLiteral);
        };
        ElementHelper.ValidatePropertyAttributeName = "validate-property";
        ElementHelper.ViewStrategyAttributeName = "view-strategy";
        ElementHelper.ViewOptionsAttributeName = "view-options";
        ElementHelper.ViewSummaryStrategyAttributeName = "view-summary-strategy";
        ElementHelper.SummaryOptionsAttributeName = "summary-options";
        return ElementHelper;
    }());
    exports.ElementHelper = ElementHelper;
});
