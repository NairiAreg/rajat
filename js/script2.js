$(document).ready(function () {

  $("sup.cartSup").html(JSON.parse(localStorage.getItem("arr")).length);


  !localStorage.getItem("arr") && localStorage.setItem("arr", "[]");

  let tog = true;

  let a = JSON.parse(localStorage.getItem("arr"));
  const bagList = () => {
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
                        <select name="size[]" class="form-control" id="exampleFormControlSelect1">
                            <option ${value[4] == "S" && 'selected'}>S</option>
                            <option ${value[4] == "M" && 'selected'}>M</option>
                            <option ${value[4] == "L" && 'selected'}>L</option>
                            <option ${value[4] == "XL" && 'selected'}>XL</option>
                        </select>
                    </div>
                    <div class="w-50">
                        <label for="exampleFormControlSelect2">Qnt</label>
                        <select name="qnt[]" class="form-control" id="exampleFormControlSelect2">
                            <option selected>1</option>
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
            <img src="${value[5]}" alt="img" class="w-25 h-100">
        </div>
        <button class="btn btn-danger removeBagItem" data-id="${value[0]}">Remove</button>
        <input type="hidden" name="color[]" value="${value[6]}"> 
        <input type="hidden" name="title[]" value="${value[1]}">
        <input type="hidden" name="price[]" value="${value[2]}">
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
                    <h5>₹ ${smallCash}</h5>
                </div>
                <button type="button" class="btn btn-main addAddress">
                    ADD ADDRESS
                </button>
            </div>
        </div>
    </div>
  `);


      $(".removeBagItem").on("click", function (e) {
        e.preventDefault();
        a = a.filter(e => e[0] != $(this).attr('data-id'));
        localStorage.setItem("arr", JSON.stringify(a));
        $(this).parents(".border.border-1.p-4.mb-4").hide('fast');
        setTimeout(() => {
          $(this).parents(".border.border-1.p-4.mb-4").remove();
          $("sup.cartSup").html(Number($("sup.cartSup").html()) - 1);
          if (Number($("sup.cartSup").html()) == 0) {
            $("#bag > div:first-child").removeClass('d-none');
            $("#bagForm").addClass('d-none');
          } else {
            setTimeout(() => {
              $("#bag .row > .col-md-6:first-child").html('');
              $("#bagForm").html('');
              bagList();
            }, 1000);
          }
        }, 1000);
      });

      $(".addAddress").on("click", function (e) {
        // e.preventDefault();
        if (tog) {
          $(`
          <div class="address d-flex flex-column p-3">
            <input required type="text" placeholder="Name" name="uName" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            <input required type="text" placeholder="State" name="state" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            
            <input required type="text" placeholder="City" name="city" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            
            <input required type="text" placeholder="Address" name="address" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            
            <input required type="text" placeholder="House Number" name="house" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            
            <input required type="text" placeholder="Pin Code" name="pin" class="form-control mt-2">
            <div class="invalid-feedback">
                This field is required
            </div>
            
            <hr/>
          </div>
          `).insertAfter("#bag hr");
          $("div.address").hide();
          $("div.address").show('fast');
          tog = false;


          
          $(`
          <button type="submit" class="btn btn-main addAddress">
          SUBMIT
          </button>
          `).insertAfter(this);
          $(this).remove();
          
          
          
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.querySelectorAll('.needs-validation')
          
          // Loop over them and prevent submission
          Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              } else {
                $('#msgModal').modal('hide');
                $('#successModal').modal('show');
                }
                
                form.classList.add('was-validated')
                
                
              }, false)
            })

        }
        else {
          // alert()
          console.log($('input[name="uName"]').val(), $('input[name="state"]').val(), $('input[name="city"]').val(), $('input[name="address"]').val(), $('input[name="house"]').val(), $('input[name="pin"]').val());
          if ($('input[name="uName"]').val() && $('input[name="state"]').val() && $('input[name="city"]').val() && $('input[name="address"]').val() && $('input[name="house"]').val() && $('input[name="pin"]').val()) {
            $("#bagForm").submit();
          }
          else {
            alert();
          }
        }
      });
    }
  }
  bagList();
});