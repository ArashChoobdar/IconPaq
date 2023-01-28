// Load Icons Every 2sec 30 icon
window.addEventListener("load", function () {
  var funvar = 0;
  var count = 30;

  var Items = document.getElementsByClassName("Icon_Pack");

  // load 30 first
  for (let i = 0; i < 30; i++) {
    Items[i].style.display = "flex";
  }
  // end load 30 first

  var twoSecound = setInterval(twoSecondFunction, 2000);

  function twoSecondFunction() {
    var Items = document.getElementsByClassName("Icon_Pack");

    for (funvar; funvar <= 30; funvar++) {
      if (Items[count]) {
        Items[count].style.display = "flex";
        ++count;
      } else {
        clearInterval(twoSecound);
      }
    }
    funvar = 0;
  }
});
// END Load Icons Every 2sec 30 icon

$(document).ready(function () {
  $(window).resize(function () {
    var width = $(window).width();

    if (width < 757) {
      var Items = document.getElementsByClassName("MyModal");

      if (Items.length > 0) {
        var item = localStorage.getItem("modal2");
      } else {
        var item = localStorage.getItem("modal2");
        var afteritem = document.getElementById("afterModal2");

        var stringToHTML = function (str) {
          var d = $(str);
          return d;
        };

        afteritem.parentNode.insertBefore(stringToHTML(item)[0], afteritem);

        document.getElementsByClassName("showSize2")[0].innerHTML =
          document.getElementsByClassName("showSize")[0].innerHTML;
        document.getElementsByClassName("changeinput2")[0].value =
          document.getElementsByClassName("changeinput")[0].value;
        document.getElementsByClassName("showstroke2")[0].innerHTML =
          document.getElementsByClassName("showstroke")[0].innerHTML;
        document.getElementsByClassName("changestrokeinput2")[0].value =
          document.getElementsByClassName("changestrokeinput")[0].value;

        var colorPicker3 = document.getElementById("ColorPic3");
        colorPicker3.value = document.getElementById("ColorPic").value;
        document.getElementById("SetColorToIcon3").value =
          document.getElementById("ColorPic").value;

        colorPicker3.addEventListener("change", watchColorPicker3, false);

        function watchColorPicker3(event) {
          document.querySelectorAll(".Icon").forEach((p) => {
            if (p.getAttribute("stroke")) {
              p.setAttribute("stroke", event.target.value);
            } else {
              if (p.classList.contains("Icon-Colorful")) {
              } else {
                p.setAttribute("fill", event.target.value);
              }
            }
            document.getElementById("SetColorToIcon3").value =
              event.target.value;
          });
        }
      }
    }
    if (width > 757) {
      document.getElementsByClassName("showSize")[0].innerHTML =
        document.getElementsByClassName("showSize2")[0].innerHTML;
      document.getElementsByClassName("changeinput")[0].value =
        document.getElementsByClassName("changeinput2")[0].value;
      document.getElementsByClassName("showstroke")[0].innerHTML =
        document.getElementsByClassName("showstroke2")[0].innerHTML;
      document.getElementsByClassName("changestrokeinput")[0].value =
        document.getElementsByClassName("changestrokeinput2")[0].value;

      document.getElementById("ColorPic").value =
        document.getElementById("ColorPic3").value;
      document.getElementById("SetColorToIcon").value =
        document.getElementById("ColorPic3").value;
      var Items = document.getElementsByClassName("MyModal");

      if (Items.length > 0) {
        localStorage.setItem("modal2", Items[0].outerHTML);
        Items[0].replaceWith(" ");
      }
    }
  });

  var width = $(window).width();

  if (width > 757) {
    var Items = document.getElementsByClassName("MyModal");

    if (Items.length > 0) {
      localStorage.setItem("modal2", Items[0].outerHTML);
      Items[0].replaceWith(" ");
    }
  }
});

var colorPicker3 = document.getElementById("ColorPic3");

colorPicker3.addEventListener("change", watchColorPicker3, false);

function watchColorPicker3(event) {
  document.querySelectorAll(".Icon").forEach((p) => {
    if (p.getAttribute("stroke")) {
      p.setAttribute("stroke", event.target.value);
    } else {
      if (p.classList.contains("Icon-Colorful")) {
      } else {
        p.setAttribute("fill", event.target.value);
      }
    }
    document.getElementById("SetColorToIcon3").value = event.target.value;
  });
}

// Set Outline Icon To Defult

var Items = document.getElementsByClassName("Icon_Pack");

for (var i = 0; i < Items.length; i++) {
  if (
    Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg").length == 3
  ) {
  } else {
    var Original = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[3];
  }
  if (
    Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg").length == 5
  ) {
    var Original = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[4];
  }

  var IconSvg =
    Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

  Original = Original.cloneNode(true);
  IconSvg.replaceWith(Original);
}
// End Set Outline Icon To Defult

var checkthemesite = 0;

// For Add Fill WIth To Svg Balck
var Items = document.getElementsByClassName("Icon_Pack");

for (let i = 0; i < Items.length; i++) {
  var Paths = Items[i]
    .getElementsByClassName("Icons_Button_Slider")[0]
    .getElementsByTagName("svg")[2]
    .getElementsByTagName("path");

  for (let j = 0; j < Paths.length; j++) {
    Paths[j].setAttribute("fill", "transparent");
  }
}

function AddLineDownMenuItem(obj) {
  DeleteDownLineItem();
  obj.parentElement.classList.add("Active_Item_MainMenu");
}

function DeleteDownLineItem() {
  const FindLine = document.getElementById("buttom_Line_Menu");
  const CheckItem = FindLine.children;

  for (var i = 0; i < CheckItem.length; i++) {
    CheckItem[i].children[0].parentElement.classList.remove(
      "Active_Item_MainMenu"
    );
  }
}

function Select_Button(obj) {
  var parent = obj.parentElement;
  const childern = parent.children;

  for (var i = 0; i <= childern.length; i++) {
    if (childern[i].classList.contains("bg-Gray")) {
      childern[i].classList.remove("bg-Gray", "p-2", "rounded-lg");
    } else {
      obj.classList.add("bg-Gray", "p-2", "rounded-lg");
    }
  }
}

var count2 = 0;

function ChangeTheme_Suggested(obj) {
  if (count2 % 2 == 0) {
    document
      .getElementsByTagName("head")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<link rel='stylesheet' href='Assets/css/SuggestUs_Dark.css' />"
      );
    ++count2;
    obj.getElementsByTagName("p")[0].innerHTML = "Light";
  } else {
    document
      .getElementsByTagName("head")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<link rel='stylesheet' href='Assets/css/SuggestUs_Light.css' />"
      );

    ++count2;
    obj.getElementsByTagName("p")[0].innerHTML = "Dark";
  }
}

var colorPicker = document.getElementById("ColorPic");

colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll(".Icon").forEach((p) => {
    if (p.getAttribute("stroke")) {
      p.setAttribute("stroke", event.target.value);
    } else {
      if (p.classList.contains("Icon-Colorful")) {
      } else {
        p.setAttribute("fill", event.target.value);
      }
    }
    document.getElementById("SetColorToIcon").value = event.target.value;
  });
}

function ChangeIcon(obj) {
  var container = document.getElementById("ConImageChange");
  var newitem = obj.getElementsByTagName("svg")[0];

  var CopyNewItem = newitem.cloneNode(true);
  var Id_Svg = container.id;

  if (newitem.getElementsByTagName("path").length > 0) {
    var Id_Path = "ContainerImage";
    CopyNewItem.getElementsByTagName("path")[0].setAttribute("id", Id_Path);
  } else {
    var Id_Path = container.getElementsByTagName("path")[0].id;
    CopyNewItem.setAttribute("id", Id_Path);
  }

  CopyNewItem.setAttribute("id", Id_Svg);

  container.replaceWith(CopyNewItem);

  var p = obj
    .getElementsByClassName("con")[0]
    .lastChild.previousSibling.getElementsByTagName("p");

  document.getElementById("Input_Groupe").innerHTML = p[0].innerHTML;
  document.getElementById("svg_Code").innerHTML = p[1].innerHTML;

  var svgcode = document.getElementById("ContainerIm");

  svgcode.getElementsByTagName("svg")[0].style.width =
    document.getElementById("showSize").innerHTML;
  svgcode.getElementsByTagName("svg")[0].style.height =
    document.getElementById("showSize").innerHTML;

  var copysvg = $(svgcode).clone()[0];

  svgcode.getElementsByTagName("svg")[0].style.width = null;
  svgcode.getElementsByTagName("svg")[0].style.height = null;

  copysvg.getElementsByTagName("svg")[0].removeAttribute("id");
  copysvg.getElementsByTagName("svg")[0].removeAttribute("class");
  copysvg.getElementsByTagName("path")[0].removeAttribute("id");
  copysvg.getElementsByTagName("path")[0].removeAttribute("class");
  document.getElementById("Component_Code").innerHTML = htmlEntities(
    copysvg.innerHTML.toString()
  );
}

var colorPicker2 = document.getElementById("ColorPic2");

colorPicker2.addEventListener("change", watchColorPicker2, false);
function watchColorPicker2(event) {
  document.getElementById("SetColorToIcon2").value = event.target.value;
  var Container = document
    .getElementById("ConImageChange")
    .getElementsByTagName("path");
  var NewContainer = document
    .getElementById("ConImageChange")
    .getElementsByTagName("path")[0];

  if (Container.length > 0) {
    if (Container.length > 1) {
      for (i = 0; i < Container.length; i++) {
        if (Container[i].getAttribute("stroke")) {
          Container[i].setAttribute("stroke", event.target.value);
        } else {
          if (Container[i].classList.contains("Icon-Colorful")) {
          } else {
            Container[i].setAttribute("fill", event.target.value);
          }
        }
      }
    } else {
      if (NewContainer.getAttribute("stroke")) {
        NewContainer.setAttribute("stroke", event.target.value);
      } else {
        if (NewContainer.classList.contains("Icon-Colorful")) {
        } else {
          NewContainer.setAttribute("fill", event.target.value);
        }
      }
    }
  } else {
    if (NewContainer.getAttribute("stroke")) {
      NewContainer.setAttribute("stroke", event.target.value);
    } else {
      if (NewContainer.classList.contains("Icon-Colorful")) {
      } else {
        NewContainer.setAttribute("fill", event.target.value);
      }
    }
  }

  var svgcode = document.getElementById("ContainerIm");

  svgcode.getElementsByTagName("svg")[0].style.width =
    document.getElementById("showSize").innerHTML;
  svgcode.getElementsByTagName("svg")[0].style.height =
    document.getElementById("showSize").innerHTML;

  var copysvg = $(svgcode).clone()[0];

  svgcode.getElementsByTagName("svg")[0].style.width = null;
  svgcode.getElementsByTagName("svg")[0].style.height = null;

  copysvg.getElementsByTagName("svg")[0].removeAttribute("id");
  copysvg.getElementsByTagName("svg")[0].removeAttribute("class");
  copysvg.getElementsByTagName("path")[0].removeAttribute("id");
  copysvg.getElementsByTagName("path")[0].removeAttribute("class");

  document.getElementById("Component_Code").innerHTML = htmlEntities(
    copysvg.innerHTML.toString()
  );
}

function Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("Container_Icons");
  tr = table.getElementsByClassName("Icon_Text");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("small")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].parentElement.style.display = "flex";
      } else {
        tr[i].parentElement.style.display = "none";
      }
    }
  }
}

var item;
var name_Icon;  // for use for download icon 

function MultiSelect(obj) {
  name_Icon = obj.getElementsByTagName("small")[2].innerHTML
  
  if (
    document.getElementById("button_MultiSelect1").classList.contains("bg-Gray")
  ) {
    obj.firstChild.nextElementSibling.classList.toggle("bg-Gray");
  } else {
  }

  var container = document.getElementById("ConImageChange");
  var SvgID = container.id;
  if (container.getElementsByTagName("path").length > 0) {
    var PathID = container.getElementsByTagName("path")[0].id;
  } else {
    PathID = "ConImageChange";
  }

  var newItem =
    obj.childNodes[1].firstChild.nextSibling.firstChild.nextElementSibling;
  newItem.style.width = null;
  newItem.style.height = null;
  var CopyNewIte = newItem.cloneNode(true);
  CopyNewIte.setAttribute("id", SvgID);
  CopyNewIte.getElementsByTagName("path")[0].setAttribute("id", PathID);

  container.replaceWith(CopyNewIte);

  newItem.style.width = document.getElementById("showSize").innerHTML;
  newItem.style.height = document.getElementById("showSize").innerHTML;

  var Items_New = obj.childNodes[5].getElementsByClassName("con");
  var SliderItems = document.getElementById("Items_Slider");
  SliderItems.innerHTML = "";
  for (let i = 0; i < Items_New.length; i++) {
    var IconItems = Items_New[i];
    IconItems.getElementsByTagName("svg")[0].style.width = null;
    IconItems.getElementsByTagName("svg")[0].style.height = null;
    var CopyIconItem = $(IconItems).clone();

    const newDiv = document.createElement("div");
    newDiv.className =
      "Item-Carousel Pointer d-flex justify-content-center align-content-center mx-2";
    newDiv.setAttribute("onclick", "ChangeIcon(this)");
    newDiv.appendChild(CopyIconItem[0]);

    SliderItems.appendChild(newDiv);
    IconItems.getElementsByTagName("svg")[0].style.width =
      document.getElementById("showSize").innerHTML;
    IconItems.getElementsByTagName("svg")[0].style.height =
      document.getElementById("showSize").innerHTML;
  }

  var p = obj.getElementsByClassName("Code_Text")[0].getElementsByTagName("p");

  document.getElementById("Input_Groupe").innerHTML = p[0].innerHTML;
  document.getElementById("svg_Code").innerHTML = p[1].innerHTML;

  var svgcode = document.getElementById("ContainerIm");

  svgcode.getElementsByTagName("svg")[0].style.width =
    document.getElementById("showSize").innerHTML;
  svgcode.getElementsByTagName("svg")[0].style.height =
    document.getElementById("showSize").innerHTML;

  var copysvg = $(svgcode).clone()[0];

  svgcode.getElementsByTagName("svg")[0].style.width = null;
  svgcode.getElementsByTagName("svg")[0].style.height = null;

  copysvg.getElementsByTagName("svg")[0].removeAttribute("id");
  copysvg.getElementsByTagName("svg")[0].removeAttribute("class");
  copysvg.getElementsByTagName("path")[0].removeAttribute("id");
  copysvg.getElementsByTagName("path")[0].removeAttribute("class");

  document.getElementById("Component_Code").innerHTML = htmlEntities(
    copysvg.innerHTML.toString()
  );
}

function htmlEntities(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function ClickMulti(obj) {
  $(".MultipleSelect_Menu").toggle();

  var Items = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < Items.length; i++) {
    $(Items[i]).attr(
      "data-target",
      $(Items[i]).attr("data-target") == "" ? "#exampleModal" : ""
    );
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    console.log("haseeeeeeee");
    var Items2 = document.getElementsByClassName("Icon_Pack-1");

    for (var i1 = 0; i1 < Items2.length; i1++) {
      $(Items2[i1]).attr(
        "data-target",
        $(Items2[i1]).attr("data-target") == "" ? "#exampleModal" : ""
      );
    }
  }

  if (obj.classList.contains("bg-Gray")) {
    obj.classList.remove("bg-Gray", "rounded-lg");
    var items = document.getElementsByClassName("Icon_Pack");

    for (var i = 0; i < items.length; i++) {
      if (items[i].firstChild.nextSibling.classList.contains("bg-Gray")) {
        items[i].firstChild.nextSibling.classList.remove("bg-Gray");
      }
      if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
        var myitem = document.getElementsByClassName("Icon_Pack-1");

        for (let w = 0; w < myitem.length; w++) {
          if (myitem[w].firstChild.nextSibling.classList.contains("bg-Gray")) {
            myitem[w].firstChild.nextSibling.classList.remove("bg-Gray");
          }
        }
      }
    }
  } else {
    obj.classList.add("bg-Gray", "rounded-lg");
  }
}

function CancleMultiSelect() {
  var myitem = document.getElementsByClassName("MultipleSelect_Menu")[0];
  myitem.style.display = "none";

  var button1 = document.getElementById("button_MultiSelect1");

  var Items = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < Items.length; i++) {
    $(Items[i]).attr(
      "data-target",
      $(Items[i]).attr("data-target") == "" ? "#exampleModal" : ""
    );
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    console.log("haseeeeeeee");
    var Items2 = document.getElementsByClassName("Icon_Pack-1");

    for (var i1 = 0; i1 < Items2.length; i1++) {
      $(Items2[i1]).attr(
        "data-target",
        $(Items2[i1]).attr("data-target") == "" ? "#exampleModal" : ""
      );
    }
  }

  if (button1.classList.contains("bg-Gray")) {
    button1.classList.remove("bg-Gray", "rounded-lg");

    if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
      var myitem = document.getElementsByClassName("Icon_Pack-1");

      for (let w = 0; w < myitem.length; w++) {
        if (
          myitem[w].firstChild.nextElementSibling.classList.contains("bg-Gray")
        ) {
          myitem[w].firstChild.nextElementSibling.classList.remove("bg-Gray");
        }
      }
    }

    var items = document.getElementsByClassName("Icon_Pack");

    for (var i = 0; i <= items.length; i++) {
      if (
        items[i].firstChild.nextElementSibling.classList.contains("bg-Gray")
      ) {
        items[i].firstChild.nextElementSibling.classList.remove("bg-Gray");
      }
    }
  } else {
    button1.classList.add("bg-Gray", "rounded-lg");
  }
}

function CopyText(obj) {
  var copyText = obj.parentElement.innerText;
  navigator.clipboard.writeText(copyText);

  Toastify({
    text: "Copied text",
    className: "info",
    duration: 3000,
    style: {
      borderRadius: "16px",
      boxShadow: "none",
    },
  }).showToast();
}

function CopyTextIcon() {
  var copyText = document.getElementById("Component_Code").parentElement;
  navigator.clipboard.writeText(copyText.innerText);

  Toastify({
    text: "Icon Copied :)",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      borderRadius: "16px",
      boxShadow: "none",
    },
  }).showToast();
}

function DownloadPNG(name = name_Icon) {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctxt = canvas.getContext("2d");
    ctxt.fillStyle = "#fff";
    ctxt.fillRect(0, 0, canvas.width, canvas.height);
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    ctxt.drawImage(img, 0, 0);
    var a = document.createElement("a");
    //console.log(canvas.toDataURL("image/png"));
    a.href = canvas.toDataURL("image/png");
    document.body.appendChild(a);
    a.download = `"${name}".png`;
    a.click();
    document.body.removeChild(a);
  };
  var innerSvg = document.querySelector("#ConImageChange");
  var svgText = new XMLSerializer().serializeToString(innerSvg);
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svgText);
}

function donloadSVG(name = name_Icon) {
  var svgEl = document.getElementById("ConImageChange");
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgEl.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  console.log(svgUrl);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `"${name}".svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  console.log(downloadLink);
  document.body.removeChild(downloadLink);
}

function uniqueID() {
  return Math.floor(Math.random() * Date.now());
}

function multiSelect() {
  var myitem = document.getElementsByClassName("MultipleSelect_Menu")[0];
  var zip = new JSZip();
  myitem.style.display = "none";
  var button1 = document.getElementById("button_MultiSelect1");

  var Items = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < Items.length; i++) {
    $(Items[i]).attr(
      "data-target",
      $(Items[i]).attr("data-target") == "" ? "#exampleModal" : ""
    );
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    var Items2 = document.getElementsByClassName("Icon_Pack-1");

    for (var i1 = 0; i1 < Items2.length; i1++) {
      $(Items2[i1]).attr(
        "data-target",
        $(Items2[i1]).attr("data-target") == "" ? "#exampleModal" : ""
      );
    }
  }

  if (button1.classList.contains("bg-Gray")) {
    if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
      var myitem = document.getElementById("Container_Icons").children;
      button1.classList.remove("bg-Gray", "p-2", "rounded-lg");
      var count2 = 0;

      for (var i2 = 0; i2 < myitem.length; i2++) {
        if (
          myitem[i2].firstChild.nextElementSibling.classList.contains("bg-Gray")
        ) {
          ++count2;
        }
      }

      for (let q = 0; q < myitem.length; q++) {
        if (
          myitem[q].firstChild.nextElementSibling.classList.contains("bg-Gray")
        ) {
          myitem[q].firstChild.nextElementSibling.classList.remove("bg-Gray");
          var Container1 = document.querySelector("#ConImageChange");

          var mySvg1 =
            myitem[q].childNodes[1].firstChild.nextSibling.getElementsByTagName(
              "svg"
            )[0];
          var copySvg1 = mySvg1.cloneNode(true);
          var text1 = myitem[q]
            .getElementsByClassName("Icon_Text")[0]
            .getElementsByTagName("small")[0].innerHTML;
          copySvg1.setAttribute("id", "ConImageChange");

          Container1.replaceWith(copySvg1);
          if (document.getElementById("pngtosvg").innerText === "PNG") {
            DownloadPngAsZip(zip, count2, text1 + "_" + uniqueID());
            //     DownloadPNG(text1);
          } else if (document.getElementById("pngtosvg").innerText === "SVG") {
            DownloadSvgAsZip(zip, count2, text1 + "_" + uniqueID());
            // donloadSVG(text1);
          }
        }
      }
    } else {
      var items = document.getElementsByClassName("Icon_Pack");
      var count = 0;

      for (var i1 = 0; i1 < items.length; i1++) {
        if (
          items[i1].firstChild.nextElementSibling.classList.contains("bg-Gray")
        ) {
          ++count;
        }
      }

      for (var i = 0; i < items.length; i++) {
        if (
          items[i].firstChild.nextElementSibling.classList.contains("bg-Gray")
        ) {
          items[i].firstChild.nextElementSibling.classList.remove("bg-Gray");
          button1.classList.remove("bg-Gray", "p-2", "rounded-lg");

          var Container = document.querySelector("#ConImageChange");

          var mySvg =
            items[i].childNodes[1].firstChild.nextSibling.getElementsByTagName(
              "svg"
            )[0];
          var copySvg = mySvg.cloneNode(true);
          var text = items[i]
            .getElementsByClassName("Icon_Text")[0]
            .getElementsByTagName("small")[0].innerHTML;
          copySvg.setAttribute("id", "ConImageChange");

          Container.replaceWith(copySvg);

          if (document.getElementById("pngtosvg").innerText === "PNG") {
            console.log(count);
            //   DownloadPNG(text);
            DownloadPngAsZip(zip, count, text);
          } else if (document.getElementById("pngtosvg").innerText === "SVG") {
            DownloadSvgAsZip(zip, count, text);
            //  donloadSVG(text);
          }
        }
      }
    }
  }
}

function SwitchColor1(obj) {
  var Check = obj.innerText.toUpperCase();

  var Items = document.getElementsByClassName("Icon_Pack");
  var ItemClick = document.getElementsByClassName("Switch1");
  var MainCon = document.getElementById("Container_Icons");

  for (let j = 0; j < ItemClick.length; j++) {
    if (ItemClick[j].classList.contains("Font14")) {
      ItemClick[j].getElementsByTagName("svg")[0].style.width = "0px";
      ItemClick[j].classList.remove("Font14");
      ItemClick[j].classList.remove("Bold");
    }
  }

  obj.getElementsByTagName("svg")[0].style.width = "25px";
  obj.classList.add("Font14");
  obj.classList.add("Bold");

  // $(obj).toggleClass("NewGray");

  // // -----------------------------------------------------------------

  for (var i = 0; i < Items.length; i++) {
    var Bold = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[0];
    var Colorful = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[1];
    var Thin = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[2];

    if (
      Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg").length == 3
    ) {
    } else {
      var Original = Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[3];
    }
    if (
      Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg").length == 5
    ) {
      var Original = Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[4];
    }

    var IconSvg =
      Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1");

    if (Icon_Pack_1.length == 0) {
      switch (Check) {
        case "BOLD":
          Bold = Bold.cloneNode(true);
          IconSvg.replaceWith(Bold);
          break;

        case "COLORFUL":
          Colorful = Colorful.cloneNode(true);
          IconSvg.replaceWith(Colorful);
          break;

        case "LINEAR":
          Thin = Thin.cloneNode(true);
          IconSvg.replaceWith(Thin);
          break;

        case "OUTLINE":
          Original = Original.cloneNode(true);
          IconSvg.replaceWith(Original);
          break;
      }
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1[j].replaceWith(" ");
      }

      switch (Check) {
        case "BOLD":
          Bold = Bold.cloneNode(true);
          IconSvg.replaceWith(Bold);
          break;

        case "COLORFUL":
          Colorful = Colorful.cloneNode(true);
          IconSvg.replaceWith(Colorful);
          break;

        case "LINEAR":
          Thin = Thin.cloneNode(true);
          IconSvg.replaceWith(Thin);
          break;

        case "OUTLINE":
          Original = Original.cloneNode(true);
          IconSvg.replaceWith(Original);
          break;
      }
    }
  }

  if (Check == "ALL STYLES") {
    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1").length;
    if (Icon_Pack_1 == 0) {
      for (let i = 0; i < Items.length; i++) {
        var Bold = Items[i]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[0];
        var Colorful = Items[i]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[1];
        var Thin = Items[i]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[2];
        // For Original
        if (
          Items[i]
            .getElementsByClassName("Icons_Button_Slider")[0]
            .getElementsByTagName("svg").length == 3
        ) {
          var Original = Items[i]
            .getElementsByClassName("Icons_Button_Slider")[0]
            .getElementsByTagName("svg")[2];
        } else {
          var Original = Items[i]
            .getElementsByClassName("Icons_Button_Slider")[0]
            .getElementsByTagName("svg")[3];
        }
        if (
          Items[i]
            .getElementsByClassName("Icons_Button_Slider")[0]
            .getElementsByTagName("svg").length == 5
        ) {
          var Original = Items[i]
            .getElementsByClassName("Icons_Button_Slider")[0]
            .getElementsByTagName("svg")[4];
        }
        // End Original

        var MyBold = Items[i].cloneNode(true);
        var MyColorful = Items[i].cloneNode(true);
        var MyThin = Items[i].cloneNode(true);

        MyBold.className = "Icon_Pack-1 rounded-lg";
        MyColorful.className = "Icon_Pack-1 rounded-lg";
        MyThin.className = "Icon_Pack-1 rounded-lg";

        Bold = Bold.cloneNode(true);
        Colorful = Colorful.cloneNode(true);
        Thin = Thin.cloneNode(true);

        MyBold.firstChild.nextElementSibling
          .getElementsByTagName("svg")[0]
          .replaceWith(Bold);
        MyColorful.firstChild.nextElementSibling
          .getElementsByTagName("svg")[0]
          .replaceWith(Colorful);
        MyThin.firstChild.nextElementSibling
          .getElementsByTagName("svg")[0]
          .replaceWith(Thin);

        MainCon.appendChild(MyBold);
        MainCon.appendChild(MyColorful);
        MainCon.appendChild(MyThin);

        var IconSvg =
          Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

        Original = Original.cloneNode(true);
        IconSvg.replaceWith(Original);
      }
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1.replaceWith(" ");
      }
    }
  }
}

function SwitchColor(obj) {
  var Items = document.getElementsByClassName("Icon_Pack");

  for (let i = 0; i < Items.length; i++) {
    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1");
    if (Icon_Pack_1.length == 0) {
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1[j].replaceWith(" ");
      }
    }
  }

  var Check = obj.innerText.toUpperCase();
  var Items = document.getElementsByClassName("Icon_Pack");
  var ItemClick = document.getElementsByClassName("Switch");

  for (let j = 0; j < ItemClick.length; j++) {
    if (ItemClick[j].classList.contains("Font14")) {
      ItemClick[j].getElementsByTagName("svg")[0].style.width = "0px";
      ItemClick[j].classList.remove("Font14");
      ItemClick[j].classList.remove("Bold");
    }
  }

  obj.getElementsByTagName("svg")[0].style.width = "25px";
  obj.classList.add("Font14");
  obj.classList.add("Bold");

  for (var i = 0; i < Items.length; i++) {
    if (Items[i].lastChild.previousSibling.textContent.toUpperCase() == Check) {
      Items[i].style.display = "flex";
    } else {
      Items[i].style.display = "none";
    }
  }

  for (let n = 0; n < Items.length; n++) {
    if (Check === "ALL CATEGORIES") {
      Items[n].style.display = "flex";
    }
  }
}

function SetColorToIcons(obj) {
  var text = obj.value;
  document.getElementById("ColorPic").value = text;

  var Items = document.getElementsByClassName("Icon");

  for (let i = 0; i < Items.length; i++) {
    if (Items[i].getAttribute("stroke")) {
      Items[i].setAttribute("stroke", text);
    } else {
      if (Items[i].classList.contains("Icon-Colorful")) {
      } else {
        Items[i].setAttribute("fill", text);
      }
    }
  }
}

function SetColorToIcons3(obj) {
  var text = obj.value;
  document.getElementById("ColorPic3").value = text;

  var Items = document.getElementsByClassName("Icon");

  for (let i = 0; i < Items.length; i++) {
    if (Items[i].getAttribute("stroke")) {
      Items[i].setAttribute("stroke", text);
    } else {
      Items[i].setAttribute("fill", text);
    }

    if (
      document
        .getElementById("mycolorful")
        .parentElement.classList.contains("Font14")
    ) {
      for (var i1 = 0; i1 < Items.length; i1++) {
        var Colorful = Items[i1]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[1];
        var IconSvg =
          Items[i1].firstChild.nextElementSibling.getElementsByTagName(
            "svg"
          )[0];

        Colorful = Colorful.cloneNode(true);
        IconSvg.replaceWith(Colorful);
      }
    }
  }
}

function SetColorToIcons2(obj) {
  var text = obj.value;
  document.getElementById("ColorPic2").value = text;

  var Container = document
    .getElementById("ConImageChange")
    .getElementsByTagName("path");
  var NewContainer = document.getElementById("ConImageChange");

  if (Container.length > 0) {
    if (Container.length > 1) {
      for (i = 0; i < Container.length; i++) {
        if (Container[i].getAttribute("stroke")) {
          Container[i].setAttribute("stroke", text);
        } else {
          if (NewContainer.classList[0] == "colorful") {
            if (Container.length > 3) {
              Container[0].setAttribute("fill", text);
              Container[1].setAttribute("fill", text);
              Container[2].setAttribute("fill", text);
              Container[3].setAttribute("fill", text);
            }
            if (Container.length <= 3) {
              Container[1].setAttribute("fill", text);
            }
          } else {
            Container[i].setAttribute("fill", text);
          }
        }
      }
    } else {
      if (Container[0].getAttribute("stroke")) {
        Container[0].setAttribute("stroke", text);
      } else {
        Container[0].setAttribute("fill", text);
      }
    }
  } else {
    if (NewContainer.getAttribute("stroke")) {
      NewContainer.setAttribute("stroke", text);
    } else {
      NewContainer.setAttribute("fill", text);
    }
  }

  var svgcode = document.getElementById("ContainerIm");

  svgcode.getElementsByTagName("svg")[0].style.width =
    document.getElementById("showSize").innerHTML;
  svgcode.getElementsByTagName("svg")[0].style.height =
    document.getElementById("showSize").innerHTML;

  var copysvg = $(svgcode).clone()[0];

  svgcode.getElementsByTagName("svg")[0].style.width = null;
  svgcode.getElementsByTagName("svg")[0].style.height = null;

  copysvg.getElementsByTagName("svg")[0].removeAttribute("id");
  copysvg.getElementsByTagName("svg")[0].removeAttribute("class");
  copysvg.getElementsByTagName("path")[0].removeAttribute("id");
  copysvg.getElementsByTagName("path")[0].removeAttribute("class");

  document.getElementById("Component_Code").innerHTML = htmlEntities(
    copysvg.innerHTML.toString()
  );
}

// ===============================================================

// Change Size Svg To 40px with reflash

var input = document.getElementsByClassName("rangeSize")[0];
var size = input.value + "px";
var sizeView = "0 0 " + input.value + " " + input.value;
document.getElementById("showSize").innerHTML = size;

var Items = document.getElementsByClassName("Icon_Pack");

for (let i = 0; i < Items.length; i++) {
  var svgs = Items[i].getElementsByTagName("svg");

  for (let j = 0; j < svgs.length; j++) {
    var svg = svgs[j];

    svg.style.width = size;
    svg.style.height = size;
  }
}

// End

function CHangeSize() {
  var input = document.getElementsByClassName("rangeSize")[0];
  var size = input.value + "px";
  var sizeView = "0 0 " + input.value + " " + input.value;
  document.getElementById("showSize").innerHTML = size;

  var Items = document.getElementsByClassName("Icon_Pack");

  for (let i = 0; i < Items.length; i++) {
    var svgs = Items[i].getElementsByTagName("svg");

    for (let j = 0; j < svgs.length; j++) {
      var svg = svgs[j];

      svg.style.width = size;
      svg.style.height = size;
    }
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    var Items_1 = document.getElementsByClassName("Icon_Pack-1");
    for (let i = 0; i < Items_1.length; i++) {
      var svgs = Items_1[i].getElementsByTagName("svg");

      for (let j = 0; j < svgs.length; j++) {
        var svg = svgs[j];

        svg.style.width = size;
        svg.style.height = size;
      }
    }
  }
}

// ===============================================================

var Items = document.getElementsByClassName("Icon_Pack");

for (let s = 0; s < Items.length; s++) {
  var path = Items[s]
    .getElementsByClassName("Icons_Button_Slider")[0]
    .getElementsByClassName("con")[2]
    .getElementsByTagName("svg")[0]
    .getElementsByTagName("path");

  for (let j = 0; j < path.length; j++) {
      path[j].setAttribute("stroke", "#56566F");
      path[j].setAttribute("stroke-width", ".5px");


      if(path[j].classList.contains("defult-fill"))
      {
        path[j].setAttribute("stroke-width", "1.2px");
      }
      else
      {
        path[j].setAttribute("fill", "#56566F");
      }
    
    
      }
  
}

function ChangeStroke() {
  var input = document.getElementsByClassName("rangeStroke")[0];
  var size = input.value + "px";
  var ItemClick = document.getElementsByClassName("Switch1");
  var color = document.getElementById("SetColorToIcon").value;
  document.getElementById("showStroke").innerHTML = size;

  var Items = document.getElementsByClassName("Icon_Pack");

  for (let s = 0; s < Items.length; s++) {
    var path = Items[s]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByClassName("con")[2]
      .getElementsByTagName("svg")[0]
      .getElementsByTagName("path");

    for (let j = 0; j < path.length; j++) {
      path[j].setAttribute("stroke", color);
      path[j].setAttribute("stroke-width", input.value);
      
      var Num1 = Number(".7");
      var Num2 = Number(input.value.toString());

        if(path[j].classList.contains("defult-fill"))
        {
          var Sum = Num2 + Num1;
          path[j].setAttribute("stroke-width", Sum);
        }
        else
        {
        path[j].setAttribute("fill", color);
        }
    

    }
  }

  for (let j = 0; j < ItemClick.length; j++) {
    if (ItemClick[j].classList.contains("Font14")) {
      ItemClick[j].getElementsByTagName("svg")[0].style.width = "0px";
      ItemClick[j].classList.remove("Font14");
      ItemClick[j].classList.remove("Bold");
    }
  }

  ItemClick[3].getElementsByTagName("svg")[0].style.width = "25px";
  ItemClick[3].classList.add("Font14");
  ItemClick[3].classList.add("Bold");

  var Items1 = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < Items1.length; i++) {
    var Thin = Items1[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[2];

    var IconSvg =
      Items1[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1");
    if (Icon_Pack_1.length == 0) {
      Thin = Thin.cloneNode(true);
      IconSvg.replaceWith(Thin);
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1[j].replaceWith(" ");
      }

      Thin = Thin.cloneNode(true);
      IconSvg.replaceWith(Thin);
    }
  }
}




















function resetForm() {
  var Items = document.getElementsByClassName("Icon_Pack");
  var color = document.getElementById("SetColorToIcon").value;
  var ItemClick = document.getElementsByClassName("Switch1");

  document.getElementById("showSize").innerHTML = "40px";
  document.getElementById("showStroke").innerHTML = ".5px";

  // Reset Size

  for (let i = 0; i < Items.length; i++) {
    var svgs = Items[i].getElementsByTagName("svg");

    for (let j = 0; j < svgs.length; j++) {
      var svg = svgs[j];

      svg.style.width = "40px";
      svg.style.height = "40px";
    }
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    var Items_1 = document.getElementsByClassName("Icon_Pack-1");
    for (let i = 0; i < Items_1.length; i++) {
      var svgs = Items_1[i].getElementsByTagName("svg");

      for (let j = 0; j < svgs.length; j++) {
        var svg = svgs[j];

        svg.style.width = "40px";
        svg.style.height = "40px";
      }
    }
  }

  // End Reset Size

  // Reset Stroke

  for (let s = 0; s < Items.length; s++) {
    var path = Items[s]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByClassName("con")[2]
      .getElementsByTagName("svg")[0]
      .getElementsByTagName("path");

    for (let j = 0; j < path.length; j++) {
      path[j].setAttribute("stroke", color);
      path[j].setAttribute("stroke-width", ".5");

      if(path[j].classList.contains("defult-fill"))
      {
        path[j].setAttribute("stroke-width", "1.2");
      }
      else
      {
        path[j].setAttribute("fill", color);

      }
    }
  }

  // Change To Thin For That Copy
  for (var i = 0; i < Items.length; i++) {
    var Thin = Items[i]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[2];

    var IconSvg =
      Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1");
    if (Icon_Pack_1.length == 0) {
      Thin = Thin.cloneNode(true);
      IconSvg.replaceWith(Thin);
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1[j].replaceWith(" ");
      }

      Thin = Thin.cloneNode(true);
      IconSvg.replaceWith(Thin);
    }
  }

  // After That Chenge To Outline
  for (var i1 = 0; i1 < Items.length; i1++) {
    if (
      Items[i1]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg").length == 3
    ) {
    } else {
      var Original = Items[i1]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[3];
    }
    if (
      Items[i1]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg").length == 5
    ) {
      var Original = Items[i1]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[4];
    }

    var IconSvg =
      Items[i1].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

    var Icon_Pack_1 = document.getElementsByClassName("Icon_Pack-1");
    if (Icon_Pack_1.length == 0) {
      Original = Original.cloneNode(true);
      IconSvg.replaceWith(Original);
    } else {
      for (let j = 0; j < Icon_Pack_1.length; j++) {
        Icon_Pack_1[j].replaceWith(" ");
      }

      Original = Original.cloneNode(true);
      IconSvg.replaceWith(Original);
    }
  }

  for (let j = 0; j < ItemClick.length; j++) {
    if (ItemClick[j].classList.contains("Font14")) {
      ItemClick[j].getElementsByTagName("svg")[0].style.width = "0px";
      ItemClick[j].classList.remove("Font14");
      ItemClick[j].classList.remove("Bold");
    }
  }

  ItemClick[1].getElementsByTagName("svg")[0].style.width = "25px";
  ItemClick[1].classList.add("Font14");
  ItemClick[1].classList.add("Bold");

  // End Reset Stroke

  // Reset Color

  var color = jQuery("#showSize").css("color");

  document.querySelectorAll(".Icon").forEach((p) => {
    if (p.getAttribute("stroke")) {
      p.setAttribute("stroke", color);
    } else {
      if (p.classList.contains("Icon-Colorful")) {
      } else {
        p.setAttribute("fill", color);
      }
    }
    document.getElementById("SetColorToIcon").value = color;
  });

  // End Reset Color
}

function SwitchSvgPng() {
  var text = document.getElementById("pngtosvg").innerHTML.toUpperCase();

  if (text === "PNG") {
    document.getElementById("pngtosvg").innerHTML = "SVG";
  } else if (text === "SVG") {
    document.getElementById("pngtosvg").innerHTML = "PNG";
  }
}

const shareData = {
  title: "ICONPAQ",
  text: "ICONPAQ\nOpen source, high quality and free icon library with over 300\n\n",
  url: window.location.href.toString(),
};

const btn = document.querySelector("#ShareLink");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    Toastify({
      text: "Something went wrong!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #FF6464, #FF7D7D)",
        borderRadius: "16px",
        boxShadow: "none",
      },
    }).showToast();
  }
});

const btn1 = document.querySelector("#ShareLink1");

// Share must be triggered by "user activation"
btn1.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    Toastify({
      text: "Something went wrong!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #FF6464, #FF7D7D)",
        borderRadius: "16px",
        boxShadow: "none",
      },
    }).showToast();
  }
});

async function ShareSVGCode() {
  const ShareSvg = {
    title: "SVG Code",
    text: document.getElementById("Component_Code").innerText,
  };
  try {
    await navigator.share(ShareSvg);
  } catch (err) {
    Toastify({
      text: "Something went wrong!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #FF6464, #FF7D7D)",
        borderRadius: "16px",
        boxShadow: "none",
      },
    }).showToast();
  }
}

function ChangeItemMenu_Small(obj) {
  var con = document.getElementById("consmallmenu").getElementsByTagName("li");

  for (let i = 0; i < con.length; i++) {
    if (con[i].classList.contains("Item_Menu_Small")) {
      con[i].classList.remove("Item_Menu_Small");
    }
  }

  obj.classList.add("Item_Menu_Small");
}

var countPng = 0;

function DownloadPngAsZip(zip, getCount, name) {
  var img = new Image();
  img.crossOrigin = "Anonymous";

  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctxt = canvas.getContext("2d");
    ctxt.fillStyle = "#fff";
    ctxt.fillRect(0, 0, canvas.width, canvas.height);
    ctxt.clearRect(0, 0, canvas.width, canvas.height);
    ctxt.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");
    var base64String = dataURL.replace("data:image/png;base64,", "");

    zip.file("Icons/" + name + ".png", base64String, { base64: true });
    ++countPng;
    if (countPng == getCount) {
      zip.file(
        "Icons/ICONPAQ.txt",
        "Thanks For Use Us Icons , Enjoy it ❤️ \n\nCount Of Icon Downloaded :  " +
          getCount +
          " Icon\n \nType :  PNG\n\n\nICONPAQ.COM :)"
      );
      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "Icons.zip");
      });
      countPng = 0;
    }
  };
  var innerSvg = document.querySelector("#ConImageChange");
  var svgText = new XMLSerializer().serializeToString(innerSvg);
  img.src = "data:image/svg+xml;utf8," + encodeURIComponent(svgText);
}

var countSvg = 0;

function DownloadSvgAsZip(zip, getCount, name) {
  var svgElement = document.getElementById("ConImageChange");
  var svgString = new XMLSerializer().serializeToString(svgElement);
  var decoded = unescape(encodeURIComponent(svgString));
  var base64String = btoa(decoded);

  zip.file("Icons/" + name + ".svg", base64String, { base64: true });
  ++countSvg;
  if (countSvg == getCount) {
    zip.file(
      "Icons/ICONPAQ.txt",
      "Thanks For Use Us Icons , Enjoy it ❤️ \n\nCount Of Icon Downloaded :  " +
        getCount +
        " Icon\n \nType :  SVG\n\n\nICONPAQ.COM :)"
    );
    zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, "Icons.zip");
    });
    countSvg = 0;
  }
}


 // Start Set Color To Black Fro First Time 

 var path = document.getElementsByTagName("path");

 for (let i = 0; i < path.length; i++) {
   if (path[i].getAttribute("stroke")) {
     path[i].setAttribute("stroke", "#56566F");
     if (path[i].getAttribute("fill") !== "transparent") {
       path[i].setAttribute("fill", "#56566F");
     }
   } else {
     if (path[i].classList.contains("Icon-Colorful")) {
     } else {
       path[i].setAttribute("fill", "#56566F");
     }
   }
 }
 // End Set Color To Black Fro First Time 


// Start Change Theme Index.html
var count1 = 0;
var CheckTheme = true;

function ChangeTheme_Index(obj) {
  if (count1 == 0) {
    CheckTheme = false;
    document
      .getElementsByTagName("head")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<link rel='stylesheet' href='Assets/css/index_Dark.css' />"
      );
    checkthemesite = 0;
    localStorage.setItem("CheckTheme", checkthemesite);
    document.getElementById("introimage").src = "Assets/img/Intro_Image1.png";
    document.getElementById("image-logo1").src = "./Assets/img/logo_dark.png";
    document.getElementById("image-logo2").src = "./Assets/img/logo_dark.png";
    document.getElementById("SetColorToIcon").value = "#f2f2f8";
    document.getElementById("SetColorToIcon2").value = "#f2f2f8";
    document.getElementById("ColorPic2").value = "#f2f2f8";
    document.getElementById("ColorPic").value = "#f2f2f8";

    if (document.getElementById("SetColorToIcon3")) {
      document.getElementById("SetColorToIcon3").value = "#f2f2f8";
      document.getElementById("ColorPic3").value = "#f2f2f8";
    }

    document.getElementById("changeicontheme_SmallMenu").className = "";
    document.getElementById("changeicontheme").className = "";

    document.getElementById("svgicontheme").style.display = "inline-block";
    document.getElementById("svgicontheme1").style.display = "inline-block";

    // Add Color To Svg
    var path = document.getElementsByTagName("path");
    var svg = document.getElementsByTagName("svg");
    for (let i = 0; i < svg.length; i++) {
      if (svg[i].getAttribute("stroke")) {
        svg[i].setAttribute("stroke", "#f2f2f8");
      }
    }
    for (let i = 0; i < path.length; i++) {
      if (path[i].getAttribute("stroke")) {
        path[i].setAttribute("stroke", "#f2f2f8");

        if (path[i].getAttribute("fill") !== "transparent") {
          path[i].setAttribute("fill", "#f2f2f8");
        }

        if (path[i].parentElement.getAttribute("fill") == "none") {
        } else {
          path[i].parentElement.removeAttribute("fill");
        }
      } else {
        if (path[i].classList.contains("Icon-Colorful")) {
        } else {
          path[i].setAttribute("fill", "#f2f2f8");
        }
      }
    }
    // END Add Color To Svg

    count1 = 1;
  } else {
    CheckTheme = false;
    document
      .getElementsByTagName("head")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<link rel='stylesheet' href='Assets/css/index_Light.css' />"
      );
    checkthemesite = 1;
    localStorage.setItem("CheckTheme", checkthemesite);
    document.getElementById("introimage").src = "Assets/img/Intro_Image.png";
    document.getElementById("image-logo1").src = "./Assets/img/logo.png";
    document.getElementById("image-logo2").src = "./Assets/img/logo.png";
    if (document.getElementById("SetColorToIcon3")) {
      document.getElementById("ColorPic3").value = "#56566F";
      document.getElementById("SetColorToIcon3").value = "#56566F";
    }

    document.getElementById("SetColorToIcon").value = "#56566F";
    document.getElementById("ColorPic").value = "#56566F";
    document.getElementById("ColorPic2").value = "#56566F";
    document.getElementById("SetColorToIcon2").value = "#56566F";
    count1 = 0;

    document.getElementById("changeicontheme_SmallMenu").className =
      "fa fa-moon-o";
    document.getElementById("changeicontheme").className = "fa fa-moon-o";

    document.getElementById("svgicontheme").style.display = "none";
    document.getElementById("svgicontheme1").style.display = "none";

    // Add Color To Svg

    var path = document.getElementsByTagName("path");

    for (let i = 0; i < path.length; i++) {
      if (path[i].getAttribute("stroke")) {
        path[i].setAttribute("stroke", "#56566F");
        if (path[i].getAttribute("fill") !== "transparent") {
          path[i].setAttribute("fill", "#56566F");
        }
      } else {
        if (path[i].classList.contains("Icon-Colorful")) {
        } else {
          path[i].setAttribute("fill", "#56566F");
        }
      }
    }
    // END Add Color To Svg
  }
}

if (localStorage.getItem("CheckTheme") == 0) {
  CheckTheme = false;
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      "<link rel='stylesheet' href='Assets/css/index_Dark.css' />"
    );
  checkthemesite = 0;
  localStorage.setItem("CheckTheme", checkthemesite);
  document.getElementById("introimage").src = "Assets/img/Intro_Image1.png";
  document.getElementById("image-logo1").src = "./Assets/img/logo_dark.png";
  document.getElementById("image-logo2").src = "./Assets/img/logo_dark.png";
  document.getElementById("SetColorToIcon").value = "#f2f2f8";
  document.getElementById("SetColorToIcon2").value = "#f2f2f8";
  document.getElementById("ColorPic2").value = "#f2f2f8";
  document.getElementById("ColorPic").value = "#f2f2f8";

  if (document.getElementById("SetColorToIcon3")) {
    document.getElementById("SetColorToIcon3").value = "#f2f2f8";
    document.getElementById("ColorPic3").value = "#f2f2f8";
  }

  document.getElementById("changeicontheme_SmallMenu").className = "";
  document.getElementById("changeicontheme").className = "";

  document.getElementById("svgicontheme").style.display = "inline-block";
  document.getElementById("svgicontheme1").style.display = "inline-block";

  // Add Color To Svg
  var path = document.getElementsByTagName("path");
  var svg = document.getElementsByTagName("svg");
  for (let i = 0; i < svg.length; i++) {
    if (svg[i].getAttribute("stroke")) {
      svg[i].setAttribute("stroke", "#f2f2f8");
    }
  }
  for (let i = 0; i < path.length; i++) {
    if (path[i].getAttribute("stroke")) {
      path[i].setAttribute("stroke", "#f2f2f8");

      if (path[i].getAttribute("fill") !== "transparent") {
        path[i].setAttribute("fill", "#f2f2f8");
      }

      if (path[i].parentElement.getAttribute("fill") == "none") {
      } else {
        path[i].parentElement.removeAttribute("fill");
      }
    } else {
      if (path[i].classList.contains("Icon-Colorful")) {
      } else {
        path[i].setAttribute("fill", "#f2f2f8");
      }
    }
  }
  // END Add Color To Svg

  count1 = 1;
} else if (localStorage.getItem("CheckTheme") == 1) {
  CheckTheme = false;
  document
    .getElementsByTagName("head")[0]
    .insertAdjacentHTML(
      "beforeend",
      "<link rel='stylesheet' href='Assets/css/index_Light.css' />"
    );
  checkthemesite = 1;
  localStorage.setItem("CheckTheme", checkthemesite);
  document.getElementById("introimage").src = "Assets/img/Intro_Image.png";
  document.getElementById("image-logo1").src = "./Assets/img/logo.png";
  document.getElementById("image-logo2").src = "./Assets/img/logo.png";
  if (document.getElementById("SetColorToIcon3")) {
    document.getElementById("ColorPic3").value = "#56566F";
    document.getElementById("SetColorToIcon3").value = "#56566F";
  }

  document.getElementById("SetColorToIcon").value = "#56566F";
  document.getElementById("ColorPic").value = "#56566F";
  document.getElementById("ColorPic2").value = "#56566F";
  document.getElementById("SetColorToIcon2").value = "#56566F";
  count1 = 0;

  document.getElementById("changeicontheme_SmallMenu").className =
    "fa fa-moon-o";
  document.getElementById("changeicontheme").className = "fa fa-moon-o";

  document.getElementById("svgicontheme").style.display = "none";
  document.getElementById("svgicontheme1").style.display = "none";

  // Add Color To Svg

  var path = document.getElementsByTagName("path");

  for (let i = 0; i < path.length; i++) {
    if (path[i].getAttribute("stroke")) {
      path[i].setAttribute("stroke", "#56566F");
      if (path[i].getAttribute("fill") !== "transparent") {
        path[i].setAttribute("fill", "#56566F");
      }
    } else {
      if (path[i].classList.contains("Icon-Colorful")) {
      } else {
        path[i].setAttribute("fill", "#56566F");
      }
    }
  }
  // END Add Color To Svg
}

// End Change Theme Index.html
