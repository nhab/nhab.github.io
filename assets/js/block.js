//options://title,body,code,codetype,widt,hei,imageSrc=null,padding="5",imagWidth="100%",parent=document.body,imagesOnRight=false,codeOnRight=false)
function Block(...a)
{
    var options = {}; 
    
    if(arguments.length>1)
        {
           options.title= a[0];
           options.body=a[1];
           if(a[2])options.code=a[2];
           if(a[3])options.codetype=a[3];
           if(a[4])options.widt=a[4];
           if(a[5])options.hei=a[5];
           if(a[6])options.imageSrc=a[6];
           if(a[7])options.padding=a[7];
           if(a[8])options.imagWidth=a[8];
           if(a[9])options.parent=a[9];
           if(a[10])options.imagesOnRight=a[10];
        }
    else
        options=arguments[0];
        
    if (options.imageSrc === undefined) options.imageSrc =null;
    if (options.padding   == undefined) options.padding = "5";
    if (options.imagWidth ==undefined) options.imagWidth=="100%";
    if (options.parent    ==undefined)options.parent=document.body;
    if (options.imagesOnRight==undefined) options.imagesOnRight=false;
    if (options.codeOnLeft=undefined) options.codeOnRight=false;
    
    var dvContainer = document.createElement("div");
   
    sStyle="padding-left:"+options.padding+"px;padding-right:"+options.padding+"px;padding-top:"+options.padding+"px;";
    sStyle+="padding-down:"+options.padding+"px;";
    sStyle+="vertical-align:text-top;margin-left:2px;";
    sStyle+="display:inline-block;overflow: hidden;";
    if(options.widt)
        sStyle+=";width:"+ options.widt+";";
    if(options.hei)
        sStyle+=";height:"+ options.hei+";";
    
    //sStyle="border-size:1px;display: inline;";
    var id1="dv"+Math.random()*20;
    
    dvContainer.setAttribute('style',sStyle);
    dvContainer.setAttribute('id', id1);

    //header:
    headerHeight="25px";
    var divHead = document.createElement("div");
    divHead.setAttribute("class","blockHead");
    divHead.setAttribute("style","height:30px;");

    var dvTitle = document.createElement("div");
    dvTitle.setAttribute("class",'blockTitle');
    dvTitle.setAttribute("style","height:"+headerHeight);
    dvTitle.innerHTML= options.title;
    
    var objBtn = document.createElement("Input");
    objBtn.setAttribute("type","button");
    objBtn.setAttribute("value","-");
    objBtn.setAttribute("style","display: inline-block; top:0%;width:25px;float:right;vertical-align:top;height:"+headerHeight);
    
     divHead.appendChild(dvTitle);
     divHead.appendChild(objBtn);

    dvContainer.appendChild(divHead);
    //body:
    var bodyID="dv"+Math.random()*20;
    if(options.body)
    {   
        var divBody = document.createElement("div");
        divBody.setAttribute('id', bodyID);
        divBody.setAttribute("class",'blockBody');
        divBody.innerHTML=options.body;
        dvContainer.appendChild(divBody);
    }

    sStylle="overflow: auto;";
    if(options.codeOnRight)
        sStyle+="display:inline-block;";

    var preID="dv"+Math.random()*20;
    if(options.codetype && options.code)
    {
        //parent.InnerHtml+= "<pre style='"+sStyle+"'><code style='"+sStyle+"' class='"+options.codetype+"'>"+options.code+"</code></pre>";
        var divPre= document.createElement("pre");
        divPre.setAttribute('id', preID);
        divPre.setAttribute("style",sStyle);
        var divCode = document.createElement("code");
        divCode.setAttribute("style",'overflow: auto;');
        divCode.setAttribute("class",options.codetype);
        divCode.innerHTML= options.code;
        divPre.appendChild(divCode);
        dvContainer.appendChild(divPre);
    }  
    else{
        if(options.code)
        {
            var divPre= document.createElement("pre");
            divPre.setAttribute('id', preID);
            divPre.setAttribute("style",sStyle);
            var divCode = document.createElement("code");
            divCode.setAttribute("style",'overflow: auto;');
            divCode.innerHTML= options.code;
            divPre.appendChild(divCode);
            dvContainer.appendChild(divPre);
        }
    };
    /*
    imagesOnRight=false
    */
    sStyle  ="width:"+ options.imagWidth;
    if(options.imagesOnRight)
       sStyle +=";display:inline-block;overflow:auto;";
   
    var dvImgID="dv"+Math.random()*20;
    if(options.imageSrc)
    {
        var dvImg=document.createElement("img");    
        dvImg.setAttribute('id', dvImgID);
        dvImg.setAttribute("src", options.imageSrc);
        dvImg.setAttribute("style",sStyle);
        dvContainer.appendChild(dvImg);
    }

    
    objBtn.setAttribute("onclick",
    `
    var dvBody = document.getElementById("`+ bodyID  +`");
    var dvCode = document.getElementById("`+ preID   +`");
    var dvImg  = document.getElementById("`+ dvImgID +`");
    if(this.value=="|")
        {
            this.value="-";
            debugger;
            if(dvBody)dvBody.style.display="none";
            if(dvCode)dvCode.style.display="none";
            if(dvImg)dvImg.style.display="none";
        }
        else
        {
            this.value="|";
            if(dvBody)dvBody.style.display="block";
            if(dvCode)dvCode.style.display="block";
            if(dvImg)dvImg.style.display="block";
        }
    `);


    try{
        options.parent.appendChild(dvContainer);
        
        var dvBody = document.getElementById( bodyID  );
        var dvCode = document.getElementById( preID   );
        var dvImg  = document.getElementById( dvImgID );

        if(dvBody)dvBody.style.display="none";
        if(dvCode)dvCode.style.display="none";
        if(dvImg)dvImg.style.display="none";

    }catch(err)
    {
        if(options.title)
            alert("Block(...) function last lines:"+options.title+":"+err);
        else
        alert("Block(...) function last lines:"+options+":"+err);
        debugger;
    }
    return document.getElementById(id1);
}
//-------------------------------------------------------------------------------------------------------------------
///1.title, 2.body, 3.code, 4.codetype, 5.widt, 6.hei, 7.imageSrc=null, 8.padding="5", 9.imagWidth="100%", 10.parent
/*
function BlockPrev(title,body,code,codetype,widt,hei,imageSrc=null,padding="5",imagWidth="100%",parent=document.body)
{
    var dvContainer = document.createElement("div");
    //return document.getElementsByTagName('body')[0].appendChild(dvContainer);
   
    sStyle="padding-left:"+padding+"px;padding-right:"+padding+"px;padding-top:"+padding+"px;padding-down:"+padding+"px";
    sStyle+=";vertical-align:text-top;border:1px black solid;margin-left:2px;";
    sStyle+=";display:inline-block;overflow: auto;";
    if(widt)
        sStyle+=";width:"+widt+";";
    if(hei)
        sStyle+=";height:"+hei+";";
    var id1="dv"+Math.random()*20;

    debugger;
    dvContainer.setAttribute('style',sStyle);
    dvContainer.setAttribute('id', id1);

    //header:
    var divHead = document.createElement("div");
    var dvTitle = document.createElement("div");
    dvTitle.setAttribute("class",'blockHead');
    dvTitle.innerHTML=title;
    divHead.appendChild(dvTitle);
    var objBtn = document.createElement("Input");
    objBtn.setAttribute("type","button");
    objBtn.setAttribute("value","V");
   // objBtn.setAttribute("onclick","alert('Hello')");
    divHead.appendChild(objBtn);
    dvContainer.appendChild(divHead);
    //body:
    if(body)
    {   
        var divBody = document.createElement("div");
        divBody.setAttribute("class",'blockBody');
        divBody.innerHTML=body;
        dvContainer.appendChild(divBody);
    }
    if(codetype && code)
    {
        parent.InnerHtml+= "<pre><code style='overflow: auto;' class='"+codetype+"'>"+code+"</code></pre>";
        var divPre= document.createElement("pre");
        var divCode = document.createElement("code");
        divCode.setAttribute("style",'overflow: auto;');
        divCode.setAttribute("class",codetype);
        divCode.innerHTML=code;
        divPre.appendChild(divCode);
        dvContainer.appendChild(divPre);
    }
        
    else{
        if(code)
        {
            try{
            parent.InnerHtml+= "<pre><code >"+code+"</code></pre>";
            }catch(err)
            {
                debugger;
                alert(title);
            }
            var divPre= document.createElement("pre");
            var divCode = document.createElement("code");
            divCode.setAttribute("style",'overflow: auto;');
            divCode.innerHTML=code;
            divPre.appendChild(divCode);
            dvContainer.appendChild(divPre);
    
        }
    };
    if(imageSrc)
    {
        var dvImg=document.createElement("img");
        dvImg.setAttribute("src",imageSrc);
        dvImg.setAttribute("style","width:"+imagWidth);

        //parent.InnerHtml+= "<img src='"+imageSrc+"' style='width:"+imagWidth+"'>";
    }
    try{
    parent.appendChild(dvContainer);
    
    }catch(err)
    {
        alert(title+":"+err)
    }
    return document.getElementById(id1);
}
*/
/*
function BlockHorizontally(title,body,code,codetype,widt,hei,imageSrc=null,padding="7",parent=document.body)
{
    sStyle="padding-left:"+padding+"px;padding-right:"+padding+"px;vertical-align:text-top;border:1px black solid;margin-left:2px;";
    sStyle+=";display:inline-block;overflow: auto;";
    if(widt)
        sStyle+=";width:"+widt+";";
    if(hei)
        sStyle+=";height:"+hei+";";
    var id1="dv"+Math.random()*20;
    parent.write("<div style='"+sStyle+";' id='"+id1+"'>");
   //header:
   parent.write( "<div style='width:100%;text-align:center;background-color:#336699;color:#ddccff;font-weight:900;"+
                   "padding-left:2px;padding-right:2px;' >" 
                   +title+"</div>");
    //body:
    if(body)
        parent.write("<div style='display:inline-block;overflow:auto;"+
            "padding-right:7px;padding-top:7px;"+
            "white-space:pre;clear:both;overflow: auto;overflow-wrap: break-word;vertical-align: top;'>"
            +body+"</div>");
    if(codetype && code)
        parent.write("<pre style='display:inline-block;overflow:auto;'><code style='overflow: auto;' class='"+codetype+"'>"+code+"</code></pre>");
    else{
        if(code)
            parent.write("<pre style='display:inline-block;overflow:auto;'><code style='overflow: auto;'>"+code+"</code></pre>");
    };
    if(imageSrc)
    {
        //document.getElementById(id1).write("<img src='"+imageSrc+"'>");
        parent.write("<img src='"+imageSrc+"' style='display:inline-block;overflow:auto;'>");
    }
    parent.write("</div>");
}
*/
function RenderBlocks(options)
{    
    for(i=0;i<options.length;i++)
       Block(options[i]);
    options=[];
    return options;
}
function getRandomID()
{
    return ( "_"+Math.random()*20 ).replace(".","");
}

function BlockGroup(title,parent=document)
{
    var dvContainer = document.createElement("div");
    
    var stl1="width:100%;border-size:1px;display: block;";
    dvContainer.setAttribute("style",stl1);
    
    
    var dvHeader=document.createElement("div");
    dvHeader.setAttribute("style","width:100%;");
    dvHeader.setAttribute("class","header");
dvHeader.innerHTML=title;
    
    var objBtn = document.createElement("Input");
    objBtn.setAttribute("type","button");
    objBtn.setAttribute("value","V");
    objBtn.setAttribute("style","float:right; top:0%;width:25px;vertical-align:top;text-align:right;");
    btnId="btn"+getRandomID();
    objBtn.setAttribute("id",btnId);
    
    dvHeader.appendChild(objBtn);

    var dvGrpBody=document.createElement("div");
    dvGrpBodyId="dv"+getRandomID();
    dvGrpBody.setAttribute("id",dvGrpBodyId);
   
    dvHeader.setAttribute("onclick",
    `if(this.value=="V")
        {
            this.value=">";
            document.getElementById("`+ dvGrpBodyId+`").style.display="none";
        }
        else
        {
            this.value="V";
            document.getElementById("`+ dvGrpBodyId+`").style.display="block";
        }
    `);
   
    objBtn.setAttribute("onclick",
    `if(this.value=="V")
        {
            this.value=">";
            document.getElementById("`+ dvGrpBodyId+`").style.display="none";
        }
        else
        {
            this.value="V";
            document.getElementById("`+ dvGrpBodyId+`").style.display="block";
        }
    `);
    
    dvContainer.appendChild(dvHeader);
    dvContainer.appendChild(dvGrpBody);
    
    document.getElementsByTagName('body')[0].appendChild(dvContainer)
   
    return dvContainer.appendChild(dvGrpBody);
}

function PageHeaderRow(title) //Freezed page header row
{
    var stl1="width:100%;border-size:1px;display: inline;position:fixed";
    var dvContainer = document.createElement("h1");
    dvContainer.setAttribute("style",stl1);
    dvContainer.innerHTML=title;
    document.getElementsByTagName('body')[0].appendChild(dvContainer)
   
}
function NewLine()
{
    document.write("<br/>");
}
class BlockFrame{
     
    constructor(header=null,body=null,code=null,id=null,parent=document){
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
        parent.write("<div class='blockFrame' style='"+sStyle+";' id='"+this.frameID+"'>");
        if(header)
            this.AddHeader(header);
        if(body)
            this.AddBody(body);
        if(code)
            this.AddCode(code);
        parent.write("</div>");
    }
    AddHeader(title)
    {

        var para = document.createElement("div");
        var container=document.createElement("div");
        para.setAttribute('class', 'blockTitle');
        container.setAttribute('class','blockHead');

        para.innerHTML=title;
        container.appendChild(para);
        document.getElementById(this.frameID).appendChild(container);
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
        para.src=imageSrc;
        if(imagWidth)
             para.setAttribute("style","width:"+imagWidth);
       

        document.getElementById(this.frameID).appendChild(para);    
        
    }
}
