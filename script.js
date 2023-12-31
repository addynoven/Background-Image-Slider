const btn_list = document.querySelectorAll("button");
btn_list.forEach((ele) => {
    ele.addEventListener("click", async () => {
        try {
            const data = (await fetch("https://picsum.photos/1920/1080")).url;
            // console.log(data);
            document.getElementById("main_img").setAttribute("src", await data);
            console.log(
                (document.getElementById(
                    "background"
                ).style.backgroundImage = `url(${await data})`)
            );
        } catch (error) {
            console.log(error);
        }
    });
});
