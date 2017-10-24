function showModal() {
    console.log("working");
    $("#modal_" + $(this).attr("data-id")).show();

    function closeModal() {
        $("#modal_" + $(this).attr("data-id")).hide();
    };

    $(document).on("click", ".modalClose", closeModal);
};
$(document).on("click", ".comment-button", showModal);

// $("#comment-button").on("click", function () {
// 	console.log("working");
// 	$("#modal_" + this.dataId).show();
//     function closeModal() {
//         $("#modal_" + this.dataId).hide();
//     };
//     $(document).on("click", ".modalClose", closeModal);
// });