(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc2d090"],{"723d":function(e,t,a){},b133:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Cabecera"),a("main",{attrs:{role:"main"}},[e._m(0),a("div",{staticClass:"c-form-steps"},[a("div",{staticClass:"c-form-steps__sections",attrs:{"data-step":"02"}},[a("div",{staticClass:"container u-pb0"},[a("div",{staticClass:"c-form-steps__content step-data"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-6 offset-lg-2"},[a("h2",[e._v("Información de los Trabajadores")]),a("p",[e._v("Ingresa el número de la totalidad de sus trabajadores, incluyendo los que están en obra, faena o centro de trabajo.")]),a("form",{attrs:{action:"#",id:"step04_1"}},[a("div",{staticClass:"input u-mb0"},[a("div",{staticClass:"input-select"},[a("select",{attrs:{name:"trabajadores_st03"},domProps:{value:e.selectedTotalEmployees},on:{input:function(t){t=e.setTotalEmployees(t.target.value)},change:function(t){return e.employeesTotalValidation()}}},[a("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[e._v(" Número total de trabajadores en la empresa ")]),e._l(e.totalEmployees,(function(t,s){return a("option",{key:s,domProps:{value:t.num_Trabajadores_Id}},[e._v(" "+e._s(t.numero_trabajadores)+" ")])}))],2),!1===e.totalEmployeesIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un número de trabajadores ")]):e._e()])])])])])])]),a("div",{staticClass:"c-form-drag"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-6 offset-lg-2"},[a("h2",[e._v("Información Financiera")]),a("form",{attrs:{action:"#",id:"step04_2"}},[a("div",{staticClass:"input u-mb60"},[a("div",{staticClass:"input-select"},[a("select",{attrs:{name:"rango_st03"},domProps:{value:e.selectedRange},on:{input:function(t){t=e.setRange(t.target.value)},change:function(t){return e.rangeValidation()}}},[a("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[e._v(" Rango de facturación según ventas anuales ")]),e._l(e.range,(function(t,s){return a("option",{key:s,domProps:{value:t.rangoId}},[e._v(" "+e._s(t.rango)+" ")])}))],2),!1===e.rangeIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un rango ")]):e._e()])]),a("div",{ref:"input",staticClass:"input u-mb60"},[a("label",[e._v("Patrimonio según último balance o capital inicial para empresas < 1 año")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPercentage,expression:"firstPercentage"}],ref:"percentage",attrs:{type:"text",name:"patrimonio_st04"},domProps:{value:e.firstPercentage},on:{focus:function(t){return e.focus(e.$refs.input)},blur:function(t){return e.blur([e.$refs.input,e.$refs.percentage.value])},keyup:function(t){return e.firstPercentageValidation(e.$refs.percentage.value)},input:function(t){t.target.composing||(e.firstPercentage=t.target.value)}}}),!1===e.firstPercentageIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"porcentaje-error"}},[e._v(" Ingrese un Porcentaje ")]):e._e()]),a("div",{ref:"society",staticClass:"input u-mb60 percent"},[a("label",[e._v("Porcentaje de la sociedad dedicado a la construcción")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPercentage,expression:"secondPercentage"}],ref:"build",attrs:{type:"text",name:"porcentajesociedad_st04"},domProps:{value:e.secondPercentage},on:{focus:function(t){return e.focus(e.$refs.society)},blur:function(t){return e.blur([e.$refs.society,e.$refs.build.value])},keyup:function(t){return e.secondPercentageValidation()},input:function(t){t.target.composing||(e.secondPercentage=t.target.value)}}}),!1===e.secondPercentageIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"porcentaje-error"}},[e._v(" Ingrese un Porcentaje ")]):e._e()]),a("div",{ref:"volume",staticClass:"input u-mb30 uf"},[a("label",[e._v("Volumen facturado año anterior")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],ref:"volumeInput",attrs:{type:"text",name:"volumenfacturacion_st04"},domProps:{value:e.volume},on:{focus:function(t){return e.focus(e.$refs.volume)},blur:function(t){return e.blur([e.$refs.volume,e.$refs.volumeInput.value])},keyup:function(t){return e.volumeValidation()},input:function(t){t.target.composing||(e.volume=t.target.value)}}}),!1===e.volumeIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"porcentaje-error"}},[e._v(" Ingrese un volumen ")]):e._e()])])])])])]),a("div",{ref:"collapse",staticClass:"c-form-drag whitebg small font"},[a("div",{staticClass:"container"},[a("a",{ref:"collapseMin",staticClass:"section-minimizar pointer",on:{click:function(t){return e.collapseClick([e.$refs.collapse,e.$refs.collapseMin])}}},[e._v(" "+e._s(e.collapse)),a("span")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-6 offset-lg-2"},[!1===e.dropzoneTwoIsValid?a("div",{staticClass:"errorFile",attrs:{id:"loginrut-error"}},[e._v(" Ingrese un archivo ")]):e._e(),a("h2",[e._v("Antecendentes financieros de la empresa")]),a("p",[e._v("A continuación ingrese los documentos que acreditan la información de su empresa. Los documentos requeridos son los siguientes:")]),e._m(1),a("vue-dropzone",{ref:"myVueDropzone2",staticClass:"border2",attrs:{useCustomSlot:!0,id:"dropzone2",options:e.dropzoneOptions2},on:{"vdropzone-upload-progress":e.uploadProgress,"vdropzone-file-added":e.fileAdded2,"vdropzone-sending-multiple":e.sendingFiles,"vdropzone-success-multiple":e.success2,"vdropzone-removed-file":e.removeFile2}},[a("div",{staticClass:"dropzone-custom-content svg"},[a("div",{staticClass:"subtitle"})])])],1)])])]),a("div",{ref:"collapseC",staticClass:"c-form-steps whitebg small"},[a("div",{staticClass:"container"},[a("a",{ref:"collapseComp",staticClass:"section-minimizar pointer",attrs:{"data-formulario":"4"},on:{click:function(t){return e.collapseClick([e.$refs.collapseC,e.$refs.collapseComp])}}},[e._v(" "+e._s(e.collapse)),a("span")]),a("div",{staticClass:"c-form-steps__content step-data u-pb0"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-6 offset-lg-2"},[a("form",{attrs:{action:"#",id:"step04_3"}},[a("h2",[e._v("COMPOSICIÓN ACCIONARIA")]),a("div",{staticClass:"content-repeater",attrs:{id:"repeater"}},[a("div",{staticClass:"wrapper-repeater"},[a("div",{ref:"rut",staticClass:"input item-content u-mb70"},[a("label",[e._v("RUT de la persona (natural o jurídica)"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v("1")]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputsPartner[0].rutPerson,expression:"inputsPartner[0].rutPerson"}],ref:"rutPersonRef",attrs:{type:"text",name:"rutpersona_st04"},domProps:{value:e.inputsPartner[0].rutPerson},on:{focus:function(t){return e.focus(e.$refs.rut)},blur:function(t){return e.blur([e.$refs.rut,e.$refs.rutPersonRef.value])},keyup:function(t){return e.rutValidation(e.$refs.rutPersonRef.value)},input:function(t){t.target.composing||e.$set(e.inputsPartner[0],"rutPerson",t.target.value)}}}),a("div",{staticClass:"small-text"},[e._v("Sin puntos y con guión (11111111-1)")]),!1===e.rutIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un rut válido ")]):e._e()]),a("div",{ref:"name",staticClass:"input item-content u-mb70"},[a("label",[e._v("Nombre"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v("1")]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputsPartner[0].name,expression:"inputsPartner[0].name"}],ref:"nameInput",attrs:{type:"text",name:"nombrepersona_st04"},domProps:{value:e.inputsPartner[0].name},on:{focus:function(t){return e.focus(e.$refs.name)},blur:function(t){return e.blur([e.$refs.name,e.$refs.nameInput.value])},keyup:function(t){return e.nameValidation(e.$refs.nameInput.value)},input:function(t){t.target.composing||e.$set(e.inputsPartner[0],"name",t.target.value)}}}),!1===e.nameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un nombre ")]):e._e()]),a("div",{ref:"lastname",staticClass:"input item-content u-mb70"},[a("label",[e._v("Apellido Paterno"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v("1")]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputsPartner[0].fatherLastname,expression:"inputsPartner[0].fatherLastname"}],ref:"fatherLastnameInput",attrs:{type:"text",name:"apellido1persona_st04"},domProps:{value:e.inputsPartner[0].fatherLastname},on:{focus:function(t){return e.focus(e.$refs.lastname)},blur:function(t){return e.blur([e.$refs.lastname,e.$refs.fatherLastnameInput.value])},keyup:function(t){return e.fatherLastnameValidation(e.$refs.fatherLastnameInput.value)},input:function(t){t.target.composing||e.$set(e.inputsPartner[0],"fatherLastname",t.target.value)}}}),!1===e.fatherLastnameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un apellido ")]):e._e()]),a("div",{ref:"motherLastname",staticClass:"input item-content u-mb70"},[a("label",[e._v("Apellido Materno"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v("1")]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputsPartner[0].motherLastname,expression:"inputsPartner[0].motherLastname"}],ref:"motherLastnameInput",attrs:{type:"text",name:"apellido2persona_st04"},domProps:{value:e.inputsPartner[0].motherLastname},on:{focus:function(t){return e.focus(e.$refs.motherLastname)},blur:function(t){return e.blur([e.$refs.motherLastname,e.$refs.motherLastnameInput.value])},keyup:function(t){return e.motherLastnameValidation(e.$refs.motherLastnameInput.value)},input:function(t){t.target.composing||e.$set(e.inputsPartner[0],"motherLastname",t.target.value)}}}),!1===e.motherLastnameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un apellido ")]):e._e()]),a("div",{ref:"societyPercentage",staticClass:"input item-content u-mb70"},[a("label",[e._v("Porcentaje de la sociedad"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v("1")]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputsPartner[0].societyPercentage,expression:"inputsPartner[0].societyPercentage"}],ref:"societyPercentageInput",attrs:{type:"text",name:"porcentajesociedad_st04"},domProps:{value:e.inputsPartner[0].societyPercentage},on:{focus:function(t){return e.focus(e.$refs.societyPercentage)},blur:function(t){e.blur([e.$refs.societyPercentage,e.$refs.societyPercentageInput.value]),e.percentageValidation(e.$refs.societyPercentageInput.value)},keyup:function(t){return e.societyValidation(e.$refs.societyPercentageInput.value)},input:function(t){t.target.composing||e.$set(e.inputsPartner[0],"societyPercentage",t.target.value)}}}),!1===e.societyPercentageIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un porcentaje ")]):e._e()]),a("hr")]),e.partners.length>0?e._l(e.partners,(function(t,s){return a("div",{key:s,staticClass:"wrapper-repeater"},[a("div",{ref:"rut",refInFor:!0,staticClass:"input item-content u-mb70"},[a("label",[e._v("RUT de la persona (natural o jurídica) "),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v(" "+e._s(s+2))]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(") ")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t[s+1].rutPerson,expression:"part[index+1].rutPerson"}],ref:"rutPerson",refInFor:!0,attrs:{type:"text",name:"rutpersona_st04"},domProps:{value:t[s+1].rutPerson},on:{focus:function(t){return e.focus(e.$refs.rut[s])},blur:function(t){return e.blur([e.$refs.rut[s],e.$refs.rutPerson[s].value])},keyup:function(t){return e.rutValidation(e.$refs.rutPerson[s].value)},input:function(a){a.target.composing||e.$set(t[s+1],"rutPerson",a.target.value)}}}),a("div",{staticClass:"small-text"},[e._v("Sin puntos y con guión (11111111-1)")]),!1===e.rutIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un rut válido ")]):e._e()]),a("div",{ref:"name",refInFor:!0,staticClass:"input item-content u-mb70"},[a("label",[e._v("Nombre"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v(e._s(s+2))]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t[s+1].name,expression:"part[index+1].name"}],ref:"nameInput",refInFor:!0,attrs:{type:"text",name:"nombrepersona_st04"},domProps:{value:t[s+1].name},on:{focus:function(t){return e.focus(e.$refs.name[s])},blur:function(t){return e.blur([e.$refs.name[s],e.$refs.nameInput[s].value])},keyup:function(t){return e.nameValidation(e.$refs.nameInput[s].value)},input:function(a){a.target.composing||e.$set(t[s+1],"name",a.target.value)}}}),!1===e.nameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un nombre ")]):e._e()]),a("div",{ref:"lastname",refInFor:!0,staticClass:"input item-content u-mb70"},[a("label",[e._v("Apellido Paterno"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v(e._s(s+2))]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t[s+1].fatherLastname,expression:"part[index+1].fatherLastname"}],ref:"fatherLastnameInput",refInFor:!0,attrs:{type:"text",name:"apellido1persona_st04"},domProps:{value:t[s+1].fatherLastname},on:{focus:function(t){return e.focus(e.$refs.lastname[s])},blur:function(t){return e.blur([e.$refs.lastname[s],e.$refs.fatherLastnameInput[s].value])},keyup:function(t){return e.fatherLastnameValidation(e.$refs.fatherLastnameInput[s].value)},input:function(a){a.target.composing||e.$set(t[s+1],"fatherLastname",a.target.value)}}}),!1===e.fatherLastnameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un apellido ")]):e._e()]),a("div",{ref:"motherLastname",refInFor:!0,staticClass:"input item-content u-mb70"},[a("label",[e._v("Apellido Materno"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v(e._s(s+2))]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t[s+1].motherLastname,expression:"part[index+1].motherLastname"}],ref:"motherLastnameInput",refInFor:!0,attrs:{type:"text",name:"apellido2persona_st04"},domProps:{value:t[s+1].motherLastname},on:{focus:function(t){return e.focus(e.$refs.motherLastname[s])},blur:function(t){return e.blur([e.$refs.motherLastname[s],e.$refs.motherLastnameInput[s].value])},keyup:function(t){return e.motherLastnameValidation(e.$refs.motherLastnameInput[s].value)},input:function(a){a.target.composing||e.$set(t[s+1],"motherLastname",a.target.value)}}}),!1===e.motherLastnameIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un apellido ")]):e._e()]),a("div",{ref:"societyPercentage",refInFor:!0,staticClass:"input item-content u-mb70"},[a("label",[e._v("Porcentaje de la sociedad"),a("i",[e._v(" ("),a("i",{staticClass:"contador"},[e._v(e._s(s+2))]),e._v(" de "),a("i",{staticClass:"total"},[e._v(e._s(e.partners.length+1))]),e._v(")")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t[s+1].societyPercentage,expression:"part[index+1].societyPercentage"}],ref:"societyPercentageInput",refInFor:!0,attrs:{type:"text",name:"porcentajesociedad_st04"},domProps:{value:t[s+1].societyPercentage},on:{focus:function(t){return e.focus(e.$refs.societyPercentage[s])},blur:function(t){e.blur([e.$refs.societyPercentage[s],e.$refs.societyPercentageInput[s].value]),e.percentageValidation(e.$refs.societyPercentageInput[s].value)},keyup:function(t){return e.societyValidation(e.$refs.societyPercentageInput[s].value)},input:function(a){a.target.composing||e.$set(t[s+1],"societyPercentage",a.target.value)}}}),!1===e.societyPercentageIsValid?a("div",{staticClass:"errorlogin",attrs:{id:"giro_st03-error"}},[e._v(" Ingrese un porcentaje ")]):e._e()]),e.partners.length>=1?a("a",{staticClass:"input-remover pointer",attrs:{id:"repeater-rmv-btn"},on:{click:function(t){return e.deletePartner(s)}}},[e._v(" Eliminar socio"),a("span",[e._v("x")])]):e._e(),a("hr")])})):e._e()],2),a("a",{staticClass:"input-repeater pointer",attrs:{id:"repeater-add-btn"},on:{click:function(t){return e.addPartner()}}},[e._v("Añadir otro socio"),a("span",[e._v("+")])])])])])])])]),a("div",{staticClass:"c-form-steps whitebg"},[a("div",{staticClass:"container"},[a("div",{staticClass:"c-form-steps__content step-data"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 col-lg-12 offset-lg-2"},[a("form",{attrs:{id:"step04_3"}},[a("button",{staticClass:"link prev btn-blue u-mt50 u-mr30 small",attrs:{type:"button"},on:{click:e.goStepOne}},[a("i",{staticClass:"fa fa-angle-left"}),e._v("Anterior")]),a("button",{staticClass:"link btn-red u-mt50 big u-mr20",attrs:{type:"button",id:"submitStep04"},on:{click:function(t){return e.saveSteptwo()}}},[e._v(" Guardar"),a("i",{staticClass:"fa fa-angle-right"})]),a("button",{staticClass:"link btn-red u-mt50 big",attrs:{id:"submitStep04",type:"button"},on:{click:function(t){return e.checkFormStepTwo()}}},[e._v(" Continuar"),a("i",{staticClass:"fa fa-angle-right"})])])])])])])])])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"c-steps-numbers"},[a("div",{staticClass:"container"},[a("div",{staticClass:"c-steps-numbers__item success"},[a("span",[e._v("1")]),a("p",[e._v("Información y"),a("br"),e._v("antecedentes legales")])]),a("div",{staticClass:"c-steps-numbers__item active"},[a("span",[e._v("2")]),a("p",[e._v("Antecedentes"),a("br"),e._v("financieros")])]),a("div",{staticClass:"c-steps-numbers__item"},[a("span",[e._v("3")]),a("p",[e._v("Patrocinios")])]),a("div",{staticClass:"c-steps-numbers__item"},[a("span",[e._v("4")]),a("p",[e._v("Participación")])]),a("div",{staticClass:"c-steps-numbers__item"},[a("span",[e._v("5")]),a("p",[e._v("Declaraciones"),a("br"),e._v("y compromisos")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Representante Legal")]),a("li",[e._v("Conformación de la Sociedad")]),a("li",[e._v("Participación de la Sociedad")]),a("li",[e._v("Sucursales")]),a("li",[e._v("Formulario 29 (12 meses)")]),a("li",[e._v("Formulario 22 (2 años)")]),a("li",[e._v('"SE EXIMEN DE ESTOS ANTECEDENTES LAS FUNDACIONES Y CORPORACIONES"')])])}],r=(a("a434"),a("b0c0"),a("5530")),i=a("681c"),o=a("b642"),l=a("2f62"),c=a("92c3"),u=a.n(c),d=(a("1e3f"),a("bc3a")),p=a.n(d),m=(a("a7fe"),a("1a86")),v={name:"StepTwo",mixins:[m["a"]],components:{Cabecera:i["a"],StepNumbers:o["a"],vueDropzone:u.a},data:function(){return{firstPercentage:"",secondPercentage:"",volume:"",inputsPartner:[{rutPerson:"",name:"",fatherLastname:"",motherLastname:"",societyPercentage:""}],partners:[],lengthPartners:"",sumPartners:0,total:0,totalPercentage:0,totalEmployeesIsValid:"",rangeIsValid:"",firstPercentageIsValid:"",secondPercentageIsValid:"",volumeIsValid:"",dropzoneTwoIsValid:"",nameIsValid:"",fatherLastnameIsValid:"",motherLastnameIsValid:"",societyPercentageIsValid:"",formIsValid:"",tempAttachments:[],attachments:[],dropzoneOptions2:{url:"https://httpbin.org/post",maxFilesize:10,headers:{Authorization:"Access Token"},paramName:function(e){return"file[]"},thumbnailWidth:250,thumbnailHeight:140,uploadMultiple:!0,parallelUploads:20,addRemoveLinks:!0,dictRemoveFile:"Eliminar archivo",dictCancelUpload:"Cancelar subida",dictInvalidFileType:"No puede subir archivos con este formato.",dictFileTooBig:"El archivo es muy grande ({{filesize}}MiB). Máximo: {{maxFilesize}}MiB.",acceptedFiles:".jpg, .jpeg, .xls, .xlsx, .pdf, .doc, .docx"},stepTwoObject:[]}},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["c"])(["getterTotalEmployees","getterRange","getterRutIsValid"])),Object(l["d"])(["focus","blur","rutValidation","collapseClick","setVueDropzoneFile","setTotalEmployees","setRange","setRutIsValid","setStepOneValue","setStepTwoValue","setStepThreeValue","saveCompletedForm","getRutParnersGlobal","getRutParnerGlobal","setVueDropzoneFileTwo"])),Object(l["b"])(["companyBackgroundUploadTwo","getTotalEmployees","getRange"])),{},{employeesTotalValidation:function(){""==this.selectedTotalEmployees?this.totalEmployeesIsValid=!1:this.totalEmployeesIsValid=!0},rangeValidation:function(){""==this.selectedRange?this.rangeIsValid=!1:this.rangeIsValid=!0},firstPercentageValidation:function(){""==this.firstPercentage?this.firstPercentageIsValid=!1:this.firstPercentageIsValid=!0},secondPercentageValidation:function(){""==this.secondPercentage?this.secondPercentageIsValid=!1:this.secondPercentageIsValid=!0},volumeValidation:function(){""==this.volume?this.volumeIsValid=!1:this.volumeIsValid=!0},nameValidation:function(e){""==this.inputsPartner[0].name?this.nameIsValid=!1:this.nameIsValid=!0},fatherLastnameValidation:function(){""==this.inputsPartner[0].fatherLastname?this.fatherLastnameIsValid=!1:this.fatherLastnameIsValid=!0},motherLastnameValidation:function(){""==this.inputsPartner[0].motherLastname?this.motherLastnameIsValid=!1:this.motherLastnameIsValid=!0},societyValidation:function(){""==this.inputsPartner[0].societyPercentage?this.societyPercentageIsValid=!1:this.societyPercentageIsValid=!0},addPartner:function(){console.log(this.inputsPartner),this.inputsPartner.push({rutPerson:"",name:"",fatherLastname:"",motherLastname:"",societyPercentage:""}),console.log(this.inputsPartner),this.partners.push(this.inputsPartner),console.log(this.partners),console.log(this.partners.length),this.sumPartners=this.partners.length,console.log(this.sumPartners)},deletePartner:function(e){console.log(e),this.partners.splice(e,1),console.log(this.partners),this.inputsPartner.splice(e+1,1),console.log(this.inputsPartner)},percentageValidation:function(e){if(console.log(e),console.log(this.inputsPartner.length),this.total=this.inputsPartner[0].societyPercentage,this.inputsPartner.length>1)for(var t=2;t<=this.inputsPartner.length;t++)console.log(this.inputsPartner[0].societyPercentage),console.log(t),this.totalPercentage=parseInt(this.inputsPartner[t-1].societyPercentage),this.total=parseInt(this.totalPercentage)+parseInt(this.total),console.log(this.total),this.total>100&&(this.societyPercentageIsValid=!1,alert("El porcentaje no debe ser mayor a 100"));else this.total>100&&(this.societyPercentageIsValid=!1,alert("El porcentaje no debe ser mayor a 100"))},goStepOne:function(){this.setStepOneValue(!0),this.setStepTwoValue(!1)},checkFormStepTwo:function(){""==this.inputsPartner[0].rutPerson||0==this.rutIsValid?this.setRutIsValid(!1):this.setRutIsValid(!0),this.employeesTotalValidation(),this.rangeValidation(),this.firstPercentageValidation(),this.secondPercentageValidation(),this.volumeValidation(),""==this.vueDropzoneFileTwo?this.dropzoneTwoIsValid=!1:this.dropzoneTwoIsValid=!0,this.nameValidation(),this.fatherLastnameValidation(),this.motherLastnameValidation(),this.societyValidation(),""==this.inputsPartner[0].rutPerson||0==this.rutIsValid||""==this.selectedRange||""==this.firstPercentage||""==this.secondPercentage||""==this.volume||""==this.vueDropzoneFileTwo||""==this.inputsPartner[0].name||""==this.inputsPartner[0].fatherLastname||""==this.inputsPartner[0].motherLastname||""==this.inputsPartner[0].societyPercentage?(this.formIsValid=!1,console.log(this.formIsValid)):this.formIsValid=!0,1==this.formIsValid?(this.saveSteptwo(),this.setStepThreeValue(!0),this.setStepTwoValue(!1)):(alert("Debe completar los campos requeridos"),this.setStepThreeValue(!1))},saveSteptwo:function(){this.companyBackgroundUploadTwo(),this.stepTwoObject.push({stepTwo:{totalEmployees:this.selectedTotalEmployees,range:this.selectedRange,firstPercentage:this.firstPercentage,secondPercentage:this.secondPercentage,volume:this.volume,filesStepTwo:this.vueDropzoneFileTwo,partners:this.sumPartners,inputs:this.inputsPartner}}),console.log(this.stepTwoObject),this.saveCompletedForm([this.stepTwoObject,2]),this.savePostStepTwo(),this.getRutParnersGlobal(this.partners),this.getRutParnerGlobal(this.inputsPartner[0].rutPerson),console.log(this.completedForm),this.stepTwoObject=[]},savePostStepTwo:function(){var e=this.completedForm;console.log(this.completedForm[2]);var t=JSON.stringify(e);p.a.post(this.URL+"/guardarParcial",t).then((function(e){console.log(e.data)})).catch((function(e){console.log("AXIOS ERROR: ",e)}))},test:function(){}}),computed:Object(r["a"])({},Object(l["e"])(["collapse","selectedTotalEmployees","selectedRange","totalEmployees","range","rutIsValid","vueDropzoneFileTwo","completedForm","tipoSocDocs","URL"])),created:function(){this.getTotalEmployees(),this.getRange(),console.log(this.partners),console.log(this.partners.length),console.log(this.completedForm)}},f=v,g=(a("e8cf"),a("2877")),h=Object(g["a"])(f,s,n,!1,null,null,null);t["default"]=h.exports},e8cf:function(e,t,a){"use strict";var s=a("723d"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-1cc2d090.d9cbaf56.js.map