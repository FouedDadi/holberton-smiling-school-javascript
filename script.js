$(document).ready(function () {
  function DynamicQuotes() {
    $("#loader").show();
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      method: "GET",
      success: function (fetched) {
        fetched.forEach(function (data) {
          firstcarousel = "";
          if (data.id == 1) {
            firstcarousel = "active";
          }
          $("#loader").hide();
          $(
            "#carousel-items"
          ).append(`<div class="carousel-item ${firstcarousel} firstcarousel">
          <div class="container mt-5 mb-5">
            <div class="row row-cols-sm-4 mb-5 mt-5">
              <div class="col text-xl-center">
                <img
                  class="rounded-circle mx-auto my-3 d-block"
                  src="${data.pic_url}"
                  width="150"
                  height="150"
                  alt="First slide"
                />
              </div>
              <div class="col-sm-8 mx-3 my-4">
                <p>
                  ${data.text}
                </p>
                <p>
                  <span class="font-weight-bold">${data.name}</span><br />
                  <span class="font-italic">${data.title}</span>
                </p>
              </div>
            </div>
          </div>
        </div>`);
        });
      },
    });
  }

  function DynamicTutorials() {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/popular-tutorials",
      method: "GET",
      success: function (fetched) {
        fetched.forEach(function (data) {
          firstcarousel = "";
          if (data.id == 1) {
            firstcarousel = "active";
          }
          $stars = "";
          for (x = 0; x < data.star; x++) {
            $stars +=
              '<img src="images/star_on.png" width="25" height="25" alt="Star on" loading="lazy">';
          }
          for (y = 0; y < 5 - data.star; y++) {
            $stars +=
              '<img src="images/star_off.png" width="25" height="25" alt="Star off" loading="lazy">';
          }
          $(`#videos`).append(`
          <div class="carousel-item ${firstcarousel} mb-5">
              <div class="card video-card mx-auto my-3 border-0 font-weight-bolder">
                <img
                  class="card-img-top"
                  src="${data.thumb_url}"
                  width="255"
                  height="154"
                />
                <img
                  class="play-img"
                  src="images/play.png"
                  width="130"
                  height="130"
                />
                <div class="card-body">
                  <p class="font-weight-bold">
                  ${data.title}<br />
                  <span class="text-secondary font-14 font-weight-normal"
                      >${data["sub-title"]}</span
                  >
                  </p>
                  <div class="row justify-content-start font-14">
                    <div class="col-2">
                      <img
                      class="rounded-circle"
                      src="${data.author_pic_url}"
                      width="30"
                      height="30"
                      loading="lazy"
                      />
                    </div>
                    <div class="col mt-1 font-weight-bolder phillip">
                      ${data.author}
                    </div>
                  </div>
                  <div class="row justify-content-between mt-2">
                    <div class="col">
                      ${$stars}
                    </div>
                  <div class="col-4 text-right font-weight-bold color8-min">
                    ${data.duration}
                  </div>
              </div>
          </div>
      `);
        });
      },
    });
  }
  function DynamicLatests() {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/latest-videos",
      method: "GET",
      success: function (fetched) {
        fetched.forEach(function (data) {
          firstcarousel = "";
          if (data.id == 1) {
            firstcarousel = "active";
          }
          $stars = "";
          for (x = 0; x < data.star; x++) {
            $stars +=
              '<img src="images/star_on.png" width="25" height="25" alt="Star on" loading="lazy">';
          }
          for (y = 0; y < 5 - data.star; y++) {
            $stars +=
              '<img src="images/star_off.png" width="25" height="25" alt="Star off" loading="lazy">';
          }
          $(`#videos1`).append(`
          <div class="carousel-item ${firstcarousel} mb-5">
              <div class="card video-card mx-auto my-3 border-0 font-weight-bolder">
                <img
                  class="card-img-top"
                  src="${data.thumb_url}"
                  width="255"
                  height="154"
                />
                <img
                  class="play-img"
                  src="images/play.png"
                  width="130"
                  height="130"
                />
                <div class="card-body">
                  <p class="font-weight-bold">
                  ${data.title}<br />
                  <span class="text-secondary font-14 font-weight-normal"
                      >${data["sub-title"]}</span
                  >
                  </p>
                  <div class="row justify-content-start font-14">
                    <div class="col-2">
                      <img
                      class="rounded-circle"
                      src="${data.author_pic_url}"
                      width="30"
                      height="30"
                      loading="lazy"
                      />
                    </div>
                    <div class="col mt-1 font-weight-bolder phillip">
                      ${data.author}
                    </div>
                  </div>
                  <div class="row justify-content-between mt-2">
                    <div class="col">
                      ${$stars}
                    </div>
                  <div class="col-4 text-right font-weight-bold color8-min">
                    ${data.duration}
                  </div>
              </div>
          </div>
      `);
        });
      },
    });
  }
  function DynamicQuotes2() {
    $("#loader").show();
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      method: "GET",
      success: function (fetched) {
        fetched.forEach(function (data) {
          firstcarousel = "";
          if (data.id == 1) {
            firstcarousel = "active";
          }
          $("#loader").hide();
          $(
            "#carousel-item"
          ).append(`<div class="carousel-item ${firstcarousel} firstcarousel">
          <div class="container mt-5 mb-5">
            <div class="row row-cols-sm-4 mb-5 mt-5">
              <div class="col text-xl-center">
                <img
                  class="rounded-circle mx-auto my-3 d-block"
                  src="${data.pic_url}"
                  width="150"
                  height="150"
                  alt="First slide"
                />
              </div>
              <div class="col-sm-8 mx-3 my-4">
                <p>
                  ${data.text}
                </p>
                <p>
                  <span class="font-weight-bold">${data.name}</span><br />
                  <span class="font-italic">${data.title}</span>
                </p>
              </div>
            </div>
          </div>
        </div>`);
        });
      },
    });
  }
  DynamicQuotes();
  DynamicTutorials();
  DynamicLatests();
  DynamicQuotes2();
});
