import { ArrowProps } from '@/lib/types/components/elements/Arrow';

const Arrow = ({ color, className }: ArrowProps) => {
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.60156 12.5C3.60156 12.0029 4.00451 11.6 4.50156 11.6L17.2671 11.6L12.2778 6.84874C11.9195 6.50423 11.9083 5.93449 12.2528 5.5762C12.5973 5.2179 13.1671 5.20673 13.5254 5.55125L20.1254 11.8512C20.3018 12.0209 20.4016 12.2552 20.4016 12.5C20.4016 12.7448 20.3018 12.9791 20.1254 13.1487L13.5254 19.4487C13.1671 19.7933 12.5973 19.7821 12.2528 19.4238C11.9083 19.0655 11.9195 18.4958 12.2778 18.1512L17.2671 13.4L4.50156 13.4C4.00451 13.4 3.60156 12.9971 3.60156 12.5Z'
        fill={color}
      />
    </svg>
  );
};

export default Arrow;
