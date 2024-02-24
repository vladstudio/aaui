export const Theme = {
  button: {
    common: "border rounded transition-all duration-75",
    default:
      "border-stone-500/30 bg-white hover:bg-orange-200/40 hover:border-orange-500/30 active:shadow-[inset_0_2px_0_0_#11111108,0_1px_0px_1px_#FFF8,0_-1px_0px_1px_#00000005]",
    primary: "bg-stone-800 hover:bg-orange-800 text-white",
    ghost: "border-transparent hover:bg-orange-200/40",
  },
  backdrop: "bg-stone-300/30",
  dropdown:
    "rounded border border-stone-300 bg-white text-sm shadow-lg shadow-stone-900/10",
  modal: {
    common: "max-w-md border-stone-300 bg-white shadow-2xl shadow-stone-900/20",
    center: "rounded border",
    right: "border-l",
    left: "border-r",
  },
}

export const Transitions = {
  backdrop: {
    "x-transition:enter": "transition duration-150",
    "x-transition:enter-start": "opacity-0",
    "x-transition:enter-end": "opacity-100",
    "x-transition:leave": "transition duration-150",
    "x-transition:leave-start": "opacity-100",
    "x-transition:leave-end": "opacity-0",
  },
  modal: {
    center: {
      "x-transition:enter": "transition duration-150 ease-out",
      "x-transition:enter-start": "opacity-0 translate-y-4",
      "x-transition:enter-end": "opacity-100 translate-y-0",
      "x-transition:leave": "transition duration-150 ease-in",
      "x-transition:leave-start": "opacity-100 translate-y-0",
      "x-transition:leave-end": "opacity-0 translate-y-4",
    },
    right: {
      "x-transition:enter": "transition duration-150 ease-out",
      "x-transition:enter-start": "opacity-0 translate-x-4",
      "x-transition:enter-end": "opacity-100 translate-y-0",
      "x-transition:leave": "transition duration-150 ease-in",
      "x-transition:leave-start": "opacity-100 translate-y-0",
      "x-transition:leave-end": "opacity-0 translate-x-4",
    },
    left: {
      "x-transition:enter": "transition duration-150 ease-out",
      "x-transition:enter-start": "opacity-0 -translate-x-4",
      "x-transition:enter-end": "opacity-100 translate-y-0",
      "x-transition:leave": "transition duration-150 ease-in",
      "x-transition:leave-start": "opacity-100 translate-y-0",
      "x-transition:leave-end": "opacity-0 -translate-x-4",
    },
  },
}
