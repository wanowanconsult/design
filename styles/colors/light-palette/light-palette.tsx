import React from 'react';

export type LightPaletteProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function LightPalette({ text }: LightPaletteProps) {
  return (
    <div>
      {text}
    </div>
  );
}
