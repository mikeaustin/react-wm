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

var _excluded = ["components", "children"];


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

var data = [{
  from: 'Tech for Less Orders',
  subject: 'Tech for Less Order Confirmation ABC12345',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n"
}];

var Mail = function Mail(_ref4) {
  var _React$Children$toArr;

  var components = _ref4.components;
  var View = components.View,
      Text = components.Text;
      components.Image;
      var Button = components.Button,
      Spacer = components.Spacer,
      Divider = components.Divider,
      List = components.List;
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
    horizontal: true,
    flex: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(View, {
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
  }))), /*#__PURE__*/React.createElement(Divider, {
    size: "none"
  }), /*#__PURE__*/React.createElement(View, {
    xbackground: "gray-0",
    style: {
      xoverflowY: 'scroll'
    }
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
  }), /*#__PURE__*/React.createElement(Text, null, formattedText))));
};

export default Mail;
