$(document).ready(function () {

  $("sup.cartSup").html(JSON.parse(localStorage.getItem("arr")).length);


  !localStorage.getItem("arr") && localStorage.setItem("arr", "[]");


  let a = JSON.parse(localStorage.getItem("arr"));

  if (JSON.parse(localStorage.getItem("arr")).length) {
    $("#bag > div:first-child").addClass('d-none');
    $("#bag > div:last-child").removeClass('d-none');
    let bigCash = 0,
    smallCash = 0,
    profit = 0;
    $.each(a, function (index, value) {
      bigCash += Number(value[3].substring(1));
      smallCash += Number(value[2].substring(1));
      profit += Number(value[3].substring(1)) - Number(value[2].substring(1));
      // console.log();

      $("#bag .row > .col-md-6:first-child").append(`
      <div class="border border-1 p-4 mb-4" data-id="${value[0]}">
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
                <h1 class="title">${value[1]}</h1>
                <div>
                    <span class="price fw-bold">${value[2]}</span>
                    <strike class="text-secondary">${value[3]}</strike>
                    <div class="text-success">You saved ₹${Number(value[3].substring(1)) - Number(value[2].substring(1))}</div>
                </div>

                <div class="d-flex">
                    <div class="w-50">
                        <label for="exampleFormControlSelect1">Size</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option ${value[4] == "S" && 'selected'}>S</option>
                            <option ${value[4] == "M" && 'selected'}>M</option>
                            <option ${value[4] == "L" && 'selected'}>L</option>
                            <option ${value[4] == "XL" && 'selected'}>XL</option>
                        </select>
                    </div>
                    <div class="w-50">
                        <label for="exampleFormControlSelect2">Qnt</label>
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </div>
                </div>
            </div>
            <img src="${value[5]}" alt="img" class="w-25">
        </div>
        <button class="btn btn-danger removeBagItem" data-id="${value[0]}">Remove</button>
    </div>
  `);
    });
    $("#bag .row > .col-md-6:last-child").append(`
      <div class="border border-1">
        <h6 class="bg-light p-3">PRICE SUMMARY</h6>
        <div class="d-flex flex-column p-4">
            <div class="mb-3 d-flex justify-content-between">
                <span>Total MRP (Incl. of taxes) </span>
                <span>₹ ${bigCash}</span>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <span>Delivery Fee  </span>
                <span>₹ 30</span>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <span>Bag Discount </span>
                <span>₹ ${profit}</span>
            </div>
            <div class="mb-3 d-flex justify-content-between">
                <span>Subtotal  </span>
                <span>₹ ${smallCash}</span>
            </div>
            <div class="mb-3 bg-success text-white br-10 px-3 text-center">
                You are saving ₹ ${profit} on this order
            </div>
            <hr>
            <div class="d-flex justify-content-between">
                <div>
                    <small>Total</small>
                    <h5>₹ 429</h5>
                </div>
                <button class="btn btn-main">
                    ADD ADDRESS
                </button>
            </div>
        </div>
    </div>
  `);


    $(".removeBagItem").on("click", function () {
      a = a.filter(e => e[0] != $(this).attr('data-id'));
      localStorage.setItem("arr", JSON.stringify(a));
      $(this).parents(".border.border-1.p-4.mb-4").remove();
      $("sup.cartSup").html(Number($("sup.cartSup").html()) - 1);
      if(Number($("sup.cartSup").html()) == 0) {
        $("#bag > div:first-child").removeClass('d-none');
        $("#bag > div:last-child").addClass('d-none');
      }
    });
  }

});