// Modules
import { CSSProperties } from 'react';

// Module Augmentation
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body: CSSProperties;
    small: CSSProperties;
    smallest: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body?: CSSProperties;
    small?: CSSProperties;
    smallest?: CSSProperties;
  }

  interface Palette {
    primaryDark: Palette['primary'];
    tertiary: Palette['primary'];
    primaryContainer: Palette['primary'];
    primaryDarkContainer: Palette['primary'];
    secondaryContainer: Palette['primary'];
    tertiaryContainer: Palette['primary'];
    surface: Palette['primary'];
    surfaceDim: Palette['primary'];
    surfaceContainer: Palette['primary'];
    outline: Palette['primary'];
    outlineVariant: Palette['primary'];
  }

  interface PaletteOptions {
    primaryDark: PaletteOptions['primary'];
    tertiary: PaletteOptions['primary'];
    primaryContainer: PaletteOptions['primary'];
    primaryDarkContainer: PaletteOptions['primary'];
    secondaryContainer: PaletteOptions['primary'];
    tertiaryContainer: PaletteOptions['primary'];
    surface: PaletteOptions['primary'];
    surfaceDim: PaletteOptions['primary'];
    surfaceContainer: PaletteOptions['primary'];
    outline: PaletteOptions['primary'];
    outlineVariant: PaletteOptions['primary'];
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body: true;
    small: true;
    smallest: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryDark: true;
    tertiary: true;
    primaryContainer: true;
    primaryDarkContainer: true;
    secondaryContainer: true;
    tertiaryContainer: true;
    surface: true;
    surfaceDim: true;
    surfaceContainer: true;
    outline: true;
    outlineVariant: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    primaryDark: true;
    tertiary: true;
    primaryContainer: true;
    primaryDarkContainer: true;
    secondaryContainer: true;
    tertiaryContainer: true;
    surface: true;
    surfaceDim: true;
    surfaceContainer: true;
    outline: true;
    outlineVariant: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    primaryDark: true;
    tertiary: true;
    primaryContainer: true;
    primaryDarkContainer: true;
    secondaryContainer: true;
    tertiaryContainer: true;
    surface: true;
    surfaceDim: true;
    surfaceContainer: true;
    outline: true;
    outlineVariant: true;
  }
}
