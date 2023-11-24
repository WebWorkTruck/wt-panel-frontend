export function IconCross({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M21 1L1 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2.613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 21L1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="2.613"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
