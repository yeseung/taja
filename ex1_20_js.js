var nCho= [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1];
var nJung=[1,1,1,1,1, 1,1,1,1,2, 2,2,1,1,2, 2,2,1,1,2, 1];
var nJong=[0,1,1,2,1, 2,2,1,1,2, 2,2,2,2,2, 2,1,1,2,1, 1,1,1,1,1, 1,1,1];

var lvs=[
    ["a","aaaaaaaaaaaa"],
    ["b","bbbbbbbbbbbb"],
    ["c","cccccccccccc"],
    ["abc","abcabcabcabcabcabcabcabc"],
    ["d","dddddddddddd"],
    ["e","eeeeeeeeeeee"],
    ["f","fffffffffffff"],
    ["def","defdefdefdefdefdefdefdef"],
    ["abcdef","abcdefabcdefabcdefabcdef"],
    ["g","gggggggggggg"],
    ["h","hhhhhhhhhhhh"],
    ["i","iiiiiiiiiiii"],
    ["ghi","ghighighighighighighighi"],
    ["defghi","defghidefghidefghidefghi"],
    ["j","jjjjjjjjjjjj"],
    ["k","kkkkkkkkkkkk"],
    ["l","llllllllllll"],
    ["jkl","jkljkljkljkljkljkljkljkl"],
    ["ghijkl","ghijklghijklghijklghijkl"],
    ["m","mmmmmmmmmmmm"],
    ["n","nnnnnnnnnnnn"],
    ["o","oooooooooooo"],
    ["mno","mnomnomnomnomnomnomnomno"],
    ["jklmno","jklmnojklmnojklmnojklmno"],
    ["p","pppppppppppp"],
    ["q","qqqqqqqqqqqq"],
    ["r","rrrrrrrrrrrr"],
    ["pqr","pqrpqrpqrpqrpqrpqrpqrpqr"],
    ["mnopqr","mnopqrmnopqrmnopqrmnopqr"],
    ["s","ssssssssssss"],
    ["t","tttttttttttt"],
    ["u","uuuuuuuuuuuu"],
    ["stu","stustustustustustustustu"],
    ["pqrstu","pqrstupqrstupqrstupqrstu"],
    ["v","vvvvvvvvvvvv"],
    ["w","wwwwwwwwwwww"],
    ["x","xxxxxxxxxxxx"],
    ["vwx","vwxvwxvwxvwxvwxvwxvwxvwx"],
    ["stuvwx","stuvwxstuvwxstuvwxstuvwx"],
    ["y","yyyyyyyyyyyy"],
    ["z","zzzzzzzzzzzz"],
    ["yz","yzyzyzyzyzyzyzyzyzyzyzyz"],
    ["vwxyz","vwxyzvwxyzvwxyzvwxyzvwxyz"],
    ["abcdefghijklmn","abcdefghijklmnabcdefghijklmn"],
    ["opqrstuvwxyz","opqrstuvwxyzopqrstuvwxyz"],
    ["abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz"]
];

var dv=21*28;
var start=false, dt=0, avt=0, topt=0, avp=0, exn=0;
var testn=0, curlv=0, maxlv=lvs.length, passt=100, exrn=3, oItv="";

function gId(id) { return document.getElementById(id); }
function sId(id,s) { document.getElementById(id).innerHTML=s; }

function xHDiv(hg) {
    var hc,cho,jung,jong;
    hc=hg.charCodeAt(0)-0xAC00;//ubase1;
    if(hc<0) return 1;
    cho=Math.floor(hc/dv);
    hc=hc%dv;
    jung=Math.floor(hc/28);
    jong=hc%28;
    var tn=nCho[cho]+nJung[jung]+nJong[jong];
    return tn;
}
function xCalN(s) {
    var l=s.length;
    var i=0, tn=0, c;
    while(i<l) {
        if(s.charCodeAt(i)<200) tn++;
        else tn+=xHDiv(s.charAt(i));
        i++;
    }
    return tn;
}
var bck,ckn,ckx,cks;
function xCkStr() {
    var i,j,k,s,l;
    dt=((new Date).getTime()-dt);
    if(dt<1) dt=1;
    start=false;
    var fe=document.forms['f1'].elements;
    var s1=fe['t1'].value, s2=fe['t2'].value;
    fe['t2'].value="";
    var l1=s1.length, l2=s2.length;
    if(l2<l1-2) { alert("윗글의 내용을 끝까지 입력하세요!"); fe['t2'].focus(); fe['t2'].value=""; return; }
    l=(l1>l2)?l1:l2;
    var on=0;
    for(i=0;i<l;i++) {
        s=s1.charAt(i);
        ckn[s]+=1;
        if(s==s2.charAt(i)) on++; else ckx[s]+=1;
    }
    var t=Math.floor((xCalN(s2)*60000)/dt);
    var p=Math.floor((on*100)/l1);
    if(t>topt) topt=t;
    sId('t3',t);
    sId('t4',p);
    avt=((avt*exn)+t)/(exn+1);
    avp=((avp*exn)+p)/(exn+1);
    exn++;
    sId('t5',Math.floor(avt));
    sId('t6',Math.floor(avp));
    sId('t7',topt);

    testn++;
    gId('ct'+testn).style.backgroundColor='#FFFFFF';

    if(testn==exrn) {
        s="";
        var errs="";
        if(bck) {
            s="문자:정확도\n-------------\n";
            l=cks.length;
            for(i=0;i<l;i++) {
                j=cks[i];
                if(ckn[j]>0) {
                    k=Math.floor((ckn[j]-ckx[j])*100/ckn[j]);
                    if(errs=="") { if(k<70) errs=j; }
                    s+=(j+" : "+k+" %\n");
                }
            }
        }
        if(s.length>0) s+="--------------\n";
        if(avt>=passt && avp>=80) { //통과..
            if(confirm(s+"축하합니다! 통과기준을 넘어섰습니다.\n다음단계를 연습하시겠습니까?")) xReset(1); else xReset(0);
        } else {
            var ok=false;
            if(bck && errs.length>0) ok=xReEx(s,errs);
            if(!ok) {
                alert(s+"통과기준 속도를 통과하지 못하였습니다.\n현재 단계를 계속 연습합니다");
                xReset(0);
            }
        }
    }
    fe['t2'].focus();
}
function xKeyDown() {
    if(start==false) { dt=(new Date).getTime(); start=true; }
    if(event.keyCode==13) {
        xCkStr();
        xStartItv();
    }
}
function xPaste() {
    window.clipboardData.setData("Text", "");
}

function xReset(n) {
    var fe=document.forms['f1'].elements,i;
    if(n==1) {
        curlv++;
        if(omember==0 && curlv>9) {
            curlv=9;
            alert("비회원은 10단계 이하까지만 진행가능합니다.");
        }
        if(curlv>=maxlv) {
            curlv=maxlv-1;
            alert("수고하셨습니다!\n최종단계까지 통과하셨습니다!");
        }
        xDrawLv();
    }

    for(i=1;i<=exrn;i++) gId('ct'+i).style.backgroundColor='#999999';
    testn=avt=avp=topt=exn=0;
    for(i=3;i<8;i++) sId('t'+i,'&nbsp;');
    fe['t2'].value="";
    fe['t1'].value=lvs[curlv][1];
    fe['t2'].focus();

    cks=new Array(); ckn=new Array(); ckx=new Array();
    var s=lvs[curlv][0],c;
    for(i=0;i<s.length;i++) {
        c=s.charAt(i);
        cks[i]=c; ckn[c]=0; ckx[c]=0;
    }
    if(cks.length>1) bck=true; else bck=false;
}
function xDrawLv() {
    var s="";
    for(var i=0;i<curlv+1;i++) s+=" ";
    document.getElementById("id_lv1").innerText=s+"↑현재단계["+(curlv+1)+"]";
    document.forms['f1'].elements['slv'].selectedIndex=curlv;
}
function xChLv() {
    curlv=document.forms['f1'].elements['slv'].selectedIndex;
    if(omember==0 && curlv>9) {
        curlv=9; alert("비회원은 10단계 이하만 선택가능합니다!");
        document.forms['f1'].elements['slv'].selectedIndex=9;
    }
    xReset(0); xDrawLv();
}
function xChPt() {
    passt=50+document.forms['f1'].elements['spt'].selectedIndex*50;
}
function xChExn() {
    exrn=document.forms['f1'].elements['sexn'].selectedIndex+2;
    var s="";
    for(var i=1;i<=6;i++) {
        gId('ct'+i).style.display=(i<=exrn)?'':'none';
    }
    xReset(0);
}
function xReEx(s,es) {
    var ls1="abcdefghijklmnopqrstuvwxyz";
    var ls2=[0,1,2,4,5,6,9,10,11,14,15,16,19,20,21,24,25,26,29,30,31,34,35,36,39,40];
    var n=ls1.length, ok=-1;
    for(var i=0;i<n;i++) {
        if(ls1.charAt(i)==es) { ok=i; break; }
    }
    if(ok>=0) {
        if(confirm(s+"통과기준을 넘지 못하였습니다!\n\n["+es+"]문자에 오타가 많습니다.\n해당문자의 연습단계로 이동하시겠습니까?")) {
            curlv=ok; xReset(0); xDrawLv(); return true;
        }
        xReset(0); return true;
    }
    return false;
}
function xStartItv() {
    if(oItv) clearInterval(oItv);
    if(start) return;
    oItv=setInterval("xItv()",1000);
}
function xItv() {
    if(start) { clearInterval(oItv); return; }
    if(document.forms['f1'].elements['t2'].value.length>0) {dt=(new Date).getTime(); start=true; clearInterval(oItv); }
}

