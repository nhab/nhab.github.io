function Block(title,body,code,codetype,widt="20%",hei="300px",imageSrc=null)
{
    sStyle="padding-left:10px;padding-right:10px;vertical-align:text-top;border:1px black solid";
    sStyle+=";display:inline-block;width:"+widt+";height:"+hei+";";
    document.write("<div style='"+sStyle+";'>");
    debugger;
    document.write( "<h2>" +title+"</h2>");
    document.write(body);
    if(codetype)
        sCode="<pre><code class='"+codetype+"'>"+code+"</code></pre>";
    else
        sCode="<pre><code >"+code+"</code></pre>";
    
    document.write(sCode);
    if(imageSrc)
        document.write("<img src='"+imageSrc+"'>");
    document.write("</div>");
}
