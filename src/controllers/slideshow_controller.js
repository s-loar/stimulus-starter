import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]
  static values = { index: Number }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      if (this.indexValue < 0) {
        this.indexValue = 3
      }

      this.indexValue = this.indexValue % 4
      element.hidden = (index != this.indexValue)
    })
  }
}