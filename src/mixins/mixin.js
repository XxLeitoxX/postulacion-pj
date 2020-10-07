import AttachmentList from "@/components/dropzone/AttachmentList";
export default {
  components: {
    AttachmentList: AttachmentList
  },
   data () {
      msg: 'Hello World'
   },
   created: function () {
      console.log('Printing from the Mixin')
   },
   methods: {
      displayMessage: function () {
         console.log('Now printing from a mixin function')
      },
      // function called for every file dropped or selected
      fileAdded(file) {
        console.log("File Dropped => ", file);
        this.dropzoneOptions.dictDefaultMessage = file;
        console.log("File Dropped => ", this.dropzoneOptions.dictDefaultMessage);
        // Construct your file object to render in the UI
        let attachment = {};
        attachment._id = file.upload.uuid;
        attachment.title = file.name;
        attachment.type = "file";
        attachment.extension = "." + file.type.split("/")[1];
        attachment.user = JSON.parse(localStorage.getItem("user"));
        attachment.content = "File Upload by Select or Drop";
        attachment.thumb = file.dataURL;
        attachment.thumb_list = file.dataURL;
        attachment.isLoading = true;
        attachment.progress = null;
        attachment.size = file.size;
        this.tempAttachments = [...this.tempAttachments, attachment];
      },
      // a middle layer function where you can change the XHR request properties
      sendingFiles(files, xhr, formData) {
        console.log(
          "if you want to change the upload time or add data to the formData you can do it here."
        );
        console.log("Files sending", files);
      },
      // function where we get the upload progress
      uploadProgress(file, progress, bytesSent) {
        console.log("File Upload Progress", progress);
        this.tempAttachments.map(attachment => {
          if (attachment.title === file.name) {
            attachment.progress = `${Math.floor(progress)}`;
          }
        });
      },
      // called on successful upload of a file
      success(file, response) {
        console.log("File uploaded successfully");
        console.log("Response is ->", response);
        console.log("file is ->", file);
        this.setVueDropzoneFile(file);
        this.companyBackgroundUpload();
        //this.test(response);
      },
   },

   computed: {
     getTempAttachments() {
        return this.tempAttachments;
      },
      getAttachments() {
        return this.attachments;
      },
   }
}