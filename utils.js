export default {
    insertText(index, txt, iText) {//index插入位置，txt原字符串，itext要插入的字符串
        let res = '';
        if (index == 0) {
            res = iText + txt;
        } else {
            if (index == txt.length) {
                res = txt + iText;
            } else {
                res = txt.slice(0, index + 1) + iText + txt.slice(index + 1,);
            }
        }
        return res;
    }
};
