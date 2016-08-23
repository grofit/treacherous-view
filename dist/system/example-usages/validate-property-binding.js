System.register(["../helpers/element-helper", "../states/validation-state"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var element_helper_1, validation_state_1;
    var ValidatePropertyBinding;
    return {
        setters:[
            function (element_helper_1_1) {
                element_helper_1 = element_helper_1_1;
            },
            function (validation_state_1_1) {
                validation_state_1 = validation_state_1_1;
            }],
        execute: function() {
            // This is just a dumping ground for me to get my mind around stuff
            ValidatePropertyBinding = (function () {
                function ValidatePropertyBinding() {
                    this.previousState = validation_state_1.ValidationState.unknown;
                }
                ValidatePropertyBinding.prototype.startTriggers = function () {
                    var _this = this;
                    var triggerNames = element_helper_1.ElementHelper.getTriggersFrom(this.element);
                    triggerNames.forEach(function (triggerName) {
                        var triggerArgs = element_helper_1.ElementHelper.getTriggerArgsFrom(_this.element, triggerName);
                        var trigger = _this.triggerRegistry.getTriggerNamed(triggerName);
                        var activeTrigger = trigger.applyTrigger(_this.element, _this.triggerValidation, triggerArgs);
                        _this.activeTriggers.push(activeTrigger);
                    });
                };
                ValidatePropertyBinding.prototype.triggerValidation = function () {
                    var _this = this;
                    this.validationGroup.getPropertyError(this.propertyRoute, true)
                        .then(function (error) {
                        if (!error) {
                            _this.viewStrategy.elementBecomeValid(_this.element, _this.propertyRoute, _this.previousState);
                            _this.previousState = validation_state_1.ValidationState.valid;
                        }
                        else {
                            _this.viewStrategy.elementBecomeInvalid(_this.element, error, _this.propertyRoute, _this.previousState);
                            _this.previousState = validation_state_1.ValidationState.invalid;
                        }
                    });
                };
                return ValidatePropertyBinding;
            }());
            exports_1("ValidatePropertyBinding", ValidatePropertyBinding);
        }
    }
});