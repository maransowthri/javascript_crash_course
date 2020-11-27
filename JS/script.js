const IMAGES = document.querySelectorAll("img");
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 760px",
};

function makeImgSet(imgSrc) {
  let markup = [];
  width = 400;

  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg" + " " + width + "w";
    width += 400;
  }

  return markup.join();
}

for (image of IMAGES) {
  let imgSrc = image.getAttribute("src");
  imgSrc = imgSrc.slice(0, -8);
  let srcSet = makeImgSet(imgSrc);
  image.setAttribute("srcset", srcSet);

  let type = image.getAttribute("data-type");
  let sizes = SIZES[type];
  image.setAttribute("sizes", sizes);
}
