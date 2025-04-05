$(function () {
  console.log("TVer script.js started");
  // 文字列配列に特定の文字列を格納
  var targetTitles = [
    "相席食堂 【TVer限定配信　特典映像】TVerアワード特別賞　受賞コメント",
  ];

  if ($("[class^='mypage-content-item_container__']").length > 0) {
    // 動画単位のdivに付与されているclass
    $("[class^='mypage-content-item_container__']").each(function () {
      var progressBar = $(this)
        .find("[class^='ProgressBar_progress__']")
        .get(0); // プログレスバーのclassを指定しオブジェクト取得

      if (progressBar && progressBar.style.width === "100%") {
        $(this).remove();
      }

      var imageAlt = $(this).find(".thumbnail-img_img__b7iv5").get(0); // 除去したい視聴しても100%にならない動画のサムネイルオブジェクトを取得
      if (imageAlt && targetTitles.includes(imageAlt.alt)) {
        $(this).remove();
      }
    });
  }
});
