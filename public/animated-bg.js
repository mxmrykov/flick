const d = document;
const xCount = 6, yCount = 5, Diff = 25


function BgAnimate() {
  d.addEventListener("mousemove", e => {
    let bg = d.getElementById("background");
    const xTranslate = Math.round((e.clientX / window.screen.availWidth) * 100) / 100;
    const yTranslate = Math.round((e.clientY / window.screen.availHeight) * 100) / 100;

    let elems = bg.querySelectorAll(".bg-elem");
    let index = 0, length = elems.length;

    for ( ; index < length; index++) {
      if (index % 2 == 0) {
        elems[index].style.transform = `translate(${-7 + xTranslate*14}px, ${-7 + yTranslate*14}px)`;
      } else {
        elems[index].style.transform = `translate(${-4 + xTranslate*8}px, ${-4 + yTranslate*8}px)`;
      }
  }
  })
    fillBgElems(xCount, yCount, Diff)
}

function fillBgElems(r, c, diff) {
    let bg = d.getElementById("background");
    let targetCols = c;
    for (let rows = 0; rows < r; ++rows) {
      bg.innerHTML += `<div class="bg-row" id="bg-row-${rows}"></div>`;
      if (rows % 2 != 0) {
        targetCols -= 1;
      } else {
        targetCols += 1;
      }
      for (let cols = 0; cols < targetCols; ++cols) {
        let transitionX = getRandomInt(-diff, diff)
        const row = d.getElementById(`bg-row-${rows}`);
        row.innerHTML += `<img src="favicon.ico" class="bg-elem" style="transform: translate(${transitionX}px, ${transitionX}px)"/>`; 
      }
    }
  }

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }