document.addEventListener('DOMContentLoaded', (event) => {
    // 选择一个始终存在于 DOM 中的父元素，例如 'body'
    document.body.addEventListener('click', (e) => {
        // 检查点击的元素是否是您想要的 'a' 标签
        if (e.target && (e.target.matches('.sqs-block-instagram img') || e.target.matches('.sqs-block-instagram a') || e.target.matches('.sqs-gallery img') || e.target.matches('.sqs-gallery a'))) {
            e.preventDefault(); // 阻止链接的默认动作
            e.stopPropagation();
        }
    });
     document.body.addEventListener('auxclick', (e) => {
        // 检查点击的元素是否是您想要的 'a' 标签
        if (e.target && (e.target.matches('.sqs-block-instagram img') || e.target.matches('.sqs-block-instagram a') || e.target.matches('.sqs-gallery img') || e.target.matches('.sqs-gallery a'))) {
            e.preventDefault(); // 阻止链接的默认动作
            e.stopPropagation();
        }
    });
});
