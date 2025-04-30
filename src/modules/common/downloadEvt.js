/**
 * 下载文件，判断字段值是否不为null
 * @param { string } url 下载地址
 * @param { string } fileName 文件名称
 */
function downloadEvt(url, fileName = '未知文件') {
    const el = document.createElement('a');
    el.style.display = 'none';
    el.setAttribute('target', '_blank');
    /**
     * download的属性是HTML5新增的属性
     * href属性的地址必须是非跨域的地址，如果引用的是第三方的网站或者说是前后端分离的项目(调用后台的接口)，这时download就会不起作用。
     * 此时，如果是下载浏览器无法解析的文件，例如.exe,.xlsx..那么浏览器会自动下载，但是如果使用浏览器可以解析的文件，比如.txt,.png,.pdf....浏览器就会采取预览模式
     * 所以，对于.txt,.png,.pdf等的预览功能我们就可以直接不设置download属性(前提是后端响应头的Content-Type: application/octet-stream，如果为application/pdf浏览器则会判断文件为 pdf ，自动执行预览的策略)
     */
    fileName = encodeURI(fileName);
    fileName && el.setAttribute('download', fileName);
    el.href = url;
    console.log(el);
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}

/**
 * 根据url下载文件
 * <a
          target="_blank"
          download=""
          :href="recordData.messageFileUrl"
          @click.prevent="
            downloadByBlob(recordData.messageFileUrl, recordData.messageFileName)
          "
          >{{ recordData.messageFileName }}</a
        >
    
    downloadByBlob('http://58.49.17.106:42080/group1/M00/02/08/wKgCa2U4e9yAFvBEAABvndiAznY388.png','muzidigbig')
 */
function downloadByBlob(url, name) {
    let image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
    image.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        canvas.toBlob((blob) => {
            let url = URL.createObjectURL(blob);
            // this.download(url, name);
            let eleLink = document.createElement('a');
            eleLink.download = name;
            eleLink.href = href;
            eleLink.click();
            eleLink.remove();
            // 用完释放URL对象
            URL.revokeObjectURL(url);
        });
    };
};
function download(href, name) {
    let eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.href = href;
    eleLink.click();
    eleLink.remove();
};

export {
    downloadEvt,
    downloadByBlob,
    download
};