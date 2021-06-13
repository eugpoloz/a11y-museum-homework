import React from "react";

export interface NavLink {
  href: string;
  title: string;
  children?: React.ReactElement;
}