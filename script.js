$(document).ready(function () {
  function DynamicQuotes() {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      method: "GET",

      success: function (fetched) {
        fetched.forEach(function (data) {
          firstcarousel = "";
          if (data.id == 1) {
            firstcarousel = "active";
          }
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
  DynamicQuotes();
});
