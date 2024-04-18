import type { Alpine } from "alpinejs"
import anchor from "@alpinejs/anchor"
import intersect from "@alpinejs/intersect"
import persist from "@alpinejs/persist"
import focus from '@alpinejs/focus'
import collapse from '@alpinejs/collapse'
import morph from '@alpinejs/morph'
import ajax from "@imacrayon/alpine-ajax"

export default (Alpine: Alpine) => {
  Alpine.plugin(anchor)
  Alpine.plugin(intersect)
  Alpine.plugin(persist)
  Alpine.plugin(focus)
  Alpine.plugin(collapse)
  Alpine.plugin(morph)
  Alpine.plugin(ajax)
}
