document.addEventListener('DOMContentLoaded', (event) => {
    console.log("ministylehub 00");
    // 选择一个始终存在于 DOM 中的父元素，例如 'body'
    document.body.addEventListener('click', (e) => {
        console.log("ministylehub 01");
        // 检查点击的元素是否是您想要的 'a' 标签
        if (e.target && e.target.matches('.sqs-block-instagram img') || e.target.matches('.sqs-block-instagram a')) {
            console.log("ministylehub 02");
            e.preventDefault(); // 阻止链接的默认动作
            e.stopPropagation();
        }
    });
});
