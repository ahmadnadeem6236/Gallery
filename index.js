async function CuratedPhotos() {
  // fetch the data from api
  const data = await fetch(`https://api.pexels.com/v1/curated/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `JKkNg91uJRpHFrYrCF64KK5wzYQJLQyJeMiyEE8XwIpsyg5EP5DpSIEB`,
    },
  });
  const response = await data.json(); //convert the response to json
  //   console.log(response);
  display_images(response);
  displayName(response);
  photographerLink(response);
}

function display_images(response) {
  const div = document.querySelectorAll(".box");
  let divArr = Array.from(div);

  let imgArr = [];
  for (let i = 0; i < 7; i++) {
    let element = response.photos[i].src.large;
    // console.log(element);
    imgArr.push(element);
  }

  let i = 0;
  while (i < 7) {
    divArr[i].style.backgroundImage = `url(${imgArr[i]})`;
    i++;
  }
}

function displayName(response) {
  let phtCap = [];
  for (let i = 0; i < 7; i++) {
    let cap = response.photos[i].photographer;
    phtCap.push(cap);
  }

  const div = document.querySelectorAll(".box");
  let divArr = Array.from(div);

  let i = 0;
  while (i < 7) {
    let name = phtCap[i];
    divArr[i].addEventListener("mouseenter", (e) => {
      e.target.textContent = `Photo By: ${name}📸`;
    });
    divArr[i].addEventListener("mouseleave", (e) => {
      e.target.textContent = ``;
    });
    i++;
  }
}

function photographerLink(response) {
  let photographer = [];
  for (let i = 0; i < 7; i++) {
    let cap = response.photos[i].photographer_url;
    photographer.push(cap);
  }

  const div = document.querySelectorAll(".box");
  let divArr = Array.from(div);

  let i = 0;
  while (i < 7) {
    let phtgrp = photographer[i];
    divArr[i].addEventListener("click", function (e) {
      e.target = window.open(`${phtgrp}`, `_blank`);
    });
    i++;
  }
}

CuratedPhotos();
