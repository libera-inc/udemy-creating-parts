const modal = () => {
    const modal = document.querySelector(".js-modal");
    const openButton = document.querySelector(".js-open-button");
    const closeButton = document.querySelector(".js-close-button");

    // modalとopenボタンがページ内にない場合return
    if (!modal || !openButton) return;

    // openボタンクリックでモーダルopen
    openButton.addEventListener("click", () => modal.showModal());

    // closeボタンクリックでモーダルclose
    closeButton?.addEventListener("click", () => modal.close());

    // modalの背景クリックでモーダルclose
    modal.addEventListener("click", (event) => {
        if (!event.target.closest(".js-contents")) modal.close();
    });
};

modal();
