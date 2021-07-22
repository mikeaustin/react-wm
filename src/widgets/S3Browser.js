import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';

import { View, Text, Image, Button, Spacer, Divider, List, Heading } from '../components';

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:1ed7544c-871f-4749-9c13-73429fd73a4c',
});

var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: 'mike-austin' }
});

const dateToString = (date) => date.toLocaleDateString();

const numberToKB = (number) => `${(number / 1000).toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} KB`;

const Header = ({ flex, children, ...props }) => {
  return (
    <View horizontalPadding="medium" style={{ flex }} {...props}>
      <Text
        fontSize="tiny"
        fontWeight="bold"
        color="gray-6"
      >
        {children.toUpperCase()}
      </Text>
    </View>
  );
};

const Column = ({ flex, icon, level = 0, selected, children, ...props }) => {
  const content = typeof children === 'string' ? (
    <Text style={{ whiteSpace: 'nowrap', minWidth: 0 }}>
      {children}
    </Text>
  ) : children;

  return (
    <View
      horizontal
      horizontalPadding="medium"
      style={{ flex, paddingLeft: (level + 1) * 17, minWidth: 0 }}
      {...props}
    >
      {icon}
      {content}
    </View>
  );
};

const openFolder = (
  <Text color="gray-7">📂&nbsp;</Text>
);

const closedFolder = (
  <Text color="gray-7">📁&nbsp;</Text>
);

const Table = ({ columns, data, ...props }) => {
  return (
    <View {...props}>
      <View verticalPadding="small" background="gray-1">
        <Spacer size="xsmall" />
        <View horizontal>
          {columns.map(({ title, flex }, index) => (
            <Header key={index} flex={flex}>{title}</Header>
          ))}
        </View>
      </View>
      <Divider size="none" />
      <List verticalPadding="small" spacerSize="none" >
        {data.map((item, rowIndex) => (
          <View key={rowIndex} horizontal verticalPadding="small">
            {columns.map(({ key, flex, onRender = (column, item) => column }, index) => (
              <Column key={index} flex={flex}>{onRender(item[key], item)}</Column>
            ))}
          </View>
        ))}
      </List>
    </View>
  );
};

const S3Browser = () => {
  const [objects, setObjects] = useState(null);

  useEffect(() => {
    (async () => {
      const s3objects = await s3.listObjectsV2({ Delimiter: '/', Prefix: 'photos/', StartAfter: 'photos/' }).promise();
      console.log('s3objects', s3objects);

      setObjects(s3objects);
    })();
  }, []);

  if (!objects) {
    return null;
  }

  return (
    <View flex horizontal>
      <View>
        <View verticalPadding="small" background="gray-1">
          <Spacer size="xsmall" />
          <View horizontal>
            <Header width={150}>Folder</Header>
          </View>
        </View>
        <Divider size="none" />
        <List verticalPadding="small" spacerSize="none">
          <View>
            <Column icon={openFolder} verticalPadding="small">Folder</Column>
            <List spacerSize="none">
              <Column itemSelected level={1} icon={closedFolder} verticalPadding="small">Subolder</Column>
              <Column level={1} icon={closedFolder} verticalPadding="small">Subolder</Column>
            </List>
          </View>
          <Column icon={closedFolder} verticalPadding="small">Folder</Column>
          <Column icon={closedFolder} verticalPadding="small">Folder</Column>
        </List>
      </View>
      <Divider size="none" />
      <Table
        flex
        columns={[
          {
            key: 'Key', title: 'Name', flex: '1 1 300px', onRender: (name, { Size }) => (
              <Heading
                image={<Image src={`http://mike-austin.com/new/images/Escher_Circle_Limit_III.jpg`} width={40} height={40} />}
                imageAlign='center'
                title={name} subtitle={numberToKB(Size)}
              />
            )
          },
          { key: 'Size', title: 'Size', flex: '0 0 100px', onRender: numberToKB },
          { key: 'LastModified', title: 'Modified', flex: '0 0 100px', onRender: dateToString },
        ]}
        data={objects.Contents}
      />
    </View>
  );
};

export default S3Browser;
