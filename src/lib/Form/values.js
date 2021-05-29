import {
  Select,
  Checkbox,
  Text,
  LargeText,
  Numeric,
  Radio,
  Date,
  Email,
} from "../Fields";

const values = {
  text: {
    Component: Text,
  },
  largeText: {
    Component: LargeText,
  },
  date: {
    Component: Date,
  },
  select: {
    Component: Select,
  },
  radio: {
    Component: Radio,
  },
  checkbox: {
    Component: Checkbox,
  },
  numeric: {
    Component: Numeric,
  },
  email: {
    Component: Email,
  },
};

export default values;
