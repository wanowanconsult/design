import React from 'react';

export type DarkPaletteProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function DarkPalette({ text }: DarkPaletteProps) {
  return (
    <div>
      {text}
    </div>
  );
}
