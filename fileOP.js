
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                 allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
	return allText;
}

function CsvToArray() {
 
 var txtFile = "test.csv";
 var str = readTextFile(txtFile);

 var csvData = new Array();
 var jsonObject = str.split(/\r?\n|\r/);
 for (var i = 0; i < jsonObject.length; i++) {
   csvData.push(jsonObject[i].split(';'));
 }
 return csvData;
}
