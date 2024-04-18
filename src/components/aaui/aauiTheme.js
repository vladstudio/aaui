const aauiTheme = {
  link: "rounded-sm underline decoration-orange-400/50 underline-offset-2 outline-2 outline-offset-0 hover:bg-orange-200/40 hover:outline hover:outline-orange-200/40",
  input:
    "flex w-full items-center rounded border border-stone-400 bg-white px-4 py-2 font-sans font-medium shadow-[inset_0_3px_0_0_rgba(0,0,0,0.03)] placeholder:font-normal placeholder:text-stone-400",
  button: {
    common: "border rounded transition-all duration-75",
    default:
      "border-stone-500/30 bg-white hover:bg-orange-200/40 hover:border-orange-500/30 shadow-[inset_0_-2px_0_0_#00000008] active:shadow-[inset_0_2px_0_0_#00000008]",
    primary:
      "bg-blue-600 border-blue-700 hover:bg-blue-700 text-white shadow-[inset_0_-2px_0_0_#00000008]",
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
  accordion: {
    box: "grid place-items-start bg-pink-200/20",
    trigger: "px-4 py-2 border-stone-200 bg-pink-200/20 hover:bg-pink-200/40",
    panel: "px-4 py-2 border-stone-200",
  },

  transitions: {
    body: {
      duration: "150ms",
    },
    dropdown: {
      "x-transition:enter": "transition duration-150 ease-out",
      "x-transition:enter-start": "opacity-0 -translate-y-2",
      "x-transition:enter-end": "opacity-100 translate-y-0",
      "x-transition:leave": "transition duration-150 ease-in",
      "x-transition:leave-start": "opacity-100 translate-y-0",
      "x-transition:leave-end": "opacity-0 -translate-y-2",
    },
    backdrop: {
      "x-transition:enter": "transition duration-150 ease-out",
      "x-transition:enter-start": "opacity-0",
      "x-transition:enter-end": "opacity-100",
      "x-transition:leave": "transition duration-150 ease-in",
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
  },
}

export default aauiTheme
