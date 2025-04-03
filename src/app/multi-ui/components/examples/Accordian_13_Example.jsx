"use client";

import React from 'react';
import Accordion from '../Tejas';
export default function AccordionExample13() {
  const accordionItems = [{
    title: "Section nsos",
    content: "This is the content for section 1."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 2",
    content: "This is the content for section 2."
  }, 
  {
    title: "Section 3",
    content: "This is the content for section 3."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "p-4 min-h-screen"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-2xl font-bold mb-6",
    style: {
      color: '#00ffff',
      textShadow: '0 0 10px #00ffff'
    }
  }, "Cyberpunk Accordion"), /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl mx-auto"
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: accordionItems,
    allowMultiple: true
  })));
}