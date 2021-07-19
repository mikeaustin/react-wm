import React, { useRef, useState, useEffect, useCallback } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

const editorText = (
  `const <strong>Image</strong> = ({ src, width, height, ...props }) =&gt; {
  return (
    &lt;<strong>View</strong> tag="img" src={src} {...props} /&gt;
  );
};

`);

const Editor = () => {
  const editorRef = useRef();

  const handleInput = event => {
    console.log(event.currentTarget.childNodes.length);
  };

  const handlePaste = event => {
    event.preventDefault();

    document.execCommand("inserttext", false, event.clipboardData.getData("text/plain"));
  };

  return (
    <View flex>
      <View flex horizontal>
        <View style={{ margin: '0 9px 0 10px' }} verticalPadding="medium">
          <Text color="gray-5" style={{ fontFamily: 'monospace', textAlign: 'right' }}>
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />
            11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
          </Text>
        </View>
        <Divider size="none" />
        <View flex horizontalPadding="small" padding="medium" background="white" style={{ overflowX: 'auto' }}>
          <View
            ref={editorRef}
            tag="pre"
            flex
            contentEditable
            spellCheck="false"
            style={{ margin: '-5px 0', lineHeight: '20px' }}
            onInput={handleInput}
            onPaste={handlePaste}
          >
            {/* {editorText} */}
            <div dangerouslySetInnerHTML={{ __html: editorText }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Editor;
