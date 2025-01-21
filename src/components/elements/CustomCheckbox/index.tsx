import { useCheckbox, Chip, VisuallyHidden, tv } from '@heroui/react';


export const CheckIcon = (props) => {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fillRule='evenodd' clipRule='evenodd'
        d='M16.7045 4.15347C17.034 4.4045 17.0976 4.87509 16.8466 5.20457L8.84657 15.7046C8.71541 15.8767 8.51627 15.9838 8.30033 15.9984C8.08439 16.0129 7.87271 15.9334 7.71967 15.7804L3.21967 11.2804C2.92678 10.9875 2.92678 10.5126 3.21967 10.2197C3.51256 9.92682 3.98744 9.92682 4.28033 10.2197L8.17351 14.1129L15.6534 4.29551C15.9045 3.96603 16.3751 3.90243 16.7045 4.15347Z'
        fill='#262626' />
    </svg>
  );
};


export const CustomCheckbox = (props) => {
  console.log('props', props);
  const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } =
    useCheckbox({
      defaultSelected: props.isSelected,
    });

  const checkbox = tv({
    slots: {
      base: 'border-none',
      content: 'text-default-500',
    },
    variants: {
      isSelected: {
        true: {
          base: ' ',
          content: 'text-primary-foreground pl-1',
        },
      },
      size: {
        my: {
          base: 'h-8 min-h-8 min-w-8',
        },
        md: {
          base: 'h-8 min-h-8 min-w-8',
        },
        lg: {
          base: 'h-8 min-h-8 min-w-8',
        },
      },
      isFocusVisible: {
        true: {
          // base: 'outline-none ring-2 ring-focus ring-offset-2 ring-offset-background',
        },
      },
    },
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        // color='primary'
        startContent={isSelected ? <CheckIcon /> : (
          <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L8.93934 10L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L10 11.0607L13.7197 14.7803C14.0126 15.0732 14.4874 15.0732 14.7803 14.7803C15.0732 14.4874 15.0732 14.0126 14.7803 13.7197L11.0607 10L14.7803 6.28033C15.0732 5.98744 15.0732 5.51256 14.7803 5.21967C14.4874 4.92678 14.0126 4.92678 13.7197 5.21967L10 8.93934L6.28033 5.21967Z'
              fill='#262626' />
          </svg>
        )
        }
        variant='faded'
        {...getLabelProps()}
      >
        {children || props.label}
      </Chip>
    </label>
  );
};
