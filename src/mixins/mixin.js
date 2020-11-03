import AttachmentList from "@/components/dropzone/AttachmentList";
export default {
  components: {
    AttachmentList: AttachmentList
  },
   data () {
      return {
        msg: '',
        //fileAttacthed: []
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
        
        //console.log(this.$refs.myVueDropzone2.id);
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

      // function called for every file dropped or selected
      fileAdded2(file) {
        console.log("File Dropped => ", file);
        console.log(file.type);
        
        //console.log(this.$refs.myVueDropzone2.id);
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

      // function called for every file dropped or selected
      fileAdded3(file) {
        console.log("File Dropped => ", file);
        console.log(file.type);
        
        //console.log(this.$refs.myVueDropzone2.id);
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

      // function called for every file dropped or selected
      fileAdded4(file) {
        console.log("File Dropped => ", file);
        console.log(file.type);
        
        //console.log(this.$refs.myVueDropzone2.id);
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
            console.log("ref ->", this.$refs.myVueDropzone);
            if (this.$refs.myVueDropzone.id == "dropzone") {
              //this.setVueDropzoneFile(file);
              //this.companyBackgroundUpload();
              for(var i = 0; i<file.length; i++) {

                console.log("Enviando desde dropzone 1");
                this.vueDropzoneFile.push(file[i]);
              }
              console.log(this.vueDropzoneFile);
              this.setVueDropzoneFile(this.vueDropzoneFile);
            }
            
            //this.test(response);
          }else {
            file[i] = ''
          }
        }
      },

      success2(file, response) {
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
            console.log("ref ->", this.$refs.myVueDropzone2);

            if (this.$refs.myVueDropzone2.id == "dropzone2") {
              //this.setVueDropzoneFile(file);
              //this.companyBackgroundUpload();
              for(var i = 0; i<file.length; i++) {

                console.log("Enviando desde dropzone 2");
                this.vueDropzoneFileTwo.push(file[i]);
              }
              console.log(this.vueDropzoneFileTwo);
              this.setVueDropzoneFileTwo(this.vueDropzoneFileTwo);
            }
            
            //this.test(response);
          }else {
            file[i] = ''
          }
        }
      },

      success3(file, response) {
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
            console.log("ref ->", this.$refs.myVueDropzone3);

            if (this.$refs.myVueDropzone3.id == "dropzone3") {
              //this.setVueDropzoneFile(file);
              //this.companyBackgroundUpload();
              for(var i = 0; i<file.length; i++) {

                console.log("Enviando desde dropzone 3");
                this.vueDropzoneFileThree.push(file[i]);
              }
              console.log(this.vueDropzoneFileThree);
              this.setVueDropzoneFileThree(this.vueDropzoneFileThree);
            }
            
            //this.test(response);
          }else {
            file[i] = ''
          }
        }
      },

      success4(file, response) {
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
            console.log("ref ->", this.$refs.myVueDropzone4);

            if (this.$refs.myVueDropzone4.id == "dropzone4") {
              //this.setVueDropzoneFile(file);
              //this.companyBackgroundUpload();
              for(var i = 0; i<file.length; i++) {

                console.log("Enviando desde dropzone 4");
                this.vueDropzoneFileFour.push(file[i]);
              }
              console.log(this.vueDropzoneFileFour);
              this.setVueDropzoneFileFour(this.vueDropzoneFileFour);
            }
            
            //this.test(response);
          }else {
            file[i] = ''
          }
        }
      },

      removeFile(file, error, xhr) {
        console.log(file)
        console.log("Id del archivo que eliminé: " + file.upload.uuid)
        console.log(this.fileAttacthed)
        //file = '';
        //this.setVueDropzoneFile(file);
        console.log(file)
        //console.log(this.vueDropzoneFile)
          //this.vueDropzoneFile.splice(i, 1, '');
        //console.log(this.vueDropzoneFile.length)
        //console.log(this.vueDropzoneFile[0].upload.uuid)

        if (this.vueDropzoneFile.length > 0) {
          for(var i=0; i<this.vueDropzoneFile.length; i++) {
            if (file.upload.uuid == this.vueDropzoneFile[i].upload.uuid) {
              this.vueDropzoneFile.splice(i, 1);
              console.log("Borrando desde dropzone 1");
            }
              console.log(this.vueDropzoneFile[i]);
          }
        }
        
        console.log(this.vueDropzoneFile);
        //console.log(this.$refs.myVueDropzone)
        //console.log(this.$refs.myVueDropzone2)
        //this.$refs.myVueDropzone2.removeFile();
      },

      removeFile2(file, error, xhr) {
        console.log(file)
        console.log("Id del archivo que eliminé: " + file.upload.uuid)
        console.log("Array dropzone 2 before deleting: " + this.vueDropzoneFileTwo);
       if (this.vueDropzoneFileTwo.length > 0) {
          for(var i=0; i<this.vueDropzoneFileTwo.length; i++) {
            if (file.upload.uuid == this.vueDropzoneFileTwo[i].upload.uuid) {
              this.vueDropzoneFileTwo.splice(i, 1);
              console.log("Borrando desde dropzone 2");
            }
              console.log(this.vueDropzoneFileTwo[i]);
          }
        }
        
        console.log(this.vueDropzoneFileTwo);
      },

      removeFile3(file, error, xhr) {
        console.log(file)
        console.log("Id del archivo que eliminé: " + file.upload.uuid)
       if (this.vueDropzoneFileThree.length > 0) {
          for(var i=0; i<this.vueDropzoneFileThree.length; i++) {
            if (file.upload.uuid == this.vueDropzoneFileThree[i].upload.uuid) {
              this.vueDropzoneFileThree.splice(i, 1);
              console.log("Borrando desde dropzone 3");
            }
              console.log(this.vueDropzoneFileThree[i]);
          }
        }
        console.log(this.vueDropzoneFileThree);
      },

      removeFile4(file, error, xhr) {
        console.log(file)
        console.log("Id del archivo que eliminé: " + file.upload.uuid)
      if (this.vueDropzoneFileFour.length > 0) {
        for(var i=0; i<this.vueDropzoneFileFour.length; i++) {
          if (file.upload.uuid == this.vueDropzoneFileFour[i].upload.uuid) {
            this.vueDropzoneFileFour.splice(i, 1);
            console.log("Borrando desde dropzone 4");
          }
            console.log(this.vueDropzoneFileFour[i]);
        }
      }
        
        console.log(this.vueDropzoneFileFour);
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