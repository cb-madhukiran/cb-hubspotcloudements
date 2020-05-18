let api_key=steps.InputParams.input.apiKey;
let site_name=steps.InputParams.input.siteName;
let siteDomain=steps.InputParams.input.siteDomain;
let integ_name=steps.InputParams.input.type;


let file_type="csv";
let password = "";
let errcsv=steps.InputParams.result.errorCSV;

//******

let id;
let validationErrCsv="Id"+","+"Error Description\n";
let msg;

for(let i=0;i<errcsv.length;++i){
   id = errcsv[i].split(',')[0];
  msg = errcsv[i].split(',')[1];
  
  validationErrCsv=validationErrCsv+id+","+msg;
  
}
//*******

let body={
      url:"https://"+site_name+".integrations."+siteDomain+"/integrations/api/file_upload",
      query:{
        "api_key":api_key,
        "site_name":site_name,
        "integ_name":integ_name,
        "file_type":file_type,
        "log_type" : "Validation"

      },
      body:{
        "file_content":validationErrCsv
      },
      apiKey:api_key,
      siteDomain:siteDomain,
      siteName:site_name,
      type:"hubspot",
      headers:{
         "Authorization": "Basic " + CE.b64(api_key + ":"+password)
      }
      
};
 done(body);
