import requrl from "./index"

//照片列表
export const getPhoto = () => {
    return requrl.get('/photo/')
}

//照片详情
export const getPhotoDetail = (id) => {
    return requrl.get(`/photo/detail/${id}/`)
}

//上传照片文件
export const uploadPhotoFile = (file) => {
    return requrl.post('/photo/file', file)
}

//上传照片描述api
export const uploadPhoto = async (photo_name, photo_describe, photo_url) => {
    try {
        const res = await requrl.post('/photo/', {
            "photo_name": photo_name,
            "photo_describe": photo_describe,
            "photo_url": photo_url
        });
        return(res.data.result);
    } catch (error) {
        console.error(error);
    }
}