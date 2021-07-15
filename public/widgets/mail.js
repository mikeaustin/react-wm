function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var dist = {};

var words = {};

Object.defineProperty(words, "__esModule", {
  value: true
});
words.WORDS = void 0;
var WORDS = ["ad", "adipisicing", "aliqua", "aliquip", "amet", "anim", "aute", "cillum", "commodo", "consectetur", "consequat", "culpa", "cupidatat", "deserunt", "do", "dolor", "dolore", "duis", "ea", "eiusmod", "elit", "enim", "esse", "est", "et", "eu", "ex", "excepteur", "exercitation", "fugiat", "id", "in", "incididunt", "ipsum", "irure", "labore", "laboris", "laborum", "Lorem", "magna", "minim", "mollit", "nisi", "non", "nostrud", "nulla", "occaecat", "officia", "pariatur", "proident", "qui", "quis", "reprehenderit", "sint", "sit", "sunt", "tempor", "ullamco", "ut", "velit", "veniam", "voluptate"];
words.WORDS = WORDS;

var LoremIpsum$1 = {};

var formats = {};

Object.defineProperty(formats, "__esModule", {
  value: true
});
formats.FORMATS = formats.FORMAT_PLAIN = formats.FORMAT_HTML = void 0;
var FORMAT_HTML = "html";
formats.FORMAT_HTML = FORMAT_HTML;
var FORMAT_PLAIN = "plain";
formats.FORMAT_PLAIN = FORMAT_PLAIN;
var FORMATS = [FORMAT_HTML, FORMAT_PLAIN];
formats.FORMATS = FORMATS;

var lineEndings = {};

Object.defineProperty(lineEndings, "__esModule", {
  value: true
});
lineEndings.LINE_ENDINGS = void 0;
var LINE_ENDINGS = {
  POSIX: "\n",
  WIN32: "\r\n"
};
lineEndings.LINE_ENDINGS = LINE_ENDINGS;

var generator = {};

var util = {};

var capitalize$1 = {};

Object.defineProperty(capitalize$1, "__esModule", {
  value: true
});
capitalize$1.default = void 0;
/**
 * @param str  A string that may or may not be capitalized.
 * @returns    A capitalized string.
 */

var capitalize = function capitalize(str) {
  var trimmed = str.trim();
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
};

var _default$6 = capitalize;
capitalize$1.default = _default$6;

var isNode = {exports: {}};

(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * @returns  True if the runtime is NodeJS.
 */

var isNode = function isNode() {
  return !!module.exports;
};

var _default = isNode;
exports.default = _default;
}(isNode, isNode.exports));

var isReactNative$1 = {};

Object.defineProperty(isReactNative$1, "__esModule", {
  value: true
});
isReactNative$1.default = void 0;
/**
 * @returns  True if runtime is ReactNative.
 */

var isReactNative = function isReactNative() {
  return typeof navigator !== "undefined" && navigator.product === "ReactNative";
};

var _default$5 = isReactNative;
isReactNative$1.default = _default$5;

var isWindows$1 = {};

var platforms = {};

Object.defineProperty(platforms, "__esModule", {
  value: true
});
platforms.SUPPORTED_PLATFORMS = void 0;
var SUPPORTED_PLATFORMS = {
  DARWIN: "darwin",
  LINUX: "linux",
  WIN32: "win32"
};
platforms.SUPPORTED_PLATFORMS = SUPPORTED_PLATFORMS;

Object.defineProperty(isWindows$1, "__esModule", {
  value: true
});
isWindows$1.default = void 0;

var _platforms = platforms;
/**
 * @returns True if process is windows.
 */


var isWindows = function isWindows() {
  return typeof process !== "undefined" && process.platform === _platforms.SUPPORTED_PLATFORMS.WIN32;
};

var _default$4 = isWindows;
isWindows$1.default = _default$4;

var makeArrayOfLength$1 = {};

Object.defineProperty(makeArrayOfLength$1, "__esModule", {
  value: true
});
makeArrayOfLength$1.default = void 0;
/**
 * @param length Length "x".
 * @returns      An array of indexes of length "x".
 */

var makeArrayOfLength = function makeArrayOfLength() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return Array.apply(null, Array(length)).map(function (item, index) {
    return index;
  });
};

var _default$3 = makeArrayOfLength;
makeArrayOfLength$1.default = _default$3;

var makeArrayOfStrings$1 = {};

Object.defineProperty(makeArrayOfStrings$1, "__esModule", {
  value: true
});
makeArrayOfStrings$1.default = void 0;

var _ = util;
/**
 * @param length  Length "x".
 * @returns       An array of strings of length "x".
 */


var makeArrayOfStrings = function makeArrayOfStrings(length, makeString) {
  var arr = (0, _.makeArrayOfLength)(length);
  return arr.map(function () {
    return makeString();
  });
};

var _default$2 = makeArrayOfStrings;
makeArrayOfStrings$1.default = _default$2;

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "capitalize", {
  enumerable: true,
  get: function get() {
    return _capitalize.default;
  }
});
Object.defineProperty(exports, "isNode", {
  enumerable: true,
  get: function get() {
    return _isNode.default;
  }
});
Object.defineProperty(exports, "isReactNative", {
  enumerable: true,
  get: function get() {
    return _isReactNative.default;
  }
});
Object.defineProperty(exports, "isWindows", {
  enumerable: true,
  get: function get() {
    return _isWindows.default;
  }
});
Object.defineProperty(exports, "makeArrayOfLength", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfLength.default;
  }
});
Object.defineProperty(exports, "makeArrayOfStrings", {
  enumerable: true,
  get: function get() {
    return _makeArrayOfStrings.default;
  }
});

var _capitalize = _interopRequireDefault(capitalize$1);

var _isNode = _interopRequireDefault(isNode.exports);

var _isReactNative = _interopRequireDefault(isReactNative$1);

var _isWindows = _interopRequireDefault(isWindows$1);

var _makeArrayOfLength = _interopRequireDefault(makeArrayOfLength$1);

var _makeArrayOfStrings = _interopRequireDefault(makeArrayOfStrings$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
}(util));

Object.defineProperty(generator, "__esModule", {
  value: true
});
generator.default = void 0;

var _words = words;

var _util$1 = util;

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Generator = /*#__PURE__*/function () {
  function Generator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$sentencesPerPara = _ref.sentencesPerParagraph,
        sentencesPerParagraph = _ref$sentencesPerPara === void 0 ? {
      max: 7,
      min: 3
    } : _ref$sentencesPerPara,
        _ref$wordsPerSentence = _ref.wordsPerSentence,
        wordsPerSentence = _ref$wordsPerSentence === void 0 ? {
      max: 15,
      min: 5
    } : _ref$wordsPerSentence,
        random = _ref.random;
        _ref.seed;
        var _ref$words = _ref.words,
        words = _ref$words === void 0 ? _words.WORDS : _ref$words;

    _classCallCheck$1(this, Generator);

    _defineProperty$1(this, "sentencesPerParagraph", void 0);

    _defineProperty$1(this, "wordsPerSentence", void 0);

    _defineProperty$1(this, "random", void 0);

    _defineProperty$1(this, "words", void 0);

    if (sentencesPerParagraph.min > sentencesPerParagraph.max) {
      throw new Error("Minimum number of sentences per paragraph (".concat(sentencesPerParagraph.min, ") cannot exceed maximum (").concat(sentencesPerParagraph.max, ")."));
    }

    if (wordsPerSentence.min > wordsPerSentence.max) {
      throw new Error("Minimum number of words per sentence (".concat(wordsPerSentence.min, ") cannot exceed maximum (").concat(wordsPerSentence.max, ")."));
    }

    this.sentencesPerParagraph = sentencesPerParagraph;
    this.words = words;
    this.wordsPerSentence = wordsPerSentence;
    this.random = random || Math.random;
  }

  _createClass$1(Generator, [{
    key: "generateRandomInteger",
    value: function generateRandomInteger(min, max) {
      return Math.floor(this.random() * (max - min + 1) + min);
    }
  }, {
    key: "generateRandomWords",
    value: function generateRandomWords(num) {
      var _this = this;

      var _this$wordsPerSentenc = this.wordsPerSentence,
          min = _this$wordsPerSentenc.min,
          max = _this$wordsPerSentenc.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util$1.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this.pluckRandomWord(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "generateRandomSentence",
    value: function generateRandomSentence(num) {
      return "".concat((0, _util$1.capitalize)(this.generateRandomWords(num)), ".");
    }
  }, {
    key: "generateRandomParagraph",
    value: function generateRandomParagraph(num) {
      var _this2 = this;

      var _this$sentencesPerPar = this.sentencesPerParagraph,
          min = _this$sentencesPerPar.min,
          max = _this$sentencesPerPar.max;
      var length = num || this.generateRandomInteger(min, max);
      return (0, _util$1.makeArrayOfLength)(length).reduce(function (accumulator, index) {
        return "".concat(_this2.generateRandomSentence(), " ").concat(accumulator);
      }, "").trim();
    }
  }, {
    key: "pluckRandomWord",
    value: function pluckRandomWord() {
      var min = 0;
      var max = this.words.length - 1;
      var index = this.generateRandomInteger(min, max);
      return this.words[index];
    }
  }]);

  return Generator;
}();

var _default$1 = Generator;
generator.default = _default$1;

Object.defineProperty(LoremIpsum$1, "__esModule", {
  value: true
});
LoremIpsum$1.default = void 0;

var _formats = formats;

var _lineEndings = lineEndings;

var _generator = _interopRequireDefault(generator);

var _util = util;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var LoremIpsum = /*#__PURE__*/function () {
  function LoremIpsum() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _formats.FORMAT_PLAIN;
    var suffix = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, LoremIpsum);

    _defineProperty(this, "generator", void 0);

    _defineProperty(this, "format", void 0);

    _defineProperty(this, "suffix", void 0);

    if (_formats.FORMATS.indexOf(format.toLowerCase()) === -1) {
      throw new Error("".concat(format, " is an invalid format. Please use ").concat(_formats.FORMATS.join(" or "), "."));
    }

    this.format = format.toLowerCase();
    this.suffix = suffix;
    this.generator = new _generator.default(options);
  }

  _createClass(LoremIpsum, [{
    key: "getLineEnding",
    value: function getLineEnding() {
      if (this.suffix) {
        return this.suffix;
      }

      if (!(0, _util.isReactNative)() && (0, _util.isNode)() && (0, _util.isWindows)()) {
        return _lineEndings.LINE_ENDINGS.WIN32;
      }

      return _lineEndings.LINE_ENDINGS.POSIX;
    }
  }, {
    key: "formatString",
    value: function formatString(str) {
      if (this.format === _formats.FORMAT_HTML) {
        return "<p>".concat(str, "</p>");
      }

      return str;
    }
  }, {
    key: "formatStrings",
    value: function formatStrings(strings) {
      var _this = this;

      return strings.map(function (str) {
        return _this.formatString(str);
      });
    }
  }, {
    key: "generateWords",
    value: function generateWords(num) {
      return this.formatString(this.generator.generateRandomWords(num));
    }
  }, {
    key: "generateSentences",
    value: function generateSentences(num) {
      return this.formatString(this.generator.generateRandomParagraph(num));
    }
  }, {
    key: "generateParagraphs",
    value: function generateParagraphs(num) {
      var makeString = this.generator.generateRandomParagraph.bind(this.generator);
      return this.formatStrings((0, _util.makeArrayOfStrings)(num, makeString)).join(this.getLineEnding());
    }
  }]);

  return LoremIpsum;
}();

var _default = LoremIpsum;
LoremIpsum$1.default = _default;

(function (exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LoremIpsum", {
  enumerable: true,
  get: function get() {
    return _LoremIpsum.default;
  }
});
exports.loremIpsum = void 0;

var _words = words;

var _LoremIpsum = _interopRequireDefault(LoremIpsum$1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var loremIpsum = function loremIpsum() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? "plain" : _ref$format,
      _ref$paragraphLowerBo = _ref.paragraphLowerBound,
      paragraphLowerBound = _ref$paragraphLowerBo === void 0 ? 3 : _ref$paragraphLowerBo,
      _ref$paragraphUpperBo = _ref.paragraphUpperBound,
      paragraphUpperBound = _ref$paragraphUpperBo === void 0 ? 7 : _ref$paragraphUpperBo,
      random = _ref.random,
      _ref$sentenceLowerBou = _ref.sentenceLowerBound,
      sentenceLowerBound = _ref$sentenceLowerBou === void 0 ? 5 : _ref$sentenceLowerBou,
      _ref$sentenceUpperBou = _ref.sentenceUpperBound,
      sentenceUpperBound = _ref$sentenceUpperBou === void 0 ? 15 : _ref$sentenceUpperBou,
      _ref$units = _ref.units,
      units = _ref$units === void 0 ? "sentences" : _ref$units,
      _ref$words = _ref.words,
      words = _ref$words === void 0 ? _words.WORDS : _ref$words,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === void 0 ? "" : _ref$suffix;

  var options = {
    random: random,
    sentencesPerParagraph: {
      max: paragraphUpperBound,
      min: paragraphLowerBound
    },
    words: words,
    wordsPerSentence: {
      max: sentenceUpperBound,
      min: sentenceLowerBound
    }
  };
  var lorem = new _LoremIpsum.default(options, format, suffix);

  switch (units) {
    case "paragraphs":
    case "paragraph":
      return lorem.generateParagraphs(count);

    case "sentences":
    case "sentence":
      return lorem.generateSentences(count);

    case "words":
    case "word":
      return lorem.generateWords(count);

    default:
      return "";
  }
};

exports.loremIpsum = loremIpsum;
}(dist));

var _excluded = ["components", "children"];
var lorem = new dist.LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
var data = Array.from({
  length: 10
}, function (_, index) {
  return {
    from: lorem.generateWords(5),
    subject: lorem.generateWords(10),
    body: lorem.generateParagraphs(5)
  };
});

var SectionHeader = function SectionHeader(_ref) {
  var noBorder = _ref.noBorder,
      children = _ref.children,
      components = _ref.components;
  var View = components.View,
      Text = components.Text;
      components.Image;
      components.Button;
      var Spacer = components.Spacer,
      Divider = components.Divider;
      components.List;
      components.Heading;
  return /*#__PURE__*/React.createElement(View, {
    background: "gray-1",
    style: {
      position: 'sticky',
      top: -1,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Divider, {
    size: "none",
    style: noBorder && {
      visibility: 'hidden'
    }
  }), /*#__PURE__*/React.createElement(Spacer, {
    size: "xsmall"
  }), /*#__PURE__*/React.createElement(Text, {
    fontSize: "xxsmall",
    fontWeight: "semibold",
    padding: "small",
    horizontalPadding: "medium",
    color: "gray-6"
  }, children.toUpperCase()), /*#__PURE__*/React.createElement(Divider, {
    size: "none"
  }));
};

var ListItem = function ListItem(_ref2) {
  var components = _ref2.components,
      from = _ref2.from,
      subject = _ref2.subject;
      _ref2.date;
      var body = _ref2.body,
      selected = _ref2.selected;
  var View = components.View,
      Text = components.Text;
      components.Image;
      components.Button;
      components.Spacer;
      components.Divider;
      components.List;
      var Heading = components.Heading;
  return /*#__PURE__*/React.createElement(Heading, {
    image: /*#__PURE__*/React.createElement(View, {
      background: "primary",
      borderRadius: "rounded",
      style: {
        width: 10,
        height: 10
      }
    }),
    title: from,
    subtitle: subject,
    label: "\uD83D\uDCCE \u2605",
    note: "Jun 26, 2021",
    padding: "medium",
    background: selected && 'blue-0'
  }, body && /*#__PURE__*/React.createElement(Text, {
    fontSize: "xsmall",
    style: {
      height: 30,
      overflow: 'hidden'
    }
  }, body));
};

var ButtonGroup = function ButtonGroup(_ref3) {
  var components = _ref3.components,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded);

  var View = components.View;
      components.Text;
      components.Image;
      components.Button;
      var Spacer = components.Spacer;
      components.Divider;
      var List = components.List;
      components.Heading;
  return /*#__PURE__*/React.createElement(View, props, /*#__PURE__*/React.createElement(Spacer, {
    size: "medium"
  }), /*#__PURE__*/React.createElement(List, {
    horizontal: true,
    horizontalPadding: "medium"
  }, children));
};

var MessageList = function MessageList(_ref4) {
  var data = _ref4.data,
      components = _ref4.components;
  var View = components.View;
      components.Text;
      components.Image;
      var Button = components.Button,
      Spacer = components.Spacer;
      components.Divider;
      var List = components.List;
      components.Heading;
  return /*#__PURE__*/React.createElement(View, {
    flex: true,
    style: {
      minWidth: 375,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    background: "gray-1",
    components: components
  }, /*#__PURE__*/React.createElement(Button, {
    solid: true,
    title: "\u22EE"
  }), /*#__PURE__*/React.createElement(Button, {
    solid: true,
    title: "Compose"
  }), /*#__PURE__*/React.createElement(Spacer, {
    itemFlex: true
  }), /*#__PURE__*/React.createElement(Button, {
    solid: true,
    title: "Sort By"
  })), /*#__PURE__*/React.createElement(SectionHeader, {
    noBorder: true,
    components: components
  }, "Today"), /*#__PURE__*/React.createElement(List, {
    divider: "gray-2",
    level: 2,
    spacerSize: "none"
  }, /*#__PURE__*/React.createElement(ListItem, {
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  }), /*#__PURE__*/React.createElement(ListItem, {
    selected: true,
    itemSelected: true,
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  })), /*#__PURE__*/React.createElement(SectionHeader, {
    components: components
  }, "Yesterday"), /*#__PURE__*/React.createElement(List, {
    divider: "gray-2",
    level: 2,
    spacerSize: "none"
  }, /*#__PURE__*/React.createElement(ListItem, {
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  }), /*#__PURE__*/React.createElement(ListItem, {
    selected: true,
    itemSelected: true,
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  }), /*#__PURE__*/React.createElement(ListItem, {
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  }), /*#__PURE__*/React.createElement(ListItem, {
    from: data[0].from,
    subject: data[0].subject,
    body: data[0].body,
    components: components
  })));
};

var MessageBody = function MessageBody(_ref5) {
  var _React$Children$toArr;

  var data = _ref5.data,
      components = _ref5.components;
  var View = components.View,
      Text = components.Text;
      components.Image;
      var Button = components.Button,
      Spacer = components.Spacer,
      Divider = components.Divider;
      components.List;
      components.Heading;
  var childrenArray = (_React$Children$toArr = React.Children.toArray(data[0].body)) === null || _React$Children$toArr === void 0 ? void 0 : _React$Children$toArr.toString().split(/\n|\\n/);
  var formattedText = childrenArray.map(function (str, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index,
      style: {
        marginBlockStart: 0
      }
    }, str);
  });
  return /*#__PURE__*/React.createElement(View, {
    xbackground: "gray-0"
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    components: components
  }, /*#__PURE__*/React.createElement(Button, {
    title: "Reply"
  }), /*#__PURE__*/React.createElement(Button, {
    title: "Reply All"
  }), /*#__PURE__*/React.createElement(Spacer, {
    itemFlex: true
  }), /*#__PURE__*/React.createElement(Button, {
    title: "Delete"
  }), /*#__PURE__*/React.createElement(Button, {
    title: "\u22EE"
  })), /*#__PURE__*/React.createElement(ListItem, {
    from: data[0].from,
    subject: data[0].subject,
    components: components
  }), /*#__PURE__*/React.createElement(Divider, {
    size: "none"
  }), /*#__PURE__*/React.createElement(View, {
    horizontalPadding: "medium",
    background: "white",
    style: {
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Spacer, {
    size: "medium"
  }), /*#__PURE__*/React.createElement(Text, null, formattedText)));
};

var Mail = function Mail(_ref6) {
  var _React$Children$toArr2;

  var components = _ref6.components;
  var View = components.View;
      components.Text;
      components.Image;
      components.Button;
      components.Spacer;
      var Divider = components.Divider;
      components.List;
      components.Heading;
  var childrenArray = (_React$Children$toArr2 = React.Children.toArray(data[0].body)) === null || _React$Children$toArr2 === void 0 ? void 0 : _React$Children$toArr2.toString().split(/\n|\\n/);
  childrenArray.map(function (str, index) {
    return /*#__PURE__*/React.createElement("p", {
      key: index,
      style: {
        marginBlockStart: 0
      }
    }, str);
  });
  return /*#__PURE__*/React.createElement(View, {
    horizontal: true,
    flex: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(MessageList, {
    data: data,
    components: components
  }), /*#__PURE__*/React.createElement(Divider, {
    size: "none"
  }), /*#__PURE__*/React.createElement(MessageBody, {
    data: data,
    components: components
  }));
};

export default Mail;
