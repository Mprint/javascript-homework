const input = document.getElementById('validation-input');
// console.log(input)
const length = input.getAttribute('data-length');

// console.log(typeof length)

input.onblur = function() {
  console.log(this.value.length);
  if (this.value.length !== Number(length)) {
    this.classList.remove('valid');
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};
