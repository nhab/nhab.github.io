function Block(title,body,code,codetype,widt="20%",hei="300px",imageSrc=null)
{
    sStyle="padding-left:10px;padding-right:10px;vertical-align:text-top;border:1px black solid";
    sStyle+=";display:inline-block;width:"+widt+";height:"+hei+";";
    var id1="dv"+Math.random()*20;
    document.write("<div style='"+sStyle+";' id='"+id1+"'>");
    debugger;
    document.write( "<h2>" +title+"</h2>");
    if(body)
        document.write(body);
    if(codetype && code)
        document.write("<pre><code class='"+codetype+"'>"+code+"</code></pre>");
    else{
        if(code)
          document.write("<pre><code >"+code+"</code></pre>");
    };
    if(imageSrc)
    {
        //document.getElementById(id1).write("<img src='"+imageSrc+"'>");
        document.write("<img src='"+imageSrc+"' style='width:100%'>");
    }
    document.write("</div>");
}
