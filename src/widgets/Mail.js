/* eslint no-unused-vars: "off" */

import React, { useRef, useState, useEffect, useCallback } from 'react';

import { View, Text, Image, Button, Spacer, Divider, List, Heading, Clickable } from '../components';

const Mail = () => {
  return (
    <View horizontal style={{ height: 400 }}>
      <View style={{ width: 375, overflow: 'scroll' }}>
        <View background="gray-1">
          <Spacer size="medium" />
          <List horizontal horizontalPadding="medium">
            <Button solid title="⋮" />
            <Button solid title="Compose" />
            <Spacer itemFlex />
            <Button solid title="Sort By" />
          </List>
        </View>
        <View xpadding="small" xhorizontalPadding="medium" background="gray-1" style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <Spacer size="small" />
          <Text fontSize="xxsmall" fontWeight="semibold" padding="small" horizontalPadding="medium" color="gray-6">TODAY</Text>
          <Divider size="none" />
        </View>
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
            background="blue-0"
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
          <Heading
            image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
            title="Tech for Less Order Confirmation TL1896893"
            subtitle="Tech for Less Orders"
            padding="medium"
          />
        </List>
      </View>

      <Divider size="none" />

      <View xbackground="gray-0" style={{ width: 600, xoverflowY: 'scroll' }}>
        <Spacer size="medium" />
        <View>
          <List horizontal horizontalPadding="medium" xbackground="white">
            <Button title="Reply" />
            <Button title="Reply All" />
            <Spacer itemFlex />
            <Button title="Delete" />
            <Button title="⋮" />
          </List>
        </View>
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          subtitle="Tech for Less Order Confirmation TL1896893"
          title="Tech for Less Orders"
          label="📎 ★"
          note="Jun 26, 2021"
          padding="medium"
        />
        <Divider size="none" />
        <View horizontalPadding="medium" background="white" style={{ overflowY: 'scroll' }}>
          <Spacer size="medium" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Mail;

/*
      <View xbackground="gray-0" style={{ width: 600, overflowY: 'scroll' }}>
        <Spacer size="medium" />
        <Heading
          image={<View background="primary" borderRadius="rounded" style={{ width: 10, height: 10 }} />}
          subtitle="Tech for Less Order Confirmation TL1896893"
          title="Tech for Less Orders"
          label="📎 ★"
          note="Jun 26, 2021"
        />
        <View background="white" style={{ position: 'sticky', top: 0, zIndex: 1, paddingTop: 15 }}>
          <List horizontal horizontalPadding="medium" xbackground="white">
            <Button title="Reply" />
            <Button title="Reply All" />
            <Spacer itemFlex />
            <Button title="Delete" />
          </List>
          <Spacer size="medium" />
          <Divider size="none" />
        </View>
        <View horizontalPadding="medium" background="white">
          <Spacer size="medium" />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>
      </View>
*/
