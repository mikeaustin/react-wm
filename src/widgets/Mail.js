/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

const Mail = () => {
  return (
    <View style={{ width: 375 }}>
      <View padding="small" horizontalPadding="medium" background="gray-1">
        <Spacer size="small" />
        <Text fontSize="xxsmall" fontWeight="semibold" color="gray-6">TODAY</Text>
      </View>
      <Divider size="none" />
      <List divider="gray-2" level={2} spacerSize="none">
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          title="Tech for Less Order Confirmation TL1896893"
          subtitle="Tech for Less Orders"
          note="📎 ★"
          label="Jun 26, 2021"
          padding="medium"
        >
          <Text fontSize="xsmall">Thank you for the payment confirmation. I’ve uploaded</Text>
        </Heading>
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          subtitle="Tech for Less Order Confirmation TL1896893"
          title="Tech for Less Orders"
          label="📎 ★"
          note="Jun 26, 2021"
          padding="medium"
        >
          <Text fontSize="xsmall" style={{ height: 30, overflow: 'hidden' }}>
            Thank you for the payment confirmation. I’ve uploaded the declaration page of my car insurance, as requested.
        </Text>
        </Heading>
      </List>
      <Divider size="none" />
      <View padding="small" horizontalPadding="medium" background="gray-1">
        <Spacer size="small" />
        <Text fontSize="xxsmall" fontWeight="semibold" color="gray-6">YESTERDAY</Text>
      </View>
      <Divider size="none" />
      <List divider="gray-2" level={2} spacerSize="none">
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          title="Tech for Less Order Confirmation TL1896893"
          subtitle="Tech for Less Orders"
          padding="medium"
        />
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          title="Tech for Less Order Confirmation TL1896893"
          subtitle="Tech for Less Orders"
          padding="medium"
        />
      </List>
    </View>
  );
};

export default Mail;
