"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _data = require("../../data");

var _index = _interopRequireDefault(require("../../index.css"));

var _reactTippy = require("react-tippy");

var _QuestionIcon = _interopRequireDefault(require("../atoms/QuestionIcon"));

var _RefreshIcon = _interopRequireDefault(require("../atoms/RefreshIcon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TypeSection = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TypeSection, _React$Component);

  var _super = _createSuper(TypeSection);

  function TypeSection() {
    (0, _classCallCheck2["default"])(this, TypeSection);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TypeSection, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          documents = _this$props.documents,
          type = _this$props.type,
          types = _this$props.types,
          fields = _this$props.fields,
          handleTypeChange = _this$props.handleTypeChange,
          handleFieldChange = _this$props.handleFieldChange,
          refreshTypes = _this$props.refreshTypes;

      if (!documents) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: _index["default"].orderDocumentsList
        }, /*#__PURE__*/_react["default"].createElement(Spinner, {
          message: "Loading...",
          center: true
        }));
      }

      var selectorTypes = types.map(function (_ref) {
        var name = _ref.name,
            title = _ref.title;
        return {
          value: name,
          label: title
        };
      });
      var showFields = fields.length > 1 && fields.findIndex(function (field) {
        return field.value === "order";
      }) !== -1;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].orderDocumentsFlexSpaceBetween
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
        className: _index["default"].orderDocumentsNoTopMargin
      }, "Order Documents"), /*#__PURE__*/_react["default"].createElement("p", null, "Order your documents via drag-and-drop.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].orderDocumentsFlexEnd
      }, showFields ? /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].orderDocumentsSelectWrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        className: _index["default"].orderDocumentsFieldsSelect,
        options: fields,
        isSearchable: true,
        onChange: handleFieldChange,
        defaultValue: {
          value: _data.DEFAULT_FIELD_VALUE,
          label: _data.DEFAULT_FIELD_LABEL
        }
      }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactTippy.Tooltip, {
        html: /*#__PURE__*/_react["default"].createElement("p", {
          className: _index["default"].orderDocumentsTooltipText
        }, "Use a custom field to order your documents. Fields must be hidden and have type \"number\" to be listed here."),
        position: "right-start",
        trigger: "mouseenter"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].orderDocumentsTooltip
      }, /*#__PURE__*/_react["default"].createElement(_QuestionIcon["default"], null))))) : null)), /*#__PURE__*/_react["default"].createElement("hr", {
        className: _index["default"].orderDocumentsHr
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: _index["default"].orderDocumentsSubheading
      }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Step 1: Choose a Type")), /*#__PURE__*/_react["default"].createElement("button", {
        className: _index["default"].orderDocumentsRefreshButton,
        onClick: refreshTypes
      }, /*#__PURE__*/_react["default"].createElement(_RefreshIcon["default"], {
        title: "Refresh Types"
      }))), /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
        options: selectorTypes,
        isSearchable: true,
        onChange: handleTypeChange,
        value: type
      }));
    }
  }]);
  return TypeSection;
}(_react["default"].Component);

var _default = TypeSection;
exports["default"] = _default;