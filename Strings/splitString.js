
// Basic string split

var mydata = '20150910|20150254593|streamlined creation and utilization of reference human intelligence tasks|Reference intelligence tasks are automatically generated for subsequent utilization in crowdsourced processing of intelligence tasks. Reference intelligence tasks are categorized into predetermined categories, including categories defined by an intended utilization of such intelligence tasks. A trusted set of workers are provided with intelligence tasks and, if a specified number of |Microsoft-Corporation';

var result = mydata.split("|");

console.log(result);

var patentappDate = result[0];
var patentappNum = result[1];
var patentappTitle = result[2];
var patentappAbstract = result[3];
var patentappOrgNospaces = result[4];
