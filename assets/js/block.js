
function Block(title,body,code,codetype,widt,hei,imageSrc=null,padding="5",imagWidth="100%")
{
    sStyle="padding-left:"+padding+"px;padding-right:"+padding+"px;padding-top:"+padding+"px;padding-down:"+padding+"px";
    sStyle+=";vertical-align:text-top;border:1px black solid;margin-left:2px;";
    sStyle+=";display:inline-block;overflow: auto;";
    if(widt)
        sStyle+=";width:"+widt+";";
    if(hei)
        sStyle+=";height:"+hei+";";
    var id1="dv"+Math.random()*20;
    document.write("<div style='"+sStyle+";' id='"+id1+"'>");
   //header:
    document.write( "<div class='blockHead' >" 
                   +title+"</div>");
    //body:
    if(body)
        document.write("<div class='blockBody'>"
                       +body+"</div>");
    if(codetype && code)
        document.write("<pre><code style='overflow: auto;' class='"+codetype+"'>"+code+"</code></pre>");
    else{
        if(code)
          document.write("<pre><code >"+code+"</code></pre>");
    };
    if(imageSrc)
    {
        document.write("<img src='"+imageSrc+"' style='width:"+imagWidth+"'>");
    }
    document.write("</div>");
    return document.getElementById(id1);
}
function BlockHorizontally(title,body,code,codetype,widt,hei,imageSrc=null,padding="7")
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
    document.write( "<div style='width:100%;text-align:center;background-color:#336699;color:#ddccff;font-weight:900;"+
                   "padding-left:2px;padding-right:2px;' >" 
                   +title+"</div>");
    //body:
    if(body)
        document.write("<div style='display:inline-block;overflow:auto;"+
            "padding-right:7px;padding-top:7px;"+
            "white-space:pre;clear:both;overflow: auto;overflow-wrap: break-word;vertical-align: top;'>"
            +body+"</div>");
    if(codetype && code)
        document.write("<pre style='display:inline-block;overflow:auto;'><code style='overflow: auto;' class='"+codetype+"'>"+code+"</code></pre>");
    else{
        if(code)
          document.write("<pre style='display:inline-block;overflow:auto;'><code style='overflow: auto;'>"+code+"</code></pre>");
    };
    if(imageSrc)
    {
        //document.getElementById(id1).write("<img src='"+imageSrc+"'>");
        document.write("<img src='"+imageSrc+"' style='display:inline-block;overflow:auto;'>");
    }
    document.write("</div>");
}
class BlockFrame{
     
    constructor(header=null,body=null,code=null,id=null){
        var padding="7";
        var widt=null;
        var hei=null;
        var sStyle="padding-left:"+padding+"px;padding-right:"+padding+"px;padding-top:"+padding+"px;padding-down:"+padding+"px";
        if(widt)
            sStyle+=";width:"+widt+";";
        if(hei)
            sStyle+=";height:"+hei+";";
        if(id)
            this.frameID=id;
        else
            this.frameID="dv"+Math.random()*20;
        document.write("<div class='blockFrame' style='"+sStyle+";' id='"+this.frameID+"'>");
        if(header)
            this.AddHeader(header);
        if(body)
            this.AddBody(body);
        if(code)
            this.AddCode(code);
        document.write("</div>");
    }
    AddHeader(title)
    {
        var para = document.createElement("div");
        para.setAttribute('class', 'blockHead');
        para.innerHTML=title;
        document.getElementById(this.frameID).appendChild(para);
    }
    AddBody(bod)
    {
        var para = document.createElement("div");
        para.setAttribute('class', 'blockBody');
        
      para.innerHTML=bod;
        document.getElementById(this.frameID).appendChild(para);
    }
    AddCode(cod,codeType=`javascript`)
    {
        var gParent = document.createElement("pre");
        var para=document.createElement("code");
        para.setAttribute('style','overflow: auto;');
        para.setAttribute('class', codeType);
        gParent.appendChild(para);
        var t = document.createTextNode(cod);
        para.appendChild(t);
        gParent.appendChild(para);
        document.getElementById(this.frameID).appendChild(gParent);
    }
    AddUrl(title,url)
    {
        var para = document.createElement("a");
        para.href=url;
        para.innerHTML=title;
        document.getElementById(this.frameID).appendChild(para);    
    }
    AddBr()
    {
        var para = document.createElement("br");
        document.getElementById(this.frameID).appendChild(para);        
    }
    AddObj(obj){
        document.getElementById(this.frameID).appendChild(obj);
    }
    AddImage(imageSrc,imagWidth=null){
        var para = document.createElement("img");
        if(imageSrc)
            para.href=url;
        para.innerHTML=title;
        document.getElementById(this.frameID).appendChild(para);    
         if(imagWidth)
             para.setAttribute('style',width:"+imagWidth+"');

    }
}
