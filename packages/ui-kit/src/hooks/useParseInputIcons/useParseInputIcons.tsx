// Modules
import { useMemo, cloneElement } from 'react';

// Own Imports
import { ParseInputIconsArgs } from '.';
import { IconWrapper } from './useParseInputIcons.styled';

// Configs
const INPUT_TEXT_SPACE_AGAINST_ICONS = 8;
const INPUT_DEFAULT_X_PADDING = 12;

/**
 * Parse provided icons by position and parse them to JSX elements
 */
export const useParseInputIcons = ({
  icons,
  disabled,
}: ParseInputIconsArgs) => {
  return useMemo(() => {
    const iconsObj = {
      leftIcons: [],
      rightIcons: [],
      leftSpace: INPUT_DEFAULT_X_PADDING,
      rightSpace: INPUT_DEFAULT_X_PADDING,
    };

    icons.forEach(({ key, component, size, position, onClick }, index) => {
      iconsObj[`${position}Space`] +=
        typeof size === 'number' ? (size <= 32 ? size : 32) : 18 + 4; // Sums icon size + spacing
      iconsObj[`${position}Icons`].push(
        <IconWrapper
          key={index}
          disabled={disabled}
          className="input--icon-wrapper flex items-center justify-center"
        >
          {cloneElement(component, {
            key: key || index,
            size,
            onClick: disabled ? undefined : onClick,
          })}
        </IconWrapper>,
      );
    });

    const sharedClasses =
      'input--icons-wrapper absolute top-0 h-full w-min gap-2 flex flex items-center px-3';

    return {
      leftSpace:
        iconsObj.leftSpace > 12
          ? iconsObj.leftSpace + INPUT_TEXT_SPACE_AGAINST_ICONS
          : iconsObj.leftSpace,
      rightSpace:
        iconsObj.rightSpace > 12
          ? iconsObj.rightSpace + INPUT_TEXT_SPACE_AGAINST_ICONS
          : iconsObj.rightSpace,
      leftIcons: Boolean(iconsObj.leftIcons.length) && (
        <div className={`${sharedClasses} left-0 justify-left`}>
          {iconsObj.leftIcons}
        </div>
      ),
      rightIcons: Boolean(iconsObj.rightIcons.length) && (
        <div
          className={`${sharedClasses} right-0 flex-row-reverse justify-right`}
        >
          {iconsObj.rightIcons}
        </div>
      ),
    };
  }, [icons, disabled]);
};
