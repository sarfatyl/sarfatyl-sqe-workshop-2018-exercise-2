import $ from 'jquery';
import {parseCode} from './code-analyzer';
import {parseCodeFromJson,initiateLineInCode,initiateArray,globalsFun} from './ParserCodes';
import {subFuc,linesN,colorMap} from './subSt';


$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#C').val();

        let input=$('#V').val();
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToParse);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,input);
        showFuncAfterSubs();
        //newRow=myTable.insertRow(myTable.rows.length);

        //var ParsedProgram=getAnsArray();
        //addParsedProgramToTable (ParsedProgram);
    });
});



function showFuncAfterSubs() {

    let htmlObject = document.getElementById('f2');
    let func='';
    let v=colorMap;
    for(let i=0;i<linesN.length;i++){
        if(colorMap.has(i))
        {
            if(colorMap.get(i))
                func+='<span>'+'<mark style="background-color: green">'+linesN[i]+'</mark>'+'</span>'+'<br>';
            else
                func+='<span>'+'<mark style="background-color: red">'+linesN[i]+'</mark>'+'</span>'+'<br>';
        }
        else
            func+='<span>'+linesN[i]+'\n'+'</span>'+'<br>';
    }
    htmlObject.innerHTML=func;
}