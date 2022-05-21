import { ref } from "vue"

export let useFullScreen = ref(false)

export const fullScreen = function () {
  if (!useFullScreen.value) {
    useFullScreen.value = true
    document.documentElement.requestFullscreen()
  }
}

export const exitFullScreen = function () {
  if (useFullScreen.value) {
    useFullScreen.value = false
    document.exitFullscreen()
  }
}
