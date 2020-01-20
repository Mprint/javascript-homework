const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

const getValue = function() {
  text.style.fontSize = this.value + 'px';
};

range.addEventListener('input', getValue);
