---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---


import React from "react";
import <%= name %> from ".";

export default {
    title: "<%= name %>",
    components: <%= name %>
};

export const Default = () => <<%= name %>>默认</<%= name %>>