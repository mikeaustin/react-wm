import React from 'react';

const SectionHeader = ({ noBorder, children, components }) => {
  const { View, Text, Image, Button, Spacer, Divider, List, Heading } = components;

  return (
    <View background="gray-1" style={{ position: 'sticky', top: -1, zIndex: 1 }}>
      <Divider size="none" style={noBorder && { visibility: 'hidden' }} />
      <Spacer size="xsmall" />
      <Text fontSize="xxsmall" fontWeight="semibold" padding="small" horizontalPadding="medium" color="gray-6">
        {children.toUpperCase()}
      </Text>
      <Divider size="none" />
    </View>
  );
};

const ListItem = ({ components, from, subject, date, body, selected }) => {
  const { View, Text, Image, Button, Spacer, Divider, List, Heading } = components;

  return (
    <Heading
      image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
      title={from}
      subtitle={subject}
      label="📎 ★"
      note="Jun 26, 2021"
      padding="medium"
      background={selected && 'blue-0'}
    >
      {body && (
        <Text fontSize="xsmall" style={{ height: 30, overflow: 'hidden' }}>
          {body}
        </Text>
      )}
    </Heading>
  );
};

const ButtonGroup = ({ components, children, ...props }) => {
  const { View, Text, Image, Button, Spacer, Divider, List, Heading } = components;

  return (
    <View {...props}>
      <Spacer size="medium" />
      <List horizontal horizontalPadding="medium">
        {children}
      </List>
    </View>
  );
};

const data = [
  {
    from: 'Tech for Less Orders',
    subject: 'Tech for Less Order Confirmation ABC12345',
    body:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
`
  }
];

const Mail = ({ components }) => {
  const { View, Text, Image, Button, Spacer, Divider, List, Heading } = components;

  const childrenArray = React.Children.toArray(data[0].body)?.toString().split(/\n|\\n/);
  const formattedText = childrenArray.map((str, index) => <p key={index} style={{ marginBlockStart: 0 }}>{str}</p>);

  return (
    <View horizontal flex style={{ overflow: 'hidden' }}>
      <View flex style={{ minWidth: 375, overflow: 'auto' }}>
        <ButtonGroup background="gray-1" components={components}>
          <Button solid title="⋮" />
          <Button solid title="Compose" />
          <Spacer itemFlex />
          <Button solid title="Sort By" />
        </ButtonGroup>
        <SectionHeader noBorder components={components}>Today</SectionHeader>
        <List divider="gray-2" level={2} spacerSize="none">
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
        </List>
        <SectionHeader components={components}>Yesterday</SectionHeader>
        <List divider="gray-2" level={2} spacerSize="none">
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
          <ListItem from={data[0].from} subject={data[0].subject} body={data[0].body} components={components} />
        </List>
      </View>
      <Divider size="none" />
      <View xbackground="gray-0" style={{ xoverflowY: 'scroll' }}>
        <ButtonGroup components={components}>
          <Button title="Reply" />
          <Button title="Reply All" />
          <Spacer itemFlex />
          <Button title="Delete" />
          <Button title="⋮" />
        </ButtonGroup>
        <ListItem from={data[0].from} subject={data[0].subject} components={components} />
        <Divider size="none" />
        <View horizontalPadding="medium" background="white" style={{ overflowY: 'auto' }}>
          <Spacer size="medium" />
          <Text>
            {formattedText}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Mail;
