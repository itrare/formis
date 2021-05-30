import React, { useState, useEffect } from "react";

import Constants from "./values";
/**
 * Form
 * @description Generates form fields from json
 * @param onSave
 * @param data
 *
 * @returns null
 */
export default function Form({ src = [], onChange }) {
  // state change logic will be implemented here

  const [formState, setFormState] = useState([...src]);

  const handleChange = (i, changes) => {
    setFormState((state) => {
      const to_change = [...state];
      to_change[i] = { ...to_change[i], ...changes };
      return to_change;
    });

    return formState;
  };

  useEffect(() => {
    onChange(formState);
    // eslint-disable-next-line
  }, [formState]);

  return (
    <div>
      {formState?.map((ig, i) => {
        const { id, type, value, ...inputProps } = ig;
        const Field = Constants[type].Component;
        return (
          <Field
            key={i}
            value={value || ""}
            onChange={(changes) => handleChange(i, changes)}
            {...inputProps}
          />
        );
      })}
    </div>
  );
}
