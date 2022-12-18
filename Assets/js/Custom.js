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
    document.getElementById("SetColorToIcon").value = "#f2f2f8";
    document.getElementById("ColorPic").value = "#f2f2f8";

    obj.getElementsByTagName("i")[0].className = "";
    document.getElementById("svgicontheme").style.display = "inline-block";
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
        path[i].setAttribute("fill", "#f2f2f8");
      }
    }
    GetBackColorToColorfulIcons();

    var Items = document.getElementsByClassName("Icon_Pack");

    if (
      document
        .getElementById("mycolorful")
        .parentElement.classList.contains("Font14")
    ) {
      for (var i = 0; i < Items.length; i++) {
        var Colorful = Items[i]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[1];
        var IconSvg =
          Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

        Colorful = Colorful.cloneNode(true);
        IconSvg.replaceWith(Colorful);
      }
    }

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
    document.getElementById("SetColorToIcon").value = "#56566F";
    document.getElementById("ColorPic").value = "#56566F";
    count1 = 0;
    obj.getElementsByTagName("i")[0].className = "fa fa-moon-o";
    document.getElementById("svgicontheme").style.display = "none";
    var path = document.getElementsByTagName("path");

    for (let i = 0; i < path.length; i++) {
      if (path[i].getAttribute("stroke")) {
        path[i].setAttribute("stroke", "#56566F");
        if (path[i].getAttribute("fill") !== "transparent") {
          path[i].setAttribute("fill", "#56566F");
        }
      } else {
        path[i].setAttribute("fill", "#56566F");
      }
    }

    GetBackColorToColorfulIcons();

    var Items = document.getElementsByClassName("Icon_Pack");

    if (
      document
        .getElementById("mycolorful")
        .parentElement.classList.contains("Font14")
    ) {
      for (var i = 0; i < Items.length; i++) {
        var Colorful = Items[i]
          .getElementsByClassName("Icons_Button_Slider")[0]
          .getElementsByTagName("svg")[1];
        var IconSvg =
          Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

        Colorful = Colorful.cloneNode(true);
        IconSvg.replaceWith(Colorful);
      }
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
      p.setAttribute("fill", event.target.value);
    }
    GetBackColorToColorfulIcons();
    document.getElementById("SetColorToIcon").value = event.target.value;
  });

  if (
    document
      .getElementById("mycolorful")
      .parentElement.classList.contains("Font14")
  ) {
    for (var i = 0; i < Items.length; i++) {
      var Colorful = Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[1];
      var IconSvg =
        Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

      Colorful = Colorful.cloneNode(true);
      IconSvg.replaceWith(Colorful);
    }
  }
}

function ChangeIcon(obj) {
  var container = document.getElementById("ConImageChange");
  var newitem = obj.getElementsByTagName("svg")[0];
  var Nitem_id = newitem.id;

  var CopyNewItem = newitem.cloneNode(true);
  var Id_Svg = container.id;
  var colorpic = document.getElementById("ColorPic2");

  if (Nitem_id == "colorful") {
    colorpic.disabled = true;
  } else {
    colorpic.disabled = false;
  }

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
  // var Container = document.getElementById("ContainerImage");
  var Container = document
    .getElementById("ConImageChange")
    .getElementsByTagName("path");
  var NewContainer = document.getElementById("ConImageChange");

  if (Container.length > 0) {
    if (Container.length > 1) {
      for (i = 0; i < Container.length; i++) {
        if (Container[i].getAttribute("stroke")) {
          Container[i].setAttribute("stroke", event.target.value);
        } else {
          if (NewContainer.classList[0] == "colorful") {
            if (Container.length > 3) {
              Container[0].setAttribute("fill", event.target.value);
              Container[1].setAttribute("fill", event.target.value);
              Container[2].setAttribute("fill", event.target.value);
              Container[3].setAttribute("fill", event.target.value);
            }
            if (Container.length <= 3) {
              Container[1].setAttribute("fill", event.target.value);
            }
          } else {
            Container[i].setAttribute("fill", event.target.value);
          }
        }
      }
    } else {
      if (Container[0].getAttribute("stroke")) {
        Container[0].setAttribute("stroke", event.target.value);
      } else {
        Container[0].setAttribute("fill", event.target.value);
      }
    }
  } else {
    if (NewContainer.getAttribute("stroke")) {
      NewContainer.setAttribute("stroke", event.target.value);
    } else {
      NewContainer.setAttribute("fill", event.target.value);
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
        tr[i].parentElement.style.display = "";
      } else {
        tr[i].parentElement.style.display = "none";
      }
    }
  }
}

var item;

function MultiSelect(obj) {
  var colorpic = document.getElementById("ColorPic2");
  colorpic.disabled = false;
  if (
    document
      .getElementById("button_MultiSelect1")
      .classList.contains("bg-Gray") ||
    document.getElementById("button_MultiSelect2").classList.contains("bg-Gray")
  ) {
    obj.classList.toggle("bg-Gray");
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

  if (obj.classList.contains("bg-Gray")) {
    obj.classList.remove("bg-Gray", "rounded-lg");
    var items = document.getElementsByClassName("Icon_Pack");

    for (var i = 0; i <= items.length; i++) {
      items[i].classList.remove("bg-Gray");

      if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
        var myitem = document.getElementsByClassName("Icon_Pack-1");

        for (let w = 0; w < myitem.length; w++) {
          if (myitem[w].classList.contains("bg-Gray")) {
            myitem[w].classList.remove("bg-Gray");
          }
        }
      }
    }
  } else {
    obj.classList.add("bg-Gray", "rounded-lg");
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
}

function CancleMultiSelect() {
  var myitem = document.getElementsByClassName("MultipleSelect_Menu")[0];
  myitem.style.display = "none";

  var button1 = document.getElementById("button_MultiSelect1");
  var button2 = document.getElementById("button_MultiSelect2");
  var Items = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < Items.length; i++) {
    $(Items[i]).attr(
      "data-target",
      $(Items[i]).attr("data-target") == "" ? "#exampleModal" : ""
    );
  }

  if (
    button1.classList.contains("bg-Gray") ||
    button2.classList.contains("bg-Gray")
  ) {
    button1.classList.remove("bg-Gray", "rounded-lg");
    button2.classList.remove("bg-Gray", "rounded-lg");

    if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
      var myitem = document.getElementsByClassName("Icon_Pack-1");

      for (let w = 0; w < myitem.length; w++) {
        if (myitem[w].classList.contains("bg-Gray")) {
          myitem[w].classList.remove("bg-Gray");
        }
      }
    }

    var items = document.getElementsByClassName("Icon_Pack");

    for (var i = 0; i <= items.length; i++) {
      items[i].classList.remove("bg-Gray");
    }
  } else {
    button1.classList.add("bg-Gray", "rounded-lg");
    button2.classList.add("bg-Gray", "rounded-lg");
  }
}

function CopyText(obj) {
  var copyText = obj.parentElement.innerText;
  navigator.clipboard.writeText(copyText);
  alert("Copied text");
}

function CopyTextIcon() {
  var copyText = document.getElementById("Component_Code").parentElement;
  navigator.clipboard.writeText(copyText.innerText);
  alert("Icon Copide :)");
}

function DownloadPNG(name = "image") {
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

function downloadAll() {
  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    const myitem = document.getElementsByClassName("Icon_Pack-1");

    for (let l = 0; l < myitem.length; l++) {
      var Container1 = document.querySelector("#ConImageChange");
      var mySvg1 =
        myitem[
          l
        ].firstChild.nextElementSibling.firstChild.nextElementSibling.getElementsByTagName(
          "svg"
        )[0];
      var copySvg1 = mySvg1.cloneNode(true);
      var text1 = myitem[l]
        .getElementsByClassName("Icon_Text")[0]
        .getElementsByTagName("small")[0].innerHTML;
      copySvg1.setAttribute("id", "ConImageChange");

      Container1.replaceWith(copySvg1);
      DownloadPNG(text1);
    }
  }

  const items = document.getElementsByClassName("Icon_Pack");

  for (var i = 0; i < items.length; i++) {
    var Container = document.querySelector("#ConImageChange");

    var mySvg =
      items[
        i
      ].firstChild.nextElementSibling.firstChild.nextElementSibling.getElementsByTagName(
        "svg"
      )[0];
    var copySvg = mySvg.cloneNode(true);
    var text = items[i]
      .getElementsByClassName("Icon_Text")[0]
      .getElementsByTagName("small")[0].innerHTML;
    copySvg.setAttribute("id", "ConImageChange");

    Container.replaceWith(copySvg);

    DownloadPNG(text);
  }
}

function donloadSVG(name = "Icon") {
  var svgEl = document.getElementById("ConImageChange");
  svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  var svgData = svgEl.outerHTML;
  var preface = '<?xml version="1.0" standalone="no"?>\r\n';
  var svgBlob = new Blob([preface, svgData], {
    type: "image/svg+xml;charset=utf-8",
  });
  var svgUrl = URL.createObjectURL(svgBlob);
  var downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `"${name}".svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

function multiSelect() {
  var myitem = document.getElementsByClassName("MultipleSelect_Menu")[0];
  myitem.style.display = "none";
  var button1 = document.getElementById("button_MultiSelect1");
  var button2 = document.getElementById("button_MultiSelect2");

  if (
    button1.classList.contains("bg-Gray") ||
    button2.classList.contains("bg-Gray")
  ) {
    if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
      var myitem = document.getElementsByClassName("Icon_Pack-1");

      for (let q = 0; q < myitem.length; q++) {
        if (myitem[q].classList.contains("bg-Gray")) {
          myitem[q].classList.remove("bg-Gray");
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
            DownloadPNG(text1);
          } else if (document.getElementById("pngtosvg").innerText === "SVG") {
            donloadSVG(text1);
          }
        }
      }
    }

    var items = document.getElementsByClassName("Icon_Pack");

    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains("bg-Gray")) {
        items[i].classList.remove("bg-Gray");
        button1.classList.remove("bg-Gray", "p-2", "rounded-lg");
        button2.classList.remove("bg-Gray", "p-2", "rounded-lg");

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
          DownloadPNG(text);
        } else if (document.getElementById("pngtosvg").innerText === "SVG") {
          donloadSVG(text);
        }
      }
    }
  } else {
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

var path = document.getElementsByTagName("path");

for (let i = 0; i < path.length; i++) {
  if (path[i].getAttribute("stroke")) {
    path[i].setAttribute("stroke", "#56566F");
  } else {
    path[i].setAttribute("fill", "#56566F");
  }
}

var svgnew = document.getElementsByClassName("Icon_Pack");

for (let s = 0; s < svgnew.length; s++) {
  var svgEdite = svgnew[s]
    .getElementsByClassName("Icons_Button_Slider")[0]
    .getElementsByTagName("svg")[1];

  svgEdite.setAttribute("id", "colorful");

  var paths = svgEdite.getElementsByTagName("path");

  for (let s = 0; s < paths.length; s++) {
    var clone = paths[s];
    var newitem;

    newitem = clone.removeAttribute("fill");

    if (s == 0) {
      newitem = clone.setAttribute("fill", "#dcdcea");
    }
    if (s == 1) {
      newitem = clone.setAttribute("fill", "#685AD3");
    }
    if (s == 2) {
      newitem = clone.setAttribute("fill", "#15C0AB");
    }
    if (s >= 3) {
      newitem = clone.setAttribute("fill", "#FBB03B");
    }

    newitem = clone.outerHTML.toString().replace("</path>", "");
    newitem = newitem.replace(">", "/>");
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
      Items[i].setAttribute("fill", text);
    }
    GetBackColorToColorfulIcons();
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

  var svg = document
    .getElementById("ConImageChange")
    .getElementsByTagName("path");

  for (let j = 0; j < svg.length; j++) {
    svg[j].setAttribute("fill", text);
  }
}

// ===============================================================

// Change Size Svg To 64px with reflash

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
    path[j].setAttribute("stroke-width", "1px");
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

  document.getElementById("showSize").innerHTML = "64px";
  document.getElementById("showStroke").innerHTML = "1px";

  // Reset Size

  for (let i = 0; i < Items.length; i++) {
    var svgs = Items[i].getElementsByTagName("svg");

    for (let j = 0; j < svgs.length; j++) {
      var svg = svgs[j];

      svg.style.width = "64px";
      svg.style.height = "64px";
    }
  }

  if (document.getElementsByClassName("Icon_Pack-1").length > 0) {
    var Items_1 = document.getElementsByClassName("Icon_Pack-1");
    for (let i = 0; i < Items_1.length; i++) {
      var svgs = Items_1[i].getElementsByTagName("svg");

      for (let j = 0; j < svgs.length; j++) {
        var svg = svgs[j];

        svg.style.width = "64px";
        svg.style.height = "64px";
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
      path[j].setAttribute("fill", "none");
      path[j].setAttribute("stroke-width", "1");
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
      p.setAttribute("fill", color);
    }
    document.getElementById("SetColorToIcon").value = color;
  });

  // End Reset Color

  GetBackColorToColorfulIcons();
}

function GetBackColorToColorfulIcons() {
  var svgnew = document.getElementsByClassName("Icon_Pack");

  for (let s = 0; s < svgnew.length; s++) {
    var svgEdite = svgnew[s]
      .getElementsByClassName("Icons_Button_Slider")[0]
      .getElementsByTagName("svg")[1];

    svgEdite.setAttribute("id", "colorful");

    var paths = svgEdite.getElementsByTagName("path");

    for (let s = 0; s < paths.length; s++) {
      var clone = paths[s];
      var newitem;

      newitem = clone.removeAttribute("fill");

      if (s == 0) {
        newitem = clone.setAttribute("fill", "#dcdcea");
      }
      if (s == 1) {
        newitem = clone.setAttribute("fill", "#685AD3");
      }
      if (s == 2) {
        newitem = clone.setAttribute("fill", "#15C0AB");
      }
      if (s >= 3) {
        newitem = clone.setAttribute("fill", "#FBB03B");
      }

      newitem = clone.outerHTML.toString().replace("</path>", "");
      newitem = newitem.replace(">", "/>");
    }
  }
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
  text: "Open source, high quality and free icon library with over 300",
  url: window.location.href.toString(),
};

const btn = document.querySelector("#ShareLink");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {
    alert(`Error: ${err}`);
  }
});

const ShareSvg = {
  title: "ICONPAQ",
  text: document.getElementById("Component_Code").innerText,
};

const btn1 = document.querySelector("#ShareIconSVG");

// Share must be triggered by "user activation"
btn1.addEventListener("click", async () => {
  try {
    await navigator.share(ShareSvg);
  } catch (err) {
    alert(`Error: ${err}`);
  }
});

if (localStorage.getItem("CheckTheme") == 0) {
  document.getElementById("MyTheme").href = "Assets/css/index_Dark.css";

  document.getElementById("introimage").src = "Assets/img/Intro_Image1.png";
  document.getElementById("SetColorToIcon").value = "#f2f2f8";
  document.getElementById("ColorPic").value = "#f2f2f8";
  document.getElementById("changeicontheme").className = "";
  document.getElementById("svgicontheme").style.display = "inline-block";

  var path = document.getElementsByTagName("path");
  var svg = document.getElementsByTagName("svg");

  for (let i = 0; i < svg.length; i++) {
    if (svg[i].hasAttribute("stroke")) {
      svg[i].setAttribute("stroke", "#f2f2f8");
    }
  }

  for (let i = 0; i < path.length; i++) {
    if (path[i].hasAttribute("stroke")) {
      path[i].setAttribute("stroke", "#f2f2f8");

      if (path[i].getAttribute("fill") !== "transparent") {
        path[i].setAttribute("fill", "#f2f2f8");
      }

      if (path[i].parentElement.getAttribute("fill") == "none") {
      } else {
        path[i].parentElement.removeAttribute("fill");
      }
    } else {
      path[i].setAttribute("fill", "#f2f2f8");
    }
  }

  GetBackColorToColorfulIcons();

  var Items = document.getElementsByClassName("Icon_Pack");

  if (
    document
      .getElementById("mycolorful")
      .parentElement.classList.contains("Font14")
  ) {
    for (var i = 0; i < Items.length; i++) {
      var Colorful = Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[1];
      var IconSvg =
        Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

      Colorful = Colorful.cloneNode(true);
      IconSvg.replaceWith(Colorful);
    }
  }

  count1 = 1;
} else if (localStorage.getItem("CheckTheme") == 1) {
  document.getElementById("MyTheme").href = "Assets/css/index_Light.css";

  CheckTheme = false;
  document.getElementById("introimage").src = "Assets/img/Intro_Image.png";
  document.getElementById("SetColorToIcon").value = "#56566F";
  document.getElementById("ColorPic").value = "#56566F";

  count1 = 0;

  document.getElementById("changeicontheme").className = "fa fa-moon-o";
  document.getElementById("svgicontheme").style.display = "none";
  var path = document.getElementsByTagName("path");

  for (let i = 0; i < path.length; i++) {
    if (path[i].getAttribute("stroke")) {
      path[i].setAttribute("stroke", "#56566F");
      if (path[i].getAttribute("fill") !== "transparent") {
        path[i].setAttribute("fill", "#56566F");
      }
    } else {
      path[i].setAttribute("fill", "#56566F");
    }
  }

  GetBackColorToColorfulIcons();

  var Items = document.getElementsByClassName("Icon_Pack");

  if (
    document
      .getElementById("mycolorful")
      .parentElement.classList.contains("Font14")
  ) {
    for (var i = 0; i < Items.length; i++) {
      var Colorful = Items[i]
        .getElementsByClassName("Icons_Button_Slider")[0]
        .getElementsByTagName("svg")[1];
      var IconSvg =
        Items[i].firstChild.nextElementSibling.getElementsByTagName("svg")[0];

      Colorful = Colorful.cloneNode(true);
      IconSvg.replaceWith(Colorful);
    }
  }
}
