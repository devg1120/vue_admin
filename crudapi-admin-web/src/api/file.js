import { axiosInstance } from "boot/axios";

const HEADERS = {
  "Content-Type": "multipart/form-data"
};

const file = {
  upload: async function(data, progressCallback) {
    console.log("file->upload")
    return axiosInstance.post(`/api/file` , data,
      {
        headers: HEADERS,
        onUploadProgress:  (progressEvent) => {
          if (progressCallback) {
            progressCallback(progressEvent)
          }
        }
    });
  },
  bigUpload: async function(data, progressCallback) {
    console.log("file->bigUpload")
    return axiosInstance.post(`/api/file/big` , data,
      {
        headers: HEADERS,
        onUploadProgress:  (progressEvent) => {
          if (progressCallback) {
            progressCallback(progressEvent)
          }
        }
    });
  }
};

export { file };
