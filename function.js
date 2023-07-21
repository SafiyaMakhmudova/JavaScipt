var strStr = function(haystack, needle) {
    if (!haystack.indexOf(needle)){
        return 0
    } else{
        return -1
    }
     
};

let haystack="sadbutsad";
let needle="sad";
//console.log(strStr(haystack, needle));


var searchInsert = function(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element==target)
        return i
    else if(element>target)
        return i
    
   return nums.length;
  }


};

let nums=[1,3,5,6]
let target=7

//console.log(searchInsert(nums, target))

var lengthOfLastWord = function(s) {
    let a=s.trim();
    let len=0
    
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if(a[i]==' ')
            len=0;
        else
            len++;
    }

    return len;
};

s="luffy is still joyboy"
//console.log(lengthOfLastWord(s));

var plusOne = function(digits) {
    let s=" ";
    for (let i = 0; i < digits.length; i++) {
        const element = digits[i];
        s+=element
    }

    let arr=parseInt(s);
    arr+=1;

    let s1=""
    s1+=arr
    let result=[]

    while(s1/10>0){
        result.push(s1%10)
        s1=Math.floor(s1/10);
    }
    return result.reverse()
};

digits=[9]
//console.log(plusOne(digits));

var addBinary = function(a, b) {
    let index=0;
    let result=[];
    let l1=a.length;
    let l2=b.length;
   
    for( let i=l1-1, j=l2-1; 0<=i || 0<=j; --i, --j){
        let d = 0 <= i ? Number(a[i]) : 0,
        c = 0 <= j ? Number(b[j]) : 0;
        result.push((d + c + index) % 2);
        index = 1 < d + c + index;
    }

    if (index){
        result.push(1);
     }
     return result.reverse().join('');
};

 let a="11"
 let b="1"
 //console.log(addBinary(a,b));

 var mySqrt = function(x) {
    if(x==0 || x==1)
        return x;

    let i=1;
    let result=1;

    while(result<=x){
        i++;
        result=i*i;
    }

    return i-1;
 };

 x=8;
 //console.log(mySqrt(x));
