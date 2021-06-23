import React from 'react';

export type ColorProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Color({ text }: ColorProps) {
  return (
    <div>
      {text}
    </div>
  );
}
