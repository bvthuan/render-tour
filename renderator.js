Filters = {};

var img,
  _purpose,
  uploaderApplicationPath,
  apiUrl,
  basepath,
  folderUrl,
  uploadImageUrl,
  uploadVideoUrl,
  selectedFilter,
  windowWidth,
  windowHeight,
  toolGearWidth,
  toolGearHeight,
  loaderWidth,
  loaderHeight,
  panoToolContainerWidth,
  footerToolContainerWidth,
  renderatorEditorContainerWidth,
  renderatorEditorContainerHeight,
  screenEditorToolHeight,
  isEffectPreview,
  addTextBoxWidth,
  addTextBoxHeight,
  textMessage,
  audioElement,
  krpano,
  authWindow,
  shareLink,
  imageData,
  imageLocation,
  elementToRecord,
  recorder,
  imageURLUpdate,
  videoThumbnailImg,
  includeLogo,
  videoFilter,
  contactForm,
  contactWidth,
  contactHeight,
  music,
  conversations = [],
  isChatOn = false,
  isChatWindowVisible = false,
  isToolBarClick = false,
  isLoggedIn = false,
  interactionEnabled = false,
  isFormMode = false,
  isAdmin = false,
  enableChat = false,
  currentTour = "",
  tourAdmin,
  scene,
  hasNewConversation = false,
  ath,
  atv,
  mousex,
  mousey,
  conversationName,
  conversationTitle,
  conversationText,
  isSceneChange = false,
  activeConversation;

var initialToolGearWidth,
  initialFooterToolContainerWidth,
  initialStartRecordingWidth = 0,
  initialSnapWidth = 0;

var isVideo = false;

var thumbnailUpdated = false;

var isAudio = false;

var isLandscape = false;

var cloneBlob;

var footerWidth;

var footerHeight;

var isMobile = false;

var audioRecWidth, audioRecHeight; //initiate as false

var recordedAudioStream = "";

var originalData;

var shareTo = "";

var slider_width;

var editTextViewTop;

var toRecord = false;

var whammyRecorder;

var voiceRecordedStream = "";

var x = (y = r0 = r1 = 0);

var grd;

let func_recording_start;

let mobile_recording_process = false;

let func_pause_play_recorder;

let func_stop_recording;

var dialog, formDimensions;

function conversation(id, ath, atv) {
  this.id = id;

  this.ath = ath;

  this.atv = atv;
}

function dimension(width, height, minWidth, minHeight) {
  this.width = width;

  this.height = height;

  this.minWidth = minWidth;

  this.minHeight = minHeight;
}

/* To check if device has a mouse or not*/

var mouseDetected = false;

function onMouseMove(e) {
  document.removeEventListener("mousemove", onMouseMove, false);

  mouseDetected = true;
}

document.addEventListener("mousemove", onMouseMove, false);

/* End of - To check if device has a mouse or not*/

var isMobile = false; //initiate as false

// device detection

if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

/* To display toaster message*/

function showToast(text = "Double tap to leave a question", time = 4000) {
  debugger;

  if (!isMobile) return;

  let x = $("#snackbar");

  let y = $("#snackbarUp");

  x.html("Tap camera to Snap | Hold to Record");

  y.html("Double tap to leave a question");

  let marginLeft = (window.innerWidth - 303) / 2;

  let marginLefty = (window.innerWidth - 272) / 2;

  // console.log("s, y : ", x.innerWidth(), y.innerWidth());

  // let marginHeight = (window.innerHeight - x.innerHeight())/2;

  //

  console.log("width and height : ", x.innerWidth());

  x.css("left", marginLeft)
    .css("margin-left", "0px")
    .addClass("show");

  y.css("left", marginLefty)
    .css("margin-left", "0px")
    .addClass("show");

  setTimeout(function() {
    x.removeClass("show");
    y.removeClass("show");
  }, time);
}

/* End of to display toaster message*/

/*

function waitForFunction(callback,waittime=250){

  callback=window[callback];

  if(typeof callback !== "undefined"){

    //window[callback]();

    callback();

  }

  else{

      setTimeout(waitForFunction(callback), waittime);

  }

}

*/

$(document).ready(function() {
  $("head").append(
    '<meta name="viewport" content="width=device-width, initial-scale=1"> ' +
      '<script src="renderator/js/long-press-event.js"></script>'
  );

  /* For double tap event*/

  $.fn.doubleTap = function(callback) {
    var active, interaction;

    active = false;

    interaction = "ontouchend" in document ? "touchend" : "click";

    $(this).on(interaction, function(e) {
      if (e.target.type == "checkbox") {
      } else {
        if (active) {
          callback();

          return (active = false);
        }

        active = true;

        setTimeout(function() {
          active = false;
        }, 350);
      }
    });

    return this;
  };

  $("#panoDIV").doubleTap(function() {
    startConversationBox();
  });

  /* end for double tap event*/

  /**

   *  For showing toaster in mobile device.

   */

  let toaster = document.createElement("div");

  toaster.id = "snackbar";

  document.body.prepend(toaster);

  let toasterUp = document.createElement("div");

  toasterUp.id = "snackbarUp";

  document.body.prepend(toasterUp);

  /**

   * End For showing toaster in mobile device.

   */

  // device detection

  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      navigator.userAgent.substr(0, 4)
    )
  )
    isMobile = true;

  $.getJSON("renderator/config/renderatorConfig.json")

    .done(function(json) {
      basepath = json.config.basepath;

      uploaderApplicationPath = json.config.uploaderApplicationPath;

      selectedFilter = json.config.selectedFilter;

      imageURLUpdate = json.config.imageURLUpdate;

      isVideo = json.config.isVideo;

      includeLogo = json.config.includeLogo;

      videoFilter = json.config.videoFilter;

      contactForm = json.config.contactForm;

      music = json.config.music;

      apiUrl = json.config.apiUrl;

      uploadImageUrl = json.config.uploadImageUrl;

      uploadVideoUrl = json.config.uploadVideoUrl;

      folderUrl = json.config.folderUrl;

      loadjscssfile(basepath + "/bootstrap/css/bootstrap.css", "css");

      loadjscssfile(basepath + "/bootstrap/js/bootstrap.js", "js");

      loadjscssfile(basepath + "/css/renderator.css?version=3", "css");

      loadjscssfile(basepath + "/css/cssgram.min.css", "css");

      loadjscssfile(basepath + "/js/screenshot.js", "js");

      loadjscssfile(basepath + "/js/RecordRTC.js", "js");

      loadjscssfile(basepath + "/js/FileSelector.js", "js");

      loadjscssfile(basepath + "/js/download.js", "js");

      loadjscssfile(basepath + "/js/filter.js", "js");

      loadjscssfile(
        basepath + "/plugins/jquery-confirm/jquery-confirm.min.css",

        "css"
      );

      loadjscssfile(
        basepath + "/plugins/jquery-confirm/jquery-confirm.min.js",

        "js"
      );

      loadjscssfile(basepath + "/plugins/moment/moment.js", "js");

      loadjscssfile(
        basepath + "/fonts/font-awesome-4.7.0/css/font-awesome.css",

        "css"
      );

      // loadjscssfile(basepath + "/js/filter.lagrange.js", "js");

      imageURLUpdate = true;

      init();
    })

    .success(function() {
      getCurrentTour();

      checkLoginStatus();
    })

    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;

      alert("Configuration File " + err);

      return;
    });

  $(document).ready(function() {
    setTimeout(function() {
      loadElementDimenstions(function() {
        initUI();
      });

      console.log("Tooltiop called");

      if (!isMobile)
        $("#panoDIV").append(
          '<span class="tooltiptext">Double click to leave a question </span>'
        );

      krpano = document.getElementById("krpanoSWFObject");

      krpano.set("events.onnewscene", function() {
        onSceneChange();
      });

      var mainDiv = document.getElementById("krpanoSWFObject");

      childDiv = mainDiv.getElementsByTagName("div")[0];

      requiredDiv = childDiv.getElementsByTagName("div")[1];

      if (typeof multipleviews === "undefined" || multipleviews === null) {
        requiredDiv.style.display = "none";
      } else {
        loadjscssfile("renderator/css/multiplescenes.css?version=3", "css");

        loadjscssfile("renderator/js/multiplescenes.js?version=2", "js");

        loadjscssfile(
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.2/css/bootstrap-slider.css",
          "css"
        );

        loadjscssfile(
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/10.0.2/bootstrap-slider.js",
          "js",
          function() {
            if (typeof initSlider !== "undefined") {
              //initSlider();
            } else {
              // setTimeout(waitForFunction('initSlider'), 200);
              //setTimeout(initSlider(), 8000);
            }
          }
        );
      }

      var $worked = $("#worked");

      document.getElementById("panoDIV").onmousemove = function(e) {
        if (
          !isChatOn ||
          isFormMode ||
          !enableChat ||
          (!interactionEnabled &&
            !isAdmin &&
            tourAdmin != localStorage.getItem("renderator-user"))
        ) {
          // $("#panoDIV").removeClass("tooltip");

          return;
        }

        $("#panoDIV").addClass("tooltip");

        var x = e.clientX + 20,
          y = e.clientY - 10;

        $(".tooltiptext").css("top", y + "px");

        $(".tooltiptext").css("left", x + "px");
      };

      //initRecorder("#krpanoSWFObject canvas");

      func_recording_start = function call_recording_start() {
        isToolBarClick = true;

        if ($("#toolGear").hasClass("up")) {
          $("#toolGear").trigger("click");
        }

        var krpano = document.getElementById("krpanoSWFObject");

        krpano.call("makescreenshot()");

        //initRecorder("#krpanoSWFObject canvas");

        originalData = null;

        isVideo = true;

        $("#videoRecording").css("display", "block");

        if (isMobile) {
          $("#footer").css("display", "block");

          $("#stop").removeClass("hidden");

          $("#videoRecording > .videoRecording").css("top", "12%");

          $("#videoRecording > .col-md-1").addClass("hidden");

          $("#videoRecording > .videoRecording > .redball").css(
            "height",
            "18px"
          );

          $("#videoRecording > .videoRecording > #worked").css(
            "font-size",
            "24px"
          );
        } else {
          $("#footer").css("display", "none");

          $("#toolGear").css("display", "none");
        }

        this.disabled = true;

        isRecordingStarted = true;

        isStoppedRecording = false;

        recorder.startRecording();

        document.getElementById("stop").disabled = false;

        setTimeout(function() {
          update();
        }, 1000);

        chat();
      };

      // if(!isMobile)

      // document.getElementById("start"). onclick = function () {

      //   func_recording_start();

      // };

      function update() {
        if (recorder.state == "recording") {
          $worked = $worked === undefined ? $("#worked") : $worked;

          var myTime = $("#worked").html();

          var ss = myTime.split(":");

          var dt = new Date();

          dt.setHours(0);

          dt.setMinutes(ss[0]);

          dt.setSeconds(ss[1]);

          var dt2 = new Date(dt.valueOf() + 1000);

          var temp = dt2.toTimeString().split(" ");

          var ts = temp[0].split(":");

          $worked.html(ts[1] + ":" + ts[2]);

          console.log("update timer called : ", ts[1] + ":" + ts[2]);
        }

        if (recorder.state != "stopped")
          setTimeout(function() {
            update();
          }, 1000);
      }

      func_stop_recording = function() {
        $("#color-effects").addClass("disabled");

        isToolBarClick = true;

        isVideo = true;

        this.disabled = true;

        isStoppedRecording = true;

        recorder.stopRecording(function(url) {
          enableChat = false;

          $("#panoDIV").removeClass();

          var blob = recorder.getBlob();

          console.log("blob", blob);

          var video = document.createElement("video");

          video.src = URL.createObjectURL(blob);

          video.id = "vid";

          cloneBlob = blob;

          video.setAttribute("style", "width: 100%;height: 100%;  top:0;");

          var body = document.getElementById("videoEffectOverlay");

          body.innerHTML = "";

          body.appendChild(video);

          setEnd(video.id);

          $("#innerOverlay").hide();

          $("#overlay").show();

          $("#snapLandingView").hide();

          $(".overlay").css("display", "block");

          $("#screenshotView").css("display", "block");

          $("#snapLandingView").hide();

          $("#videoLandingView").show();

          $("#overlayVideo").css("display", "block");

          $("#videoRecording").css("display", "none");

          $(".play-circle").css("display", "block");

          $("#videoViewOptions").css("display", "block");

          $("#footer").css("display", "block");

          $("#toolGear").css("display", "block");

          $("#captured").hide();

          $("#capturedVideo").show();

          $("#videoEditorView").hide();

          if (isMobile) $("#stop").addClass("hidden");

          if (!videoFilter) {
            $("#color-effects").hide();
          }

          video.controls = false;

          $worked.html("00:00");

          setTimeout(function() {
            $("#capturedVideo").attr("href", "" + video.currentSrc + "");

            $("#cloneVideo").attr("src", video.currentSrc);

            $("#OrigionalVideo").attr("src", video.currentSrc);
          }, 1000);

          // $("video").css();

          ProcessVideoClone();

          $("#recordAudioImage").show();

          resetEditorContainer();
        });
      };

      document.getElementById("stop").onclick = function() {
        func_stop_recording();
      };

      func_pause_play_recorder = function pause_play_recorder() {
        isToolBarClick = true;

        if (recorder.state === "paused") {
          recorder.resumeRecording();

          console.log(recorder.timestamps);

          $("#play-animation")
            .removeClass("btn-action-stop")
            .addClass("btn-action-play");
        } else {
          recorder.pauseRecording();

          $("#play-animation")
            .addClass("btn-action-stop")
            .removeClass("btn-action-play");
        }

        $(this)
          .find("img")

          .toggle();

        //            setTimeout(function(){update()}, 1000);
      };

      if (!isMobile)
        document.querySelector(".playpause").onclick = function() {
          func_pause_play_recorder();
        };

      panoToolEvent("resumeautorotation");

      $("#contactForm").css("display", "block");
    }, 1000);
  });

  $(window).resize(function() {
    loadElementDimenstions(function() {
      initUI();

      if (isChatWindowVisible) {
        setChatPostition();
      }

      if (isFormMode) setFormPosition();
    });

    setChatUI();
  });

  $(window).on("orientationchange", function(event) {
    if ($("#rederatorEditorContainer").is(":visible")) {
      var result = window.confirm(
        "We would suggest please do not change the orientation for best view of your current work."
      );
    }

    if (footerHeight == undefined || footerWidth == undefined) {
      (footerWidth = $("#footer").width()),
        (footerHeight = $("#footer").height());
    }

    if (event.orientation == "landscape") {
      return; // 007 edited

      landscapeSetting();
    } else {
      portraitSetting();
    }
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      closeEditor();
    }
  });
});

function onSceneChange() {
  if (typeof isSwitchBtnLoaded === "function") {
    switchbtnloaded = false;

    isSwitchBtnLoaded();
  }

  isSceneChange = true;

  scene = krpano.get("xml.scene");

  if (!isChatOn) return;

  closeChat();

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    conversations = [];

    if (isLoggedIn) {
      var url =
        json.config.apiUrl +
        json.config.getActiveConversationUrl +
        "/" +
        currentTour +
        "/" +
        scene;

      $("#mainLoader").css("display", "none");

      makeGetCallWithHeader(url, onGetConversations, alertFailCallBack);

      return;
    }

    var url =
      json.config.apiUrl +
      json.config.getConversationsUrl +
      "/" +
      currentTour +
      "/" +
      scene;

    $("#mainLoader").css("display", "none");

    makeGetCall(url, onGetConversations);
  });
}

function checkLoginStatus() {
  var token = localStorage.getItem("renderator-token");

  if (token == "") {
    $("#footerToolContainer").append(
      '<img id="loginIcon" src="' +
        basepath +
        '/images/login.png" class=" horizontal-footer-image h70px" onclick="showLogin()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
    );

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.currentUserUrl;

    $("#mainLoader").css("display", "none");

    makeGetCallWithHeader(url, onLoginCheck, onLoginFail);
  });
}

function onLoginCheck(response) {
  if (!response.success) {
    $("#toolContainer").append(
      '<img id="adminLogin" src="' +
        basepath +
        '/images/log-in.png" alt="Admin login" class="toolbar-icon" onclick="showLogin()" ' +
        'onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()" />'
    );

    localStorage.removeItem("renderator-token");

    localStorage.removeItem("renderator-user");

    localStorage.removeItem("renderator-username");

    localStorage.removeItem("renderator-email");

    localStorage.removeItem("renderator-notification");

    return;
  }

  isLoggedIn = true;

  $("#toolContainer").append(
    '<img id="adminLogout" src="' +
      basepath +
      '/images/log-out.png" alt="Admin logout" class="toolbar-icon" onclick="logout()" ' +
      'onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()" />'
  );

  if (response.data && response.data.is_super_admin) {
    isAdmin = true;

    $("#footerToolContainer").append(
      '<img id="userSetting" src="' +
        basepath +
        '/images/user-setting.png" class=" horizontal-footer-image h70px" onclick="showAdminPanel()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
    );
  } else
    $("#footerToolContainer").append(
      '<img id="userSetting" src="' +
        basepath +
        '/images/user-setting.png" class=" horizontal-footer-image h70px " onclick="manageAccount()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
    );
}

function onLoginFail() {
  // $("#footerToolContainer").append(

  //   '<img id="loginIcon" src="' +

  //   basepath +

  //   '/images/login.png" class=" horizontal-footer-image h70px " onclick="showLogin()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'

  // );

  $("#toolContainer").append(
    '<img id="adminLogin" src="' +
      basepath +
      '/images/log-in.png" alt="Admin login" class="toolbar-icon" onclick="showLogin()" ' +
      'onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()" />'
  );

  localStorage.removeItem("renderator-token");

  localStorage.removeItem("renderator-user");

  localStorage.removeItem("renderator-username");

  localStorage.removeItem("renderator-email");

  localStorage.removeItem("renderator-notification");
}

function getCurrentTour() {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.currentTourUrl;

    var data = {
      path: encodeURIComponent(window.location.href)
    };

    $("#mainLoader").css("display", "none");

    makePostCall(url, onGetCurrentTour, data);
  });
}

function onGetCurrentTour(response) {
  if (!response.success) {
    //alert(response.message);

    if (isChatOn) chat();

    $("#chat").addClass("hidden");

    return;
  }

  if (response.data.length == 0) {
    alert("Tour not found");

    return;
  }

  // if(window.innerWidth > 768)

  //   $("#chat").removeClass("hidden");

  console.log("response : ", response);

  currentTour = response.data.id;

  tourAdmin = response.data.admin_id;

  interactionEnabled = response.data.allow_user_interaction;

  chat();
}

function onLoginFail() {
  $("#footerToolContainer").append(
    '<img id="loginIcon" src="' +
      basepath +
      '/images/login.png" class=" horizontal-footer-image h70px " onclick="showLogin()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
  );
}

function setEnd(id) {
  var vid = document.getElementById(id);

  vid.onended = function() {
    $(".pause-circle").css("display", "none");

    $(".play-circle").css("display", "block");

    $("#videoViewOptions").css("display", "block");

    $("#footer").css("display", "block");
  };
}

function init() {
  panoSetting();
}

startConversationBox = function() {
  console.log(
    "start conversation",
    basepath + "/templates/startConversation.html",
    isChatOn,
    isFormMode,
    enableChat,
    isAdmin,
    interactionEnabled,
    tourAdmin,
    isToolBarClick
  );

  enableChat = true;

  if (
    !isChatOn ||
    isFormMode ||
    !enableChat ||
    (!interactionEnabled &&
      !isAdmin &&
      tourAdmin != localStorage.getItem("renderator-user"))
  )
    return;

  if (isToolBarClick) {
    isToolBarClick = false;

    return;
  }

  $("#chatWindow").remove();

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    scene = krpano.get("xml.scene");

    if (isChatWindowVisible) {
      krpano.call("removehotspot(chatHotspot_0)");

      isChatWindowVisible = false;

      hasNewConversation = false;

      activeConversation = "";

      return;
    }

    mousex = krpano.get("mouse.x");

    mousey = krpano.get("mouse.y");

    if (mousex && mousey) {
      var hvs = krpano.screentosphere(mousex, mousey);

      if (hvs && hvs != "") {
        ath = Number(hvs.x);

        atv = Number(hvs.y);

        for (var i = 0; i < conversations.length; i++) {
          if (
            conversations[i].ath - ath < 5 &&
            conversations[i].ath - ath > -5 &&
            conversations[i].atv - atv < 5 &&
            conversations[i].atv - atv > -5
          )
            return;
        }

        var uniqname = "chatHotspot_0";

        krpano.call("addhotspot(" + uniqname + ");");

        krpano.call("set(hotspot[" + uniqname + "].ath," + ath + ");");

        krpano.call("set(hotspot[" + uniqname + "].atv, " + atv + ");");

        krpano.call(
          "set(hotspot[" +
            uniqname +
            "].url, '" +
            basepath +
            "/images/chat-point.png ');"
        );

        var div = $("<div id='chatWindow'>").css({
          "z-index": 4000,

          position: "absolute"
        });

        $("#container").append(div);

        $("#chatWindow").load(
          encodeURIComponent(
            basepath + "/templates/startConversation.html"
          ).replace(/%2F/g, "/"),

          function() {
            $("#chatClose").attr("src", basepath + "/images/close.png");

            $("#dialogLoading").css(
              "background",

              'url("' +
                basepath +
                '/images/loader.gif") no-repeat center center'
            );

            conversationName = localStorage.getItem("renderator-username");

            $("#conversationName").val(conversationName);

            hasNewConversation = true;

            var minWidth = parseInt($("#conversationBox").css("min-width"), 10);

            var minHeight = parseInt(
              $("#conversationBox").css("min-height"),

              10
            );

            formDimensions = new dimension(
              $("#conversationBox").width(),

              $("#conversationBox").height(),

              minWidth,

              minHeight
            );

            isChatWindowVisible = true;

            setChatPostition();
          }
        );
      }
    }
  }
};

function closeChat() {
  $("#chatWindow").remove();

  hasNewConversation = false;

  krpano.call("removehotspot(chatHotspot_0)");

  activeConversation = "";

  isChatWindowVisible = false;
}

function MarkChatPoints() {
  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    for (var i = 0; i < conversations.length; i++) {
      var uniqname = "chatHotspot_" + conversations[i].id;

      krpano.call("addhotspot(" + uniqname + ");");

      krpano.call(
        "set(hotspot[" + uniqname + "].ath," + conversations[i].ath + ");"
      );

      krpano.call(
        "set(hotspot[" + uniqname + "].atv, " + conversations[i].atv + ");"
      );

      krpano.call(
        "set(hotspot[" +
          uniqname +
          "].url, '" +
          basepath +
          "/images/chat.png ');"
      );

      krpano.call(
        "set(hotspot[" +
          uniqname +
          "].onclick, 'js(GetConversationLog(\"" +
          conversations[i].id +
          "\"))');"
      );
    }
  }
}

function RemoveChatPoints() {
  for (var i = 0; i < conversations.length; i++) {
    krpano.call("removehotspot(chatHotspot_" + conversations[i].id + ")");
  }
}

initRecorder = function(selector) {
  elementToRecord = document.querySelector(selector);

  recorder = RecordRTC(elementToRecord, {
    type: "canvas",

    showMousePointer: true,

    ignoreMutedMedia: true
  });
};

function loadElementDimenstions(callback) {
  var imageElement = $("#renderatorPlugin img"),
    count = imageElement.length;

  imageElement.each(function(i) {
    if (imageURLUpdate) {
      var src = $(this).attr("src");

      if (src != undefined) {
        $(this).attr("src", src.replace("{basePath}", basepath));
      }
    }

    if (!--count) {
      $("#container").show();

      $("#loading").hide();

      windowWidth = window.innerWidth;

      windowHeight = window.innerHeight;

      toolGearWidth = $("#toolGear").width() + 100;

      toolGearHeight = $("#toolGear").height();

      panoToolContainerWidth = $("#toolContainer").width();

      renderatorEditorContainerWidth = (windowWidth * 80) / 100; //$("#overlay").width();//windowWidth-(((windowWidth*4)/100)*2);

      renderatorEditorContainerHeight = (windowHeight * 80) / 100;

      screenEditorToolHeight = $("#screenshotView").outerHeight(true);

      addTextBoxWidth = $("#askTextInput").width();

      addTextBoxHeight = $("#askTextInput").outerHeight(true);

      loaderWidth = $(".loader").width();

      loaderHeight = $(".loader").height();

      if (isMobile) {
        contactWidth = (windowWidth * 87) / 100;
      } else {
        contactWidth = (windowWidth * 27) / 100;
      }

      contactHeight = $("#demoRequestForm").height();

      $("#container").css("height", windowHeight);

      footerToolContainerWidth = $("#footerToolContainer").width();

      if (
        initialFooterToolContainerWidth == 0 ||
        initialToolGearWidth == 0 ||
        initialStartRecordingWidth == 0 ||
        initialSnapWidth == 0
      ) {
        initialToolGearWidth = toolGearWidth;

        initialFooterToolContainerWidth = footerToolContainerWidth;

        initialStartRecordingWidth = $("#start").width();

        initialSnapWidth = $("#chat").width();
      }

      if (isMobile) {
        if (window.innerHeight > window.innerWidth) {
          // renderatorEditorContainerHeight = ((windowHeight * 80) / 100);
        }

        if (window.innerWidth > window.innerHeight) {
          // renderatorEditorContainerHeight = ((windowHeight * 60) / 100);
        }
      }

      callback();
    }
  });

  imageURLUpdate = false;
}

function setChatUI() {
  // if ($("#chatWindow".length > 0)) {
  //   var position = $("#chatWindow").position();
  //   var left = position.left;
  //   var top = position.top;
  //   if (top + 500 > window.innerHeight) top = window.innerHeight - 500;
  //   if (top < 0) top = 0;
  //   $("#chatWindow").css({ top: top + "px" });
  //   if (left + 350 > window.innerWidth) left = window.innerWidth - 350;
  //   if (left < 0) left = 0;
  //   $("#chatWindow").css({ left: left + "px" });
  //   var height = 500;
  //   var width = 350;
  //   if (width > window.innerWidth) width = window.innerWidth;
  //   if (height > window.innerHeight) height = window.innerHeight;
  //   $("#chatWindow").height(height);
  //   $("#chatWindow").width(width);
  // }
}

function initUI() {
  /* christos */

  if (document.getElementById("christos_css")) {
    $("head").append(document.getElementById("christos_css"));
  } else {
    $("head").append(
      '<link rel="stylesheet" id="christos_css" type="text/css" href="renderator/css/christos_css.css">'
    );

    $("head").append(
      '<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">'
    );
  }

  var startRecordingWidth = $("#start").width();

  if (isMobile) {
    if (window.innerHeight > window.innerWidth) {
      $("#toolGear").css("left", (windowWidth - toolGearWidth) / 2 + "px");
    }
  } else {
    $("#toolGear").css("left", (windowWidth - toolGearWidth) / 2 + "px");
  }

  $("#toolContainer").css(
    "left",

    (windowWidth - panoToolContainerWidth) / 2 + "px"
  );

  // $("#footerToolContainer").css(

  //   "left",

  //   (window.innerWidth - footerToolContainerWidth) / 2 + "px"

  // );

  $("#rederatorEditorContainer").css(
    "width",

    renderatorEditorContainerWidth + "px"
  );

  $("#rederatorEditorContainer").css(
    "height",

    renderatorEditorContainerHeight + "px"
  );

  $("#rederatorEditorContainer").css(
    "top",

    (windowHeight - renderatorEditorContainerHeight) / 2 + "px"
  );

  $("#rederatorEditorContainer").css(
    "left",

    (windowWidth - renderatorEditorContainerWidth) / 2 + "px"
  );

  $("#videoEditorContainer").css(
    "width",

    renderatorEditorContainerWidth + "px"
  );

  $("#videoEditorContainer").css(
    "height",

    renderatorEditorContainerHeight + "px"
  );

  $(".shareIconDiv").css(
    "margin-top",

    (renderatorEditorContainerHeight - $(".shareIconDiv").height()) / 2 + "px"
  );

  $(".shareIcon").css("height", (windowHeight * 12) / 100 + "px");

  $("#firstHalfShareIcon").css(
    "width",

    renderatorEditorContainerWidth + "px"
  );

  $("#secondHalfShareIcon").css(
    "width",

    renderatorEditorContainerWidth / 2 + "px"
  );

  $("#recordAudioView").css(
    "margin-top",

    (renderatorEditorContainerHeight - screenEditorToolHeight) / 2 -
      $("#recordAudioView").height() +
      "px"
  );

  //  $(".loader").css("top",((renderatorEditorContainerHeight*40)/100)+"%");

  //  $(".loader").css("left",((renderatorEditorContainerWidth*40)/100)+"%");

  if (isEffectPreview) {
    var previewEffectWidth = renderatorEditorContainerWidth / 2;

    var previewEffectheigh = renderatorEditorContainerHeight / 2;

    $(".previewEffects").css("width", previewEffectWidth + "px");

    $(".previewEffects").css("height", previewEffectheigh + "px");

    $(".color-effect-view").css("height", previewEffectheigh + "px");
  }

  $("#editTextView").css(
    "left",

    (renderatorEditorContainerWidth - addTextBoxWidth) / 2 + "px"
  );

  $("#editTextView").css(
    "top",

    (renderatorEditorContainerHeight - addTextBoxHeight) / 2 + "px"
  );

  // $("#rederatorEditorContainer").css("margin-right",((windowWidth*3)/100)+"px");

  //$(window).trigger('resize');

  if (footerHeight == undefined || footerWidth == undefined) {
    (footerWidth = $("#footer").width()),
      (footerHeight = $("#footer").height());
  }

  if (isMobile) {
    if (window.innerHeight > window.innerWidth || 1 === 1) {
      // 007 edited  1===1000

      //Portrait

      isLandscape = false;

      $("#footer").css("width", footerWidth);

      $("#footer").css("height", "auto");

      // $("#footerToolContainer").css(

      //   "left",

      //   (window.innerWidth - initialFooterToolContainerWidth) / 2 + "px"

      // );

      $("#toolGear").css(
        "left",

        (windowWidth - initialToolGearWidth) / 2 + "px"
      );

      $("#footerToolContainer").css("top", "0px");

      $("#toolGear").removeClass("landscapePanoOption");

      $("#toolGear").css("top", "auto");

      $("#toolContainer").css("top", "auto");

      $("#toolbar").removeClass("landscapeControl");

      $("#toolbar").hide();

      $("#gear").show();

      $("#up").hide(); // christos

      $("textarea").attr("rows", 3);
    }

    if (window.innerWidth > window.innerHeight) {
      return; // 007 edited  1===1000

      isLandscape = true;

      //landscape

      if (footerHeight > 100) {
        $("#footer").css("width", "100px");
      } else {
        $("#footer").css("width", footerHeight);
      }

      $("#footer").css("height", "100%");

      // $("#footerToolContainer").css("left", "2px");

      // $("#footerToolContainer").css(

      //   "top",

      //   (window.innerHeight -

      //     initialFooterToolContainerWidth -

      //     initialStartRecordingWidth) /

      //   2 +

      //   "px"

      // );

      $("#toolGear").addClass("landscapePanoOption");

      // $("#toolGear").css("left","auto");

      $("#toolGear").css(
        "top",

        (window.innerHeight - initialToolGearWidth) / 2 + "px"
      );

      $("#toolbar").addClass("landscapeControl");

      slider_width = $(".landscapeControl").width();

      $(".landscapeControl").css(
        "margin-right",
        -Math.abs(slider_width) + "px"
      );

      $(".landscapeControl").css("display", "block");

      //$("#toolGear img").hide();

      $("textarea").attr("rows", 2);
    }

    $(".mobileOnly").show();

    $(".desktop").hide();
  } else {
    $(".mobileOnly").hide();

    $(".desktop").show();
  }

  $(".headerTool").css("display", "block");

  resetEditorContainer();

  if (contactForm) {
    if (
      $(".slidingBox input").is(":focus") ||
      $(".slidingBox textarea").is(":focus")
    ) {
      return;
    }

    if (isLandscape) {
      $("#demoRequestForm").hide();
    } else {
      $("#demoRequestForm").show();
    }

    $(".slidingBox").css("width", contactWidth);

    $(".slidingBox").css("margin-right", 0 - contactWidth);

    $("#contactFormBar").css("margin-right", "0px");

    $(".closeContact").hide();

    $("#contactForm").css("height", windowHeight);

    $("#contactFormBar").css("height", windowHeight);

    $("#contactFormBar").click(function() {
      closeContactForm();
    });

    $(".closeContact").click(function() {
      closeContactForm();
    });
  }

  reOrderIconsInFooter(); /* christos 007 */
}

function closeContactForm() {
  $("#contactForm input").val("");

  $("#contactForm textarea").val("");

  $("#action").val("sendmail");

  $("#submitted").val("true");

  $(".sendRequest").val("Send your Request");

  if ($(".slidingBox").hasClass("formOpen")) {
    $(".slidingBox").removeClass("formOpen");

    $(".slidingBox").css("margin-right", 0 - contactWidth);

    $("#contactFormBar").css("margin-right", "0px");

    $(".closeContact").hide();
  } else {
    $(".closeContact").show();

    $(".slidingBox").css("margin-right", "0px");

    $(".slidingBox").addClass("formOpen");

    $("#contactFormBar").css(
      "margin-right",

      contactWidth - $(".strip").width()
    );
  }
}

function resetEditorContainer() {
  var toolBarHeight = $("#screenshotView").outerHeight(true);

  var snapDataHeight = $("#rederatorEditorContainer").height();

  $("#snapLandingView").css("height", snapDataHeight - (toolBarHeight + 10));

  $("#videoLandingView").css("height", snapDataHeight - (toolBarHeight + 10));

  $("#videoContainer").css("height", snapDataHeight - (toolBarHeight + 10));
}

function playVideo(player) {
  video = $("#" + player).get(0);

  // if (originalData != null) {

  //     $('#vid').attr('src', originalData);

  // }

  if (toRecord) {
    showLoader();

    $("#vid").attr("src", $("#OrigionalVideo").attr("src"));
  }

  video.play();

  video.onended = function() {
    $("#previewTool").css("display", "");
  };

  $(".play-circle").css("display", "none");

  $("#videoViewOptions").css("display", "none");

  $("#previewTool").css("display", "none");

  //$(".pause-circle").css("display", "block");
}

ProcessVideoClone = function() {
  if (originalData != null) {
    $("#vid").attr("src", originalData);
  }

  var v = document.getElementById("vid");

  var canvas = document.getElementById("videoCloneCanvas");

  var context = canvas.getContext("2d");

  var back = document.createElement("canvas");

  var backcontext = back.getContext("2d");

  var cw, ch;

  v.addEventListener(
    "play",

    function() {
      initRecorder("#videoCloneCanvas");

      cw = document.getElementById("snapData").naturalWidth; //v.clientWidth;

      ch = document.getElementById("snapData").naturalHeight; //renderatorEditorContainerHeight;//v.clientHeight;

      canvas.width = cw;

      canvas.height = ch;

      back.width = cw;

      back.height = ch;

      draw(v, context, backcontext, cw, ch);

      if (toRecord) {
        recorder.startRecording();
      }
    },

    false
  );

  v.addEventListener("ended", function() {
    hideLoader();

    toRecord = false;

    if (!isAudio) {
      $("#vid").attr("src", videoData);

      isAudio = false;

      var videoData = recorder.getBlob();

      recorder.stopRecording(function(url) {
        cloneBlob = recorder.getBlob();

        console.log("blob", cloneBlob);

        var cloneVideo = $("#cloneVideo");

        videoData = URL.createObjectURL(cloneBlob);

        cloneVideo.attr("src", videoData);

        $("#vid").attr("src", videoData);

        if (originalData == null) {
          originalData = videoData;
        }

        hideLoader();
      });
    } else {
      $("#audioRecordview").css("display", "block");

      $("#audioRec").css("display", "none");

      $("#audioRecPreview").css("display", "block");

      $(".play-circle").css("display", "none");

      $("#videoLandingView").css("display", "none");
    }

    $(".play-circle").css("display", "block");
  });

  //playVideo("vid");
};

function draw(v, c, bc, w, h) {
  _purpose = "videoRerender";

  if (v.paused || v.ended) return false;

  // First, draw it into the backing canvas

  var data;

  if (!videoFilter) {
    bc.drawImage(v, 0, 0, w, h);

    data = bc.getImageData(0, 0, w, h);
  } else {
    switch (selectedFilter) {
      case "urban": {
        data = Filters.mayfair(v, w, h);

        break;
      }

      case "warm": {
        data = Filters.nashville(v, w, h);

        break;
      }

      case "design": {
        data = Filters.calarendon(v, w, h);

        break;
      }

      case "normal": {
        bc.drawImage(v, 0, 0, w, h);

        data = bc.getImageData(0, 0, w, h);

        break;
      }

      default: {
        bc.drawImage(v, 0, 0, w, h);

        data = bc.getImageData(0, 0, w, h);

        break;
      }
    }
  }

  //idata.data = data;

  // Draw the pixels onto the visible canvas

  var marginForLogo = 0;

  c.putImageData(data, 0, 0);

  if (
    $("#textToAdd").text() != undefined &&
    $("#textToAdd").text().length > 0
  ) {
    textMessage = $("#textToAdd").text();

    addTextToCanvas(c, w, h);

    marginForLogo = parseFloat($("#textToAdd").css("font-size")) * 2;
  }

  if (includeLogo) {
    var logoImg = document.getElementById("brandLogo");

    var dx = (logoImg.width * 80) / 100;

    var dy = (logoImg.height * 80) / 100;

    c.drawImage(
      logoImg,

      (w * 5) / 100 - marginForLogo,

      (h * 85) / 100 - marginForLogo,

      dx,

      dy
    );
  }

  // Start over!

  setTimeout(function() {
    draw(v, c, bc, w, h);
  }, 0);
}

// getVideoThumbnail = function () {

//     var scale = 1;

//     var videoForThumbnail = document.getElementById('vid');

//     var canvas = document.createElement("canvas");

//     canvas.width = videoForThumbnail.clientWidth * scale;

//     canvas.height = videoForThumbnail.clientheight * scale;

//     canvas.getContext('2d').drawImage(videoForThumbnail, 0, 0, canvas.width, canvas.height);

//     videoThumbnailImg = document.createElement("img");

//     videoThumbnailImg.src = canvas.toDataURL();

//     //$('#thumbnail').append(img);

//     //video_obj.currentTime = 0;

// }

function pauseVideo(player) {
  video = $("#" + player).get(0);

  video.pause();

  // $(".play-circle").css("display", "block");

  // $("#videoViewOptions").css("display", "block");

  // $(".pause-circle").css("display", "none");
}

function panoSetting() {
  $("#panoDIV").prepend('<div id="renderatorPlugin"></div>');

  $("#renderatorPlugin").prepend('<div id="panosetting"></div>');

  $("#panosetting").load(
    encodeURIComponent(basepath + "/templates/panoSetting.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#toolGear").click(function() {
        if (isMobile) {
          if (window.innerHeight > window.innerWidth || 1 === 1) {
            // 007 edited 1===0000

            //Potrait

            $("#toolbar").slideToggle();

            if ($("#toolGear").hasClass("up")) {
              $("#toolGear").removeClass("up");

              $("#gear").show();

              $("#up").hide();

              panoToolContainerWidth = $("#toolContainer").width();

              $("#toolContainer").css(
                "left",

                (windowWidth - panoToolContainerWidth) / 2 + "px"
              );
            } else {
              panoToolContainerWidth = $("#toolContainer").width();

              $("#toolContainer").css(
                "left",

                (windowWidth - panoToolContainerWidth) / 2 + "px"
              );

              $("#toolGear").addClass("up");

              $("#gear").hide();

              $("#up").show();
            }
          }

          if (window.innerWidth > window.innerHeight) {
            return; // 007 edited 1===0000

            //Landscpe

            var top =
              (window.innerHeight -
                ($("#toolContainer").height() +
                  $("#toolContainer")
                    .find("img:first")

                    .height())) /
              2;

            $("#toolContainer").css("top", top + "px");

            if (
              $(this).css("margin-right") == slider_width + "px" &&
              !$(this).is(":animated")
            ) {
              $("#toolbar,.landscapePanoOption").animate({
                "margin-right": "-=" + slider_width
              });

              $(".landscapePanoOption").removeClass("landscapePanoOptionSide");
            } else {
              if (!$(this).is(":animated")) {
                //perevent double click to double margin

                $("#toolbar,.landscapePanoOption").animate({
                  "margin-right": "+=" + slider_width
                });

                $(".landscapePanoOption").addClass("landscapePanoOptionSide");
              }
            }
          }
        } else {
          $("#toolbar").slideToggle();

          if ($("#toolGear").hasClass("up")) {
            $("#toolGear").removeClass("up");

            $("#gear").show();

            $("#up").hide();

            panoToolContainerWidth = $("#toolContainer").width();

            $("#toolContainer").css(
              "left",

              (windowWidth - panoToolContainerWidth) / 2 + "px"
            );
          } else {
            panoToolContainerWidth = $("#toolContainer").width();

            $("#toolContainer").css(
              "left",

              (windowWidth - panoToolContainerWidth) / 2 + "px"
            );

            $("#toolGear").addClass("up");

            $("#gear").hide();

            $("#up").show();
          }
        }

        //loadElementDimenstions(function () { initUI(); });

        if (!music) {
          panoToolEvent("stopTourSounds");

          $("#sound").hide();
        }
      });
    }
  );

  $("#renderatorPlugin").append('<div id="snapToolBar"></div>');

  $("#snapToolBar").load(
    encodeURIComponent(basepath + "/templates/snapToolBar.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      if (isMobile) {
        $("#snap").html(
          '<div id="play-animation" class="btn-action-stop">\n' +
            '                <div class="btn-inner-stop">\n' +
            "                </div>\n" +
            "            </div>"
        );

        $("#footerToolContainer").append(
          ' <img id="stop" src="./renderator/images/check-stop.png" style="position: absolute;\n' +
            "     right: 0%;\n" +
            "     bottom: 50%;\n" +
            "     width: 30px;\n" +
            '     height: 30px;" class=" h80px toolbar-icon hidden">'
        );

        setTimeout(function() {
          $("#play-animation >.btn-inner-stop").addClass("btn-inner-action");
        }, 2000);
      }
    }
  );

  $("#renderatorPlugin").append('<div id="snapShotView"></div>');

  $("#snapShotView").load(
    encodeURIComponent(basepath + "/templates/snapShot.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#rederatorEditorContainer").append(
        '<div id="editorView"  class="fullWidthHeight"></div>'
      );

      $("#editorView").load(
        encodeURIComponent(basepath + "/templates/effectView.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          $("#innerOverlay").append(
            '<div id="textEditView" class="fullWidthHeight"></div>'
          );

          $("#textEditView").load(
            encodeURIComponent(
              basepath + "/templates/editTextView.html"
            ).replace(/%2F/g, "/"),

            function() {}
          );

          $("#innerOverlay").append(
            '<div id="shareView" class="fullWidthHeight "></div>'
          );

          $("#shareView").load(
            encodeURIComponent(basepath + "/templates/shareView.html").replace(
              /%2F/g,

              "/"
            ),

            function() {}
          );

          $("#innerOverlay").append(
            '<div id="recordView" class="fullWidthHeight"></div>'
          );

          $("#recordView").load(
            encodeURIComponent(basepath + "/templates/recordView.html").replace(
              /%2F/g,

              "/"
            ),

            function() {
              $("#recordView").append(
                '<div id="audioRecordview" class="fullWidthHeight"></div>'
              );

              $("#audioRecordview").load(
                encodeURIComponent(
                  basepath + "/templates/recordAudio.html"
                ).replace(/%2F/g, "/"),

                function() {}
              );
            }
          );
        }
      );

      $("#rederatorEditorContainer").append('<div id="videoView"></div>');

      $("#videoView").load(
        encodeURIComponent(basepath + "/templates/videoRecorded.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          if (!isMobile) {
            $("#videoEditorContainer").append(
              '<div id="videoEditorView"  class="fullWidthHeight"></div>'
            );

            $("#videoEditorView").load(
              encodeURIComponent(
                basepath + "/templates/videoEffectView.html"
              ).replace(/%2F/g, "/"),

              function() {}
            );
          }
        }
      );
    }
  );

  $("#renderatorPlugin").append('<div id="videoRecordingView"></div>');

  $("#videoRecordingView").load(
    encodeURIComponent(basepath + "/templates/videoRecording.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#videoEditorContainer").append(
        '<div id="videoEditorView"  class="fullWidthHeight"></div>'
      );

      $("#videoEditorView").load(
        encodeURIComponent(
          basepath + "/templates/videoEffectView.html"
        ).replace(/%2F/g, "/"),

        function() {
          // $("#innerOverlay").append('<div id="textEditView" class="fullWidthHeight"></div>');
          // $("#textEditView").load("templates/editTextView.html", function () {
          // });
          // $("#innerOverlay").append('<div id="shareView" class="fullWidthHeight"></div>');
          // $("#shareView").load("templates/shareView.html", function () {
          // });
          // $("#innerOverlay").append('<div id="recordView" class="fullWidthHeight"></div>');
          // $("#recordView").load("templates/recordView.html", function () {
          // });
        }
      );
    }
  );

  if (contactForm) {
    $("#renderatorPlugin").append('<div id="demoRequestForm"></div>');

    $("#demoRequestForm").load(
      encodeURIComponent(basepath + "/templates/contactForm.html").replace(
        /%2F/g,

        "/"
      ),

      function() {}
    );
  }

  audioElement = document.createElement("audio");

  audioElement.setAttribute("src", basepath + "/audio/camera-shutter.mp3");
}

function loadjscssfile(filename, filetype, onloadhandler = null) {
  if (filetype == "js") {
    //if filename is a external JavaScript file

    var fileref = document.createElement("script");

    fileref.setAttribute("type", "text/javascript");

    fileref.setAttribute("src", filename);

    if (filename.indexOf("RecordRTC") != -1) {
      fileref.onload = function() {
        initRecorder("#krpanoSWFObject canvas");
      };
    } else if (typeof onloadhandler === "function") {
      fileref.onload = function() {
        onloadhandler();
      };
    }
  } else if (filetype == "css") {
    //if filename is an external CSS file

    var fileref = document.createElement("link");

    fileref.setAttribute("rel", "stylesheet");

    fileref.setAttribute("type", "text/css");

    fileref.setAttribute("href", filename);
  }

  if (typeof fileref != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

panoToolEvent = function(eventType) {
  //isToolBarClick = true;

  krpano = document.getElementById("krpanoSWFObject");

  krpano.call(eventType + "()");

  switch (eventType) {
    case "enterFullscreen": {
      updatePanoToolSetting(
        "fullscreen",

        "fullscreenOut_transparent",

        "panoToolEvent",

        "exitFullscreen"
      );

      break;
    }

    case "exitFullscreen": {
      updatePanoToolSetting(
        "fullscreen",

        "fullscreen_transparent",

        "panoToolEvent",

        "enterFullscreen"
      );

      break;
    }

    case "resumeautorotation": {
      updatePanoToolSetting(
        "auto-rotate",

        "rotationpaused",

        "panoToolEvent",

        "pauseautorotation"
      );

      break;
    }

    case "pauseautorotation": {
      updatePanoToolSetting(
        "auto-rotate",

        "rotaionOn",

        "panoToolEvent",

        "resumeautorotation"
      );

      break;
    }

    case "hideFloorplan": {
      updatePanoToolSetting(
        "floorplan",

        "floorplan_transparent",

        "panoToolEvent",

        "showFloorplan"
      );

      panoToolEvent("resumeautorotation");

      break;
    }

    case "showFloorplan": {
      updatePanoToolSetting(
        "floorplan",

        "floorplan_transparent",

        "panoToolEvent",

        "hideFloorplan"
      );

      panoToolEvent("pauseautorotation");

      if (isChatOn) chat();

      break;
    }

    case "setControlModeDragTo": {
      updatePanoToolSetting(
        "moveTo",

        "pointerModel",

        "panoToolEvent",

        "setControlModeMoveTo"
      );

      break;
    }

    case "setControlModeMoveTo": {
      updatePanoToolSetting(
        "moveTo",

        "grapModel",

        "panoToolEvent",

        "setControlModeDragTo"
      );

      break;
    }

    case "playTourSounds": {
      updatePanoToolSetting(
        "sound",

        "soundoff",

        "panoToolEvent",

        "stopTourSounds"
      );

      break;
    }

    case "stopTourSounds": {
      updatePanoToolSetting(
        "sound",

        "soundon",

        "panoToolEvent",

        "playTourSounds"
      );

      break;
    }
  }
};

updatePanoToolSetting = function(id, image, method, arg) {
  $("#" + id).attr("src", basepath + "/images/" + image + ".png");

  $("#" + id).attr("onclick", method + '("' + arg + '")');
};

function screenRecord() {
  $("#overlay").css("display", "none");

  $("#screenshotView").css("display", "none");

  $("#innerOverlay").css("display", "none");

  $("#colorEffets").css("display", "none");

  $("#editTextView").css("display", "none");

  $("#recordAudioView").css("display", "none");

  $("#shareView").css("display", "none");

  $("#recordingVideo").css("display", "block");

  $("#toolGear").css("display", "none");

  $("#footer").css("display", "none");

  setTimeout(function() {
    chat();
  }, 1000);
}

async function screenshot() {
  $("#color-effects").removeClass("disabled");

  isToolBarClick = true;

  $("#color-effects").show();

  if ($("#toolGear").hasClass("up")) {
    $("#toolGear").trigger("click");
  }

  $("body")
    .fadeToggle("fast")

    .fadeToggle("slow");

  var krpano = document.getElementById("krpanoSWFObject");

  krpano.call("hidehotspots()");
  requestAnimationFrame(function() {
    requestAnimationFrame(function() {
      krpano.call("makescreenshot()");
      krpano.call("showhotspots()");
    });
  });

  isVideo = false;

  $("#overlay").css("display", "block");

  $("#overlayVideo").css("display", "none");

  $(".overlay").css("display", "block");

  $("#screenshotView").css("display", "block");

  $("#innerOverlay").css("display", "none");

  $("#colorEffets").css("display", "none");

  $("#editTextView").css("display", "none");

  $("#recordAudioView").css("display", "none");

  $("#shareView").css("display", "none");

  $("#snapLandingView").show();

  if (!isVideo) {
    $("#recordAudioImage").hide();

    $("#videoLandingView").hide();

    $("#captured").show();

    $("#capturedVideo").hide();
  } else {
    $("#captured").hide();

    $("#capturedVideo").show();

    $("#recordAudioImage").show();

    $("#snapLandingView").hide();
  }

  audioElement.play();

  resetEditorContainer();

  chat();

}

function chat() {
  isToolBarClick = isChatOn;

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    if (isChatOn) {
      $("#chat").attr("src", basepath + "/images/chat-off.gif");

      setCursorDragMode();

      RemoveChatPoints();

      if (isChatWindowVisible) $("#chatWindow").remove();

      if (hasNewConversation) {
        hasNewConversation = false;

        isChatWindowVisible = false;

        activeConversation = "";

        krpano.call("removehotspot(chatHotspot_0)");
      }
    } else {
      $("#chat").attr("src", basepath + "/images/chat-on.png");

      if (
        isAdmin ||
        interactionEnabled ||
        tourAdmin == localStorage.getItem("renderator-user")
      )
        setCursorChatMode();

      enableChat = true;

      $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
        scene = krpano.get("xml.scene");

        conversations = [];

        if (isLoggedIn) {
          var url =
            json.config.apiUrl +
            json.config.getActiveConversationUrl +
            "/" +
            currentTour +
            "/" +
            scene;

          $("#mainLoader").css("display", "none");

          makeGetCallWithHeader(url, onGetConversations, alertFailCallBack);

          return;
        }

        var url =
          json.config.apiUrl +
          json.config.getConversationsUrl +
          "/" +
          currentTour +
          "/" +
          scene;

        $("#mainLoader").css("display", "none");

        makeGetCall(url, onGetConversations);
      });

      panoToolEvent("pauseautorotation");
    }

    isChatOn = !isChatOn;
  }
}

function onGetConversations(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  return;

  for (var i = 0; i < response.data.length; i++) {
    var conversationData = response.data[i];

    conversations.push(
      new conversation(
        conversationData.id,

        conversationData.ath,

        conversationData.atv
      )
    );
  }

  MarkChatPoints();
}

function setCursorChatMode() {
  $("#panoDIV").removeClass();

  $("#panoDIV").addClass("cursorChatMode tooltip");
}

function setCursorDragMode() {
  console.log("drag mode called");

  $("#panoDIV").removeClass();

  $("#panoDIV").addClass("cursorDragMode");

  $("#panoDIV").removeClass("tooltip");

  setTimeout(function() {
    chat();
  }, 1000);
}

function takeScreenshot() {}

function closeEditor() {
  isToolBarClick = true;

  isEffectPreview = false;

  thumbnailUpdated = false;

  shareTo = "";

  $("#overlay").css("display", "none");

  $("#overlayVideo").css("display", "none");

  $("#screenshotView").css("display", "none");

  $("#innerOverlay").css("display", "none");

  $("#colorEffets").css("display", "none");

  $("#editTextView").css("display", "none");

  $("#recordAudioView").css("display", "none");

  $("#shareView").css("display", "none");

  $("#snapEffects").removeClass("mayfair nashville clarendon");

  clearVideoData();

  enableChat = true;

  if (isChatOn) setCursorChatMode();
}

function colorEffects() {
  isEffectPreview = true;

  $("#recordView").css("display", "none");

  if (!isVideo) {
    $("#editorView").show();

    $("#urbanEffect").attr("src", $("#origionalSnapData").attr("src"));

    $("#normalEffect").attr("src", $("#origionalSnapData").attr("src"));

    $("#designEffect").attr("src", $("#origionalSnapData").attr("src"));

    $("#warmEffect").attr("src", $("#origionalSnapData").attr("src"));

    var previewEffectWidth = renderatorEditorContainerWidth / 2;

    var previewEffectheigh = renderatorEditorContainerHeight / 2;

    $(".previewEffects").css("width", previewEffectWidth + "px");

    $(".previewEffects").css("height", previewEffectheigh + "px");

    $(".color-effect-view").css("height", previewEffectheigh + "px");

    // $("#overlay").css("display", "none");

    $("#innerOverlay").css("display", "block");

    $("#colorEffects").css("display", "block");

    $("#textEditView").css("display", "none");

    $("#recordAudioView").css("display", "none");

    $("#shareView").css("display", "none");

    $("#videoLandingView").hide();
  } else {
    return false;

    //showLoader();

    $("#videoEditorView").show();

    $("snapLandingView").hide();

    $("#editorView").hide();

    videoThumbnailImg = $("#snapData").attr("src");

    if (!thumbnailUpdated) {
      $("#normalEffectVideo").attr("src", videoThumbnailImg);

      $("#urbanEffectVideo").attr("src", videoThumbnailImg);

      $("#warmEffectVideo").attr("src", videoThumbnailImg);

      $("#designEffectVideo").attr("src", videoThumbnailImg);

      // _purpose = "effectPreview";

      // var colorFilter = ['toaster', 'nashville', 'sutro', 'origional']

      // var _img = document.getElementById('snapData');

      // $.each(colorFilter, function (index, value) {

      //     Filter.process(_img, value);

      // });

      //$('#normalEffectVideo').attr('src', $('#snapData').attr('src'));

      thumbnailUpdated = true;
    }

    var previewEffectWidth = renderatorEditorContainerWidth / 2;

    var previewEffectheigh = renderatorEditorContainerHeight / 2;

    $(".previewEffects").css("width", previewEffectWidth + "px");

    $(".previewEffects").css("height", previewEffectheigh + "px");

    $(".color-effect-view").css("height", previewEffectheigh + "px");

    $("#VideoinnerOverlay").css("display", "block");

    $("#VideocolorEffects").css("display", "block");

    // $("#editTextView").css("display", "none");

    // $("#recordAudioView").css("display", "none");

    // $("#shareView").css("display", "none");

    $("#videoEditorView").show();
  }

  $("#screenshotView").css("display", "none");

  $("#snapLandingView").css("display", "none");

  $("#videoLandingView").css("display", "none");

  $(".trash").show();
}

function closeEffects() {
  $("#editorView").show();

  $("#innerOverlay").css("display", "none");

  $("#colorEffects").css("display", "none");

  $("#editTextView").css("display", "block");

  $("#recordAudioView").css("display", "block");

  $("#shareView").css("display", "block");

  $("#screenshotView").css("display", "block");

  $(".trash").show();
}

function addText(typeOfView) {
  textMessage = "";

  $("#textInput").val(textMessage);

  $("#textToAdd").text(textMessage);

  if (isVideo != true) {
    $("#recordAudioView").css("display", "none");
  } else {
    $(".play-circle").hide();
  }

  $("#screenshotView").css("display", "none");

  $("#textEditView").show();

  $("#textPreview").hide();

  $("#innerOverlay").css("display", "block");

  $("#colorEffects").css("display", "none");

  $("#inputText").css("display", "none");

  $("#startText").css("display", "block");

  $("#editTextView").css("width", "50%");

  $("#editTextView").css("display", "block");

  $("#shareView").css("display", "none");

  addTextBoxWidth = $("#askTextInput").width();

  addTextBoxHeight = $("#askTextInput").outerHeight(true);

  screenEditorToolHeight = $("#screenshotView").outerHeight(true);

  $("#editTextView").css(
    "left",

    (renderatorEditorContainerWidth - addTextBoxWidth) / 2 + "px"
  );

  $("#editTextView").css(
    "top",

    (renderatorEditorContainerHeight -
      screenEditorToolHeight -
      addTextBoxHeight) /
      2 +
      "px"
  );

  var fontSize = parseFloat($("#textInput").css("font-size")) * 2;

  $("#textToAdd").css("font-size", fontSize);

  $("#textPreview").css("height", fontSize + (fontSize * 60) / 100);
}

function recordAudio() {
  if (isVideo != true) {
  } else {
    screenEditorToolHeight = $("#screenshotView").outerHeight(true);

    $("#recordAudioView").css(
      "margin-top",

      (renderatorEditorContainerHeight - screenEditorToolHeight) / 2 -
        $("#recordAudioView").height() +
        "px"
    );

    $("#audioRecordview").hide();

    $(".play-circle").hide();
  }

  $("#screenshotView").css("display", "none");

  $("#innerOverlay").css("display", "block");

  $("#colorEffects").css("display", "none");

  $("#editTextView").css("display", "none");

  $("#recordAudioView").css("display", "block");

  $("#recordView").css("position", "absolute");

  $("#recordView").css("top", "0px");

  $("#recordView").css("display", "block");

  $("#shareView").css("display", "none");

  $("#textEditView").hide();
}

function startAudioRecording() {
  $("#recordAudioView").hide();

  // $('#recordView').css('position', '');

  // $('#recordView').css('top', '');

  $("#audioRecordview").show();

  if (audioRecWidth == undefined || audioRecHeight == undefined) {
    audioRecWidth = $("#holdToRecord").width();

    audioRecHeight = $("#holdToRecord").height();
  }

  $("#holdToRecord").css(
    "top",

    (renderatorEditorContainerHeight -
      screenEditorToolHeight -
      audioRecHeight) /
      2 +
      "px"
  );

  $("#holdToRecord").css(
    "left",

    (renderatorEditorContainerWidth - audioRecWidth) / 2 + "px"
  );

  $("#audioRec").css("display", "block");

  $("#audioRecPreview").css("display", "none");
}

function reRenderWithAudio() {
  $("#vid").attr("src", $("#OrigionalVideo").attr("src"));

  showLoader();

  playVideo("vid");

  createSoundSource(recordedAudioStream, function(audioStream) {
    var canvas = $("#videoCloneCanvas")[0];

    var canvasStream = canvas.captureStream();

    var finalStream = new MediaStream();

    audioStream.getAudioTracks().forEach(function(track) {
      finalStream.addTrack(track);
    });

    canvasStream.getVideoTracks().forEach(function(track) {
      finalStream.addTrack(track);
    });

    canvasStream.addTrack(audioStream.getAudioTracks()[0]);

    var reRecorder = RecordRTC(finalStream, {
      type: "video"
    });

    //recordedAudioStream = audioStream;

    reRecorder.startRecording();

    var stop = false;

    (function looper() {
      if ($("#vid")[0].ended) {
        reRecorder.stopRecording(function() {
          cloneBlob = reRecorder.getBlob();

          console.log("blob", cloneBlob);

          var cloneVideo = $("#cloneVideoWithAudio");

          cloneVideo.attr("src", URL.createObjectURL(cloneBlob));

          $("#vid").attr("src", URL.createObjectURL(cloneBlob));

          audioStream.stop();

          canvasStream.stop();

          $(".play-circle").css("display", "block");

          $("#videoLandingView").css("display", "block");

          hideLoader();
        });

        return;
      }

      setTimeout(looper);
    })();

    setTimeout(function() {
      stop = true;
    });
  });
}

function recordingAudio() {
  $("#vid").attr("src", $("#OrigionalVideo").attr("src"));

  showLoader();

  $("#audioRecordview").hide();

  playVideo("vid");

  this.disabled = true;

  isAudio = true;

  navigator.mediaDevices

    .getUserMedia({
      audio: true
    })

    .then(function(audioStream) {
      voiceRecordedStream = audioStream;

      var videoCloneCanvas = $("#videoCloneCanvas")[0];

      var videoCloneCanvasStream = videoCloneCanvas.captureStream();

      finalStream = new MediaStream();

      audioStream.getAudioTracks().forEach(function(track) {
        finalStream.addTrack(track);

        //recordedAudioStream.addTrack(track);
      });

      videoCloneCanvasStream.getVideoTracks().forEach(function(track) {
        finalStream.addTrack(track);
      });

      //recordedAudioStream = audioStream;

      videoCloneCanvasStream.addTrack(audioStream.getAudioTracks()[0]);

      recorder = RecordRTC(finalStream, {
        type: "video"
      });

      recorder.startRecording();

      var stop = false;

      (function looper() {
        if ($("#vid")[0].paused) {
          recorder.stopRecording(function() {
            cloneBlob = recorder.getBlob();

            console.log("blob", cloneBlob);

            var cloneVideo = $("#cloneVideoWithAudio");

            cloneVideo.attr("src", URL.createObjectURL(cloneBlob));

            $("#vid").attr("src", URL.createObjectURL(cloneBlob));

            audioStream.stop();

            videoCloneCanvasStream.stop();

            $("#audioRecordview").css("display", "block");

            $("#audioRec").css("display", "none");

            $("#audioRecPreview").css("display", "block");

            $(".play-circle").css("display", "none");

            $("#videoLandingView").css("display", "none");

            $("#cloneVideoWithAudio").css("display", "block");

            var privewToolWidth = $("#playPreview").width();

            var previewToolHeight = $("#playPreview").height();

            screenEditorToolHeight = $("#screenshotView").outerHeight(true);

            //$("#playPreview").css("left", (renderatorEditorContainerWidth - privewToolWidth) / 2 + "px");

            $("#playPreview").css(
              "top",

              ((renderatorEditorContainerHeight - screenEditorToolHeight) / 2 -
                previewToolHeight) /
                2 +
                "px"
            );

            //$("#screenshotView").css("display", "block");

            // $("#innerOverlay").css("display", "none");

            hideLoader();
          });

          return;
        }

        setTimeout(looper);
      })();

      setTimeout(function() {
        stop = true;
      });
    });
}

function uploadSoundTrack() {
  return false; // disabling it for now as discussed https://trello.com/c/8jLuBPty/85-voice-over-music

  $("#vid").attr("src", $("#OrigionalVideo").attr("src"));

  $("#recordAudioView").css("display", "none");

  $("#recordView").css("position", "");

  $("#recordView").css("top", "");

  this.disabled = true;

  isAudio = true;

  var selector = new FileSelector();

  selector.accept = "*.mp3";

  selector.selectSingleFile(function(file) {
    if (!file || !file.size) {
      alert("Please try again by selecting a valid mp3 file.");

      return;
    }

    showLoader();

    //playVideo("vid");

    var rec = false;

    var reader = new FileReader();

    reader.file = file;

    reader.onload = function(e) {
      playVideo("vid");

      // Import callback function

      // provides PCM audio data decoded as an audio buffer

      context.decodeAudioData(e.target.result, function(buffer) {
        recordedAudioStream = buffer;

        createSoundSource(buffer, function(audioStream) {
          var canvas = $("#videoCloneCanvas")[0];

          var canvasStream = canvas.captureStream();

          var finalStream = new MediaStream();

          audioStream.getAudioTracks().forEach(function(track) {
            finalStream.addTrack(track);

            //recordedAudioStream.addTrack(track);
          });

          canvasStream.getVideoTracks().forEach(function(track) {
            finalStream.addTrack(track);
          });

          canvasStream.addTrack(audioStream.getAudioTracks()[0]);

          recorder = RecordRTC(finalStream, {
            type: "video"
          });

          //recordedAudioStream = audioStream;

          recorder.startRecording();

          var stop = false;

          (function looper() {
            // if(recorder.state=="recording"&&rec==false)

            // {

            //      playVideo("vid");

            //      rec=true;

            // }

            if ($("#vid")[0].ended) {
              recorder.stopRecording(function() {
                cloneBlob = recorder.getBlob();

                console.log("blob", cloneBlob);

                var cloneVideo = $("#cloneVideoWithAudio");

                cloneVideo.attr("src", URL.createObjectURL(cloneBlob));

                //$('#vid').attr('src', URL.createObjectURL(cloneBlob));

                //isAudio = false;

                audioStream.stop();

                canvasStream.stop();

                $("#audioRecordview").css("display", "block");

                $("#audioRec").css("display", "none");

                $("#audioRecPreview").css("display", "block");

                $(".play-circle").css("display", "none");

                $("#videoLandingView").css("display", "none");

                $("#cloneVideoWithAudio").css("display", "block");

                var privewToolWidth = $("#playPreview").width();

                var previewToolHeight = $("#playPreview").height();

                screenEditorToolHeight = $("#screenshotView").outerHeight(true);

                // $("#playPreview").css("left", (renderatorEditorContainerWidth - privewToolWidth) / 2 + "px");

                $("#playPreview").css(
                  "top",

                  (renderatorEditorContainerHeight - screenEditorToolHeight) /
                    2 -
                    previewToolHeight +
                    "px"
                );
              });

              return;
            }

            setTimeout(looper);
          })();

          setTimeout(function() {
            stop = true;
          });
        });
      });
    };

    reader.readAsArrayBuffer(reader.file);
  });
}

function voiceOverOk() {
  isAudio = false;

  $("#vid").attr("src", $("#cloneVideoWithAudio").attr("src"));

  $("#recordView").css("display", "none");

  $("#videoLandingView").css("display", "block");

  $("#screenshotView").css("display", "block");

  $("#innerOverlay").css("display", "none");

  $(".play-circle").css("display", "block");
}

function voiceOverCancel() {
  isAudio = false;

  $("#recordView").css("display", "none");

  $("#videoLandingView").css("display", "block");

  $("#screenshotView").css("display", "block");

  $("#innerOverlay").css("display", "none");

  $(".play-circle").css("display", "block");
}

function finalVideoRendering() {}

function getMp3Stream(callback) {
  var selector = new FileSelector();

  selector.accept = "*.mp3";

  selector.selectSingleFile(function(file) {
    if (!file || !file.size) {
      alert("Please try again by selecting a valid mp3 file.");

      return;
    }

    var reader = new FileReader();

    reader.file = file;

    reader.onload = function(e) {
      // Import callback function

      // provides PCM audio data decoded as an audio buffer

      context.decodeAudioData(e.target.result, function(buffer) {
        createSoundSource(buffer, callback);
      });
    };

    reader.readAsArrayBuffer(reader.file);
  });

  alert(reader);
}

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context = new AudioContext();

var gainNode = context.createGain();

gainNode.connect(context.destination);

gainNode.gain.value = 0; // don't play for self

function createSoundSource(buffer, callback) {
  var soundSource = context.createBufferSource();

  soundSource.loop = true;

  soundSource.buffer = buffer;

  soundSource.start(0, 0 / 1000);

  soundSource.connect(gainNode);

  var destination = context.createMediaStreamDestination();

  soundSource.connect(destination);

  // durtion=second*1000 (milliseconds)

  callback(destination.stream);
}

function share() {
  if (isVideo != true) {
  } else {
    $(".play-circle").hide();
  }

  $(".trash").show();

  $("#textPreview").hide();

  $("#innerOverlay").css("display", "block");

  $("#screenshotView").css("display", "none");

  $("#colorEffects").css("display", "none");

  $("#editTextView").css("display", "none");

  $("#recordAudioView").css("display", "none");

  $("#shareView").css("display", "block");

  screenEditorToolHeight = $("#screenshotView").outerHeight(true);

  $(".shareIconDiv").css(
    "margin-top",

    (renderatorEditorContainerHeight -
      screenEditorToolHeight -
      $(".shareIconDiv").height()) /
      2 +
      "px"
  );

  $(".shareIcon").css("height", (windowHeight * 12) / 100 + "px");

  $("#firstHalfShareIcon").css(
    "width",

    renderatorEditorContainerWidth + "px"
  );

  $("#secondHalfShareIcon").css(
    "width",

    renderatorEditorContainerWidth / 2 + "px"
  );
}

effectPreview = function(typeOfEffect) {
  if (!isVideo) {
    selectedFilter = typeOfEffect;

    applySelectedFilter("effectPreview");

    //$("#snapData").removeClass("warm design urban").addClass(typeOfEffect);

    $("#screenshotView").css("display", "block");

    $("#snapLandingView").css("display", "block");

    $("#videoLandingView").hide();

    closeEffects();
  } else {
    selectedFilter = typeOfEffect;

    $("#videoLandingView").css("display", "block");

    $("#VideocolorEffects").hide();

    $("#snapLandingView").hide();

    if (recordedAudioStream != undefined && recordedAudioStream.length > 0) {
      toRecord = false;

      reRenderWithAudio();
    } else {
      playVideo("vid");
    }

    closeEffects();
  }
};

downloadFinalSnap = function() {
  if (isVideo) {
    $("#capturedVideo").attr("href", $("#vid").attr("src"));

    $("#capturedVideo").trigger("click");
  } else {
    applySelectedFilter("download");
  }
};

function downloadVideo() {
  window.open($("#capturedVideo").attr("href"), "_blank");

  closeEditor();
}

applySelectedFilter = function(purpose) {
  showLoader();

  if (
    shareTo == "facebook" ||
    shareTo == "twitter" ||
    shareTo == "pinterest" ||
    shareTo == "dropbox" ||
    shareTo == "linkedIn" ||
    shareTo == "whatsApp" ||
    shareTo == "youtube" ||
    shareTo == "snapChat" ||
    shareTo == "paperPlane"
  ) {
    var popUpWidth = windowWidth / 2;

    var popUpheight = windowHeight / 2;

    //authWindow= window.open('about:blank', 'FearFighter', 'left=20,top=20,toolbar=0,resizable=1');

    authWindow = window.open(
      "about:blank",

      shareTo,

      "left=" +
        (windowWidth - popUpWidth) / 2 +
        ",top=" +
        (windowHeight - popUpheight) / 2 +
        ",toolbar=0,resizable=0,width=" +
        popUpWidth +
        ",height=" +
        popUpheight
    );

    authWindow.focus();
  }

  if (!isVideo) {
    var c = document.querySelector("canvas"),
      ctx = c.getContext("2d");

    var image = document.getElementById("origionalSnapData");

    ctx.clearRect(0, 0, image.naturalWidth, image.naturalHeight);

    var data;

    switch (selectedFilter) {
      case "urban": {
        data = Filters.applyCssFilter("mayfair", image);

        break;
      }

      case "design": {
        data = Filters.applyCssFilter("calarendon", image);

        break;
      }

      case "warm": {
        data = Filters.applyCssFilter("nashville", image);

        break;
      }

      default: {
        data = Filters.applyCssFilter("noEffects", image);

        break;
      }
    }

    if (data == undefined) {
      ctx.drawImage(image, 0, 0);

      data = ctx.getImageData(0, 0, image.width, image.height);
    }

    ctx.putImageData(data, 0, 0);

    var marginForLogo = 0;

    if (
      $("#textToAdd").text() != undefined &&
      $("#textToAdd").text().length > 0
    ) {
      textMessage = $("#textToAdd").text();

      marginForLogo = parseFloat($("#textToAdd").css("font-size"));

      addTextToCanvas(ctx, c.width, c.height);

      hideLoader();
    }

    if (includeLogo) {
      var logoImg = document.getElementById("brandLogo");

      ctx.drawImage(
        logoImg,

        (image.naturalWidth * 5) / 100 - marginForLogo,

        (image.naturalHeight * 90) / 100 - marginForLogo
      );
    }

    //imageData=c.toDataURL();

    //$("#captured").attr('href', c.toDataURL());

    if (purpose == "download") {
      download(
        c.toDataURL(),

        Math.floor(Math.random() * 90000) + 10000 + ".png",

        "image/png"
      );

      hideLoader();

      closeEditor();
    }

    if (purpose == "share") {
      var widthTodownload;

      var heightTodownload;

      if (c.width > 1100) {
        widthTodownload = c.width / 2;

        heightTodownload = c.height / 2;
      } else {
        widthTodownload = c.width;

        heightTodownload = c.height;
      }

      resizeImage(c.toDataURL(), widthTodownload, heightTodownload, saveImage);

      //saveImage(c.toDataURL().replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));

      //hideLoader();
    }

    if (purpose == "addText") {
      $("#snapData").attr("src", c.toDataURL());

      hideLoader();
    }

    if (purpose == "effectPreview") {
      $("#snapData").attr("src", c.toDataURL());

      hideLoader();
    }
  } else {
    saveVideo(cloneBlob);
  }
};

Filters.applyCssFilter = function(filterType, _img) {
  var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

  canvas.width = _img.width;

  canvas.height = _img.height;

  var data;

  // filter

  if (typeof ctx.filter !== "undefined") {
    switch (filterType) {
      case "nashville": {
        data = Filters.nashville(_img);

        break;
      }

      case "mayfair": {
        data = Filters.mayfair(_img);

        break;
      }

      case "calarendon": {
        data = Filters.calarendon(_img);

        break;
      }

      default: {
        ctx.drawImage(_img, 0, 0);

        data = ctx.getImageData(0, 0, _img.width, _img.height);
      }
    }
  } else {
    ctx.drawImage(_img, 0, 0);

    data = ctx.getImageData(0, 0, _img.width, _img.height);
  }

  return data;

  //document.querySelector("img").src = canvas.toDataURL();

  //download(canvas.toDataURL(), Math.floor(Math.random() * 90000) + 10000 + ".png", "image/png");
};

Filters.mayfair = function(_img, w, h) {
  if (w == undefined || h == undefined) {
    w = _img.width;

    h = _img.height;
  }

  var c = document.createElement("canvas");

  (c.width = w), (c.height = h);

  var context = c.getContext("2d");

  context.filter = "contrast(1.1) saturate(1.5)";

  if (w == undefined || h == undefined) {
    w = _img.width;

    h = _img.height;
  }

  context.drawImage(_img, 0, 0, w, h);

  context.globalCompositeOperation = "overlay";

  if (x == 0 || y == 0 || r0 == 0 || r1 == 0 || typeof grd == "undefined") {
    (x = (_img.width * 31.25) / 100),
      (y = (_img.height * 44.38) / 100),
      (r0 = 0),
      (r1 = (_img.width * 73) / 100);

    grd = context.createRadialGradient(x, y, r0, x, y, r1);

    grd.addColorStop(0, "rgba(255,255,255,.8)");

    grd.addColorStop(0.1, "rgba(255,228,181,.3)");

    grd.addColorStop(1, "rgba(0,0,0,1)");
  }

  context.fillStyle = grd;

  context.fillRect(0, 0, _img.width, _img.height);

  if (isVideo) {
    return ctx.getImageData(0, 0, w, h);
  } else {
    return context.getImageData(0, 0, w, h);
  }
};

Filters.nashville = function(_img, w, h) {
  if (w == undefined || h == undefined) {
    w = _img.width;

    h = _img.height;
  }

  var c = document.createElement("canvas");

  (c.width = w), (c.height = h);

  var context = c.getContext("2d");

  context.fillStyle = "rgba(247,176,153,.56)";

  context.fillRect(0, 0, w, h);

  context.globalCompositeOperation = "darken";

  context.drawImage(_img, 0, 0);

  context.fillStyle = "rgba(0,70,150,.05)";

  context.globalCompositeOperation = "lighten";

  context.fillRect(0, 0, w, h);

  context.filter = "sepia(.2) contrast(1.1) brightness(1.05) saturate(1.5)";

  if (isVideo) {
    return context.getImageData(0, 0, w, h);
  } else {
    return context.getImageData(0, 0, w, h);
  }
};

Filters.calarendon = function(_img, w, h) {
  if (w == undefined || h == undefined) {
    w = _img.width;

    h = _img.height;
  }

  var c = document.createElement("canvas");

  (c.width = w), (c.height = h);

  var context = c.getContext("2d");

  context.filter = "contrast(1.2) saturate(1.35)";

  context.drawImage(_img, 0, 0);

  context.fillStyle = "rgba(127,187,227,.2)";

  context.globalCompositeOperation = "overlay";

  context.fillRect(0, 0, w, h);

  if (isVideo) {
    return context.getImageData(0, 0, w, h);
  } else {
    return context.getImageData(0, 0, w, h);
  }
};

Filters.getPixels = function(img) {
  var c = this.getCanvas(img.width, img.height);

  var ctx = c.getContext("2d");

  ctx.drawImage(img, 0, 0);

  return ctx.getImageData(0, 0, c.width, c.height);
};

Filters.getCanvas = function(w, h) {
  var c = document.createElement("canvas");

  c.width = w;

  c.height = h;

  return c;
};

Filters.filterImage = function(filter, image, var_args) {
  var args = [this.getPixels(image)];

  for (var i = 2; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return filter.apply(null, args);
};

Filters.grayscale = function(pixels, args) {
  if (!isVideo) {
    return Filter.process(img, "nashville", pixels);
  } else {
    var pix = pixels.data;

    var lag_r = new Lagrange(0, 0, 1, 1);

    var lag_g = new Lagrange(0, 0, 1, 1);

    var lag_b = new Lagrange(0, 0, 1, 1);

    var r = [
      [0, 0, 0],

      [1, 30, 5],

      [2, 58, 25],

      [3, 83, 85],

      [4, 112, 140],

      [5, 190, 120],

      [6, 255, 255]
    ];

    var g = [
      [0, 0, 0],

      [1, 20, 5],

      [2, 50, 62],

      [3, 132, 150],

      [4, 190, 205],

      [5, 255, 225]
    ];

    var b = [
      [0, 0, 65],

      [1, 40, 90],

      [2, 85, 115],

      [3, 212, 185],

      [4, 255, 205]
    ];

    lag_r.addMultiPoints(r);

    lag_g.addMultiPoints(g);

    lag_b.addMultiPoints(b);

    for (var i = 0, n = pix.length; i < n; i += 4) {
      pix[i] = lag_r.valueOf(pix[i]);

      pix[i + 1] = lag_b.valueOf(pix[i + 1]);

      pix[i + 2] = lag_g.valueOf(pix[i + 2]);
    }

    return pix;

    //        var d = pixels.data;

    // for (var i = 0; i < d.length; i += 4) {

    //     var r = d[i];

    //     var g = d[i + 1];

    //     var b = d[i + 2];

    //     // CIE luminance for the RGB

    //     // The human eye is bad at seeing red and blue, so we de-emphasize them.

    //     var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    //     d[i] = d[i + 1] = d[i + 2] = v

    // }

    // return pixels;
  }
};

Filters.contrast = function(pixels, args) {
  if (!isVideo) {
    return Filter.process(img, "toaster", pixels);
  } else {
    var pix = pixels.data;

    var lag_r = new Lagrange(0, 0, 1, 1);

    var lag_g = new Lagrange(0, 0, 1, 1);

    var lag_b = new Lagrange(0, 0, 1, 1);

    var r = [
      [0, 0, 120],

      [1, 50, 160],

      [2, 105, 198],

      [3, 145, 215],

      [4, 190, 230],

      [5, 255, 255]
    ];

    var g = [
      [0, 0, 0],

      [1, 22, 60],

      [2, 125, 180],

      [3, 255, 255]
    ];

    var b = [
      [0, 0, 50],

      [1, 40, 60],

      [2, 80, 102],

      [3, 122, 148],

      [4, 185, 185],

      [5, 255, 210]
    ];

    lag_r.addMultiPoints(r);

    lag_g.addMultiPoints(g);

    lag_b.addMultiPoints(b);

    for (var i = 0, n = pix.length; i < n; i += 4) {
      pix[i] = lag_r.valueOf(pix[i]);

      pix[i + 1] = lag_b.valueOf(pix[i + 1]);

      pix[i + 2] = lag_g.valueOf(pix[i + 2]);
    }

    return pix;

    //    var d = pixels.data;

    // var factor = 3;

    // for (var i = 0; i < d.length; i += 4) {

    //     d[i] = factor * (d[i] - 128) + 128;

    //     d[i + 1] = factor * (d[i + 1] - 128) + 128;

    //     d[i + 2] = factor * (d[i + 2] - 128) + 128;

    // }

    // return pixels;
  }
};

Filters.brightness = function(pixels, adjustment) {
  if (!isVideo) {
    return Filter.process(img, "sutro", pixels);
  } else {
    var pix = pixels.data;

    var lag_r = new Lagrange(0, 0, 1, 1);

    var lag_g = new Lagrange(0, 0, 1, 1);

    var lag_b = new Lagrange(0, 0, 1, 1);

    var r = [
      [0, 0, 0],

      [1, 40, 35],

      [2, 90, 92],

      [3, 145, 155],

      [4, 235, 230],

      [5, 255, 235]
    ];

    var g = [
      [0, 0, 0],

      [1, 62, 50],

      [2, 155, 140],

      [3, 210, 188],

      [4, 255, 225]
    ];

    var b = [
      [0, 0, 0],

      [1, 80, 80],

      [2, 182, 145],

      [3, 128, 112],

      [4, 255, 220]
    ];

    lag_r.addMultiPoints(r);

    lag_g.addMultiPoints(g);

    lag_b.addMultiPoints(b);

    for (var i = 0, n = pix.length; i < n; i += 4) {
      pix[i] = lag_r.valueOf(pix[i]);

      pix[i + 1] = lag_b.valueOf(pix[i + 1]);

      pix[i + 2] = lag_g.valueOf(pix[i + 2]);
    }

    return pix;

    // var d = pixels.data;

    // var factor = 5;

    // for (var i = 0; i < d.length; i += 4) {

    //     d[i] = d[i] + adjustment;

    //     d[i + 1] = d[i + 1] * (.94) + adjustment;

    //     d[i + 2] = d[i + 2] * (.83) + adjustment;

    // }

    // return pixels;
  }
};

Filters.normal = function(pixels) {
  if (!isVideo) {
    return Filter.process(img, "original");
  } else {
    //  return Filter.process(img, "original");

    var d = pixels.data;

    return pixels;
  }
};

function runFilter(id, filter, purpose, arg1, arg2, arg3) {
  var c = document.getElementById(id);

  _purpose = purpose;

  var idata = Filters.filterImage(filter, img, arg1, arg2, arg3);

  // c.width = idata.width;

  // c.height = idata.height;

  // var ctx = c.getContext('2d');

  // ctx.putImageData(idata, 0, 0);

  // if ($("#textToAdd").text() != undefined && $("#textToAdd").text().length > 0) {

  //     textMessage = $("#textToAdd").text();

  //     addTextToCanvas(ctx, c.width, c.height);

  // }

  // //imageData=c.toDataURL();

  // //$("#captured").attr('href', c.toDataURL());

  // if (purpose == "download")

  // { download(c.toDataURL(), Math.floor(Math.random() * 90000) + 10000 + ".png", "image/png"); closeEditor(); }

  // if (purpose == "share") {

  //     var widthTodownload;

  //     var heightTodownload;

  //     if (c.width > 1100) { widthTodownload = c.width / 2; heightTodownload = c.height / 2; }

  //     else { widthTodownload = c.width; heightTodownload = c.height; }

  //     resizeImage(c.toDataURL(), widthTodownload, heightTodownload, saveImage);

  // }

  // if (purpose = "addText") {

  //     $("#snapData").attr("src", c.toDataURL());

  // }
}

function resizeImage(url, width, height, callback) {
  var sourceImage = new Image();

  sourceImage.onload = function() {
    // Create a canvas with the desired dimensions

    var canvas = document.createElement("canvas");

    canvas.width = width;

    canvas.height = height;

    // Scale and draw the source image to the canvas

    canvas.getContext("2d").drawImage(sourceImage, 0, 0, width, height);

    // Convert the canvas to a data URL in PNG format

    callback(
      canvas.toDataURL().replace(/^data:image\/(png|jpeg|jpg);base64,/, "")
    );
  };

  sourceImage.src = url;
}

function _base64ToArrayBuffer(base64) {
  var binary_string = window.atob(base64);

  var len = binary_string.length;

  var bytes = new Uint8Array(len);

  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }

  return bytes.buffer;
}

grayscaleFilter = function(purpose) {
  img = document.getElementById("origionalSnapData");

  runFilter("effectFilters", Filters.grayscale, purpose);
};

brightnessFilter = function(purpose) {
  img = document.getElementById("origionalSnapData");

  runFilter("effectFilters", Filters.brightness, purpose, 40);
};

contrastFilter = function(purpose) {
  img = document.getElementById("origionalSnapData");

  runFilter("effectFilters", Filters.contrast, purpose);
};

normalFilter = function(purpose) {
  img = document.getElementById("origionalSnapData");

  runFilter("effectFilters", Filters.normal, purpose);
};

askText = function() {
  $("#startText").hide();

  $("#inputText").show();

  $("#textPreview").show();

  var textPreviewTop = 0;

  if (isVideo) {
    textPreviewTop = $("#videoLandingView").outerHeight(true);
  } else {
    textPreviewTop = $("#snapLandingView").outerHeight(true);
  }

  $("#textPreview").css("top", textPreviewTop);

  textMessage = "";

  editTextViewTop = $("#editTextView").position().top;
};

textEntered = function() {
  if (editTextViewTop / 2 != $("#editTextView").css("top")) {
    $("#editTextView").css("top", editTextViewTop / 2 + "px");
  }

  var tval = $("#textInput").val(),
    tlength = tval.length,
    set = 60,
    remain = parseInt(set - tlength);

  $("p").text(remain);

  if (remain < 0) {
    $("#textInput").val(tval.substring(0, tlength - 1));

    textMessage = tval.substring(0, tlength - 1);
  } else {
    $("#textToAdd").text(tval);

    textMessage = tval;
  }

  // $("#textPreview").css("max-height",$("#textToAdd").outerHeight(true));
};

addTextDone = function() {
  var toolBarHeight = $("#screenshotView").height();

  var snapDataHeight = $("#rederatorEditorContainer").height();

  //$("#snapLandingView").css("height",snapDataHeight-(toolBarHeight+10));

  if (isVideo != true) {
    applySelectedFilter("addText");

    var tval = $("#textToAdd").text(),
      textMessage = tval;

    $("#snapLandingView").css("display", "block");
  } else {
    if (recordedAudioStream != undefined && recordedAudioStream.length > 0) {
      toRecord = false;

      reRenderWithAudio();
    } else {
      toRecord = true;

      $("#videoLandingView").css("display", "block");

      $(".play-circle").show();

      playVideo("vid");
    }
  }

  $("#screenshotView").css("display", "block");

  $("#innerOverlay").css("display", "none");

  $(".trash").show();
};

addTextToCanvas = function(ctx, w, h) {
  var fontSize = parseFloat($("#textToAdd").css("font-size"));

  ctx.font = fontSize + "px" + " monospace";

  var lines = fragmentText(textMessage, w - fontSize, ctx);

  ctx.fillStyle = "rgba(0,0,0,0.7)";

  ctx.fillRect(
    0,

    h - fontSize * lines.length - 10,

    w,

    fontSize * lines.length + 20
  );

  var textStartingPoint = h - fontSize * lines.length - 10;

  lines.forEach(function(line, i) {
    ctx.fillStyle = "white";

    ctx.textAlign = "center";

    ctx.fillText(line, w / 2, textStartingPoint + fontSize * (i + 1));
  });

  //ctx.fillText(textMessage,c.width/2,c.height-($("textToAdd").height()+5));
};

function fragmentText(text, maxWidth, ctx) {
  var words = text.split(" "),
    lines = [],
    line = "";

  if (ctx.measureText(text).width < maxWidth) {
    return [text];
  }

  while (words.length > 0) {
    while (ctx.measureText(words[0]).width >= maxWidth) {
      var tmp = words[0];

      words[0] = tmp.slice(0, -1);

      if (words.length > 1) {
        words[1] = tmp.slice(-1) + words[1];
      } else {
        words.push(tmp.slice(-1));
      }
    }

    if (ctx.measureText(line + words[0]).width < maxWidth) {
      line += words.shift() + " ";
    } else {
      lines.push(line);

      line = "";
    }

    if (words.length === 0) {
      lines.push(line);
    }
  }

  return lines;
}

email = function() {
  window.location.href =
    "mailto:test@example.com?subject=subject&body=" + shareLink;
};

hideAllTemplate = function() {
  $("#innerOverlay").hide();
};

clearText = function() {
  $("#textInput").val("");

  $("#textToAdd").text("");

  closeEffects();
};

saveImage = function(image) {
  showLoader();

  $.ajax({
    type: "POST",

    // url: uploaderApplicationPath + "/Home/UploadImage",

    url: apiUrl + uploadImageUrl,

    data: JSON.stringify({
      imageData: image
    }),

    contentType: "application/json; charset=utf-8",

    dataType: "json",

    processData: false,

    async: false,

    success: function(msg) {
      if (msg.status == "Fail") {
        alert(msg.message);
      }

      if (msg.status == "OK") {
        // imageLocation =

        //   window.location.protocol +

        //   "//" +

        //   window.location.host +

        //   "/Condodata/" +

        //   basepath +

        //   "/DownloadedImages/" +

        //   msg.fileName;

        imageLocation = folderUrl + msg.fileName;

        shareContent();
      }
    },

    error: function(xhr, status, error) {
      hideLoader();
    }
  });
};

saveVideo = function(video) {
  showLoader();

  var data = new FormData();

  data.append("file", video);

  $.ajax({
    type: "POST",

    //url: uploaderApplicationPath + "/Home/UploadVideo",

    url: apiUrl + uploadVideoUrl,

    data: data,

    contentType: false,

    processData: false,

    dataType: "json",

    success: function(msg) {
      if (msg.status == "Fail") {
        alert(msg.message);
      }

      if (msg.status == "OK") {
        // videoLocation =

        //   window.location.protocol +

        //   "//" +

        //   window.location.host +

        //   "/Condodata/" +

        //   basepath +

        //   "/DownloadedImages/" +

        //   msg.fileName;

        videoLocation = folderUrl + msg.fileName;

        shareContent();
      }
    },

    error: function(xhr, status, error) {
      hideLoader();
    }
  });
};

shareContent = function() {
  switch (shareTo) {
    case "facebook": {
      if (!isVideo) {
        shareLink =
          "https://www.facebook.com/dialog/feed?app_id=252742601907523&display=popup&picture=" +
          imageLocation;
      } else {
        shareLink =
          "https://www.facebook.com/dialog/feed?app_id=252742601907523&display=popup&link=" +
          videoLocation;
      }

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "twitter": {
      if (!isVideo) {
        shareLink =
          "https://twitter.com/intent/tweet?text=" + imageLocation + " ";
      } else {
        shareLink =
          "https://twitter.com/intent/tweet?text=" + videoLocation + " ";
      }

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "pinterest": {
      if (!isVideo) {
        shareLink =
          "http://pinterest.com/pin/create/button/?url=" +
          imageLocation +
          "&media=" +
          imageLocation +
          "&description=Renderator Virtual Tour";
      } else {
        shareLink =
          "http://pinterest.com/pin/create/button/?url=" +
          videoLocation +
          "&media=" +
          "http://tour.renderator.com/renderator/images/clientLogo.png" +
          "&description=Renderator Virtual Tour";
      }

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "dropbox": {
      shareLink = "";

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "linkedIn": {
      if (!isVideo) {
        shareLink =
          "https://www.linkedin.com/shareArticle?url=" +
          imageLocation +
          "&summary=" +
          imageLocation;
      } else {
        shareLink =
          "https://www.linkedin.com/shareArticle?url=" +
          videoLocation +
          "&summary=" +
          videoLocation;
      }

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "whatsApp": {
      shareLink = "";

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "youtube": {
      shareLink = "";

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "snapChat": {
      shareLink = "";

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "paperPlane": {
      shareLink = "";

      sharePopup();

      hideLoader();

      closeEffects();

      closeEditor();

      break;
    }

    case "Email": {
      if (!isVideo) {
        shareLink = imageLocation;
      } else {
        shareLink = videoLocation;
      }

      email();

      hideLoader();

      closeEditor();

      break;
    }

    default: {
      hideLoader();
    }
  }
};

sharePopup = function() {
  //var popUpWidth = windowWidth / 2

  //var popUpheight = windowHeight / 2;

  //authWindow = window.open('about:blank', '', 'left=' + (windowWidth - popUpWidth) / 2 + ',top=' + (windowHeight - popUpheight) / 2 + ',toolbar=0,resizable=0,width=' + popUpWidth + ',height=' + popUpheight);

  //authWindow.focus();

  authWindow.location.replace(shareLink);
};

clearVideoData = function() {
  $("video").attr("src", "");

  $("#capturedVideo").attr("href", "");

  textMessage = "";

  selectedFilter = "";

  recordedAudioStream = "";

  $("#textInput").val(textMessage);

  $("#textToAdd").text(textMessage);
};

landscapeSetting = function() {
  return; // 007 edited

  window.location.reload();
};

portraitSetting = function() {
  window.location.reload();
};

function getDataUri(url, callback) {
  var image = new Image();

  image.crossOrigin = "anonymous";

  image.onload = function() {
    var canvas = document.createElement("canvas");

    canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size

    canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

    canvas.getContext("2d").drawImage(this, 0, 0);

    // Get raw image data

    //callback(canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, ''));

    // ... or get as Data URI

    callback(canvas.toDataURL("image/png"));
  };

  image.src = url;
}

function showLoader() {
  $(".loaderbgOverlay").css("display", "block");

  $(".loader").css("display", "block");
}

function hideLoader() {
  $(".loaderbgOverlay").css("display", "none");

  $(".loader").css("display", "none");
}

// Instagram Filter Canvas

FilterCanvas = {};

FilterCanvas.canvas = {};

FilterCanvas.canvas.getPixels = function(img) {
  var canvas, context;

  canvas = FilterCanvas.canvas.getCanvas(img.width, img.height);

  context = canvas.getContext("2d");

  context.drawImage(img, 0, 0);

  return context.getImageData(0, 0, canvas.width, canvas.height);
};

FilterCanvas.canvas.getCanvas = function(width, height) {
  var canvas = document.createElement("canvas");

  canvas.width = width;

  canvas.height = height;

  return canvas;
};

FilterCanvas.canvas.renderCanvas = function(img, new_pixels, filterName) {
  var canvas, context;

  canvas = FilterCanvas.canvas.getCanvas(img.width, img.height);

  context = canvas.getContext("2d");

  context.putImageData(new_pixels, 0, 0);

  var marginForLogo = 0;

  if (
    $("#textToAdd").text() != undefined &&
    $("#textToAdd").text().length > 0
  ) {
    textMessage = $("#textToAdd").text();

    marginForLogo = parseFloat($("#textToAdd").css("font-size")) * 2;

    addTextToCanvas(context, img.width, img.height);
  }

  if (includeLogo) {
    var logoImg = document.getElementById("brandLogo");

    context.drawImage(
      logoImg,

      (img.width * 5) / 100 - marginForLogo,

      (img.height * 90) / 100 - marginForLogo
    );
  }

  switch (_purpose) {
    case "download": {
      download(
        canvas.toDataURL(),

        Math.floor(Math.random() * 90000) + 10000 + ".png",

        "image/png"
      );

      closeEditor();

      hideLoader();

      break;
    }

    case "share": {
      var widthTodownload;

      var heightTodownload;

      if (img.width > 1100) {
        widthTodownload = img.width / 2;

        heightTodownload = img.height / 2;
      } else {
        widthTodownload = img.width;

        heightTodownload = img.height;
      }

      resizeImage(
        canvas.toDataURL(),

        widthTodownload,

        heightTodownload,

        saveImage
      );

      hideLoader();

      break;
    }

    case "addText": {
      $("#snapData").attr("src", canvas.toDataURL());

      hideLoader();

      break;
    }

    case "effectPreview": {
      switch (filterName) {
        case "toaster": {
          $("#warmEffect").attr("src", canvas.toDataURL());

          $("#warmEffectVideo").attr("src", canvas.toDataURL());

          break;
        }

        case "nashville": {
          $("#urbanEffect").attr("src", canvas.toDataURL());

          $("#urbanEffectVideo").attr("src", canvas.toDataURL());

          break;
        }

        case "sutro": {
          $("#designEffect").attr("src", canvas.toDataURL());

          $("#designEffectVideo").attr("src", canvas.toDataURL());

          break;
        }

        case "Retro": {
          break;
        }

        case "origional": {
          $("#normalEffect").attr("src", canvas.toDataURL());

          $("#normalEffectVideo").attr("src", canvas.toDataURL());

          break;
        }
      }

      hideLoader();

      break;
    }

    case "videoRerender": {
      console.log("frame:" + filterName);

      return new_pixels;
    }
  }

  //imageData=c.toDataURL();

  //img.src = canvas.toDataURL();
};

//Lagrange.js

Lagrange = {};

/**

 * At least two points are needed to interpolate something.

 * @class Lagrange polynomial interpolation.

 * The computed interpolation polynomial will be reffered to as L(x).

 * @example

 * var l = new Lagrange(0, 0, 1, 1);

 * var index = l.addPoint(0.5, 0.8);

 * console.log(l.valueOf(0.1));

 *

 * l.changePoint(index, 0.5, 0.1);

 * console.log(l.valueOf(0.1));

 *

 * @see https://gist.github.com/dburner/8550030

 * @see http://jsfiddle.net/maccesch/jgU3Y/

 */

var Lagrange = function(x1, y1, x2, y2) {
  this.xs = [x1, x2];

  this.ys = [y1, y2];

  this.ws = [];

  this._updateWeights();
};

/**

 * Adds a new point to the polynomial. L(x) = y

 * @return {Number} The index of the added point. Used for changing the point. See changePoint.

 */

Lagrange.prototype.addPoint = function(x, y) {
  this.xs.push(x);

  this.ys.push(y);

  this._updateWeights();

  return this.xs.length - 1;
};

/**

 * Recalculate barycentric weights.

 */

Lagrange.prototype._updateWeights = function() {
  var len = this.xs.length; // the number of points

  var weight;

  for (var j = 0; j < len; ++j) {
    weight = 1;

    for (var i = 0; i < len; ++i) {
      if (i != j) {
        weight *= this.xs[j] - this.xs[i];
      }
    }

    this.ws[j] = 1 / weight;
  }
};

/**

 * Calculate L(x)

 */

Lagrange.prototype.valueOf = function(x) {
  var a = 0;

  var b = 0;

  var c = 0;

  for (var j = 0; j < this.xs.length; ++j) {
    if (x != this.xs[j]) {
      a = this.ws[j] / (x - this.xs[j]);

      b += a * this.ys[j];

      c += a;
    } else {
      return this.ys[j];
    }
  }

  return b / c;
};

Lagrange.prototype.addMultiPoints = function(arr) {
  for (var i = 0, n = arr.length; i < n; i++) {
    if (arr[i][0] !== 0 && arr[i][0] !== 1) {
      this.addPoint(arr[i][1], arr[i][2]);
    }
  }
};

//   makeTextFile = function (text) {

//     var data = new Blob([text], {type: 'text/plain'});

//     // If we are replacing a previously generated file we need to

//     // manually revoke the object URL to avoid memory leaks.

//     if (textFile !== null) {

//       window.URL.revokeObjectURL(textFile);

//     }

//     textFile = window.URL.createObjectURL(data);

//     return textFile;

//   };

// Conversation javascript

function startConversation() {
  console.log("start conversation here");

  $("#errorText").html("");

  // if (localStorage.getItem("renderator-user") == tourAdmin)

  //   conversationName = "ADMIN";

  conversationText = $("#conversationText").val();

  conversationText = conversationText.trim();

  if (!conversationText) {
    $("#errorText").html("Question field is required");

    return;
  }

  // if (!isLoggedIn) {

  //   //isChatOn = false;

  //

  //   var krpano = document.getElementById("krpanoSWFObject");

  //   if (krpano && krpano.get) {

  //     krpano.call("removehotspot(chatHotspot_0)");

  //   }

  //   showSignUp();

  //   return;

  // }

  sendMessageToDeveloper();

  /*

  $.getJSON("renderator/config/renderatorConfig.json").done(function (json) {

    var url = json.config.apiUrl + json.config.addConversationUrl;

    var data = {

      tour_id: currentTour,

      title: conversationTitle,

      ath: ath,

      atv: atv,

      author_name: conversationName,

      text: conversationText,

      scene: scene

    };

    makePostCallWithHeader(url, onConversationStarted, failCallback, data);

  });*/
}

function makeGetCall(url, callback) {
  $("#dialogLoading").css("display", "block");

  $.ajax({
    url: url,

    type: "GET",

    dataType: "JSON",

    success: function(response) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      callback(response);
    },

    error: function(jqXHR, textStatus, errorThrown) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      alert("server error");
    }
  });
}

function makePostCall(url, callback, data) {
  $("#dialogLoading").css("display", "block");

  $.ajax({
    url: url,

    type: "POST",

    dataType: "JSON",

    data: data,

    success: function(response) {
      console.log("api response : ", url, response);

      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      callback(response);
    },

    error: function(jqXHR, textStatus, errorThrown) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      $.alert({
        title: "",

        content: "Server error",

        theme: "dark"
      });
    }
  });
}

function makeGetCallWithHeader(url, successCallback, failCallback) {
  $("#dialogLoading").css("display", "block");

  $.ajax({
    url: url,

    cache: false,

    type: "GET",

    dataType: "json",

    headers: {
      Authorization: "Bearer " + localStorage.getItem("renderator-token")
    },

    success: function(response) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      successCallback(response);
    },

    error: function(jqXHR, textStatus, errorThrown) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      failCallback();
    }
  });
}

function makePostCallWithHeader(url, successCallback, failCallback, data) {
  $("#dialogLoading").css("display", "block");

  $("#btnSaveChanges").attr("disabled", true);

  $.ajax({
    url: url,

    cache: false,

    type: "POST",

    dataType: "json",

    data: data,

    headers: {
      Authorization: "Bearer " + localStorage.getItem("renderator-token")
    },

    success: function(response) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      $("#btnSaveChanges").attr("disabled", false);

      successCallback(response);
    },

    error: function(jqXHR, textStatus, errorThrown) {
      $("#dialogLoading").css("display", "none");

      $("#mainLoader").css("display", "none");

      $("#btnSaveChanges").attr("disabled", false);

      failCallback();
    }
  });
}

function defaultCallback(data) {}

function failCallback() {
  $("#btnSaveChanges").attr("disabled", false);

  $("#errorText").html("Server error");
}

function dialogFailCallBack() {
  $("#btnSaveChanges").attr("disabled", false);

  $("#dialogErrorText").html("Server error");
}

function alertFailCallBack() {
  $.alert({
    title: "",

    content: "Server error",

    theme: "dark"
  });
}

function showSignUp() {
  isFormMode = true;

  $("#panoDIV").removeClass();

  $("#chatWindow").remove();

  activeConversation = "";

  $("#renderatorPlugin").append("<div id='formDiv'></div>");

  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/signUp.html").replace(
      /%2F/g,
      "/"
    ),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#formClose").attr("src", basepath + "/images/remove.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function checkConversationText() {
  console.log("disabled check");

  if ($("#conversationText").val()) {
    $("#btnStartConversation").removeClass("disableBtn");

    $("#btnStartConversation").removeAttr("disabled");
  } else {
    $("#btnStartConversation").addClass("disableBtn");

    $("#btnStartConversation").attr("disabled", true);
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function checkSendMessageFields() {
  let username = $("#username").val();

  let useremail = $("#useremail").val();

  let valForUserEmail = validateEmail(useremail);

  if (username && valForUserEmail) {
    $("#btnStartConversation").removeClass("disableBtn");

    $("#btnStartConversation").removeAttr("disabled");
  } else {
    $("#btnStartConversation").addClass("disableBtn");

    $("#btnStartConversation").attr("disabled", true);
  }
}

function sendMessageToDeveloper() {
  // isFormMode = true;

  $("#chatWindow").load(
    encodeURIComponent(
      basepath + "/templates/sendMessageToDeveloper.html"
    ).replace(/%2F/g, "/"),

    function() {
      $("#chatClose").attr("src", basepath + "/images/close.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );
    }
  );

  setChatPostition();
}

function sendMessageFinal() {
  let username = $("#username").val();

  let useremail = $("#useremail").val();

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.addConversationUrl;

    var data = {
      tour_id: currentTour,

      user_email: useremail,

      ath: ath,

      atv: atv,

      author_name: username,

      text: conversationText,

      scene: scene,

      title: "title"
    };

    console.log("conversation : ", url, data);

    // setTimeout(function () {

    //   $('#success_button').html('<p style="text-align: right;"><b>Got it! Later, check your inbox.</b></p>');

    //   $('#footer_div').html('<p style="text-decoration: underline; cursor: pointer;" onclick="closeChat()">You can close this window.</p>');

    // }, 2000);

    // makePostCallWithHeader(url, onConversationStarted, failCallback, data);

    // makePostCall(url, onConversationStarted, data);

    makePostCall(url, conversationStarting, data);
  });
}

function conversationStarting(response) {
  if (response.success) {
    $("#success_button").html(
      '<p style="text-align: right;"><b>Got it! Later, check your inbox.</b></p>'
    );

    $("#footer_div").html(
      '<p style="text-decoration: underline; cursor: pointer;" onclick="closeChat()">You can close this window.</p>'
    );
  }
}

function showLogin() {
  isToolBarClick = true;

  isFormMode = true;

  $("#panoDIV").removeClass();

  $("#chatWindow").remove();

  activeConversation = "";

  krpano.call("removehotspot(chatHotspot_0)");

  $("#renderatorPlugin").append("<div id='formDiv'></div>");

  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/login.html").replace(/%2F/g, "/"),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#formClose").attr("src", basepath + "/images/remove.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      // console.log("document ", encodeURIComponent(basepath + "/templates/login.html").replace(/%2F/g, "/"));

      document.getElementById("txtPassword").onkeypress = function(event) {
        if (event.keyCode == 13 || event.which == 13) {
          login();
        }
      };

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function setFormPosition() {
  var width = formDimensions.width;

  var height = formDimensions.height;

  var minHeight = formDimensions.minHeight;

  var minWidth = formDimensions.minWidth;

  if (height > window.innerHeight) height = window.innerHeight;

  if (height < minHeight) height = minHeight;

  if (width > window.innerWidth) width = window.innerWidth;

  if (width < minWidth) width = minWidth;

  var top = window.innerHeight / 2 - height / 2;

  if (top < 0) top = 0;

  var left = window.innerWidth / 2 - width / 2;

  if (left < 0) left = 0;

  $("#divOverlay").css({
    width: width + "px",

    height: height + "px",

    top: top + "px",

    left: left + "px"
  });

  return;
}

function setChatPostition() {
  var width = formDimensions.width;

  var height = formDimensions.height;

  var minHeight = formDimensions.minHeight;

  var minWidth = formDimensions.minWidth;

  if (height > window.innerHeight) height = window.innerHeight;

  if (height < minHeight) height = minHeight;

  if (width > window.innerWidth) width = window.innerWidth;

  if (width < minWidth) width = minWidth;

  var positionx = mousex + 100;

  if (positionx + width + 60 > window.innerWidth) {
    var leftPosition = mousex - (width + 100);

    if (leftPosition >= 0) positionx = leftPosition;
    else positionx = window.innerWidth - (width + 60);
  }

  if (positionx < 0) positionx = 0;

  var positiony = mousey - height / 2;

  if (positiony + height > window.innerHeight)
    positiony = window.innerHeight - height;

  if (positiony < 0) positiony = 0;

  if (isMobile) {
    // console.log("window size : ", window.innerWidth, window.innerHeight);

    positionx = Math.round((window.innerWidth - width) / 2);

    positiony = Math.round((window.innerHeight - 200) / 2);
  }

  $("#chatWindow").css({
    top: positiony + "px",

    left: positionx + "px",

    height: height + "px"
  });

  $("#conversationBox").css({
    width: width + "px",

    height: "100%"
  });

  var bodyHeight = height - ($(".conversation-header").height() + 60);

  if (!activeConversation || activeConversation == "") {
    $("#conversationBody").css({
      height: bodyHeight + "px"
    });

    return;
  }

  bodyHeight = bodyHeight - $("#divConversationFooter").height();

  $("#conversationBody").css({
    height: bodyHeight + "px"
  });
}

function gotoLogin() {
  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/login.html").replace(/%2F/g, "/"),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#formClose").attr("src", basepath + "/images/remove.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      document.getElementById("txtPassword").onkeypress = function(event) {
        if (event.keyCode == 13 || event.which == 13) {
          login();
        }
      };

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function gotoSignUp() {
  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/signUp.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#formClose").attr("src", basepath + "/images/remove.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function gotoForgotPassword() {
  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/forgotPassword.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#formClose").attr("src", basepath + "/images/remove.png");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return regex.test(email);
}

function isUrl(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  return regexp.test(s);
}

function signUp() {
  $("#errorText").html("");

  var name = $("#nameText").val();

  var email = $("#emailText").val();

  var password = $("#passwordText").val();

  var confirmPassword = $("#confirmPasswordText").val();

  if (
    !name ||
    name == "" ||
    !email ||
    email == "" ||
    !password ||
    password == "" ||
    !confirmPassword ||
    confirmPassword == ""
  ) {
    $("#errorText").html("All fields are required");

    return;
  }

  name = name.trim();

  email = email.trim();

  if (name == "") {
    $("#errorText").html("Invalid name");

    return;
  }

  if (!isEmail(email)) {
    $("#errorText").html("Invalid email address");

    return;
  }

  if (password.length < 6) {
    $("#errorText").html("Password should contain atleast 6 characters");

    return;
  }

  if (password != confirmPassword) {
    $("#errorText").html("Passwords don't match");

    return;
  }

  if (!$("#termsCheckbox").is(":checked")) {
    $("#errorText").html("Please accept Terms & Conditions");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.registerUrl;

    var data = {
      name: name,

      email: email,

      password: password,

      password_confirmation: confirmPassword,

      allow_notifications: $("#notificationsCheckbox").is(":checked")
    };

    makePostCall(url, onSignUp, data);
  });
}

function onSignUp(data) {
  if (!data.success) {
    if (data.error == "") {
      $("#errorText").html("Server error");

      return;
    }

    $("#errorText").html(data.message);

    return;
  }

  $.alert({
    title: "",

    content: "You have successfully signed up",

    theme: "dark"
  });

  loggedIn(data);
}

function login() {
  // return;

  $("#errorText").html("");

  console.log("login try");

  var email = $("#emailText").val();

  var password = $("#txtPassword").val();

  if (!email || email == "" || !password || password == "") {
    $("#errorText").html("All fields are required");

    return;
  }

  email = email.trim();

  if (!isEmail(email)) {
    $("#errorText").html("Invalid email address");

    return;
  }

  if (password.length < 6) {
    $("#errorText").html("Invalid crendentials");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.loginUrl;

    var data = {
      email: email,

      password: password
    };

    makePostCall(url, onLogin, data);
  });
}

function onLogin(response) {
  if (!response.success) {
    if (response.error == "") {
      $("#errorText").html("Server error");

      return;
    }

    $("#errorText").html("Invalid crendentials");

    return;
  }

  loggedIn(response);
}

function loggedIn(response) {
  localStorage.setItem("renderator-token", response.data.api_token);

  localStorage.setItem("renderator-user", response.data.id);

  localStorage.setItem("renderator-email", response.data.email);

  localStorage.setItem("renderator-username", response.data.name);

  localStorage.setItem(
    "renderator-notification",
    response.data.allow_notifications == true
  );

  $("#adminLogin").remove();

  $("#toolContainer").append(
    '<img id="adminLogout" src="' +
      basepath +
      '/images/log-out.png" alt="Admin logout" class="toolbar-icon" onclick="logout()" ' +
      'onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()" />'
  );

  if (response.data.is_super_admin) {
    isAdmin = true;

    $("#footerToolContainer").append(
      '<img id="userSetting" src="' +
        basepath +
        '/images/user-setting.png" class=" horizontal-footer-image h70px " onclick="showAdminPanel()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
    );
  } else {
    $("#footerToolContainer").append(
      '<img id="userSetting" src="' +
        basepath +
        '/images/user-setting.png" class=" horizontal-footer-image h70px " onclick="manageAccount()" onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()">'
    );
  }

  if (isChatOn) setCursorChatMode();
  else setCursorDragMode();

  if (hasNewConversation) displayNewChat();

  isLoggedIn = true;

  $("#formDiv").remove();

  isFormMode = false;

  $("#admin_dashboard").click();

  console.log("click anchor");
}

function logout() {
  isToolBarClick = true;

  $.confirm({
    title: "Logout",

    content: "Are you sure you want to logout?",

    animation: "scale",

    closeAnimation: "scale",

    theme: "dark",

    buttons: {
      yes: function() {
        $.getJSON("renderator/config/renderatorConfig.json").done(function(
          json
        ) {
          var url = json.config.apiUrl + json.config.logoutUrl;

          closeForm();

          $("#mainLoader").css("display", "none");

          makePostCallWithHeader(url, onLogout, defaultCallback, "");
        });
      },

      cancel: function() {
        return;
      }
    }
  });
}

function onLogout(response) {
  if (!response.success) return;

  closeForm();

  isLoggedIn = false;

  isAdmin = false;

  $("#userSetting").remove();

  $("#adminLogout").remove();

  $("#toolContainer").append(
    '<img id="adminLogin" src="' +
      basepath +
      '/images/log-in.png" alt="Admin login" class="toolbar-icon" onclick="showLogin()" ' +
      'onmouseenter="disableChatPointer()" onmouseleave="enableChatPointer()" />'
  );

  localStorage.removeItem("renderator-token");

  localStorage.removeItem("renderator-user");

  localStorage.removeItem("renderator-username");

  localStorage.removeItem("renderator-email");

  localStorage.removeItem("renderator-notification");

  if (isChatOn) chat();
}

function closeForm() {
  $("#formDiv").remove();

  hasNewConversation = false;

  isFormMode = false;

  if (isChatOn) setCursorChatMode();
  else setCursorDragMode();
}

function showAdminPanel() {
  isToolBarClick = true;

  isFormMode = true;

  if (isChatOn) isChatWindowVisible = true;

  $("#panoDIV").removeClass();

  $("#chatWindow").remove();

  activeConversation = "";

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    krpano.call("removehotspot(chatHotspot_0)");
  }

  $("#renderatorPlugin").append("<div id='formDiv'></div>");

  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/adminPanel.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      $("#formClose").attr("src", basepath + "/images/remove.png");

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();

      $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
        var url = json.config.apiUrl + json.config.toursUrl;

        makeGetCallWithHeader(url, onGetTourList, defaultCallback);
      });
    }
  );
}

function manageAccount() {
  isToolBarClick = true;

  isFormMode = true;

  if (isChatOn) isChatWindowVisible = true;

  $("#panoDIV").removeClass();

  $("#chatWindow").remove();

  activeConversation = "";

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    krpano.call("removehotspot(chatHotspot_0)");
  }

  $("#renderatorPlugin").append("<div id='formDiv'></div>");

  $("#formDiv").load(
    encodeURIComponent(basepath + "/templates/userSettings.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#formOverlay").show();

      $(".overlay").css("display", "block");

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      $("#formClose").attr("src", basepath + "/images/remove.png");

      var minWidth = parseInt($("#divOverlay").css("min-width"), 10);

      var minHeight = parseInt($("#divOverlay").css("min-height"), 10);

      formDimensions = new dimension(
        $("#divOverlay").width(),

        $("#divOverlay").height(),

        minWidth,

        minHeight
      );

      setFormPosition();
    }
  );
}

function closeAdminPanel() {
  $("#formDiv").remove();

  if (hasNewConversation) {
    setCursorChatMode();

    isChatOn = true;
  } else setCursorDragMode();

  hasNewConversation = false;
}

function openTab(evt, tab) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tab).style.display = "block";

  evt.currentTarget.className += " active";

  getTabContent(tab);
}

function getTabContent(tab) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    if (tab == "tabTours") {
      var url = json.config.apiUrl + json.config.toursUrl;

      $("#tableTours").html("");

      makeGetCallWithHeader(url, onGetTourList, defaultCallback);
    } else if (tab == "tabUsers") {
      var url = json.config.apiUrl + json.config.usersUrl;

      $("#tableUsers").html("");

      makeGetCallWithHeader(url, onGetUserList, defaultCallback);
    }
  });
}

function onGetTourList(response) {
  if (!response.success) return;

  if (!response.data || response.data.length == 0) return;

  var content =
    "<tr><th>Name</th><th class='td-link'>Path</th><th>Admin</th><th class='td-action'>Active</th><th class='td-action'>Actions</th></tr>";

  for (var i = 0; i < response.data.length; i++) {
    content +=
      "<tr><td>" +
      response.data[i].name +
      "</td><td class='td-link'><a href='" +
      response.data[i].path +
      "' target='_blank'>" +
      response.data[i].path +
      "</a></td><td>" +
      response.data[i].user.name +
      "</td><td class='td-action'>";

    if (response.data[i].is_active) {
      content +=
        "<img class='table-icon' src='" + basepath + "/images/checkmark.png'/>";
    }

    content +=
      "</td><td class='td-action'><img class='table-icon clickable' src='" +
      basepath +
      "/images/edit.png' title='Edit' onclick='getTour(\"" +
      response.data[i].id +
      "\")'/><img class='table-icon clickable' src='" +
      basepath +
      "/images/delete.png' title='Delete' onclick='deleteTour(\"" +
      response.data[i].id +
      "\")'/></td></tr>";
  }

  $("#tableTours").html(content);
}

function onGetUserList(response) {
  $("#tableUsers").html("");

  if (!response.success) return;

  if (!response.data || response.data.length == 0) return;

  var content =
    "<tr><th>Name</th><th>Email Address</th><th>Role</th><th class='td-action'>Actions</th></tr>";

  for (var i = 0; i < response.data.length; i++) {
    content +=
      "<tr><td>" +
      response.data[i].name +
      "</td><td>" +
      response.data[i].email +
      "</td><td>" +
      response.data[i].role.description +
      "</td><td class='td-action'>";

    if (!response.data[i].is_system_user) {
      content +=
        "<img class='table-icon clickable' src='" +
        basepath +
        "/images/edit.png' title='Edit' onclick='getUser(\"" +
        response.data[i].id +
        "\")'/><img class='table-icon clickable' src='" +
        basepath +
        "/images/delete.png' title='Delete' onclick='deleteUser(\"" +
        response.data[i].id +
        "\")'/>";
    }

    content += "</td></tr>";
  }

  $("#tableUsers").html(content);
}

function getUser(id) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.usersUrl + "/" + id;

    makeGetCallWithHeader(url, onGetUser, defaultCallback);
  });
}

function onGetUser(response) {
  if (!response.success || response.user == null || response.roles == null)
    return;

  dialog = $.dialog({
    title: "Edit User",

    content: '<div id="divUser"></div>',

    theme: "dark",

    onContentReady: function() {
      $("#divUser").load(
        encodeURIComponent(basepath + "/templates/editUser.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          $("#userId").val(response.user.id);

          $("#textEmail").html(response.user.email);

          $("#textName").val(response.user.name);

          var optionsHtml = "";

          for (var i = 0; i < response.roles.length; i++) {
            optionsHtml +=
              '<option value="' +
              response.roles[i].id +
              '">' +
              response.roles[i].description +
              "</option>";
          }

          $("#dropDownRole").html(optionsHtml);

          $("#dropDownRole").val(response.user.role_id);
        }
      );
    }
  });
}

function editUser() {
  $("#errorText").html("");

  var name = $("#textName").val();

  var role = $("#dropDownRole").val();

  if (!name) {
    $("#errorText").html("Name is required");

    return;
  }

  name = name.trim();

  if (name == "") {
    $("#errorText").html("Invalid name");

    return;
  }

  if (!role || role == "") {
    $("#errorText").html("Role is required");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.updateUserUrl;

    var data = {
      id: $("#userId").val(),

      name: name,

      role_id: role
    };

    makePostCallWithHeader(url, onUserUpdate, failCallback, data);
  });
}

function onUserUpdate(response) {
  if (!response.success) {
    if (response.message) {
      $("#errorText").html(response.message);

      return;
    }

    if (!response.error) {
      $("#errorText").html("Server error");

      return;
    }

    if (response.error.name) {
      $("#errorText").html(response.error.name);

      return;
    }

    if (response.error.role_id) {
      $("#errorText").html(response.error.role_id);

      return;
    }
  }

  dialog.close();

  getTabContent("tabUsers");
}

function deleteUser(id) {
  $.confirm({
    title: "Delete User",

    content: "Are you sure you want to delete this user?",

    animation: "scale",

    theme: "dark",

    closeAnimation: "scale",

    buttons: {
      yes: function() {
        $.getJSON("renderator/config/renderatorConfig.json").done(function(
          json
        ) {
          var url = json.config.apiUrl + json.config.deleteUserUrl;

          var data = {
            id: id
          };

          makePostCallWithHeader(url, onUserDeleted, alertCallBack, data);
        });
      },

      cancel: function() {
        return;
      }
    }
  });
}

function onUserDeleted(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  getTabContent("tabUsers");
}

function alertCallBack() {
  $.alert({
    title: "",

    content: "Server error",

    theme: "dark"
  });
}

function openTourDialog() {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.usersUrl;

    makeGetCallWithHeader(url, onOpenTourDialog, defaultCallback);
  });
}

function onOpenTourDialog(response) {
  if (!response.success || !response.data) return;

  dialog = $.dialog({
    title: "Add Tour",

    content: '<div id="divTour"></div>',

    theme: "dark",

    onContentReady: function() {
      $("#divTour").load(
        encodeURIComponent(basepath + "/templates/addTour.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          var optionsHtml = "";

          for (var i = 0; i < response.data.length; i++) {
            optionsHtml +=
              '<option value="' +
              response.data[i].id +
              '">' +
              response.data[i].name +
              "</option>";
          }

          $("#dropDownUser").html(optionsHtml);
        }
      );
    }
  });
}

function addTour() {
  $("#errorText").html("");

  var name = $("#textName").val();

  var path = $("#textPath").val();

  var admin = $("#dropDownUser").val();

  if (!name) {
    $("#errorText").html("Name is required");

    return;
  }

  name = name.trim();

  if (name == "") {
    $("#errorText").html("Invalid name");

    return;
  }

  if (!path) {
    $("#errorText").html("Path is required");

    return;
  }

  path = path.trim();

  if (path == "" || !isUrl(path)) {
    $("#errorText").html("Invalid path");

    return;
  }

  if (!admin || admin == "") {
    $("#errorText").html("Admin is required");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.addTourUrl;

    var data = {
      name: name,

      path: path,

      description: $("#textDescription").val(),

      active: $("#activeCheckbox").is(":checked"),

      admin_id: admin,

      allow_user_interaction: $("#interactionCheckbox").is(":checked")
    };

    makePostCallWithHeader(url, onTourAdded, failCallback, data);
  });
}

function onTourAdded(response) {
  if (!response.success) {
    if (response.message) {
      $("#errorText").html(response.message);

      return;
    }

    if (!response.error) {
      $("#errorText").html("Server error");

      return;
    }

    if (response.error.name) {
      $("#errorText").html(response.error.name);

      return;
    }

    if (response.error.path) {
      $("#errorText").html(response.error.path);

      return;
    }

    if (response.error.admin_id) {
      $("#errorText").html(response.error.admin_id);

      return;
    }

    if (response.error.description) {
      $("#errorText").html(response.error.description);

      return;
    }
  }

  getCurrentTour();

  dialog.close();

  getTabContent("tabTours");
}

function getTour(id) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.toursUrl + "/" + id;

    makeGetCallWithHeader(url, onGetTour, defaultCallback);
  });
}

function onGetTour(response) {
  if (!response.success || response.tour == null || response.users == null)
    return;

  dialog = $.dialog({
    title: "Edit Tour",

    content: '<div id="divTour"></div>',

    theme: "dark",

    onContentReady: function() {
      $("#divTour").load(
        encodeURIComponent(basepath + "/templates/editTour.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          $("#tourId").val(response.tour.id);

          $("#textPath").val(response.tour.path);

          $("#textName").val(response.tour.name);

          $("#textDescription").val(response.tour.description);

          if (response.tour.is_active)
            $("#activeCheckbox").prop("checked", true);

          if (response.tour.allow_user_interaction)
            $("#interactionCheckbox").prop("checked", true);

          var optionsHtml = "";

          for (var i = 0; i < response.users.length; i++) {
            optionsHtml +=
              '<option value="' +
              response.users[i].id +
              '">' +
              response.users[i].name +
              "</option>";
          }

          $("#dropDownUser").html(optionsHtml);

          $("#dropDownUser").val(response.tour.admin_id);
        }
      );
    }
  });
}

function editTour() {
  $("#errorText").html("");

  var name = $("#textName").val();

  var path = $("#textPath").val();

  var admin = $("#dropDownUser").val();

  if (!name) {
    $("#errorText").html("Name is required");

    return;
  }

  name = name.trim();

  if (name == "") {
    $("#errorText").html("Invalid name");

    return;
  }

  if (!path) {
    $("#errorText").html("Path is required");

    return;
  }

  path = path.trim();

  if (path == "") {
    $("#errorText").html("Invalid path");

    return;
  }

  if (!admin || admin == "") {
    $("#errorText").html("Admin is required");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.updateTourUrl;

    var data = {
      id: $("#tourId").val(),

      name: name,

      path: path,

      description: $("#textDescription").val(),

      active: $("#activeCheckbox").is(":checked"),

      admin_id: admin,

      allow_user_interaction: $("#interactionCheckbox").is(":checked")
    };

    makePostCallWithHeader(url, onTourAdded, failCallback, data);
  });
}

function deleteTour(id) {
  $.confirm({
    title: "Delete Tour",

    content:
      "Are you sure you want to delete this tour? This action will also delete all the conversations of tour.",

    animation: "scale",

    theme: "dark",

    closeAnimation: "scale",

    buttons: {
      yes: function() {
        $.getJSON("renderator/config/renderatorConfig.json").done(function(
          json
        ) {
          var url = json.config.apiUrl + json.config.deleteTourUrl;

          var data = {
            id: id
          };

          makePostCallWithHeader(url, onTourDeleted, alertCallBack, data);
        });
      },

      cancel: function() {
        return;
      }
    }
  });
}

function onTourDeleted(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  getCurrentTour();

  getTabContent("tabTours");
}

function displayNewChat() {
  console.log("display new chat");

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    var hotspotName = "chatHotspot_0";

    krpano.call("addhotspot(" + hotspotName + ");");

    krpano.call("set(hotspot[" + hotspotName + "].ath," + ath + ");");

    krpano.call("set(hotspot[" + hotspotName + "].atv, " + atv + ");");

    krpano.call(
      "set(hotspot[" +
        hotspotName +
        "].url, '" +
        basepath +
        "/images/chat-point.png ');"
    );

    $("#chatWindow").remove();

    activeConversation = "";

    var div = $("<div id='chatWindow'>").css({
      "z-index": 4000,

      position: "absolute"
    });

    $("#container").append(div);

    $("#chatWindow").load(
      encodeURIComponent(
        basepath + "/templates/startConversation.html"
      ).replace(/%2F/g, "/"),

      function() {
        $("#chatClose").attr("src", basepath + "/images/close.png");

        $("#dialogLoading").css(
          "background",

          'url("' + basepath + '/images/loader.gif") no-repeat center center'
        );

        var minWidth = parseInt($("#conversationBox").css("min-width"), 10);

        var minHeight = parseInt($("#conversationBox").css("min-height"), 10);

        formDimensions = new dimension(
          $("#conversationBox").width(),

          $("#conversationBox").height(),

          minWidth,

          minHeight
        );

        isChatWindowVisible = true;

        setChatPostition();

        $("#conversationName").val(conversationName);

        $("#conversationTitle").val(conversationTitle);

        $("#conversationText").val(conversationText);
      }
    );
  }
}

function onConversationStarted(response) {
  console.log("response : ", response);

  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  if (!response.conversation || !response.logs || response.logs.length == 0) {
    $.alert({
      title: "",

      content: "Server error",

      theme: "dark"
    });

    return;
  }

  $("#chatWindow").remove();

  krpano.call("removehotspot(chatHotspot_0)");

  var hotspotName = "chatHotspot_" + response.conversation.id;

  krpano.call("addhotspot(" + hotspotName + ");");

  krpano.call(
    "set(hotspot[" + hotspotName + "].ath," + response.conversation.ath + ");"
  );

  krpano.call(
    "set(hotspot[" + hotspotName + "].atv, " + response.conversation.atv + ");"
  );

  krpano.call(
    "set(hotspot[" +
      hotspotName +
      "].url, '" +
      basepath +
      "/images/chat.png ');"
  );

  krpano.call(
    "set(hotspot[" +
      hotspotName +
      "].onclick, 'js(GetConversationLog(\"" +
      response.conversation.id +
      "\"))');"
  );

  conversations.push(
    new conversation(
      response.conversation.id,

      response.conversation.ath,

      response.conversation.atv
    )
  );

  displayConversation(response);
}

function GetConversationLog(id) {
  $("#chatWindow").remove();

  mousex = krpano.get("mouse.x");

  mousey = krpano.get("mouse.y");

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    if (isLoggedIn) {
      var url =
        json.config.apiUrl + json.config.getConversationLogUrl + "/" + id;

      $("#mainLoader").css("display", "none");

      makeGetCallWithHeader(url, onGetConversationLog, alertFailCallBack);

      return;
    }

    var url =
      json.config.apiUrl + json.config.getConversationDataUrl + "/" + id;

    $("#mainLoader").css("display", "none");

    makeGetCall(url, onGetConversationLog);
  });
}

function onGetConversationLog(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  if (!response.conversation || !response.logs || response.logs.length == 0) {
    $.alert({
      title: "",

      content: "Server error",

      theme: "dark"
    });

    return;
  }

  var krpano = document.getElementById("krpanoSWFObject");

  if (krpano && krpano.get) {
    if (mousex && mousey) {
      displayConversation(response);
    }
  }
}

function displayConversation(response) {
  $("#chatWindow").remove();

  var div = $("<div id='chatWindow'>").css({
    "z-index": 4000,

    position: "absolute"
  });

  $("#container").append(div);

  $("#chatWindow").load(
    encodeURIComponent(basepath + "/templates/conversation.html").replace(
      /%2F/g,

      "/"
    ),

    function() {
      $("#chatClose").attr("src", basepath + "/images/close.png");

      var iconHtml = "";

      if (!response.conversation.is_processed) {
        if (localStorage.getItem("renderator-user") == tourAdmin) {
          iconHtml =
            '<img alt="pending" title="Pending" class="icon clickable" src="' +
            basepath +
            '/images/pending.png" onclick="openConversationApproveDialog(\'' +
            response.conversation.id +
            "')\"/>";
        } else {
          iconHtml =
            '<img alt="pending" title="Pending" class="icon" src="' +
            basepath +
            '/images/pending.png" />';
        }
      }

      $("#conversationTitle").html(response.conversation.title);

      $("#spanIcon").html(iconHtml);

      $("#conversationID").val(response.conversation.id);

      $("#dialogLoading").css(
        "background",

        'url("' + basepath + '/images/loader.gif") no-repeat center center'
      );

      fillConversationLog(response.logs);

      activeConversation = response.conversation.id;

      var minWidth = parseInt($("#conversationBox").css("min-width"), 10);

      var minHeight = parseInt($("#conversationBox").css("min-height"), 10);

      formDimensions = new dimension(
        $("#conversationBox").width(),

        $("#conversationBox").height(),

        minWidth,

        minHeight
      );

      isChatWindowVisible = true;

      setChatPostition();

      if (
        !isAdmin &&
        tourAdmin != localStorage.getItem("renderator-user") &&
        !interactionEnabled
      ) {
        $("#divConversationFooter").remove();

        return;
      }

      if (response.joined) {
        joinedConversation();

        if (!response.conversation.is_processed) {
          $("#btnSend").attr("disabled", "disabled");
        }
      }
    }
  );
}

function fillConversationLog(logs) {
  var logHtml = "";

  conversationName = "";

  if (localStorage.getItem("renderator-user") != tourAdmin) {
    for (var i = 0; i < logs.length; i++) {
      if (
        logs[i].conversation_user.user_id ==
        localStorage.getItem("renderator-user")
      ) {
        if (logs[i].is_processed) {
          if (logs[i].is_edited) {
            logHtml +=
              '<li><img alt="pendingEdit" class="icon clickable" src="' +
              basepath +
              '/images/pendingEdit.png" onclick="getUpdatedNote(\'' +
              logs[i].id +
              '\')"/><div class="div-chat-li"><div class="conversation-li-title">' +
              moment(logs[i].created_at).format("MM-DD-YYYY") +
              ' You:</div><p class="chat-content" id="log_' +
              logs[i].id +
              '">' +
              logs[i].content +
              "</p></div></li>";

            conversationName = logs[i].conversation_user.display_name;

            continue;
          }

          if (interactionEnabled || isAdmin) {
            logHtml +=
              '<li><img alt="edit" class="icon clickable" src="' +
              basepath +
              '/images/editChat.png" onclick="editMessage(\'' +
              logs[i].id +
              '\')"/><div class="div-chat-li"><div class="conversation-li-title">' +
              moment(logs[i].created_at).format("MM-DD-YYYY") +
              ' You:</div><p class="chat-content" id="log_' +
              logs[i].id +
              '">' +
              logs[i].content +
              "</p></div></li>";

            conversationName = logs[i].conversation_user.display_name;

            continue;
          }

          logHtml +=
            '<li><div class="div-chat-li chat-content"><div class="conversation-li-title">' +
            moment(logs[i].created_at).format("MM-DD-YYYY") +
            ' You:</div><p class="chat-content" id="log_' +
            logs[i].id +
            '">' +
            logs[i].content +
            "</p></div></li>";

          conversationName = logs[i].conversation_user.display_name;

          continue;
        }

        if (logs.length > 1) {
          logHtml +=
            '<li><img alt="pending" title="Pending" class="icon" src="' +
            basepath +
            '/images/pending.png" /><div class="div-chat-li"><div class="conversation-li-title">' +
            moment(logs[i].created_at).format("MM-DD-YYYY") +
            ' You:</div><p class="chat-content" id="log_' +
            logs[i].id +
            '">' +
            logs[i].content +
            "</p></div></li>";

          conversationName = logs[i].conversation_user.display_name;

          continue;
        }

        logHtml +=
          '<li><div class="div-chat-li chat-content"><div class="conversation-li-title">' +
          moment(logs[i].created_at).format("MM-DD-YYYY") +
          ' You:</div><p class="chat-content" id="log_' +
          logs[i].id +
          '">' +
          logs[i].content +
          "</p></div></li>";

        conversationName = logs[i].conversation_user.display_name;

        continue;
      }

      logHtml +=
        '<li><div class="div-chat-li chat-content"><div class="conversation-li-title">' +
        moment(logs[i].created_at).format("MM-DD-YYYY") +
        " " +
        logs[i].conversation_user.display_name +
        ':</div><p class="chat-content" id="log_' +
        logs[i].id +
        '">' +
        logs[i].content +
        "</p></div></li>";
    }

    $("#conversationList").html(logHtml);

    $("#conversationBody").scrollTop($("#conversationBody")[0].scrollHeight);

    return;
  }

  for (var i = 0; i < logs.length; i++) {
    var name = logs[i].conversation_user.display_name;

    if (
      logs[i].conversation_user.user_id ==
      localStorage.getItem("renderator-user")
    ) {
      conversationName = logs[i].conversation_user.display_name;

      name = "You";
    }

    if (!logs[i].is_processed) {
      if (logs.length > 1) {
        logHtml +=
          '<li><img alt="pending" title="Pending" class="icon clickable" src="' +
          basepath +
          '/images/pending.png" onclick="openNoteApproveDialog(\'' +
          logs[i].id +
          '\')"/><div class="div-chat-li"><div class="conversation-li-title">' +
          moment(logs[i].created_at).format("MM-DD-YYYY") +
          " " +
          name +
          ':</div><p class="chat-content" id="log_' +
          logs[i].id +
          '">' +
          logs[i].content +
          "</p></div></li>";

        continue;
      }

      logHtml +=
        '<li><div class="div-chat-li chat-content"><div class="conversation-li-title">' +
        moment(logs[i].created_at).format("MM-DD-YYYY") +
        " " +
        name +
        ':</div><p class="chat-content" id="log_' +
        logs[i].id +
        '">' +
        logs[i].content +
        "</p></div></li>";

      continue;
    }

    if (logs[i].is_edited) {
      logHtml +=
        '<li><img alt="pending edit" class="icon clickable" src="' +
        basepath +
        '/images/pendingEdit.png" onclick="getUpdatedNote(\'' +
        logs[i].id +
        '\')"/><div class="div-chat-li"><div class="conversation-li-title">' +
        moment(logs[i].created_at).format("MM-DD-YYYY") +
        " " +
        name +
        ':</div><p class="chat-content" id="log_' +
        logs[i].id +
        '">' +
        logs[i].content +
        "</p></div></li>";

      continue;
    }

    if (
      logs[i].conversation_user.user_id ==
      localStorage.getItem("renderator-user")
    ) {
      logHtml +=
        '<li><img alt="edit" class="icon clickable" src="' +
        basepath +
        '/images/editChat.png" onclick="editMessage(\'' +
        logs[i].id +
        '\')"/><div class="div-chat-li"><div class="conversation-li-title">' +
        moment(logs[i].created_at).format("MM-DD-YYYY") +
        " " +
        name +
        ':</div><p class="chat-content" id="log_' +
        logs[i].id +
        '">' +
        logs[i].content +
        "</p></div></li>";

      continue;
    }

    logHtml +=
      '<li><div class="div-chat-li chat-content"><div class="conversation-li-title">' +
      moment(logs[i].created_at).format("MM-DD-YYYY") +
      " " +
      name +
      ':</div><p class="chat-content" id="log_' +
      logs[i].id +
      '">' +
      logs[i].content +
      "</p></div></li>";
  }

  $("#conversationList").html(logHtml);

  $("#conversationBody").scrollTop($("#conversationBody")[0].scrollHeight);
}

function joinConversation() {
  if (!isLoggedIn) {
    showSignUp();

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.joinConversationUrl;

    var data = {
      conversation_id: $("#conversationID").val()
    };

    $("#mainLoader").css("display", "none");

    makePostCallWithHeader(url, joinedConversation, alertFailCallBack, data);

    return;
  });
}

function onJoinConversation(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  joinedConversation();
}

function joinedConversation() {
  if (!isLoggedIn) {
    showSignUp();

    return;
  }

  if (
    !isAdmin &&
    tourAdmin != localStorage.getItem("renderator-user") &&
    !interactionEnabled
  ) {
    $("#divConversationFooter").remove();

    setChatPostition();

    return;
  }

  if (conversationName == "")
    conversationName = localStorage.getItem("renderator-username");

  var html =
    '<div ><div class="m-b-sm"><span class="text-bold">Display Name : </span><span id="ConversationName">' +
    conversationName +
    '</span><img class="m-l-xs clickable" id="changeNameIcon" alt="Edit" src="' +
    basepath +
    '/images/change.png" onclick="changeConversationName()" /></div><textarea class="form-control" id="chatInput" rows="3">' +
    '</textarea><span class="text-danger" id="errorText"></span><button class="btn-conversation pull-right m-t-sm" type="button" id="btnSend" onclick="sendMessage()">Send</button></div>';

  $("#divConversationFooter").html(html);

  $("#conversationBody")
    .removeClass("with-footer")

    .addClass("with-footer-lg");

  $("#conversationBody").scrollTop($("#conversationBody")[0].scrollHeight);

  // if (localStorage.getItem("renderator-user") == tourAdmin)

  //   $("#changeNameIcon").remove();

  setChatPostition();
}

function changeConversationName() {
  dialog = $.dialog({
    title: "Edit Display Name",

    theme: "dark",

    content:
      '<div><div class="form-group">' +
      '<span class="text-bold">Name </span>' +
      '<input type="text" class="form-control" id="txtConversationName" required value="' +
      conversationName +
      '"/>' +
      '</div><div class="m-b-sm"> <button class="btn-login" type="button" onclick="updateDisplayName()" id="btnSaveChanges">Save</button>' +
      '<span class="text-danger" id="dialogErrorText"></span></div></div>'
  });
}

function updateDisplayName() {
  $("#dialogErrorText").html("");

  var name = $("#txtConversationName").val();

  if (!name) {
    $("#dialogErrorText").html("Enter a valid name");

    return;
  }

  name = name.trim();

  if (name == "") {
    $("#dialogErrorText").html("Enter a valid name");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.updateConversationNameUrl;

    var data = {
      conversation_id: $("#conversationID").val(),

      name: name
    };

    makePostCallWithHeader(url, onupdateDisplayName, dialogFailCallBack, data);
  });
}

function onupdateDisplayName(response) {
  if (!response.success) {
    if (response.message) {
      $("#dialogErrorText").html(response.message);

      return;
    }

    if (!response.error) {
      $("#dialogErrorText").html("Server error");

      return;
    }

    if (response.error.display_name) {
      $("#dialogErrorText").html(response.error.display_name);

      return;
    }

    $("#dialogErrorText").html("Server error");

    return;
  }

  dialog.close();

  conversationName = response.name;

  $("#ConversationName").html(conversationName);
}

function sendMessage() {
  $("#errorText").html("");

  var text = $("#chatInput").val();

  if (!text) return;

  text = text.trim();

  if (text == "") return;

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.sendMessageUrl;

    var data = {
      conversation_id: $("#conversationID").val(),

      text: text
    };

    makePostCallWithHeader(url, onMessageSent, failCallback, data);
  });
}

function onMessageSent(response) {
  if (!response.success) {
    if (response.message) {
      $("#errorText").html(response.message);

      return;
    }

    $("#errorText").html("Server error");

    return;
  }

  $("#chatInput").val("");

  fillConversationLog(response.data);
}

function editMessage(id) {
  dialog = $.dialog({
    title: "Edit Message",

    theme: "dark",

    content:
      '<div><div class="form-group">' +
      '<input type="hidden" class="form-control" id="messageID" value="' +
      id +
      '"/>' +
      '<textarea rows="3" class="form-control" id="txtMessage" >' +
      $("#log_" + id).html() +
      '</textarea></div><div class="m-b-sm"> <button class="btn-login" type="button" onclick="saveUpdatedMessage()" id="btnSaveChanges">Save</button>' +
      '<span class="text-danger" id="dialogErrorText"></span></div></div>'
  });
}

function saveUpdatedMessage() {
  $("#dialogErrorText").html("");

  var text = $("#txtMessage").val();

  if (!text || text == "") {
    $("#dialogErrorText").html("Enter a message");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.editMessageUrl;

    var data = {
      conversationlog_id: $("#messageID").val(),

      text: text
    };

    makePostCallWithHeader(url, onMessageUpdated, dialogFailCallBack, data);
  });
}

function onMessageUpdated(response) {
  if (!response.success) {
    if (response.message) {
      $("#dialogErrorText").html(response.message);

      return;
    }

    $("#dialogErrorText").html("Server error");

    return;
  }

  dialog.close();

  fillConversationLog(response.data);
}

function editProfile() {
  dialog = $.dialog({
    title: "Edit Profile",

    content: '<div id="divUser"></div>',

    theme: "dark",

    onContentReady: function() {
      $("#divUser").load(
        encodeURIComponent(basepath + "/templates/editProfile.html").replace(
          /%2F/g,

          "/"
        ),

        function() {
          $("#txtEmail").html(localStorage.getItem("renderator-email"));

          $("#txtName").val(localStorage.getItem("renderator-username"));

          if (localStorage.getItem("renderator-notification") == "true")
            $("#notificationsCheckbox").prop("checked", true);
        }
      );
    }
  });
}

function updateProfile() {
  $("#dialogErrorText").html("");

  var name = $("#txtName").val();

  if (!name) {
    $("#dialogErrorText").html("Name is required");

    return;
  }

  name = name.trim();

  if (name == "") {
    $("#dialogErrorText").html("Invalid name");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.editProfileUrl;

    var data = {
      name: name,

      allow_notifications: $("#notificationsCheckbox").is(":checked")
    };

    makePostCallWithHeader(url, onProfileUpdated, dialogFailCallBack, data);
  });
}

function onProfileUpdated(response) {
  if (!response.success) {
    if (response.message) {
      $("#dialogErrorText").html(response.message);

      return;
    }

    $("#dialogErrorText").html("Server error");

    return;
  }

  dialog.close();

  localStorage.setItem("renderator-username", response.data.name);

  localStorage.setItem(
    "renderator-notification",
    response.data.allow_notifications
  );
}

function changePassword() {
  dialog = $.dialog({
    title: "Change Password",

    content: '<div id="divContent"></div>',

    theme: "dark",

    onContentReady: function() {
      $("#divContent").load(
        encodeURIComponent(basepath + "/templates/changePassword.html").replace(
          /%2F/g,

          "/"
        ),

        function() {}
      );
    }
  });
}

function savePassword() {
  $("#dialogErrorText").html("");

  var oldPassword = $("#oldPassword").val();

  var newPassword = $("#newPassword").val();

  if (!oldPassword || oldPassword == "" || !newPassword || newPassword == "") {
    $("#dialogErrorText").html("All fields are required");

    return;
  }

  if (newPassword.length < 6) {
    $("#dialogErrorText").html("Password must have atleast 6 characters");

    return;
  }

  if (newPassword != $("#confirmPassword").val()) {
    $("#dialogErrorText").html("Passwords don't match");

    return;
  }

  if (oldPassword.length < 6) {
    $("#dialogErrorText").html("Incorrect old password");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.changePasswordUrl;

    var data = {
      old_password: oldPassword,

      password: newPassword,

      password_confirmation: $("#confirmPassword").val()
    };

    makePostCallWithHeader(url, onPasswordChanged, dialogFailCallBack, data);
  });
}

function onPasswordChanged(response) {
  if (!response.success) {
    if (response.message) {
      $("#dialogErrorText").html(response.message);

      return;
    }

    $("#dialogErrorText").html("Server error");

    return;
  }

  dialog.close();

  localStorage.setItem("renderator-token", response.token);
}

function forgotPassword() {
  var email = $("#emailText").val();

  if (!email || email == "") {
    $("#errorText").html("Enter email address");

    return;
  }

  if (!isEmail(email)) {
    $("#errorText").html("Invalid email address");

    return;
  }

  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.forgotPasswordUrl + "/" + email;

    makeGetCall(url, onForgotPassword, failCallback);
  });
}

function onForgotPassword(response) {
  if (!response.success) {
    if (response.message) {
      $("#errorText").html(response.message);

      return;
    }

    $("#errorText").html("Server error");

    return;
  }

  $("#emailText").val("");

  $.alert({
    title: "",

    content: response.message,

    theme: "dark"
  });
}

function enableChatPointer() {
  enableChat = true;
}

function disableChatPointer() {
  enableChat = false;
}

function openConversationApproveDialog(id) {
  dialog = $.confirm({
    title: "Pending Conversation",

    content: $("#conversationTitle").html(),

    theme: "dark",

    closeIcon: true,

    buttons: {
      approve: {
        btnClass: "btn-green",

        action: function() {
          processConversation(id, true);
        }
      },

      reject: {
        btnClass: "btn-red",

        action: function() {
          processConversation(id, false);
        }
      }
    }
  });
}

function processConversation(id, isApproved) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.processConversationUrl;

    var data = {
      conversation_id: id,

      approve: isApproved
    };

    makePostCallWithHeader(url, onConversationProcessed, alertCallBack, data);
  });
}

function onConversationProcessed(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  if (!response.approved) {
    closeChat();

    var krpano = document.getElementById("krpanoSWFObject");

    if (krpano && krpano.get) {
      krpano.call("removehotspot(chatHotspot_" + response.id + ")");
    }

    return;
  }

  $("#spanIcon").html("");

  fillConversationLog(response.data);

  $("#btnSend").removeAttr("disabled");
}

function openNoteApproveDialog(id) {
  dialog = $.confirm({
    title: "Pending Note",

    content: $("#log_" + id).html(),

    closeIcon: true,

    theme: "dark",

    buttons: {
      approve: {
        btnClass: "btn-green",

        action: function() {
          processNote(id, true);
        }
      },

      reject: {
        btnClass: "btn-red",

        action: function() {
          processNote(id, false);
        }
      }
    }
  });
}

function processNote(id, isApproved) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.processMessageUrl;

    var data = {
      conversation_log_id: id,

      approve: isApproved
    };

    makePostCallWithHeader(url, onNoteProcessed, alertCallBack, data);
  });
}

function onNoteProcessed(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  fillConversationLog(response.data);
}

function getUpdatedNote(id) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.getUpdatedNoteUrl + "/" + id;

    $("#mainLoader").css("display", "none");

    makeGetCallWithHeader(url, onGetUpdatedNote, alertFailCallBack);
  });
}

function onGetUpdatedNote(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  if (localStorage.getItem("renderator-user") == tourAdmin) {
    dialog = $.confirm({
      title: "Pending Note Update",

      content: response.updateLog.to_content,

      closeIcon: true,

      theme: "dark",

      buttons: {
        approve: {
          btnClass: "btn-green",

          action: function() {
            processNoteUpdate(response.updateLog.id, true);
          }
        },

        reject: {
          btnClass: "btn-red",

          action: function() {
            processNoteUpdate(response.updateLog.id, false);
          }
        }
      }
    });

    return;
  }

  dialog = $.dialog({
    title: "Pending Note Update",

    theme: "dark",

    content: response.updateLog.to_content,

    closeIcon: true
  });
}

function processNoteUpdate(id, isApproved) {
  $.getJSON("renderator/config/renderatorConfig.json").done(function(json) {
    var url = json.config.apiUrl + json.config.processNoteUpdateUrl;

    var data = {
      conversation_update_id: id,

      approve: isApproved
    };

    makePostCallWithHeader(url, onNoteUpdateProcessed, alertCallBack, data);
  });
}

function onNoteUpdateProcessed(response) {
  if (!response.success) {
    $.alert({
      title: "",

      content: response.message,

      theme: "dark"
    });

    return;
  }

  fillConversationLog(response.data);
}

/* christos */

function reOrderIconsInFooter() {
  // #start  on the left,

  // #chat   on the middle,

  // #snap   on the right.

  let footerImages = $("#footerToolContainer").children();

  footerImages.each(function() {
    $(this)
      .removeClass("h80px")
      .addClass("h70px");
  });

  if (!isMobile) $("#footerToolContainer").append($("#start"));
  else {
    console.log("this is a mobile version");

    $("#start").addClass("hidden");
  }

  $("#footerToolContainer").append($("#chat"));

  $("#footerToolContainer").append($("#snap"));

  $("#footerToolContainer").append($("#loginIcon"));

  $("#chat")
    .removeClass("h70px")
    .addClass("h80px");
}

$(document).ready(() => {
  var flag = false;

  let setItval = setInterval(() => {
    if (localStorage.getItem("renderator-token")) {
      if (!flag) {
        $("#admin_dashboard")[0].click();

        flag = true;
      }
    }

    if (isMobile)
      $("#snap")
        .css("width", "50px")
        .css("height", "50px");
  }, 1000);

  setTimeout(() => {
    if (!isMobile) {
      $("#start").bind("click", function() {
        func_recording_start();
      });

      $("#chat").bind("click", function() {
        chat();
      });

      $("#snap").bind("click", function() {
        screenshot();
      });
    } else {
      // let startTime, endTime, longpress;

      // document.getElementById("snap").addEventListener('click', function () {

      //   if(longpress){

      //     console.log("long pressed!");

      //     $('#start').trigger('click');

      //   }else{

      //     screenshot();

      //   }

      // });

      //

      // document.getElementById("snap").addEventListener('mousedown', function () {

      //   startTime = new Date().getTime();

      // });

      //

      // document.getElementById("snap").addEventListener('mouseup', function () {

      //   endTime = new Date().getTime();

      //   longpress = (endTime - startTime > 1200) ? true : false;

      //

      // });

      $("#snap").bind("click", function() {
        if (!mobile_recording_process) screenshot();
        else {
          func_pause_play_recorder();
        }
      });

      $("#snap").bind("long-press", function(e) {
        e.preventDefault();

        console.log("long button clicked");

        mobile_recording_process = true;

        func_recording_start();

        $("#play-animation")
          .removeClass("btn-action-stop")
          .addClass("btn-action-play");
      });

      //   showToast('Double tap to leave a question',3900);
    }

    // chat();
  }, 3000);

  if (!isMobile) {
    $("#brandLogo").addClass("hidden");
  }
});
