import React from 'react';

export type ThemeProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Theme({ text }: ThemeProps) {
  return (
    <div>
      {text}
    </div>
  );
}
