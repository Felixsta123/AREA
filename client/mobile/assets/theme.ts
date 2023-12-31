import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'rgb(90, 76, 196)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(228, 223, 255)',
    onPrimaryContainer: 'rgb(23, 0, 101)',
    secondary: 'rgb(95, 82, 167)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(229, 222, 255)',
    onSecondaryContainer: 'rgb(26, 2, 97)',
    tertiary: 'rgb(84, 62, 233)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(228, 223, 255)',
    onTertiaryContainer: 'rgb(21, 0, 103)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(28, 27, 31)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(28, 27, 31)',
    surfaceVariant: 'rgb(229, 225, 236)',
    onSurfaceVariant: 'rgb(71, 70, 79)',
    outline: 'rgb(120, 118, 128)',
    outlineVariant: 'rgb(201, 197, 208)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(49, 48, 52)',
    inverseOnSurface: 'rgb(244, 239, 244)',
    inversePrimary: 'rgb(198, 191, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(247, 242, 252)',
      level2: 'rgb(242, 237, 250)',
      level3: 'rgb(237, 232, 249)',
      level4: 'rgb(235, 230, 248)',
      level5: 'rgb(232, 227, 247)',
    },
    surfaceDisabled: 'rgba(28, 27, 31, 0.12)',
    onSurfaceDisabled: 'rgba(28, 27, 31, 0.38)',
    backdrop: 'rgba(49, 47, 56, 0.4)',
  },
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    primary: 'rgb(198, 191, 255)',
    onPrimary: 'rgb(42, 15, 149)',
    primaryContainer: 'rgb(66, 49, 171)',
    onPrimaryContainer: 'rgb(228, 223, 255)',
    secondary: 'rgb(201, 191, 255)',
    onSecondary: 'rgb(48, 33, 117)',
    secondaryContainer: 'rgb(71, 58, 141)',
    onSecondaryContainer: 'rgb(229, 222, 255)',
    tertiary: 'rgb(197, 192, 255)',
    onTertiary: 'rgb(38, 0, 161)',
    tertiaryContainer: 'rgb(59, 24, 210)',
    onTertiaryContainer: 'rgb(228, 223, 255)',
    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 180, 171)',
    background: 'rgb(28, 27, 31)',
    onBackground: 'rgb(229, 225, 230)',
    surface: 'rgb(28, 27, 31)',
    onSurface: 'rgb(229, 225, 230)',
    surfaceVariant: 'rgb(71, 70, 79)',
    onSurfaceVariant: 'rgb(201, 197, 208)',
    outline: 'rgb(146, 143, 153)',
    outlineVariant: 'rgb(71, 70, 79)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(229, 225, 230)',
    inverseOnSurface: 'rgb(49, 48, 52)',
    inversePrimary: 'rgb(90, 76, 196)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(37, 35, 42)',
      level2: 'rgb(42, 40, 49)',
      level3: 'rgb(47, 45, 56)',
      level4: 'rgb(48, 47, 58)',
      level5: 'rgb(52, 50, 62)',
    },
    surfaceDisabled: 'rgba(229, 225, 230, 0.12)',
    onSurfaceDisabled: 'rgba(229, 225, 230, 0.38)',
    backdrop: 'rgba(49, 47, 56, 0.4)',
  },
};
