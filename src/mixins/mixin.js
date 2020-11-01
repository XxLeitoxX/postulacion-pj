import AttachmentList from "@/components/dropzone/AttachmentList";
export default {
  components: {
    AttachmentList: AttachmentList
  },
   data () {
      return {
        msg: '',
        fileAttacthed: []
      }
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
        console.log(file.type);
        this.fileAttacthed.push(file);
        console.log(this.fileAttacthed);
        //this.dropzoneOptions.dictDefaultMessage = file;
        if (file.type == "application/pdf" || 
          file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          || file.type == "image/jpeg" || file.type == "image/png" || 
          file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          || file.type == "application/vnd.ms-excel") {
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
        } else {
          this.msg = "Formato de archivo incorrecto.";
          console.log(this.msg);
          file = '';
        }
        
      },
      // a middle layer function where you can change the XHR request properties
      sendingFiles(files, xhr, formData) {
        if (files.type == "application/pdf" || 
          files.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          || files.type == "image/jpeg" || files.type == "image/png" || 
          files.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
          || files.type == "application/vnd.ms-excel") {
          console.log(
            "if you want to change the upload time or add data to the formData you can do it here."
          );
          console.log("Files sending", files);
        }
        
      },
      // function where we get the upload progress
      uploadProgress(file, progress, bytesSent) {
        if (file.type == "application/pdf" || 
          file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          || file.type == "image/jpeg" || file.type == "image/png" || 
          file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
          || file.type == "application/vnd.ms-excel") {
          console.log("File Upload Progress", progress);
          this.tempAttachments.map(attachment => {
            if (attachment.title === file.name) {
              attachment.progress = `${Math.floor(progress)}`;
            }
          });
        }
      },
      // called on successful upload of a file
      success(file, response) {
        for (var i=0; i<file.length; i++) {
          if (file[i].type == "application/pdf" || 
            file[i].type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
            || file[i].type == "image/jpeg" || file[i].type == "image/png" || 
            file[i].type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
            || file[i].type == "application/vnd.ms-excel") {
            console.log("File uploaded successfully");
            console.log("Response is ->", response);
            console.log("file is ->", file[i]);
            console.log("file sin i ->", file);
            this.setVueDropzoneFile(file);
            this.companyBackgroundUpload();
            //this.test(response);
          }else {
            file[i] = ''
          }
        }
      },

      removeFile(file, error, xhr) {
        console.log(this.fileAttacthed)
        console.log(this.fileAttacthed.length)
        for(var i=0; i<this.fileAttacthed.length; i++) {
          console.log(this.fileAttacthed[i]);
          this.fileAttacthed.splice(i, 1, '');
          console.log(this.fileAttacthed[i]);
        }
        console.log(this.$refs.myVueDropzone)
        //console.log(this.$refs.myVueDropzone2)
        //this.$refs.myVueDropzone2.removeFile();
      }
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