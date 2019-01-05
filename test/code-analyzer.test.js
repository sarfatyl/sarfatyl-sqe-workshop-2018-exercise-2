import assert from 'assert';
import {parseCode} from '../src/js/code-analyzer';
import {parseCodeFromJson, initiateLineInCode, getAnsArray, initiateArray, globalsFun} from '../src/js/ParserCodes';
import {subFuc,linesN } from '../src/js/subSt';


describe('The javascript parser', () => {
    it('this is parse check for number assigment', () => {
        var inputT='let x=7;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'variable declaration','name':'x','condition':'','value':7};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check for number assigment', () => {
        var inputT='let x=7;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'variable declaration','name':'x','condition':'','value':7};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });

    it('this is parse check for function declaration', () => {
        var inputT='function func( x, y){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'func','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'x','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'y','condition':'','value':''}];

        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if statement', () => {
        var inputT='if(x>y){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'if statment','name':'','condition':'x>y','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check for loop', () => {
        var inputT='for(i=0;i<5;i++){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'for statement','name':'','condition':'i<5','value':''},
            {'line':0,'type':'assignment expression','name':'i','condition':'','value':0},
            {'line':0,'type':'update expression','name':'i','condition':'','value':'++'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check while loop', () => {
        var inputT='while(x>7){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'while statment','name':'','condition':'x>7','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check while loop', () => {
        var inputT='while(x>=7){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'while statment','name':'','condition':'x>=7','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check return number statement', () => {
        var inputT='function binarySearch(){return -1;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},{'line':1,'type':'return statement','name':'','condition':'','value':'-1'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check return literal statement', () => {
        var inputT='function binarySearch(){return true;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},{'line':1,'type':'return statement','name':'','condition':'','value':true}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check return var statement', () => {
        var inputT='function binarySearch(x){return x;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'x','condition':'','value':''},
            {'line':1,'type':'return statement','name':'','condition':'','value':'x'}];

        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if else statement', () => {
        var inputT='  if (x < 7) {x = x- 1;} else {x=x+1;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'if statment','name':'','condition':'x<7','value':''},
            {'line':1,'type':'assignment expression','name':'x','condition':'','value':'x-1'},
            {'line':2,'type':'else','name':'','condition':'','value':''},
            {'line':3,'type':'assignment expression','name':'x','condition':'','value':'x+1'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });

    it('this is parse check update statement prefix', () => {
        var inputT='let i=7;++i;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'i','condition':'','value':7},{'line': 1 , 'type':'update expression', 'name': 'i','condition':'','value': '++'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check ass null', () => {
        var inputT='let x';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'x','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check ass null', () => {
        var inputT='let low, high, mid;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'low','condition':'','value':null},
            {'line':0,'type':'variable declaration','name':'high','condition':'','value':null},
            {'line':0,'type':'variable declaration','name':'mid','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check ass 2 vars', () => {
        var inputT='let x=7;let y = x - 1;let z=(x+y)/2;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'x','condition':'','value':7},
            {'line':1,'type':'variable declaration','name':'y','condition':'','value':'x-1'},
            {'line':2,'type':'variable declaration','name':'z','condition':'','value':'x+y/2'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if else-if statement', () => {
        var inputT='if (X < V[mid])high = mid - 1;else if (X > V[mid])low = mid + 1;else mid=1;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'if statment','name':'','condition':'X<V[mid]','value':''},
            {'line':1,'type':'assignment expression','name':'high','condition':'','value':'mid-1'},
            {'line':2,'type':'else if statment','name':'','condition':'X>V[mid]','value':''},
            {'line':3,'type':'assignment expression','name':'low','condition':'','value':'mid+1'},
            {'line':4,'type':'else','name':'','condition':'','value':''},
            {'line':5,'type':'assignment expression','name':'mid','condition':'','value':1}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for null-return', () => {
        var inputT='function parseCodeFromJson(){if (1>2){if (3<2) {}}return null;}';
        var json=parseCode(inputT);
        initiateLineInCode(1);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':1,'type':'function declaration','name':'parseCodeFromJson','condition':'','value':''},
            {'line':2,'type':'if statment','name':'','condition':'1>2','value':''},
            {'line':3,'type':'if statment','name':'','condition':'3<2','value':''},
            {'line':4,'type':'return statement','name':'','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for function declaration', () => {
        var inputT='function func( x, y){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'func','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'x','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'y','condition':'','value':''}];

        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if statement', () => {
        var inputT='if(x>y){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'if statment','name':'','condition':'x>y','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check for loop', () => {
        var inputT='for(i=0;i<5;i++){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'for statement','name':'','condition':'i<5','value':''},
            {'line':0,'type':'assignment expression','name':'i','condition':'','value':0},
            {'line':0,'type':'update expression','name':'i','condition':'','value':'++'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check while loop', () => {
        var inputT='while(x>7){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'while statment','name':'','condition':'x>7','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check while loop', () => {
        var inputT='while(x>=7){}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected={'line':0,'type':'while statment','name':'','condition':'x>=7','value':''};
        assert.equal(JSON.stringify(returned[0]),JSON.stringify(expected));
    });
    it('this is parse check return number statement', () => {
        var inputT='function binarySearch(){return -1;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},{'line':1,'type':'return statement','name':'','condition':'','value':'-1'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check return literal statement', () => {
        var inputT='function binarySearch(){return true;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},{'line':1,'type':'return statement','name':'','condition':'','value':true}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check return var statement', () => {
        var inputT='function binarySearch(x){return x;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'function declaration','name':'binarySearch','condition':'','value':''},
            {'line':0,'type':'variable declaration','name':'x','condition':'','value':''},
            {'line':1,'type':'return statement','name':'','condition':'','value':'x'}];

        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if else statement', () => {
        var inputT='  if (x < 7) {x = x- 1;} else {x=x+1;}';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'if statment','name':'','condition':'x<7','value':''},
            {'line':1,'type':'assignment expression','name':'x','condition':'','value':'x-1'},
            {'line':2,'type':'else','name':'','condition':'','value':''},
            {'line':3,'type':'assignment expression','name':'x','condition':'','value':'x+1'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });

    it('this is parse check update statement prefix', () => {
        var inputT='let i=7;++i;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'i','condition':'','value':7},{'line': 1 , 'type':'update expression', 'name': 'i','condition':'','value': '++'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check ass null', () => {
        var inputT='let x';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'x','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check ass null', () => {
        var inputT='let low, high, mid;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'low','condition':'','value':null},
            {'line':0,'type':'variable declaration','name':'high','condition':'','value':null},
            {'line':0,'type':'variable declaration','name':'mid','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('check no globals ex', ()=>{
        let codeToCheck= '\nfunction func(curr){\n' +
            '}';
        let args='"curr"';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res='';
        for(let i=0;i<linesN.length;i++){
            res+=linesN[i]+'\n';
        }
        assert.equal(res,'function func(curr){\n' +
            '}\n');
    });

    it('check function exp', ()=>{
        let checkcode='function func(c1){\nlet d=c1+1;\n}\nlet f=2;';
        let args='2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(checkcode);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans='';
        for(let i=0;i<linesN.length;i++){
            ans+=linesN[i];
        }
        assert.equal('function func(c1){}',ans);
    });

    it('check plus exp', ()=>{
        let codeToCheck= 'function func(){\n' +
            'let curr=5+1;\n' +
            '}';
        let args='';

        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res='';
        for(let i=0;i<linesN.length;i++){
            res+=linesN[i]+'\n';
        }
        assert.equal(res,'function func(){\n' +
            '}\n');
    });
    it('check else exp', ()=> {
        let codeToCheck = 'function func(curr){\n' +
            'if(curr>1)\n' +
            'return 0;\n' +
            'else\n'+
            'return 1;\n'+
            '}';
        let args = '2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res = '';
        for (let i = 0; i < linesN.length; i++) {
            res += linesN[i] + '\n';
        }
        assert.equal(res, 'function func(curr){\n' +
            'if(curr > 1)\n' +
            'return 0;\n' +
            'else\n'+
            'return 1;\n'+
            '}\n');
    });

    it('this is parse check ass 2 vars', () => {
        var inputT='let x=7;let y = x - 1;let z=(x+y)/2;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'variable declaration','name':'x','condition':'','value':7},
            {'line':1,'type':'variable declaration','name':'y','condition':'','value':'x-1'},
            {'line':2,'type':'variable declaration','name':'z','condition':'','value':'x+y/2'}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for if else-if statement', () => {
        var inputT='if (X < V[mid])high = mid - 1;else if (X > V[mid])low = mid + 1;else mid=1;';
        var json=parseCode(inputT);
        initiateLineInCode(0);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':0,'type':'if statment','name':'','condition':'X<V[mid]','value':''},
            {'line':1,'type':'assignment expression','name':'high','condition':'','value':'mid-1'},
            {'line':2,'type':'else if statment','name':'','condition':'X>V[mid]','value':''},
            {'line':3,'type':'assignment expression','name':'low','condition':'','value':'mid+1'},
            {'line':4,'type':'else','name':'','condition':'','value':''},
            {'line':5,'type':'assignment expression','name':'mid','condition':'','value':1}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });
    it('this is parse check for null-return', () => {
        var inputT='function parseCodeFromJson(){if (1>2){if (3<2) {}}return null;}';
        var json=parseCode(inputT);
        initiateLineInCode(1);
        initiateArray();
        parseCodeFromJson(json);
        let returned = getAnsArray();
        var expected=[{'line':1,'type':'function declaration','name':'parseCodeFromJson','condition':'','value':''},
            {'line':2,'type':'if statment','name':'','condition':'1>2','value':''},
            {'line':3,'type':'if statment','name':'','condition':'3<2','value':''},
            {'line':4,'type':'return statement','name':'','condition':'','value':null}];
        assert.equal(JSON.stringify(returned),JSON.stringify(expected));
    });

    it('check not exp', ()=> {
        let codeToCheck = 'function func(x1){\n' +
            'if(!x1)\n' +
            'return 0;\n' +
            '}';
        let args = 'true';

        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);

        let res = '';
        for (let i = 0; i < linesN.length; i++) {
            res += linesN[i] + '\n';
        }
        assert.equal(res, 'function func(x1){\n' +
            'if(! x1)\n' +
            'return 0;\n' +
            '}\n');
    });



    it('check while exp', ()=> {
        let codeToCheck = 'function func(c){\n' +
            'while(c>1){\n' +
            'c=2;\n' +
            '}\n'+
            '}';
        let args = '1';

        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);

        let res = '';
        for (let i = 0; i < linesN.length; i++) {
            res += linesN[i] + '\n';
        }
        assert.equal(res, 'function func(c){\n' +
            'while(c > 1){\n' +
            'c=2;\n' +
            '}\n'+
            '}\n');
    });

    it('check else exp block', ()=> {
        let codeToCheck = 'function func(c){\n' +
            'if(c<1)\n' +
            'return 0;\n' +
            'else{\n'+
            'return 1;\n'+
            '}\n'+
            '}';
        let args = '2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res = '';
        for (let i = 0; i < linesN.length; i++) {
            res += linesN[i] + '\n';
        }
        assert.equal(res, 'function func(c){\n' +
            'if(c < 1)\n' +
            'return 0;\n' +
            'else{\n'+
            'return 1;\n'+
            '}\n'+
            '}\n');
    });




    it('check unary arg exp', ()=> {
        let codeToCheck = 'function func(c){\n' +
            'if(c<1)\n' +
            'return 0;\n' +
            '}';
        let args = '2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res = '';
        for (let i = 0; i < linesN.length; i++) {
            res += linesN[i] + '\n';
        }
        assert.equal(res, 'function func(c){\n' +
            'if(c < 1)\n' +
            'return 0;\n' +
            '}\n');
    });


    it('calculate result in if', ()=>{
        let codeToCheck= 'function func(c){\n' +
            'if(c==(c+1))\n' +
            'return false;\n' +
            '}';
        let args='2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res='';
        for(let i=0;i<linesN.length;i++){
            res+=linesN[i]+'\n';
        }
        assert.equal(res,'function func(c){\n' +
            'if(c == c + 1)\n' +
            'return false;\n'+
            '}\n');
    });


    it('check mul exp', ()=>{
        let codeToCheck= 'function func(a1,b1){\n' +
            'let temp=a1*b1;\n' +
            '}';
        let args='3,1';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res='';
        for(let i=0;i<linesN.length;i++){
            res+=linesN[i]+'\n';
        }
        assert.equal(res,'function func(a1,b1){\n' +
            '}\n');
    });


    it('check  locals exp', ()=>{
        let codeToCheck= 'function func(a,b){\n' +
            'let b=a;\n' +
            'let c;\n' +
            'c=b;\n' +
            'b=c;\n' +
            '}';
        let args='"a",1';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let res='';
        for(let i=0;i<linesN.length;i++){
            res+=linesN[i]+'\n';
        }
        assert.equal(res,'function func(a,b){\n' +
            'b=a;\n'+
            '}\n');
    });


    it('all', ()=> {
        let codeToCheck = 'function func(x1, x2){\n' +
            'if(x2 < x1)\n' +
            'return 2;\n' +
            'else if(x2>x1)\n' +
            'return 0;\n' +
            'else if(x2<=x1)\n' +
            'return 8;\n' +
            'else if(x2>=x1)\n' +
            'return 7;\n' +
            '}';
        let args = '2,1';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans = '';
        for (let i = 0; i < linesN.length; i++) {
            ans += linesN[i] + '\n';
        }
        assert.equal(ans, 'function func(x1, x2){\n' +
            'if(x2 < x1)\n' +
            'return 2;\n' +
            'else if(x2 > x1)\n' +
            'return 0;\n' +
            'else if(x2 <= x1)\n' +
            'return 8;\n' +
            'else if(x2 >= x1)\n' +
            'return 7;\n' +
            '}\n');
    });

    it('arr check', ()=>{
        let codeToCheck= 'function func(x1,x2){\n' +
            'let arr=[1,3];\n' +
            '}';
        let args='1,2';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans='';
        for(let i=0;i<linesN.length;i++){
            ans+=linesN[i]+'\n';
        }
        assert.equal(ans,'function func(x1,x2){\n' +
            '}\n');
    });
    it('', ()=>{
        let codeToCheck= 'function func(x1){\n' +
            'let v=0;\n' +
            'x1[v]=x1[1];\n' +
            'if(x1[v]==3)\n' +
            'return false;\n' +
            '}';
        let args='[2,4,3]';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans='';
        for(let i=0;i<linesN.length;i++){
            ans+=linesN[i]+'\n';
        }
        assert.equal(ans,'function func(x1){\n' +
            'x1 [ 0 ] =x1 [ 1 ] ;\n' +
            'if(x1 [ 0 ]  == 3)\n' +
            'return false;\n' +
            '}\n');
    });
    it('', ()=>{
        let codeToCheck= 'function func(arr){\n' +
            'if(arr.length==4){\n' +
            'return \'4\';\n' +
            '}\n' +
            '}';
        let args='["c",1,true]';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans='';
        for(let i=0;i<linesN.length;i++){
            ans+=linesN[i]+'\n';
        }
        assert.equal(ans,'function func(arr){\n' +
            'if(arr.length == 4){\n' +
            'return 4;\n' +
            '}\n' +
            '}\n');
    });

    it('', ()=>{
        let codeToCheck= 'function func(x1,x2){\n' +
            'let s=1+x2;\n' +
            's=x2+0;\n'+
            's=0+x2;\n'+
            's=x1+x1;\n'+
            's=x1-0;\n'+
            's=x2-x1;\n'+
            's=3-2;\n'+
            's=2*3;\n'+
            's=x1*x2;\n'+
            's=x2/x1;\n'+
            '}';
        let args='2,9';
        initiateArray();
        initiateLineInCode(1);
        let newCodeWithoutFunc=globalsFun(codeToCheck);
        let parsedCode = parseCode(newCodeWithoutFunc);
        parseCodeFromJson(parsedCode);
        subFuc(newCodeWithoutFunc,args);
        let ans='';
        for(let i=0;i<linesN.length;i++){
            ans+=linesN[i]+'\n';
        }
        assert.equal(ans,'function func(x1,x2){\n' +
            '}\n');
    });
});
