import { SVGProps } from 'react'

export const Comment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.026 3C7.726 3 1.001 8.465 1.001 15.209c0 2.913 1.254 5.575 3.344 7.672-.733 2.956-3.185 5.592-3.214 5.621a.456.456 0 0 0-.088.513.452.452 0 0 0 .426.281c3.89 0 6.756-1.864 8.253-3.016a17.89 17.89 0 0 0 6.304 1.138c8.3 0 14.974-5.466 14.974-12.209C31 8.466 24.326 3 16.026 3Z"
    />
  </svg>
)
