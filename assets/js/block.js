function Block(title,body,code,codetype,widt,hei,imageSrc=null,padding="7")
{
    sStyle="padding-left:"+padding+"px;padding-right:"+padding+"px;vertical-align:text-top;border:1px black solid;margin-left:2px;";
    sStyle+=";display:inline-block;overflow: auto;";
    if(widt)
        sStyle+=";width:"+widt+";";
    if(hei)
        sStyle+=";height:"+hei+";";
    var id1="dv"+Math.random()*20;
    document.write("<div style='"+sStyle+";' id='"+id1+"'>");
   //header:
    document.write( "<div style='width:100%;text-align:center;background-color:#336699;color:#ccbbdd;font-weight:900;"+
                   "padding-left:2px;padding-right:2px;' >" 
                   +title+"</div>");
    //body:
    if(body)
        document.write("<div style='width:100%;white-space:pre;display:block;clear:both;overflow: auto;overflow-wrap: break-word;'>"
                       +body+"</div>");
    if(codetype && code)
        document.write("<pre><code style='overflow: auto;' class='"+codetype+"'>"+code+"</code></pre>");
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
